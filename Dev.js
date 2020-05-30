const video = document.getElementById('video');
video.style.position = 'absolute';
video.style.top = '-200px';
const text = document.getElementById('text');
const alerte = document.getElementById('alert');
const photo = document.getElementById('photo');
let date = document.getElementById('coming');
let largeur = 357;

let i = 0;
let intervalID;
let intervalOpacite;
let opacite = 0;

let signe = true;
let change = 1;

let player;
let done = false;

let tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


function onYouTubePlayerAPIReady() {
    player = new YT.Player('video', {
        height: '200',
        width: '357',
        playerVars: {cc_load_policy: 1, playsinline: 1},
        videoId: 'w9u21s1wuok',
        events: {
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.PLAYING && !done) {
        ouverture();
        done = true;
    }
}


const chaine = "Nants ingonyama bagithi baba\n" +
    "        Sithi uhhmm ingonyama\n" +
    "\n" +
    "        Nants ingonyama bagithi babo\n" +
    "        Sithi uhhmm ingonyama\n" +
    "        Ingonyama\n";

const tableau = chaine.split("");


setTimeout(function () {
    intervalID = setInterval(function () {
        lecture(tableau);

        if (i === tableau.length) {
            clearInterval(intervalID);
            i = 0;
            alerte.innerHTML = "Merde merde merde, il manque la musique là !!"
            setTimeout((function () {
                alerte.innerHTML += '<br> Euhh pardon pardon, on recommence...'
            }), 3000);

            setTimeout(function () {
                text.innerHTML = "";
                alerte.style.display = "none";

                const frame = document.querySelector('iframe');

                frame.style.position = 'static';
                frame.style.top = '0';

                text.innerHTML = 'VISIONNEZ-MOI !';
                text.style.color = '#DF3B18';
                text.style.textShadow = '0 0 5px';
                intervalID = setInterval(function () {
                    clignotement(text);
                }, 85);

            }, 5000);
        }
    }, 100);
}, 2000);


const tableauDiscours = [
    "Mais qu'est ce que c'est que ça !",
    "Qu'est ce que tout ça veut dire …",
    "Ben, c'est un peu comme cette histoire de cycle de la vie",
    "Où tout obéit aux lois d'un équilibre délicat qu'il nous faut comprendre",
    "et nous devons respecter toutes les créatures",
    "de la fourmi qui rampe à l'antilope qui bondit.",
    "Et même si les lions mangent les antilopes,",
    "quand nous mourons notre corps se transforme en herbe",
    "et les antilopes mangent l'herbe.",
    "C'est comme les maillons d'une chaîne dans le grand cycle de la vie.",
    "Le temps que nous passons à vivre ressemble à la course du soleil.",
    "Un jour viendra où le soleil éteindra sur nous sa lumière",
    "et se lèvera pour faire d'eux les nouveaux rois.",
    "Ainsi toute cette immensité baignée de lumière leur appartiendra.",
    "En attendant ce jour …",
    "Préparons nous à l'accueillir et...",
    "HAKUNA MATATA !",
];

function ouverture() {

    clearInterval(intervalID);
    text.innerHTML = "";

    setTimeout(function () {

        intervalID = setInterval(function () {

            text.innerHTML = tableauDiscours[i];
            text.style.width = '357px';
            text.style.height = "100%";
            text.style.margin = "0 auto";
            text.style.backgroundColor = "black";
            text.style.color = 'white';
            text.style.fontSize = '1em';
            text.style.opacity = '1';
            text.style.textShadow = 'none';
            i++;

            if (i === tableauDiscours.length) {
                clearInterval(intervalID);

                setTimeout(function () {
                    text.style.display = "none";
                    photo.style.opacity = opacite;
                    photo.innerHTML = '<img src="echo.jpg" alt="babyIsComing">';

                    const image = document.querySelector('img');
                    image.style.width = largeur + "px";

                    intervalOpacite = setInterval(function () {
                        opacite += 0.01;
                        photo.style.opacity = opacite;

                        if (opacite >= 1) {
                            clearInterval(intervalOpacite);
                            grossissement();
                        }
                    }, 200);
                }, 2000);

                setTimeout(function () {
                    date.textContent = "DECEMBER 2020 !!!";
                    date.style.fontWeight = 'bold';
                    date.style.fontSize = "2.2em";
                    date.style.margin = '20px';
                    setTimeout(function () {
                        setInterval(function () {
                            clignotement(date);
                        }, 85);
                    }, 1000);
                }, 45000);
            }
        }, 10588);
    }, 2000);

    setTimeout(function () {
        const frame = document.querySelector('iframe');
        frame.style.display = 'none';
    }, 229000);

}


function lecture(tab) {
    text.innerHTML += tab[i];
    if (tab[i] === "\n") {
        text.innerHTML += "<br>";
    }
    i++
}


let clignotement = (texte) => {

    if (signe === true) {
        change -= 0.05;
    } else {
        change += 0.05;
    }

    if (change >= 0.95) {
        signe = true;
    }
    if (change <= 0.05) {
        signe = false;
    }
    texte.style.opacity = change;
}

function grossissement() {
    const image = document.querySelector('img');

    let intervalID = setInterval(function () {
        image.style.width = largeur + "px";
        largeur++;

        if (window.innerWidth === image.width) {
            clearInterval(intervalID);
        }

    }, 50);

}
