const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
document.body.appendChild(canvas);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const squareSize = 50; // Size of each square
const speed = 1; // Scrolling speed

let offsetX = 0;

function drawCheckerboard() {
    const cols = Math.ceil(canvas.width / squareSize) + 1;
    const rows = Math.ceil(canvas.height / squareSize);
  
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const x = (col * squareSize) - offsetX;
        const y = row * squareSize;
  
        // Calculate color pattern as if it's a fixed, repeating grid
        const isDarkSquare = ((Math.floor(x / squareSize) + Math.floor(y / squareSize)) % 2 === 0);
  
        // Set the square color based on the calculated pattern
        ctx.fillStyle = isDarkSquare ? '#313131' : '#ffffff';
        ctx.fillRect(x, y, squareSize, squareSize);
      }
    }
}

function update() {
  offsetX += speed;
  if (offsetX >= squareSize) {
    offsetX -= squareSize; // This ensures offsetX is always between 0 and squareSize
  }

  drawCheckerboard();
  requestAnimationFrame(update);
}

update();


window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  drawCheckerboard();
});
