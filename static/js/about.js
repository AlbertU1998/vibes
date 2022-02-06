const options = [ "noun", "adjective", "verb" ]

const selectOption = (option) => {
    console.log(option);
    const button = document.getElementById(option);
    button.style.backgroundColor = "rgb(122, 0, 255)";
    button.style.border = "0.5em solid rgb(122, 220, 255)";

    const content = document.getElementById(option + "-content");
    content.style.display = "block";
}

const unselectOption = (option) => {
    const button = document.getElementById(option);
    button.style.backgroundColor = "rgb(122, 220, 255)";
    button.style.border = "0.5em solid rgb(122, 220, 255)";

    const content = document.getElementById(option + "-content");
    content.style.display = "none";
}

const switchOption = (el, ev) => {

    options.map(option => unselectOption(option));

    selectOption(el.target.id);
}

for (const option of options) {
    unselectOption(option);
    document.getElementById(option)
            .addEventListener("mousedown", switchOption)
}

selectOption("noun");