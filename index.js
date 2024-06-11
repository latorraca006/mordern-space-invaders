const scoreEL = document.querySelecto("#scoreEL");
const canvas = document.querySelecto("canvas");
const c = canvas.getContext("2d");

canvas.width =1024;
canvas.height = 576;

let player = new Player();
let projectlies = [];
let grids = [];
let invaderProjectiles = [];
let particles = [];
let bombs = [];
let powerUps = [];

let keys = {
    ArrowLeft: {
        pressed: false 
    },
    ArrowRight: {
        pressed: false 
    },
    space: {
        pressed: false
    } 
};

let frames = 0;
let randomInterval = Math.floor(Math.random() * 500 + 500);

let game = {
    over: false,
    active:true 
};

let score = 0;

let spawnBuffer = 500;
let fps = 68;
let fpsInterval = 100 / fps;

let msPrev = window.permormace.now(); 