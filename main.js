speech_recognition=window.webkitSpeechRecognition;

recognition=new speech_recognition();

function start()
{
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}

recognition.onresult=function (event)
{
    console.log(event);

    content=event.results[0][0].transcript;

    console.log(content);

    document.getElementById("textbox").innerHTML=content;

    speak();
}

function speak()
{
    synth=window.speechSynthesis;

    textarea=document.getElementById("textbox").value;

    utterthis=new SpeechSynthesisUtterance(textarea);

    synth.speak(utterthis);

    Webcam.attach(camera);

    
}

Webcam.set({
    width: 360, height: 250, image_format: 'png', png_quality: 90
})

camera=document.getElementById("camera");