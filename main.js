var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event) {
    console.log(event);
    var Content = event.results[0][0].transcript;
    console.log(Content);
    document.getElementById("textbox").innerHTML = "";
    if (Content == "take my selfie") {
        console.log("Erith is the best");
        speak();
    }
}

function speak() {
    setTimeout(function() {
        var synth = window.speechSynthesis;
        speak_data = "Your Collage Web App will soon be ready";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
        Webcam.attach(camera);
        var image_id = selfie1;
        take_snapshot();
    }, 5000);
    setTimeout(function() {
        var synth = window.speechSynthesis;
        speak_data = "Your Collage Web App will soon be ready";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
        Webcam.attach(camera);
        var image_id = selfie2;
        take_snapshot();
    }, 10000);
    setTimeout(function() {
        var synth = window.speechSynthesis;
        speak_data = "Your Collage Web App will soon be ready";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
        Webcam.attach(camera);
        var image_id = selfie3;
        take_snapshot();
    }, 15000);
}

function take_snapshot() {
    console.log(image_id);
    Webcam.snap(function(data_uri) {
        if(image_id == "selfie1") {
            document.getElementById("result1").innerHTML = "<img id='selfie1' src='"+data_uri+"'>";
        }
        if(image_id == "selfie2") {
            document.getElementById("result2").innerHTML = "<img id='selfie2' src='"+data_uri+"'>";
        }
        if(image_id == "selfie3") {
            document.getElementById("result3").innerHTML = "<img id='selfie3' src='"+data_uri+"'>";
        }
    });
}