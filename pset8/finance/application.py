import os
#export API_KEY=pk_e9c02bb41adb4281adc8b3c85346f703
from cs50 import SQL
from flask import Flask, flash, jsonify, redirect, render_template, request, session, url_for
from flask_session import Session
from tempfile import mkdtemp
from werkzeug.exceptions import default_exceptions, HTTPException, InternalServerError
from werkzeug.security import check_password_hash, generate_password_hash

from helpers import apology, login_required, lookup, usd

# Configure application
app = Flask(__name__)

# Ensure templates are auto-reloaded
app.config["TEMPLATES_AUTO_RELOAD"] = True

# Ensure responses aren't cached
@app.after_request
def after_request(response):
    response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    response.headers["Expires"] = 0
    response.headers["Pragma"] = "no-cache"
    return response

# Custom filter
app.jinja_env.filters["usd"] = usd

# Configure session to use filesystem (instead of signed cookies)
app.config["SESSION_FILE_DIR"] = mkdtemp()
app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
Session(app)

# Configure CS50 Library to use SQLite database
db = SQL("sqlite:///finance.db")

# Make sure API key is set
if not os.environ.get("API_KEY"):
    raise RuntimeError("API_KEY not set")


@app.route("/")
@login_required
def index():

    # look up the current user
    users = db.execute("SELECT cash FROM users WHERE id = :u_id", u_id=session["user_id"])
    cepo = db.execute(
        "SELECT symbol, SUM(quantity) as total_shares FROM transactions WHERE u_id = :u_id GROUP BY symbol", u_id=session["user_id"])
    quotes = {}

    for cepos in cepo:
        quotes[cepo["symbol"]] = lookup(cepo["symbol"])

    dinero_falt = users[0]["cash"]
    total = dinero_falt

    return render_template("portfolio.html", quotes=quotes, cepo=cepo, total=total, dinero_falt=dinero_falt)

    """Show portfolio of stocks"""
    return apology("TODOa")


@app.route("/buy", methods=["GET", "POST"])
@login_required
def buy():
    if request.method == "POST":
        symbol = lookup(request.form.get("symbol"))
        shares = int(request.form.get("shares"))
        comprar = lookup(symbol) #request.form.get("buySymbol"))
        if not symbol:
            return apology("Poné un verdadero valor.",400)
        if comprar <= 0:
            return apology("Error, valor negativo.",400)


        rows = db.execute("SELECT cash FROM users WHERE id=:u_id;", u_id =session["user_id"]) #user_id

        dinerodisponible = rows[0]["cash"]

        price=symbol["price"]

        precio_total = dinerodisponible * price

        if precio_total > int(dinerodisponible):
            return apology("Dinero Insuficiente")
       # if (shares * symbol ["price"]) > int(dinerodisponible):
        #    return apology("Dinero insuficiente")

      # precio_accion = symbol["price"]

      # if dinerodisponible < comprar:
        db.execute("UPDATE users SET cash = cash - :price WHERE id = :u_id", price=precio_total, u_id=session["user_id"])
          # return apology("Dinero insuficiente.",401)
        db.execute("INSERT INTO transactions(u_id,symbol,shares,precio_accion)VALUES(:u_id,:symbol,:shares,:price);",
            user_id=session["user_id"],
            symbol=symbol["symbol"],
            quantity =shares,
            price=symbol["price"])

        precio_total = float(price) * float(shares)

        dinero_remain = precio_total - dinerodisponible

        return redirect(url_for("index"))

    else:
        return render_template("buy.html")

    """Buy shares of stock"""
    return apology("TODOb")


@app.route("/history")
@login_required
def history():
    rows = db.execute("SELECT symbol, quantity, price, date_time FROM transactions WHERE u_id = :u_id", u_id = session["user_id"])

    #tr = []


    for i in range(len(rows)):
        i['price'] = usd(i['price'])

    return render_template("history.html", rows=rows)
      #  stock_i=lookup(row["symbol"])

    """Show history of transactions"""
    return apology("TODOc")


