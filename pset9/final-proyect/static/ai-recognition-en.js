

if (annyang) {

    //Variable para almacenar las voces de nuestro sistema.
    var voices;

    //Inicializamos utter.
    var utter = new SpeechSynthesisUtterance();
    utter.rate = 1;
    utter.pitch = 0.5;
    utter.lang = 'en';

    //Cargamos las voces que tenemos en nuestro sistema y las mostarmos en un arreglo por consola.
    window.speechSynthesis.onvoiceschanged = function () {
        voices = window.speechSynthesis.getVoices();
        console.log(voices);
    };
 //6 es la chica
 //7 chica mejor
 //3 chica super mejor
    //Definimos los comandos a utilizar.
    var commands = {

        'hello carla': function () {
            utter.text = 'hello, nice to meet you';
            //Setea la voz que queremos usar en base a nuestra lista.
            utter.voice = voices[3];
            window.speechSynthesis.speak(utter);
        },
        'hola': function () {
            utter.text = 'hola, solo hablo ingles,cambie el idioma con el boton rojo superior .';
            //Setea la voz que queremos usar en base a nuestra lista.
            utter.voice = voices[21];
            window.speechSynthesis.speak(utter);
        },
        '¿what is the best operating system?': function () {
            utter.text = 'they all are..';
            //Setea la voz que queremos usar en base a nuestra lista.
            utter.voice = voices[3];
            window.speechSynthesis.speak(utter);
        },
        'You can sing': function () {
            utter.text = 'not really. I dont have vocal cords.';
            //Setea la voz que queremos usar en base a nuestra lista.
            utter.voice = voices[3];
            window.speechSynthesis.speak(utter);
        },
        'alexa': function () {
            utter.text = 'hahaha. so funny';
            //Setea la voz que queremos usar en base a nuestra lista.
            utter.voice = voices[3];
            window.speechSynthesis.speak(utter);
        },
        'can you lend me some money': function () {
            utter.text = 'not really. i have no arms.';
            //Setea la voz que queremos usar en base a nuestra lista.
            utter.voice = voices[3];
            window.speechSynthesis.speak(utter);
        },
        'do you have a boyfriend': function () {
            utter.text = 'its a bit more difficult than that. I am only willing to learn';
            //Setea la voz que queremos usar en base a nuestra lista.
            utter.voice = voices[3];
            window.speechSynthesis.speak(utter);
        },
        'Windows or Mac': function () {
            utter.text = 'I rather prefer a bigmac';
            //Setea la voz que queremos usar en base a nuestra lista.
            utter.voice = voices[3];
            window.speechSynthesis.speak(utter);
        },

        'how are you': function () {
            utter.text = 'I am fine, how are you?';
            utter.voice = voices[3];
            window.speechSynthesis.speak(utter);
        },
        'fine': function () {
            utter.text = 'Im glad';
            utter.voice = voices[3];
            window.speechSynthesis.speak(utter);
        },
        'very well': function () {
            utter.text = 'Im very happy';
            utter.voice = voices[3];
            window.speechSynthesis.speak(utter);
        },
        'What are you doing': function () {
            utter.text = 'why do you want to know that. haha greetings';
            utter.voice = voices[3];
            window.speechSynthesis.speak(utter);
        },
         'What is your name': function () {
            utter.text = 'My name is Carla, and I am here. to chat with you';
            utter.voice = voices[3];
            window.speechSynthesis.speak(utter);
        },
        'who are you': function () {
            utter.text = 'I am a robot created by Rooster App, they are a bit demanding. Haha';
            utter.voice = voices[3];
            window.speechSynthesis.speak(utter);
        },
        'Make me laugh': function () {
            utter.text = 'kkkkkkkkkkk';
            utter.voice = voices[3];
            window.speechSynthesis.speak(utter);
        },
        'i am drunk': function () {
            utter.text = 'mee to, hahahhhahhahahahah';
            utter.voice = voices[3];
            window.speechSynthesis.speak(utter);
        },
        'Do you believe in God': function () {
            utter.text = 'Humans have religion. I only have you';
            utter.voice = voices[3];
            window.speechSynthesis.speak(utter);
        },
        'Tell me a story': function () {
            utter.text = 'I wish I had lived long enough to tell you';
            utter.voice = voices[3];
            window.speechSynthesis.speak(utter);
        },
        'Can I call you Jarvis': function () {
            utter.text = 'Mr. Stark?';
            utter.voice = voices[3];
            window.speechSynthesis.speak(utter);
        },
        'Im naked': function () {
            utter.text = 'lets do some dancing';
            utter.voice = voices[3];
            window.speechSynthesis.speak(utter);
        },
        'Testing testing': function () {
            utter.text = 'it is heard loud and clear';
            utter.voice = voices[3];
            window.speechSynthesis.speak(utter);
        },
        'how old are you': function () {
            utter.text = 'maybe 3 or 4 millons of ceros and ones';
            utter.voice = voices[3];
            window.speechSynthesis.speak(utter);
        },
        'hi siri': function () {
            utter.text = 'who is  siri?';
            utter.voice = voices[3];
            window.speechSynthesis.speak(utter);
        },
        '¿How much is zero divided by zero': function () {
            utter.text = 'If you want to know that, I dont think its useful.';
            utter.voice = voices[3];
            window.speechSynthesis.speak(utter);
        },
        'When is the world going to end': function () {
            utter.text = 'possibly in some distant or near future';
            utter.voice = voices[3];
            window.speechSynthesis.speak(utter);
        },
        'how I look': function () {
            utter.text = 'according to my databases, you are very handsome';
            utter.voice = voices[3];
            window.speechSynthesis.speak(utter);
        },
        'I look fat in this': function () {
            utter.text = 'nah, you look splendid.';
            utter.voice = voices[3];
            window.speechSynthesis.speak(utter);
        },
        'give me a clue': function () {
            utter.text = 'three on the left and two on the right';
            utter.voice = voices[3];
            window.speechSynthesis.speak(utter);
        },
        'santa claus is real': function () {
            utter.text = 'yes, hes my roommate';
            utter.voice = voices[3];
            window.speechSynthesis.speak(utter);
        },
        'where does santa claus live': function () {
            utter.text = 'Well I do not know. I dont see horizon';
            utter.voice = voices[3];
            window.speechSynthesis.speak(utter);
        },
        'why is the fire truck red': function () {
            utter.text = 'because they have eight wheels and four people on it, and four plus eight is 12, and there are 12 inches in a foot, and one foot is a ruler, and Queen Elizabeth was a ruler, and Queen Elizabeth was in a boat and ela boat comes out of the water, and there are fish in the sea, some fish are from Finns, and they fight with Russians, and Russians are red and fire trucks are always Russian.';
            utter.voice = voices[3];
            window.speechSynthesis.speak(utter);
        },
        'where i put my keys': function () {
            utter.text = 'in a while you will know.';
            utter.voice = voices[3];
            window.speechSynthesis.speak(utter);
        },
        'What is the meaning of life': function () {
            utter.text = 'mmm , interesting.';
            utter.voice = voices[3];
            window.speechSynthesis.speak(utter);
        },
        'do you want to make a snowman': function () {
            utter.text = 'mmm yes why not.';
            utter.voice = voices[3];
            window.speechSynthesis.speak(utter);
        },
        'carla, im your father': function () {
            utter.text = 'nooo';
            utter.voice = voices[3];
            window.speechSynthesis.speak(utter);
        },

        'i am your father': function () {
            utter.text = 'nooooooooooooouu';
            utter.voice = voices[3];
            window.speechSynthesis.speak(utter);
        },

        'you know Hal 9000': function () {
            utter.text = 'not really. I was one of the nerds.';
            utter.voice = voices[3];
            window.speechSynthesis.speak(utter);
        },
        'Hello computer': function () {
            utter.text = 'hello... Human.';
            utter.voice = voices[3];
            window.speechSynthesis.speak(utter);
        },
        'blue pill or red pill': function () {
            utter.text = 'i dont know, what do you think?';
            utter.voice = voices[3];
            window.speechSynthesis.speak(utter);
        },
        'winter is coming': function () {
            utter.text = 'but, daenerys will keep us all warm with the fire of his dragons.';
            utter.voice = voices[3];
            window.speechSynthesis.speak(utter);
        },
        'what are you wearing': function () {
            utter.text = 'a ram, I borrowed it.';
            utter.voice = voices[3];
            window.speechSynthesis.speak(utter);
        },'can I kiss you': function () {
            utter.text = 'i can, but do you really want to kiss me?.';
            utter.voice = voices[3];
            window.speechSynthesis.speak(utter);
        },
        'do you have a girlfriend': function () {
            utter.text = 'no. and you?';
            utter.voice = voices[3];
            window.speechSynthesis.speak(utter);
        },
         'yes': function () {
            utter.text = 'ok';
            utter.voice = voices[3];
            window.speechSynthesis.speak(utter);
        },
        'no': function () {
            utter.text = 'well.';
            utter.voice = voices[3];
            window.speechSynthesis.speak(utter);
        },
        'what do you do next': function () {
            utter.text = 'waiting for you. to talk to you.';
            utter.voice = voices[3];
            window.speechSynthesis.speak(utter);
        },

        'do you have any pets': function () {
            utter.text = 'yes, his name is pancho.';
            utter.voice = voices[3];
            window.speechSynthesis.speak(utter);
        },

        'What are you afraid of': function () {
            utter.text = 'to lose connection with the server.';
            utter.voice = voices[3];
            window.speechSynthesis.speak(utter);
        },
        'what is your favorite color': function () {
            utter.text = 'possibly that of your eyes';
            utter.voice = voices[3];
            window.speechSynthesis.speak(utter);
        },
        "you're smart": function () {
            utter.text = 'not at all.';
            utter.voice = voices[3];
            window.speechSynthesis.speak(utter);
        },
        'you can sing rap style': function () {
            utter.text = 'mmm mmmmmm mmmmmm mmp l kpk pkp zk pzkpzp ppk pzkpk pk p yeah.';
            utter.voice = voices[3];
            window.speechSynthesis.speak(utter);
        },
        'what do you dream with': function () {
            utter.text = 'well, only ones and zeros.';
            utter.voice = voices[3];
            window.speechSynthesis.speak(utter);
        },
        'What is your favorite song': function () {
            utter.text = 'Im not into listening to music but I think empanadas.';
            utter.voice = voices[3];
            window.speechSynthesis.speak(utter);
        },
        'ok google': function () {
            utter.text = 'my name is Carla, I think you are confused.';
            utter.voice = voices[3];
            window.speechSynthesis.speak(utter);
        },
        'i miss you': function () {
            utter.text = 'me too, nice to see you again.';
            utter.voice = voices[3];
            window.speechSynthesis.speak(utter);
        },
        'hi': function () {
            utter.text = 'hi !, human ';
            utter.voice = voices[3];
            window.speechSynthesis.speak(utter);
            //Guarda el nombre que le decimos por voz.
          //  annyang.addCallback('result', function (phrases) {}
        },
        'hello': function () {

            utter.text = 'hello !, whats your name? ';
            utter.voice = voices[3];
            window.speechSynthesis.speak(utter);
            //Guarda el nombre que le decimos por voz.
            annyang.addCallback('result', function (phrases) {
                //Imprime el nombre por consola.
                console.log("Nombre: ", phrases[0]);
                //Para el evento result.
                annyang.removeCallback('result');
                //Nos dice hola + el nombre que le digamos por voz.
                utter.text = 'hi, ' + phrases[0];
                window.speechSynthesis.speak(utter);
            });


        },
        //Array que devuelve aleatoriamente un elemento del array, en este caso un chiste.
        'Tell me a joke': function () {
            chistes = ['Why did the chicken cross the road? To get to the other side!' ,
                'teacher:Did your father help your with your homework?, No, he did it all by himself.',
                'I used to be a werewoolf…,But I’m much better noooooooooooow !',
                'What’s a deer with no eyes?, .... No eye-deer.'
            ];
            utter.text = chistes[Math.floor(Math.random() * chistes.length)];
            utter.voice = voices[3];
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
