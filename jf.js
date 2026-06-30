/*
had to redo because i could not find an API for it, ended p making my own list, which is not ideal. 
had to add in the window clicker because the other way i was learning did not end up working, i will be trying to learn what messed up, but it didnt seem like anything i could find was.*/
const jellyfishSpecies = [
    "Bell Jelly",
    "Black Sea Nettle jelly",
    "Blubber Jelly",
    "Bloody-belly Comb Jelly",
    "Crystal Jelly",
    "Comb Jelly",
    "Midwater Jelly",
    "Purple-striped Jelly",
    "Mediterranean Jelly",
    "Moon Jelly"
];

const speciesList = document.getElementById("species-list");
const imageContainer = document.getElementById("image-container");
const jellyfishImg = document.getElementById("jellyfish");
const closeBtn = document.getElementById("close-btn");


window.addEventListener("load", populateSpeciesList);

if (speciesList) {
    speciesList.addEventListener("change", displayJellyfishImage);
}

if (closeBtn) {
    closeBtn.addEventListener("click", () => window.hideJellyfishImage());
}

function populateSpeciesList() {
    if (!speciesList) return;
    speciesList.innerHTML = '<option value="">-- Select a Jellyfish --</option>';
     
    jellyfishSpecies.forEach((name, index) => {
        let option = document.createElement("option");
        option.textContent = name;
        option.value = index + 1;
        speciesList.appendChild(option);
    });
}

function displayJellyfishImage() {
    const selectedValue = speciesList.value;
    const jellyfishTitle = document.getElementById("jellyfish-title");

    if (selectedValue && jellyfishImg && imageContainer) {
       
        if (jellyfishTitle && speciesList.selectedIndex >= 0) {
            jellyfishTitle.textContent = speciesList.options[speciesList.selectedIndex].text;   
        }
    
        jellyfishImg.src = "jelly " + selectedValue + ".jpg";
        imageContainer.style.display = "block";
        imageContainer.style.opacity = "1";
        imageContainer.style.visibility = "visible";
    } else {
        window.hideJellyfishImage();
    }
}

window.hideJellyfishImage = function () {
    const currentList = document.getElementById("species-list");
    const currentContainer = document.getElementById("image-container");
    if (currentList) {
        currentList.value = "";
    }
    if (currentContainer) {
        currentContainer.style.display ="none";
    }
};