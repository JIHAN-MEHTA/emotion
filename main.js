
var prediction1=""
var prediction2=""



Webcam.set({


width:300,
height:250,
image_format:'jpg',
jpg_quality:100
})

camera=document.getElementById("camera")

Webcam.attach("#camera")

function take_Snapshot()
{

Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>'

});}

console.log('ml5 version' , ml5.version)

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/qzrzbgF-W/model.json',model_loaded)

function model_loaded(){
console.log('model_loaded')

}








   