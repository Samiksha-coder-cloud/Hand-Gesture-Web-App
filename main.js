prediction1 = "";
prediction2 = "";

Webcam.set ({
    height: 300,
    width: 350,
    image_format: "png",
    png_quality: 90
});

Webcam.attach("#camera");

function take_snap() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id='captured_image' src='" + data_uri + "'>";
    })
}

console.log("ml5 Version- ",ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/dwDGJEra_/model.json", modelLoaded)

function modelLoaded() {
    console.log("Model is Loaded");
}

function speak() {
    synth = window.speechSynthesis;
    speakData_1 = "Prediction 1 is- " + prediction1;
    speakData_2 = "Prediction 2 is- " + prediction2;
    utterThis = new SpeechSynthesisUtterance(speakData_1 + speakData_2);
    synth.speak(utterThis);
}


function predict_snap() {
    img = document.getElementById("captured_image");
    classifier.classify(img,gotResult);
}

function gotResult(error,results) {
    if (error) {
        console.error(error);
    }
     else {
        console.log(results);
        prediction1 = results[0].label;
        prediction2 = results[1].label;

        document.getElementById("result_hand_name_1").innerHTML = prediction1;
        document.getElementById("result_hand_name_2").innerHTML = prediction2;
        speak()

        //Prediction 1 Code

        if (prediction1 == "Amazing") {
            document.getElementById("hand_result_1").innerHTML = "👌";
        }

        if (prediction1 == "Thumbs Up") {
            document.getElementById("hand_result_1").innerHTML = "👍";
        }

        if (prediction1 == "Victory") {
            document.getElementById("hand_result_1").innerHTML = "✌️";
        }

        if (prediction1 == "Raised Hand") {
            document.getElementById("hand_result_1").innerHTML = "✋";
        }

        if (prediction1 == "Call Me Hand") {
            document.getElementById("hand_result_1").innerHTML = "🤙";
        }

        if (prediction1 == "Thumbs Down") {
            document.getElementById("hand_result_1").innerHTML = "👎";
        }

        if (prediction1 == "Oncoming First") {
            document.getElementById("hand_result_1").innerHTML = "👊";
        }

        if (prediction1 == "Crossed Fingers") {
            document.getElementById("hand_result_1").innerHTML = "🤞";
        }

        if (prediction1 == "Vulcan Salute") {
            document.getElementById("hand_result_1").innerHTML = "🖖";
        }

        //Prediction 2 Code

        if (prediction2 == "Amazing") {
            document.getElementById("hand_result_2").innerHTML = "👌";
        }

        if (prediction2 == "Thumbs Up") {
            document.getElementById("hand_result_2").innerHTML = "👍";
        }

        if (prediction2 == "Victory") {
            document.getElementById("hand_result_2").innerHTML = "✌️";
        }

        if (prediction2 == "Raised Hand") {
            document.getElementById("hand_result_2").innerHTML = "✋";
        }

        if (prediction2 == "Call Me Hand") {
            document.getElementById("hand_result_2").innerHTML = "🤙";
        }

        if (prediction2 == "Thumbs Down") {
            document.getElementById("hand_result_2").innerHTML = "👎";
        }

        if (prediction2 == "Oncoming First") {
            document.getElementById("hand_result_2").innerHTML = "👊";
        }

        if (prediction2 == "Crossed Fingers") {
            document.getElementById("hand_result_2").innerHTML = "🤞";
        }

        if (prediction2 == "Vulcan Salute") {
            document.getElementById("hand_result_2").innerHTML = "🖖";
        }
    }
}