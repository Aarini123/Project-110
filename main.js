

console.log("ml5version",ml5.version);

classifier=ml5.imageClassifier("MobileNet",ModelLoaded);

function ModelLoaded(){
    console.log("M0delL0aded");
}

function identify(){
    img=document.getElementById("captured_image");
    classifier.classify(img,gotResult);
}

function gotResult(error,results){
    if(error){
        console.log(error);
    }
  else{
      console.log(results);
      document.getElementById("MobileNet").innerHTML=results[0].label;
  }  
}