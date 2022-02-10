const options = [ "about", "visualart", "manifesto" ]

const selectOption = (option) => {
    const button = document.getElementById(option + "--option");
    button.classList.add("option-selected");

    const content = document.getElementById(option + "--info");
    content.style.display = "block";
}

const unselectOption = (option) => {
    const button = document.getElementById(option + "--option");
    button.classList.remove("option-selected");

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