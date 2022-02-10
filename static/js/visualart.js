const options = [ "fourier", "lightening", "inverse" ]
var currentIdx = 0;

const selectOption = (option) => {
    document.getElementById(option).classList.add("visualart__switcher-selected");
    document.getElementById(option + "--content").style.display = "block";
}

const unselectOption = (option) => {
    document.getElementById(option).classList.remove("visualart__switcher-selected");
    document.getElementById(option + "--content").style.display = "none";
}

const switchOption = (el, ev) => {
    options.map(option => unselectOption(option));
    selectOption(el.target.id);
    currentIdx = options.indexOf(el.target.id);
}

for (const option of options) {
    unselectOption(option);
    document.getElementById(option)
            .addEventListener("mousedown", switchOption)
}

selectOption("fourier");

//---------------------------------------------------------------------------

const goRight = (_, __) => {
    unselectOption(options[currentIdx]);
    currentIdx = (currentIdx === options.length - 1) ? 0 : (currentIdx + 1);
    selectOption(options[currentIdx]);
}

const goLeft = (_, __) => {
    unselectOption(options[currentIdx]);
    currentIdx = (currentIdx === 0) ? (options.length - 1) : (currentIdx - 1);
    selectOption(options[currentIdx]);
}

document.getElementById("visualart-goright")
        .addEventListener("mousedown", goRight)

document.getElementById("visualart-goleft")
        .addEventListener("mousedown", goLeft)
