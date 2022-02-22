function getVibeHeight() {
    const bodyStyles = window.getComputedStyle(document.body);
    return parseInt(bodyStyles.getPropertyValue('--vibe-height'));
}

function extractColors(stringColor) {
    const firstBrace  = stringColor.indexOf('(');
    const firstComma  = stringColor.indexOf(' ', 1);
    const secondComma = stringColor.indexOf(' ', firstComma + 1);
    const thirdComma  = stringColor.indexOf(')', secondComma + 1);

    const r = parseInt(stringColor.slice(firstBrace + 1, firstComma));
    const g = parseInt(stringColor.slice(firstComma + 1, secondComma));
    const b = parseInt(stringColor.slice(secondComma + 1, thirdComma));

    return [r, g, b];
}


const bodyStyles = window.getComputedStyle(document.body);
const primary   = extractColors(bodyStyles.getPropertyValue('--bg-primary'));
const secondary = extractColors(bodyStyles.getPropertyValue('--bg-secondary'));

var barNumber = 0;
var barWidth = 5;

function signal(idx) {
    const amp = 0 * Math.sin(0.0025 * millis());
    const detail = [ { f: 7, p: 0 },  { f: 14, p: 0 }, ];
    const ting = detail.reduce((acc, { f, p }) => acc + Math.sin(p + f * Math.PI * idx / barNumber), 0);
    return amp * ting;
}

function setup() {
    barNumber = windowWidth / barWidth;
    const vibeHeight = getVibeHeight();
    var cnv = createCanvas(windowWidth, 90).parent('vibes');
    
    background(primary); fill(0);

    const layers = 4;
    for(let layer = layers; layer > 0; layer--) {

        for(let idx = 0; idx < barNumber; idx ++) {
            const s = signal(idx)
            const [x, y] = [barWidth * idx, 0];
            const [w, h] = [1 * barWidth, vibeHeight + 5 * s]

            const [r, g, b] = secondary.map((tc, i) => tc  + (layer - 1) * (primary[i] - tc) / layers)
            fill(r, g, b); stroke(primary);
            rect(x, y, w, layer * h)
        }
    }
}

function draw() {
}

function windowResized() {
    barNumber = windowWidth / barWidth;
    const vibeHeight = getVibeHeight();
    resizeCanvas(windowWidth, 90);
    
    background(primary); fill(0);

    const layers = 4;
    for(let layer = layers; layer > 0; layer--) {

        for(let idx = 0; idx < barNumber; idx ++) {
            const s = signal(idx)
            const [x, y] = [barWidth * idx, 0];
            const [w, h] = [1 * barWidth, vibeHeight + 5 * s]

            const [r, g, b] = secondary.map((tc, i) => tc  + (layer - 1) * (primary[i] - tc) / layers)
            fill(r, g, b); stroke(primary);
            rect(x, y, w, layer * h)
        }
    }
}

function changed() {
    alert("woop")
}
