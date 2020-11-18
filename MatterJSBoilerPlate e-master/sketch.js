
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var girlImg,confettiImg,medalImg,scoreImg,amazedImg,happy1g;
var girl,confetti,medal,score,amazed,backgroundimg;
var quotes1, questions1;
var radio, radioOutput;
var result=[];
var output, average;
var displayMessage;
function preload()
{
	girlImg=loadImage("images/girl-walking.png");
	confettiImg=loadImage("images/confetti.png");
	medalImg=loadImage("images/gold-medal.png");
	scoreImg=loadImage("images/score.png");
	amazedImg=loadImage("images/amazed.png");
	happy1g=loadImage("images/happy.gif");
	backgroundimg=loadImage("images/backgroud.jpg");
	
}

function setup() {
	createCanvas(windowWidth,windowHeight);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	
	
	
	girl=createSprite(windowWidth/2, windowHeight/2+50);
	girl.addImage(girlImg);
	girl.scale=3;

	quotes1=new Quotes  ();
	quotes1.displayQuotes();

	questions1=new Questions();
	questions1.displayQuestions();
   
	radio = createRadio();
		radio.size(100,100);
		radio.style("font-size","40px");
		radio.option('yes',5);
		radio.option('no',1);
		radio.option('maybe',2);
		radio.option('sometimes',3);
		radio.style('width', '700px');
		radio.position(windowWidth/3,windowHeight/2+200);
		textAlign(CENTER);
		fill(255, 0, 0);
	
		output=createElement("h1");
		displayMessage=createElement("h2");
		
		
}

function mouseClicked(){

	radioOutput=radio.selected();
	console.log(radioOutput);

	if(radioOutput==1||radioOutput==2||radioOutput==3||radioOutput==4||radioOutput==5){
	    var num=parseInt(radioOutput);
		result.push(num);
		console.log(result);
		questions1.displayQuestions();
	}
	if(result.length===5){
		var total=0;
		for(var i=0; i<result.length; i++){
			total+=result[i];
		}
	    average=+(total/result.length);
		//output.html(average);
		//output.position(200,200);
		result=[];

	}
}
function displayResult(){


	if(average<=3){
		displayMessage.html("The secret of getting ahead is getting started!!!");
		displayMessage.position(windowWidth/3,60);
		console.log(3);
		girl.hide();
		image(happy1g,20,20,windowWidth-100,windowHeight-100);
		radio.hide();
		questions1.show1.hide();
	}
	else if(average<=6&&average>3){
		displayMessage.html("If people are doubting how far you can go, go so far that you can't hear them anymore.");
		displayMessage.position(windowWidth/3,60);
		console.log(3);
		girl.hide();
		image(happy1g,20,20,windowWidth-100,windowHeight-100);
		radio.hide();
		questions1.show1.hide();

	}else if(average>6&&average<10){
		displayMessage.html("You can go as far as your mind lets you. What you believe, remember, you can achieve.” ");
		displayMessage.position(windowWidth/3,60);
		console.log(3);
		girl.hide();
		image(happy1g,20,20,windowWidth-100,windowHeight-100);
		radio.hide();
		questions1.show1.hide();
	}
     
}

function draw() {
  background("#fae");

  let val = radio.value();
  text(val, width / 2, height / 2);

  displayResult();

  drawSprites();
 
}




