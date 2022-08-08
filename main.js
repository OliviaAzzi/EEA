prediction1="";
prediction2="";
Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach("#camera")
function snapshot() {
    Webcam.snap(function (src_of_image) {
        document.getElementById("result").innerHTML="<img id='captured_image' src='"+src_of_image+"'/>"
    });
}
model=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/2bBWdYhyx/model.json",model_loaded_function);
function model_loaded_function() {
    console.log("model has loaded")
}
function speak() {
    api=window.speechSynthesis;
    data1="The First Prediction is "+prediction1;
    data2="And Second Prediction is "+prediction2;
    speak_data=new SpeechSynthesisUtterance(data1+data2);
    api.speak(speak_data);
}
function check() {
    img=document.getElementById("captured_image");
    model.classify(img,got_results)
}
function got_results(error,results) {
    if (error) {
        console.log(error);
    } else {
        console.log(results);
        prediction1=results[0].label;
        prediction2=results[1].label;
        document.getElementById("emotion_1").innerHTML=results[0].label;
        document.getElementById("emotion_2").innerHTML=results[1].label;
        speak();
        if (results[0].label=="happy") {
            document.getElementById("emoji_1").innerHTML="&#128513;";
        }
        if (results[0].label=="cool") {
            document.getElementById("emoji_1").innerHTML="&#128526;";
        }
        if (results[0].label=="meh") {
            document.getElementById("emoji_1").innerHTML="&#128529;";
        }
        if (results[0].label=="sad") {
            document.getElementById("emoji_1").innerHTML="&#128532;";
        }
        if (results[0].label=="silly") {
            document.getElementById("emoji_1").innerHTML="&#128540;";
        }
        if (results[0].label=="angry") {
            document.getElementById("emoji_1").innerHTML=" &#128545;";
        }

        if (results[1].label=="happy") {
            document.getElementById("emoji_2").innerHTML="&#128513;";
        }
        if (results[1].label=="cool") {
            document.getElementById("emoji_2").innerHTML="&#128526;";
        }
        if (results[1].label=="meh") {
            document.getElementById("emoji_2").innerHTML="&#128529;";
        }
        if (results[1].label=="sad") {
            document.getElementById("emoji_2").innerHTML="&#128532;";
        }
        if (results[1].label=="silly") {
            document.getElementById("emoji_2").innerHTML="&#128540;";
        }
        if (results[1].label=="angry") {
            document.getElementById("emoji_2").innerHTML=" &#128545;";
        }
    }
c}