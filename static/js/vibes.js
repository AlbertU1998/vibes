var containerWidth = 0;
var barWidth = 0;
var barNumber = 0;

function signal(idx) {
    const amp = Math.sin(0.0025 * millis());
    const detail = [ { f: 7, p: 0 },  { f: 14, p: 0 }, ];
    const ting = detail.reduce((acc, { f, p }) => acc + Math.sin(p + f * Math.PI * idx / barNumber), 0);
    return amp * ting;
}

function setup() {
    containerWidth = document.getElementById('vibes').offsetWidth;
    barNumber = containerWidth / 8;
    barWidth = containerWidth / barNumber;
    var cnv = createCanvas(containerWidth, 120).parent('vibes');
}

function draw() {
    background(122, 220, 255); fill(0);

    const layers = 4;
    for(let layer = layers; layer > 0; layer--) {

        for(let idx = 0; idx < barNumber; idx ++) {
            const s = signal(idx)
            const [x, y] = [barWidth * idx, 0];
            const [w, h] = [1 * barWidth, 20 + 5 * s]

            const color = 0 + (layer - 1) * 255 / layers
            fill(122, color, 255, 200); stroke(122, 220, 255, 200);
            rect(x, y, w, layer * h)
        }
    }
}

function windowResized() {
    containerWidth = document.getElementById('vibes').offsetWidth;
    barWidth = containerWidth / barNumber;
    barNumber = containerWidth / 8;
    resizeCanvas(containerWidth, 120);
}
