let randomizeSizes = false; // Variabile per controllare se randomizzare le dimensioni

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function draw() {
  background(235, 236, 228);
  noStroke();

  let larghezza = 25; // Larghezza base per il calcolo
  let vGutter = 8; // Gutter tra i quadrati
  let minSquareSize = 8; // Dimensione minima dei quadrati

  let columns = (windowWidth / (larghezza + vGutter)); // Numero di colonne
  let rows = (windowHeight / (larghezza + vGutter / 90)); // Numero di righe

  for (let r = 0; r < rows; r++) {
    for (let i = 0; i < columns; i++) {
      // Randomize sizes for each square
      let gridSize = max(larghezza * (1 - r / rows), minSquareSize); // Dimensione base
      if (randomizeSizes) {
        gridSize *= random(0.5, 1); // Random factor for individual square
      }

      // Calcola la posizione x e y con offset
      let xOffset = (r % 2) * (larghezza + vGutter) / 2; // Offset orizzontale per righe pari
      let yOffset = r * (larghezza + vGutter / 90); // Offset verticale per ogni riga
      
      let xPos = i * (larghezza + vGutter) + xOffset; // Posizione x con offset
      let yPos = yOffset; // Posizione y

      push();
      translate(xPos, yPos);
      rotate(PI / 4);
      fill(0);
      rectMode(CENTER);
      rect(0, 0, gridSize, gridSize); // Disegna il quadrato
      pop();
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  redraw();
}

// Aggiungi un event listener per la pressione di un tasto
function keyPressed() {
  if (key === 'r' || key === 'R') { // Se premi 'r', randomizza le dimensioni dei cubi singolarmente
    randomizeSizes = true;
    redraw();
  }
}

