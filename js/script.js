let button = document.getElementById('throw');

let human_1 = document.createElement('img', { src: '../img/h-1.png', class: 'throwable-human' });
let human_2 = document.createElement('img', { src: '../img/h-2.png', class: 'throwable-human' });
let human_3 = document.createElement('img', { src: '../img/h-3.png', class: 'throwable-human' });

button.onclick = function() {
    let value = Math.floor(Math.random() * 3);
    let currentHuman = document.createElement('img');
    currentHuman.classList.add('throwable-human');

    let windowHeight = window.innerHeight;
    let windowWidth = window.innerWidth;

    let xspeed = 0,
        yspeed = 0;
    let xpos = 0,
        ypos = 0;
    let rspeed = 0;
    let rpos = 0;

    switch (value) {
        case 0:
            currentHuman.setAttribute('src', 'img/h-1.png');
            xspeed = 5;
            yspeed = -2;
            xpos = -200;
            ypos = windowWidth * 0.5;
            rspeed = -5;
            break;
        case 1:
            currentHuman.setAttribute('src', 'img/h-2.png');
            xspeed = 7;
            yspeed = -5;
            xpos = -200;
            ypos = windowWidth * 0.75;
            break;
        case 2:
            currentHuman.setAttribute('src', 'img/h-3.png');
            xspeed = -7;
            yspeed = 2;
            xpos = windowHeight;
            ypos = 200;
            break;
    }

    currentHuman.style.display = 'block';
    currentHuman.style.top = xpos;
    currentHuman.style.left = ypos;

    document.body.appendChild(currentHuman);

    let id = setInterval(frame, 10);

    function frame() {
        if (xpos < windowHeight + 300 && xpos > -300 && ypos > -300 && ypos < windowWidth + 300) {
            ypos += yspeed;
            xpos += xspeed;
            rpos += rspeed;
            currentHuman.style.top = xpos + 'px';
            currentHuman.style.left = ypos + 'px';
            currentHuman.style.transform = 'rotate(' + rpos + 'deg)';
        } else {
            clearInterval(id);
        }
    }
}