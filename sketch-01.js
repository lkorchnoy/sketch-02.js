const canvasSketch = require("canvas-sketch");

const settings = {
  dimensions: [1080, 1080],
  //dimensions: [600, 600]
  // dimensions: "A4",
  // pixelsPerInch: 300,
  // orientation: "landscape",
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);
    context.lineWidth = width * 0.01;

    // const w = 60; //keep on changint the width
    // const h = 60;
    // const gap = 20;
    const w = width * 0.1;
    const h = height * 0.1;
    const gap = width * 0.03;
    const ix = width * 0.17;
    const iy = height * 0.17;

    const off = width * 0.02;

    let x, y;

    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        // let x = 100 + (w + gap) * i;
        // let y = 100 + (h + gap) * j; //if * i result will be diagonal

        x = ix + (w + gap) * i;
        y = iy + (h + gap) * j;
        context.beginPath();
        context.rect(x, y, w, h);
        context.stroke();

        if (Math.random() > 0.5) {
          context.beginPath();
          //context.rect(x + 8, y + 8, w - 16, h - 16);
          context.rect(x + off / 2, y + off / 2, w - off, h - off);
          context.stroke();
        }
      }
    }
  };
};

canvasSketch(sketch, settings);
