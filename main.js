var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
fabric.Image.fromURL('BirthdayImage.jpg' , function(Img){
    block_image_Object=Img;
    block_image_Object.scaleToWidth(700);
    block_image_Object.scaleToHeight(510);
    block_image_Object.set({
    top:0,
    left:0
    });
    canvas.add(block_image_Object)
})	
	
}

function playSound(){
	x.play();
}
