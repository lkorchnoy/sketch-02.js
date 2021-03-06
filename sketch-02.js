const canvasSketch = require("canvas-sketch");
const math = require("canvas-sketch-util/math");
const random = require("canvas-sketch-util/random");

const settings = {
  dimensions: [1080, 1080],
};

const degToRad = (degrees) => {
  return (degrees / 180) * Math.PI;
};

const randomRange = (min, max) => {
  return Math.random() * (max - min) + min;
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = "grey";
    context.fillRect(0, 0, width, height);

    context.fillStyle = "grey";

    //const x = 0;
    //const y = 0;
    const cx = width * 0.5; //to move the rect change x and y
    const cy = width * 0.5; //remove c from cx and cy if not using radius line 26
    const w = width * 0.01;
    const h = height * 0.1;
    let x, y;

    const num = 40;
    const radius = width * 0.3;

    for (let i = 0; i < num; i++) {
      const slice = math.degToRad(360 / num);
      const angle = slice * i;

      x = cx + radius * Math.sin(angle);
      y = cy + radius * Math.cos(angle);

      context.save();
      context.translate(x, y); //if add this line, change to line 25
      //context.rotate(degToRad(45));
      context.rotate(-angle);
      context.scale(random.range(0.1, 2), random.range(0.2, 0.5));

      context.scale(random.range(1, 3), 1);
      context.beginPath();
      //context.rect(x, y, w, h);
      //context.rect(0, 0, w, h); //remove this and add line 28 if use rotate
      context.rect(-w * 0.5, random.range(0, -h * 0.5), w, h); //or / 2 same thing
      context.fill();
      context.restore();

      // context.fillStyle = "red";

      // context.translate(100, 400);

      // context.beginPath();
      // context.arc(0, 0, 50, 0, Math.PI * 2);
      // context.fill();
      context.save();
      context.translate(cx, cy);
      context.rotate(-angle);

      context.lineWidth = random.range(5, 20);

      context.beginPath();
      context.arc(
        0,
        0,
        radius * random.range(0.7, 1.3),
        slice * random.range(1, -8),
        slice * random.range(1, 5)
      );
      context.stroke();

      context.restore();
    }
  };
};

canvasSketch(sketch, settings);
