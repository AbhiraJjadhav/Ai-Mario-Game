img = "";
noseX = 0;
noseY = 0;
marioY = 325;
marioX = 325;
GameStatus = "";

function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
	img = loadImage("mario.jpg")
}

function game()
{
	console.log("noseX = " + noseX +", noseY = " + noseY);
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas')
	video = createCapture(VIDEO)
	video.size(800, 300);
	video.parent('game_console');
	instializeInSetup(mario);

	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}
function modelLoaded(){
	console.log("Model Loaded!");
}

function draw() {
	game();
	background("#D3D3D3");
	image(img, marioX, marioY, 40, 70);
	if(noseX < 300)
	{
		marioX = marioX - 1;
	}
	if(noseX > 300)
	{
		marioX = marioX + 1;
	}
	if(noseY < 150)
	{
		marioY = marioY - 1;
	}
	if(noseY > 150)
	{
		marioY = marioY + 1;
	}
}

function gotPoses(results)
{
	if(results.length > 0)
	{
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;
		console.log("noseX = " + noseX +", noseY = " + noseY);
	}
}





