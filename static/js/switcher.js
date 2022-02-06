const options = [ "about", "visualArt", "manifesto" ]

const selectOption = (option) => {
    const button = document.getElementById(option + "--option");
    button.style.backgroundColor = "rgb(122, 0, 255)";
    button.style.color = "rgb(122, 220, 255)";

    const content = document.getElementById(option + "--info");
    content.style.display = "flex";
}

const unselectOption = (option) => {
    const button = document.getElementById(option + "--option");
    button.style.backgroundColor = "rgb(122, 220, 255)";
    button.style.color = "rgb(122, 0, 255)";

    const content = document.getElementById(option + "--info");
    content.style.display = "none";
}

const switchOption = (el, ev) => {

    options.map(option => unselectOption(option));

    const idx = el.target.id.indexOf('-');
    const clickedOption = el.target.id.slice(0, idx);

    selectOption(clickedOption);
}

for (const option of options) {
    unselectOption(option);
    document.getElementById(option + "--option")
            .addEventListener("mousedown", switchOption)
}

selectOption("about");