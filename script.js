```javascript
var face = document.getElementById("face");
var faceName = document.getElementById("faceName");
var message = document.getElementById("message");

var faceNumber = 1;


function toggleFace() {

    if (faceNumber == 1) {

        face.innerHTML = "😢";
        faceName.innerHTML = "Sad Face";
        message.innerHTML = "I am feeling sad!";

        faceNumber = 2;
    }

    else if (faceNumber == 2) {

        face.innerHTML = "😡";
        faceName.innerHTML = "Angry Face";
        message.innerHTML = "I am feeling angry!";

        faceNumber = 3;
    }

    else if (faceNumber == 3) {

        face.innerHTML = "😲";
        faceName.innerHTML = "Surprised Face";
        message.innerHTML = "I am surprised!";

        faceNumber = 4;
    }

    else {

        face.innerHTML = "😊";
        faceName.innerHTML = "Happy Face";
        message.innerHTML = "I am feeling happy!";

        faceNumber = 1;
    }
}
```
