import os
#export API_KEY=pk_e9c02bb41adb4281adc8b3c85346f703
#import time
from cs50 import SQL
from werkzeug.utils import secure_filename
#import smtplib

#from OpenSSL import SSL
#context = SSL.Context(SSL.PROTOCOL_TLSv1_2)
#context.use_privatekey_file('server.key')
#context.use_certificate_file('server.crt')

from flask import Flask, flash, jsonify, redirect, render_template, request, session, url_for , send_from_directory
from flask_session import Session
from tempfile import mkdtemp
from werkzeug.exceptions import default_exceptions, HTTPException, InternalServerError
from werkzeug.security import check_password_hash, generate_password_hash
from flask_mail import Mail, Message

UPLOAD_CARPET = os.path.abspath("static/images/")
ALLOWED_EXTENSIONS = set(["png", "jpg", "jpge", "pdf"])



def allowed_file(filename):
    return "."in filename and filename.rsplit(".", 1)[1] in ALLOWED_EXTENSIONS
app = Flask(__name__)
app.config["TEMPLATES_AUTO_RELOAD"] = True
app.secret_key = b'_5#y2L"F4Q8z\n\xec]/'


app.config["UPLOAD_CARPET"] = UPLOAD_CARPET
db = SQL("sqlite:///bases.db")

#if not os.environ.get("API_KEY"):
#    raise RuntimeError("API_KEY not set")

@app.after_request
def after_request(response):
    response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    response.headers["Expires"] = 0
    response.headers["Pragma"] = "no-cache"
    return response
# Configure session to use filesystem (instead of signed cookies)
app.config["SESSION_FILE_DIR"] = mkdtemp()
app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
Session(app)


app.config['MAIL_SERVER']='smtp.gmail.com'
#app.config['MAIL_PORT'] = 465
app.config['MAIL_USERNAME'] = 'roosterappaz@gmail.com'
app.config['MAIL_PASSWORD'] = 'candelaygatu1234'
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True

mail = Mail(app)
#@login_required
@app.route("/") #COMPLETO , methods=["GET", "POST"]

def index():
    return render_template("index.html")

@app.route("/login", methods=["GET", "POST"]) #COMPLETO
def login():

    # Forget any user_id
    session.clear()

    # User reached route via POST (as by submitting a form via POST)
    if request.method == "POST":

        # Ensure username was submitted
        if not request.form.get("email"):
            return "<h1 style='color:red;'>Usuario Incorrecto y/o contraseña incorrecta</h1>"

        # Ensure password was submitted
        elif not request.form.get("password"):
            return "<h1 style='color:red;'>Usuario Incorrecto y/o contraseña incorrecta</h1>"

        # Query database for username
        rows = db.execute("SELECT * FROM users WHERE email = :email",
                          email=request.form.get("email"))

        # Ensure username exists and password is correct
        if len(rows) != 1 or not check_password_hash(rows[0]["password"], request.form.get("password")):
            return "<a href='/register?'><h1 style='color:#F72908; left:38%;top:39%; position:absolute;'>Usuario no registrado.</h1></a>"

        # Remember which user has logged in
        #session["email"] = request.form.get("email")


        session["user_id"] = rows[0]["user_id"]
        session["username"] = rows[0]["username"]
        session["email"] = rows[0]["email"]
        #return redirect(url_for("success"))
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

@app.route("/account") #COMPLETO
def account():
        return render_template("account.html")

@app.route("/register", methods=["GET", "POST"]) # COMPLETO
def register():
    """Register user"""
    if request.method == "POST":

        username = request.form.get("username")
        email = request.form.get("email")
        password = request.form.get("password")
       # image_file = request.files.get("imagen")
        confirmation = request.form.get("confirmation")

        #rows = db.execute( "SELECT * FROM users WHERE username = :user", user=usuario)
        #fijar usuario
        if not username:
            return "<a href='/login?'><h1 style='color:#F72908; top: 50%;left: 40%; margin-top: -100px; margin-left: -200px; position:fixed;'>Porfavor, ingrese su nombre de usuario</h1></a>"

        # fijar contraseña
        if not password:
            return "<a href='/login?'><h1 style='color:#F72908; top: 50%;left: 40%; margin-top: -100px; margin-left: -200px; position:fixed;'>Porfavor, ingrese su contraseña</h1></a>"
        if password != confirmation:
            return "<a href='/login?'><h1 style='color:#F72908; top: 50%;left: 40%; margin-top: -100px; margin-left: -200px; position:fixed;'>Error de verificación, intente nuevamente</h1></a>"
        msg = Message('Hello', sender = 'roosterappaz@gmail.com', recipients = [email])
        msg.body = "Te has registrado en Rooster App!"
        mail.send(msg)
        ##message ="Te has registrado en Rooster App!"
        #server = smtplib.SMTP("roosterappaz@gmail.com", 587)
        #server.starttls()

        # hash the password
        hashed_pass = generate_password_hash(password)

        # add to database
        usuer = db.execute("INSERT INTO users (username, email, password) VALUES (:username, :email, :password)",
                                    username=username, email=email, password=hashed_pass)
        if not usuer:
            return "<h1 style='color:#F72908; left:38%;top:39%; position:absolute;'>Usuario no registrado</h1>"



        return redirect("/")
    else:
        return render_template("register.html")





@app.route("/ia-carla" , methods=["GET", "POST"]) #COMPLETO
def iacarla():
    return render_template("ia-carla.html")

@app.route("/ia-carla-fr" , methods=["GET", "POST"]) #COMPLETO
def iacarlafr():
    return render_template("ia-carla-fr.html")

@app.route("/ia-carla-en" , methods=["GET", "POST"]) #COMPLETO
def iacarlaen():
    return render_template("ia-carla-en.html")







@app.route("/upload" , methods=["GET", "POST"]) #COMPLETO
def upload():

    if request.method == "POST":

        if "ourfile" not in request.files:
            return "<h1 style='color:#F72908; top: 50%;left: 40%; margin-top: -100px; margin-left: -200px; position:fixed;'>Error con formato de archivo.</h1>"
        f = request.files["ourfile"]
        if f.filename =="":
            return "<h1 style='color:#F72908; top: 50%;left: 40%; margin-top: -100px; margin-left: -200px; position:fixed;'>Ningún archivo seleccionado.</h1>"
        if f and allowed_file(f.filename):
            filename = secure_filename(f.filename)
            f.save(os.path.join(app.config["UPLOAD_CARPET"], filename))
            return redirect(url_for("get_file", filename = filename))

        return "<h1 style='color:#F72908; top: 50%;left: 40%; margin-top: -100px; margin-left: -200px; position:fixed;'>Archivo no soportado.</h1>"

    return render_template("upload.html")



@app.route('/gallery')
def gallery():
        images = os.listdir(os.path.join(app.static_folder, "images"))
        return render_template('gallery.html', images=images)


@app.route("/uploads/<filename>")

def get_file(filename):
    foto =send_from_directory(app.config["UPLOAD_CARPET"], filename)
    return foto#"<h1 style='color:#F72908; text-decoration:none; top: 50%;left: 40%; margin-top: -100px; margin-left: -200px; position:fixed;'><a href='/upload?'>Archivo subido con éxito</a></h1>"#

#@app.route("/emails")
#def mails():

#   return "Sent"



if __name__ == "__main__":
   # app.run(ssl_context='adhoc')
    app.run(debug=True)







