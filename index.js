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






























































































































































































































grids.forEach((grid, gridIndex) => {
    grid.update(); 
    if(frames % 100 === 0 && grid.invaders.length > 0) {
        grid.invaders[Math.floor(Math.random() * grid.invaders.length)].shoot(invaderProjectiles)
    }

    for(let i = grid.invaders.length - 1; i >= 0; i--) {
      const invader = grid.invaders[i];
      invader.update({velocity: grid.velocity});

      for(let j = bombs.length - 1; j >=0; j--) {
        const bomb = bombs[j];
        const invaderRadius = 15;

        if(
            Math.hypot(
                invader.position.x - bomb.position.x,
                invader.position.y - bomb.position.y
            ) <
            invaderRadius + bomb.radius &&
            bomb.active
        ) {
            score +=50;
            scoreEL.innerHTML = score;

            grid.invaders.splice(i, 1);
            creatScoreLabel({
                object: invader,
                score: 50,
            })

            createParticles({
                object: invader,
                fades: true
            })
        }
        }

        projectlies.forEach((projectlies, j) => {
            if(
                projectlies.position.y - projectlies.radius <=
                invader.position.y + invader.height &&
                projectlies.position.y + projectlies.radius >=
                invader.position.y &&
                projectlies.position.x + projectlies.radius >=
                invader.position.x &&
                projectlies.position.x - projectlies.radius <=
                invader.position.x + invader.width &&
                projectlie.position.y + projectlie.radius >=
                invader.position.y
            ) {
                setTimeout(()) ==> {
                    const invaderFound = grid.invaders.find((invader2) => invader2 === invader
                )

                const projectlieFound = projectlies.find((projectlie2) => projectlies2 === projectlie
            )

            if(invaderFound && projectlieFound) {
                score += 100;
                scoreEL.innerHTML = score;

                createScoreLabel({
                    object: invader,
                })

                createParticles({
                    object: invader,
                    fades: true
                })

                Audio.explode.play()
                grid.invaders.splice(i, 1);
                projectlies.splice(j, 1);

                if(grid.invaders.length > 0) {
                   const firstInvader = grid.invaders[0];
                   const lastInvader = grid.invaders[grid.invaders.length - 1];

                   grid.width = 
                   lastInvader.position.x -
                   firstInvader.position.x +
                   lastInvader.width;

                   grid.position.x = firstInvader.position.x;
                } else {
                    grids.splice(gridIndex, 1);
                }
                }
            }, 0);
            
          })
        }
      })

      if(
        rectangularCollision({
            rectangle1: invader,
            rectangle2: player
        }) &&
        !game.over
      )


      endGame();
    }
  });
    
}