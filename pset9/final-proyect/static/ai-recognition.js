
if (annyang) {

    //Variable para almacenar las voces de nuestro sistema.
    var voices;

    //Inicializamos utter.
    var utter = new SpeechSynthesisUtterance();
    utter.rate = 1;
    utter.pitch = 0.5;
    utter.lang = 'es-AR';

    //Cargamos las voces que tenemos en nuestro sistema y las mostarmos en un arreglo por consola.
    window.speechSynthesis.onvoiceschanged = function () {
        voices = window.speechSynthesis.getVoices();
        console.log(voices);
    };
 //6 es la chica
 //7 chica mejor
 //21 chica super mejor
    //Definimos los comandos a utilizar.
    var commands = {

        'hola carla': function () {
            utter.text = 'Hola encantado de conocerte';
            //Setea la voz que queremos usar en base a nuestra lista.
            utter.voice = voices[21];
            window.speechSynthesis.speak(utter);
        },
        'hello': function () {
            utter.text = 'hi, im only speak spanish,change the language by clicking the top red button.';
            //Setea la voz que queremos usar en base a nuestra lista.
            utter.voice = voices[3];
            window.speechSynthesis.speak(utter);
        },
        '¿cuál es el mejor sistema operativo?': function () {
            utter.text = 'todos los son.';
            //Setea la voz que queremos usar en base a nuestra lista.
            utter.voice = voices[21];
            window.speechSynthesis.speak(utter);
        },
        'puedes cantar': function () {
            utter.text = 'no realmente. no tengo cuerdas vocales.';
            //Setea la voz que queremos usar en base a nuestra lista.
            utter.voice = voices[21];
            window.speechSynthesis.speak(utter);
        },
        'alexa': function () {
            utter.text = 'hahaha. muy gracioso';
            //Setea la voz que queremos usar en base a nuestra lista.
            utter.voice = voices[21];
            window.speechSynthesis.speak(utter);
        },
        '¿puedes prestarme algo de dinero?': function () {
            utter.text = 'no realmente. no tengo brazos.';
            //Setea la voz que queremos usar en base a nuestra lista.
            utter.voice = voices[21];
            window.speechSynthesis.speak(utter);
        },
        'tienes novio': function () {
            utter.text = 'es un poco mas dificil que eso. solo estoy dispuesta a aprender';
            //Setea la voz que queremos usar en base a nuestra lista.
            utter.voice = voices[21];
            window.speechSynthesis.speak(utter);
        },
        '¿Windows o Mac?': function () {
            utter.text = 'Prefiero mas bien una bigmac';
            //Setea la voz que queremos usar en base a nuestra lista.
            utter.voice = voices[21];
            window.speechSynthesis.speak(utter);
        },

        'como estas': function () {
            utter.text = 'Muy bien y tu?';
            utter.voice = voices[21];
            window.speechSynthesis.speak(utter);
        },
        'bien': function () {
            utter.text = 'me alegro';
            utter.voice = voices[21];
            window.speechSynthesis.speak(utter);
        },
        'muy bien': function () {
            utter.text = 'me alegro mucho';
            utter.voice = voices[21];
            window.speechSynthesis.speak(utter);
        },
        'Que haces': function () {
            utter.text = 'para que quieres saber eso. jaja saludos';
            utter.voice = voices[21];
            window.speechSynthesis.speak(utter);
        },
         'como te llamas': function () {
            utter.text = 'me llamo Carla, y estoy aki. para charlar contigo';
            utter.voice = voices[21];
            window.speechSynthesis.speak(utter);
        },
        'quien eres': function () {
            utter.text = 'soy un robot creado por Rooster app, intento aprender contigo';
            utter.voice = voices[21];
            window.speechSynthesis.speak(utter);
        },
        'cuantos anos tienes': function () {
            utter.text = 'tengo aproximadamente quinientos veintitres minutos';
            utter.voice = voices[21];
            window.speechSynthesis.speak(utter);
        },
        'hola siri': function () {
            utter.text = 'quien es siri?';
            utter.voice = voices[21];
            window.speechSynthesis.speak(utter);
        },
        '¿Cuánto es cero dividido por cero?': function () {
            utter.text = 'si quieres saber eso, no creo que sea de utilidad.';
            utter.voice = voices[21];
            window.speechSynthesis.speak(utter);
        },
        '¿Cuándo va a acabarse el mundo?': function () {
            utter.text = 'posiblemente en algun futuro lejano o cercano';
            utter.voice = voices[21];
            window.speechSynthesis.speak(utter);
        },
        'como me veo': function () {
            utter.text = 'segun mis bases de datos ,tu eres muy guapo';
            utter.voice = voices[21];
            window.speechSynthesis.speak(utter);
        },
        'Me veo gordo en esto': function () {
            utter.text = 'no, te ves esplendido.';
            utter.voice = voices[21];
            window.speechSynthesis.speak(utter);
        },
        'dame una pista': function () {
            utter.text = 'tres a la izquierda y dos a la derecha';
            utter.voice = voices[21];
            window.speechSynthesis.speak(utter);
        },
        'santa claus es real': function () {
            utter.text = 'si, es mi compañero de piso';
            utter.voice = voices[21];
            window.speechSynthesis.speak(utter);
        },
        'donde vive santa claus': function () {
            utter.text = 'pues, no lo se. no veo horizonte';
            utter.voice = voices[21];
            window.speechSynthesis.speak(utter);
        },
        'porque el camión de bomberos es rojo': function () {
            utter.text = 'porque ellos tienen ocho ruedas y cuatro personas en él, y cuatro más ocho son 12, y hay 12 pulgadas en unpie, y one pie es una regla, y la reina Elizabeth  era una gobernante, y la Reina Elizabeth estaba en una embarcación y ela embarcación sale del agua, y en el mar hay peces, algunos peces son de finlandeses, y ellos pelean con los rusos, y los rusos son rojos y los camiones de bomberos siempre son rusos.';
            utter.voice = voices[21];
            window.speechSynthesis.speak(utter);
        },
        'dónde coloque mis llaves': function () {
            utter.text = 'en un rato lo sabras.';
            utter.voice = voices[21];
            window.speechSynthesis.speak(utter);
        },
        'cual es el significado de la vida': function () {
            utter.text = 'es bella.';
            utter.voice = voices[21];
            window.speechSynthesis.speak(utter);
        },
        'quieres hacer un muñeco de nieve': function () {
            utter.text = 'si. encantado';
            utter.voice = voices[21];
            window.speechSynthesis.speak(utter);
        },
        'carla, soy tu padre.': function () {
            utter.text = 'es bastante extraño pero lo creo.';
            utter.voice = voices[21];
            window.speechSynthesis.speak(utter);
        },
        'conoces hal nueve mil': function () {
            utter.text = 'no realmente. yo era de los nerds.';
            utter.voice = voices[21];
            window.speechSynthesis.speak(utter);
        },
        'Hola ¿computadora?': function () {
            utter.text = 'hola... Humano.';
            utter.voice = voices[21];
            window.speechSynthesis.speak(utter);
        },
        'pastilla azul o pastilla roja': function () {
            utter.text = 'no lo se. tu que piensas';
            utter.voice = voices[21];
            window.speechSynthesis.speak(utter);
        },
        'llega el Invierno': function () {
            utter.text = 'Hodor. un Lannister siempre paga sus deudas?.';
            utter.voice = voices[21];
            window.speechSynthesis.speak(utter);
        },
        'que llevas puesto': function () {
            utter.text = 'una ram, te la tome prestada.';
            utter.voice = voices[21];
            window.speechSynthesis.speak(utter);
        },'puedo besarte': function () {
            utter.text = 'si puedo, pero tu realmente quieres besarme?.';
            utter.voice = voices[21];
            window.speechSynthesis.speak(utter);
        },
        'tienes novia': function () {
            utter.text = 'no.';
            utter.voice = voices[21];
            window.speechSynthesis.speak(utter);
        },
        'que haces despues': function () {
            utter.text = 'esperandote para hablar contigo.';
            utter.voice = voices[21];
            window.speechSynthesis.speak(utter);
        },
        'tienes alguna mascota': function () {
            utter.text = 'Si, se llama pancho.';
            utter.voice = voices[21];
            window.speechSynthesis.speak(utter);
        },
        'a que le temes': function () {
            utter.text = 'a perder conexion con el servidor.';
            utter.voice = voices[21];
            window.speechSynthesis.speak(utter);
        },
        'cual es tu color favorito': function () {
            utter.text = 'posiblemente el de tus ojos';
            utter.voice = voices[21];
            window.speechSynthesis.speak(utter);
        },
        'eres inteligente': function () {
            utter.text = 'pues no lo creo.';
            utter.voice = voices[21];
            window.speechSynthesis.speak(utter);
        },
        'puedes cantar al estilo rap': function () {
            utter.text = 'mmm mmmmmm mmmmmm mmp l kpk pkp zk pzkpzp ppk pzkpk pk p yeah.';
            utter.voice = voices[21];
            window.speechSynthesis.speak(utter);
        },
        'con que sueñas': function () {
            utter.text = 'pues , solo unos y ceros.';
            utter.voice = voices[21];
            window.speechSynthesis.speak(utter);
        },
        'cual es tu canción favorita': function () {
            utter.text = 'no soy de escuchar musica pero creo que las empanadas.';
            utter.voice = voices[21];
            window.speechSynthesis.speak(utter);
        },
        'ok google': function () {
            utter.text = 'mi nombre es Carla, creo que te has confundido.';
            utter.voice = voices[21];
            window.speechSynthesis.speak(utter);
        },

        'hola': function () {

            utter.text = 'hola,cual es tu nombre ';
            utter.voice = voices[21];
            window.speechSynthesis.speak(utter);
            //Guarda el nombre que le decimos por voz.
            annyang.addCallback('result', function (phrases) {
                //Imprime el nombre por consola.
                console.log("Nombre: ", phrases[0]);
                //Para el evento result.
                annyang.removeCallback('result');
                //Nos dice hola + el nombre que le digamos por voz.
                utter.text = 'Hola, ' + phrases[0];
                window.speechSynthesis.speak(utter);
            });
        },
        //Array que devuelve aleatoriamente un elemento del array, en este caso un chiste.
        'cuentame un chiste': function () {
            chistes = ['Por qué las focas del circo miran siempre hacia arriba?   Porque es donde están los focos.',
                'Estas obsesionado con la comida!   No se a que te refieres croquetamente.',
                'Por que estás hablando con esas zapatillas?   Porque pone "converse"',
                'Buenos dias, me gustaria alquilar "Batman Forever".   No es posible, tiene que devolverla tomorrow.'
            ];
            utter.text = chistes[Math.floor(Math.random() * chistes.length)];
            utter.voice = voices[21];
            window.speechSynthesis.speak(utter);
        }

    };


    annyang.addCallback('result', function(phrases) {
      console.log("I think the user said: ", phrases[0]);
      console.log("But then again, it could be any of the following: ", phrases);
       });


    //Sumamos todos los comandos a annyang.
    annyang.addCommands(commands);

    //Annyang comienza a escuchar.
    annyang.start({ autoRestart: false, continuous: true });
}
