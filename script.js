```javascript
var face = document.getElementById("face");
var faceName = document.getElementById("faceName");

var faceNumber = 1;


function toggleFace() {

    if (faceNumber == 1) {

        face.innerHTML = "😢";
        faceName.innerHTML = "Sad Face";

        faceNumber = 2;

    }

    else if (faceNumber == 2) {

        face.innerHTML = "😡";
        faceName.innerHTML = "Angry Face";

        faceNumber = 3;

    }

    else if (faceNumber == 3) {

        face.innerHTML = "😲";
        faceName.innerHTML = "Surprised Face";

        faceNumber = 4;

    }

    else {

        face.innerHTML = "😊";
        faceName.innerHTML = "Happy Face";

        faceNumber = 1;

    }
}
