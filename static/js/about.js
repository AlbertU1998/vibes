//script to control the function of the about section on homepage

const options = [ "noun", "adjective", "verb" ]

const selectOption = (option) => {
    document.getElementById(option).classList.add("about__switcher-selected");
    document.getElementById(option + "-content").style.display = "block";
}

const unselectOption = (option) => {
    document.getElementById(option).classList.remove("about__switcher-selected");
    document.getElementById(option + "-content").style.display = "none";
}

const switchOption = (el, _) => {
    options.map(option => unselectOption(option));
    selectOption(el.target.id);
}

for (const option of options) {
    unselectOption(option);
    document.getElementById(option)
            .addEventListener("mousedown", switchOption)
}

selectOption("noun");