@app.route("/login", methods=["GET", "POST"]) #COMPLETO
def login():
    """Log user in"""

    # Forget any user_id
    session.clear()

    # User reached route via POST (as by submitting a form via POST)
    if request.method == "POST":

        # Ensure username was submitted
        if not request.form.get("username"):
            return apology("Ingrese un nombre", 403)

        # Ensure password was submitted
        elif not request.form.get("password"):
            return apology("Ingrese una contraseña", 403)

        # Query database for username
        rows = db.execute("SELECT * FROM users WHERE username = :username",
                          username=request.form.get("username"))

        # Ensure username exists and password is correct
        if len(rows) != 1 or not check_password_hash(rows[0]["hash"], request.form.get("password")):
            return apology("Contraseña y/o nombre incorrecto", 403)

        # Remember which user has logged in
        session["user_id"] = rows[0]["id"]

        return redirect(url_for("index"))


    # User reached route via GET (as by clicking a link or via redirect)
    else:
        return render_template("login.html")


@app.route("/logout") #COMPLETO
def logout():
    """Log user out"""

    # Forget any user_id
    session.clear()

    # Redirect user to login form
    return redirect("/")


@app.route("/quote", methods=["GET", "POST"])
@login_required
def quote():
    if request.method == "POST":
        quote = lookup(request.form.get("symbol"))
        if not quote:
            return apology("Stock no encontrado.")
        return render_template("quoted.html", quote=quote)
    else:
            return render_template("quote.html")
    """Get stock quote."""


@app.route("/register", methods=["GET", "POST"]) # COMPLETO
def register():
    """Register user"""

    if request.method == "POST":
        usuario = request.form.get("username")
        password = request.form.get("password")
        confirmacion = request.form.get("confirmation")
        #rows = db.execute( "SELECT * FROM users WHERE username = :user", user=usuario)
        #fijar usuario
        if not usuario:
            return apology("Necesitas un nombre de usuario")

        # fijar contraseña
        if not password:
            return apology("Necesitas una contraseña")
        elif password != confirmacion:
            return apology("Las contraseñas no coinciden")

        # hash the password
        hashed_pass = generate_password_hash(password)

        # add to database
        usuer = db.execute("INSERT INTO users (username, hash) VALUES (:usuario, :password)",
                                    usuario=usuario, password=hashed_pass)
        if not usuer:
            return apology("Usuario no disponible")

        return redirect("/")
    else:
        return render_template("register.html")

@app.route("/sell", methods=["GET", "POST"])
@login_required
def sell():

    if request.method == "POST":
        symbol = lookup(request.form.get("symbol"))
        shares = int(request.form.get("shares"))
        comprar = lookup(symbol) #request.form.get("buySymbol"))
        if not symbol:
            return apology("Poné un verdadero valor.",400)
        if comprar <= 0:
            return apology("Error, valor negativo.",400)


        rows = db.execute("SELECT cash FROM users WHERE id=:u_id;", u_id =session["user_id"]) #user_id

        dinerodisponible = rows[0]["cash"]

        price=symbol["price"]

        precio_total = dinerodisponible - price

        if precio_total > int(dinerodisponible):
            return apology("Dinero Insuficiente")
       # if (shares * symbol ["price"]) > int(dinerodisponible):
        #    return apology("Dinero insuficiente")

      # precio_accion = symbol["price"]

      # if dinerodisponible < comprar:
        db.execute("UPDATE users SET cash = cash - :price WHERE id = :u_id", price=precio_total, u_id=session["user_id"])
          # return apology("Dinero insuficiente.",401)
        db.execute("INSERT INTO transactions(u_id,symbol,shares,precio_accion)VALUES(:u_id,:symbol,:shares,:price);",
            user_id=session["user_id"],
            symbol=symbol["symbol"],
            quantity =shares,
            price=symbol["price"])

        precio_total = float(price) * float(shares)

        dinero_remain = precio_total - dinerodisponible

        return redirect(url_for("index"))

    else:
        return render_template("sell.html")

    """Sell shares of stock"""
    return apology("TODOd")


def errorhandler(e):
    """Handle error"""
    if not isinstance(e, HTTPException):
        e = InternalServerError()
    return apology(e.name, e.code)


# Listen for errors
for code in default_exceptions:
    app.errorhandler(code)(errorhandler)
