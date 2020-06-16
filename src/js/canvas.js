'use strict';

(function () {
    let canvas = document.getElementById('canvas-overlay');
    let ctx = canvas.getContext('2d');
    let circleArray = [];

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    // Circle Object creator
    class Circle {
        constructor(x, y, dx, dy, radius) {
            this.x = x;
            this.y = y;
            this.dx = dx;
            this.dy = dy;
            this.radius = radius;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
            ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
            ctx.fill();
            ctx.closePath();
        };

        update() {
            if (this.x + this.radius > width || this.x - this.radius < 0) {
                this.dx = -this.dx;
            }

            if (this.y + this.radius > height || this.y - this.radius < 0) {
                this.dy = -this.dy;
            }

            this.x += this.dx;
            this.y += this.dy;
            this.draw();
        };
    }

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    // Generates Circles
    for (let i = 0; i < 20; i++) {
        let radius = getRandomInt(40, 80);
        let x = Math.floor(Math.random() * width);
        let y = Math.floor(Math.random() * height);
        let dx = Math.random() - 2;
        let dy = Math.random() - 2;

        circleArray.push(new Circle(x, y, dx, dy, radius));
    }

    function animate() {
        window.requestAnimationFrame(animate);
        ctx.clearRect(0, 0, width, height);

        for (let j = 0; j < circleArray.length; j++) {
            circleArray[j].update();
        }
    }

    animate();
})();

// TODO: make responsive
// https://jsfiddle.net/lannymcnie/4yy08pax/