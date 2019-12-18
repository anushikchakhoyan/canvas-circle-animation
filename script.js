(function () {
    let canvas = document.getElementById("circle-canvas");
    let ctx = canvas.getContext("2d");
    let circleArray = [];

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Circle Object creator
    class Circle {
        constructor(x, y, dx, dy, radius) {
            this.x = x;
            this.y = y;
            this.dx = dx;
            this.dy = dy;
            this.radius = radius;
        }

        draw () {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
            ctx.fill();
        };

        update () {
            if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
                this.dx = -this.dx;
            }

            if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
                this.dy = -this.dy;
            }

            this.x += this.dx;
            this.y += this.dy;
            this.draw();
        };
    }

    // Generates Circles
    for (let i = 0; i < 10; i++) {
        let radius = 70;
        let x = Math.random() * innerWidth;
        let y = Math.random() * innerHeight;
        let dx = Math.random() - 2;
        let dy = Math.random() - 2;

        circleArray.push(new Circle(x, y, dx, dy, radius));
    }

    function animate() {
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, innerWidth, innerHeight);
        for (let j = 0; j < circleArray.length; j++) {
            circleArray[j].update();
        }
    }

    animate();
})();