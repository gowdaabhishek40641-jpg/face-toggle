```javascript
var face = document.getElementById("face");
var faceName = document.getElementById("faceName");
var message = document.getElementById("message");
var counter = document.getElementById("counter");


var faceNumber = 1;


function showFace() {

    if (faceNumber == 1) {

        face.innerHTML = "😊";
        faceName.innerHTML = "Happy Face";
        message.innerHTML = "I am feeling happy!";

    }

    else if (faceNumber == 2) {

        face.innerHTML = "😢";
        faceName.innerHTML = "Sad Face";
        message.innerHTML = "I am feeling sad!";

    }

    else if (faceNumber == 3) {

        face.innerHTML = "😡";
        faceName.innerHTML = "Angry Face";
        message.innerHTML = "I am feeling angry!";

    }

    else if (faceNumber == 4) {

        face.innerHTML = "😲";
        faceName.innerHTML = "Surprised Face";
        message.innerHTML = "I am surprised!";

    }

    else if (faceNumber == 5) {

        face.innerHTML = "😂";
        faceName.innerHTML = "Laughing Face";
        message.innerHTML = "I am laughing!";

    }

    counter.innerHTML = faceNumber;

    animateFace();
}


function toggleFace() {

    faceNumber++;

    if (faceNumber > 5) {

        faceNumber = 1;
    }

    showFace();
}


function previousFace() {

    faceNumber--;

    if (faceNumber < 1) {

        faceNumber = 5;
    }

    showFace();
}


function randomFace() {

    var randomNumber =
        Math.floor(Math.random() * 5) + 1;

    faceNumber = randomNumber;

    showFace();
}


function animateFace() {

    face.classList.remove("animate");

    setTimeout(function () {

        face.classList.add("animate");

    }, 10);

}
```
