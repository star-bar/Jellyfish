/*
trying to get it to mold to the html and csss for JF for GB-sterling.
*/

//variables
const speciesListURL = "https://www.montereybayaquarium.org/animals-the-ocean/animals-a-to-z/jellies#types";
const speciesList = document.getElementById("species.list");

//when the page loads
window.addEventListener("load",updateSpeciesList);

//retrieve the list of jelly from api
async function getSpeciesList(){
   return fetch(speciesListURL).then(response => response.json());
}
//add species drop down list 
function updateSpeciesList(){
    getSpeciesList().then(function(data){

         //get species name
         for(element in data.message){
         //append to the select list
         let option = createOption(element);
         speciesList.appendChild(option);
         }
    }
    

    );
}

function createOption(text){
    let option = document.createElement("option");
    option.textContent = text;
    return option;
}
