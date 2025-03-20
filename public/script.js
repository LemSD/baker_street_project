
function generateClue() {
    const clue_number = document.querySelector("#clue_input").value;

    let clues_arr = [];

    fetch("./clues.txt")
        .then(response => response.text())
        .then(data => {
            clues_arr = data.split("\n");

            const clue = clues_arr[parseInt(clue_number)-1].split("|");
            document.querySelector("#clue").innerHTML = clue[1];
        })
        .catch(error => console.error("Error reading file:", error));
}

function toggleClues() {
    let clues_container = document.querySelector("#location_clues_container");
    let visible_btn = document.querySelector("#visible_btn");
    let hidden_btn = document.querySelector("#hidden_btn");

    if (!clues_container.classList.contains("hidden")) {
        clues_container.style.display = "none";
        clues_container.classList.add("hidden");
        visible_btn.style.display = "none";
        hidden_btn.style.display = "block";
    } else {
        clues_container.style.display = "flex";
        clues_container.classList.remove("hidden")
        visible_btn.style.display = "block";
        hidden_btn.style.display = "none";
    }
    
}

document.querySelector("#generate_clue_btn").addEventListener("click", (e) => {
    generateClue();
});

document.querySelector("#visible_btn").addEventListener("click", (e) => {
    toggleClues();
});
document.querySelector("#hidden_btn").addEventListener("click", (e) => {
    toggleClues();
});
