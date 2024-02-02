function setup() {
   canvas = createCanvas(700, 480);
   canvas.position(150, 150);
   video=createCapture(VIDEO);
   video.hide();

}

function draw() {
    image(video, 300, 50, 200, 200);
    fill(52, 235, 82);
    stroke(212, 21, 66);

    rect(70, 1, 1, 300);
    circle(70, 20, 40);
    rect(70, 20, 800, 1);
    circle(70, 20, 40);
    

    circle(680, 20, 40);
    circle(680, 20, 40);



    rect(70, 300, 600, 1);
    circle(70, 300, 40);
    rect(680, 20, 1, 300);
    circle(70, 20, 4);
    

    circle(680, 300, 40);
    circle(680, 20, 40);




    rect(70, 1, 1, 300);
    circle(70, 20, 40);
    rect(70, 20, 800, 1);
    circle(70, 20, 40);
    circle(680, 20, 40);
    

    circle(680, 20, 40);
    circle(680, 20, 40);
    circle(680, 20, 40);


}

function take_snapshot() {
    save('your_image.png');
    
}
