//----------------------------- Matter JS Script -----------------------------//

// You have the license to use this code in your projects but not redistribute it to others

$(".mip-view").one("inview", function (event, isInView) {
  if (isInView) {
    // UPDATE THESE VARIABLES
    let tricksAmount = 6;
    let tricksMin = 0.5;
    let tricksMax = 1.2;

    var w = window.innerWidth;
    var h = window.innerHeight;
    const numCircles = tricksAmount;

    let ground;
    let wall1;
    let wall2;

    const content = document.querySelector(".mip-canvas");

    let elements = [];
    let tricksCircles = [];

    window.addEventListener("resize", (e) => {
      w = window.innerWidth;
      h = window.innerHeight;
      engine.render.canvas.width = w;
      engine.render.canvas.height = h;

      Matter.Body.setPosition(wall2, Matter.Vector.create(w + 30, h * 0.5));
      Matter.Body.setPosition(ground, Matter.Vector.create(w * 0.5, h + 30));
    });

    var engine = Matter.Engine.create(content, {
      render: {
        options: {
          width: w,
          height: h,
          wireframes: false,
          background: "transparent"
        }
      }
    });

    window.engine = engine;

    var mouseConstraint = Matter.MouseConstraint.create(engine, {
      constraint: {
        render: {
          visible: false
        },
        stiffness: 0.1
      }
    });

    let tricksArea = document.querySelector(".mip-elements");

    class tricksCircle {
      constructor() {
        var x = Math.random() * w;
        var y = Math.random() * -h;
        var base = w / 30;
        if (base < 5) base = 5;
        if (base > 10) base = 10;
        var multiplier = w / 10;
        if (multiplier < 50) multiplier = 50;
        if (multiplier > 100) multiplier = 100;

        let tricksRandom = (
          Math.random() * (tricksMin - tricksMax) +
          tricksMax
        ).toFixed(1);

        this.radius = base + tricksRandom * multiplier;
        this.body = Matter.Bodies.circle(x, y, this.radius, {
          render: {
            fillStyle: "transparent"
          }
        });

        this.element = document.createElement("div");
        this.element.className = "tricks-circle";
        this.element.style.width = this.radius * 2 + "px";
        this.element.style.height = this.radius * 2 + "px";
        this.cornea = document.createElement("div");
        this.element.appendChild(this.cornea);
        tricksArea.appendChild(this.element);
      }

      update() {
        this.pos = { x: this.body.position.x, y: this.body.position.y };
        this.element.style.transform = `translate(${
          this.pos.x - this.radius - 8
        }px, ${this.pos.y - this.radius - 8}px)`;
      }

      lookAt(pos) {
        let diff = { x: pos.x - this.pos.x, y: pos.y - this.pos.y };
        let polar = [
          Math.sqrt(diff.x * diff.x + diff.y * diff.y),
          Math.atan2(diff.y, diff.x)
        ];
        let dist = polar[0] < this.radius * 0.5 ? polar[0] : this.radius * 0.5;
        this.cornea.style.transform = `translate(${
          Math.cos(polar[1]) * dist
        }px, ${Math.sin(polar[1]) * dist}px)`;

        window.cornea = `translate(${Math.cos(polar[1]) * dist}px, ${
          Math.sin(polar[1]) * dist
        }px)`;
        window.polar = polar;
      }
    }

    let mousepos = { x: 0, y: 0 };

    window.addEventListener("pointermove", (e) => {
      mousepos = { x: e.clientX, y: e.clientY };
    });

    for (var i = 0; i < numCircles; i++) {
      tricksCircles.push(new tricksCircle());
    }
    ground = Matter.Bodies.rectangle(w / 2, h + 30, 50000, 60, {
      isStatic: true
    });
    wall1 = Matter.Bodies.rectangle(-30, h / 2, 60, h * 2, { isStatic: true });
    wall2 = Matter.Bodies.rectangle(w + 30, h / 2, 60, h * 2, {
      isStatic: true
    });
    window.wall2 = wall2;
    elements.push(ground);
    elements.push(wall1);
    elements.push(wall2);

    Matter.World.add(
      engine.world,
      tricksCircles.map((trickscircle) => trickscircle.body).concat(elements)
    );
    Matter.World.add(engine.world, mouseConstraint);

    Matter.Engine.run(engine);

    Matter.Events.on(engine, "afterUpdate", () => {
      tricksCircles.forEach((trickscirc) => {
        trickscirc.update();
        trickscirc.lookAt(mousepos);
      });
    });

    // End In View
  } else {
  }
});

// Snap Into View
$(".mip-view").on("inview", function (event, isInView) {
  if (isInView) {
    $(".mip-m-link").click();
  } else {
  }
});
