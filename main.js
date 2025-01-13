// Variables \\\
var swearWords = [crap, darn, heck, damn, hell]
const textOutput = document.getElementById('output')

document.getElementById('inputfile').addEventListener('change', function () {
    let fr = new FileReader();
    fr.onload = function () {
        document.getElementById('output').textContent = fr.result;
    }
    r.readAsText(this.files[0]);
    searchTextForString(textOutput)
});

// Functions \\
function searchTextForString(string){
    for(let i = 0; i < string.length-1; i++){
        replace(/swearWords[i]/gi, "****")
    }
}

// there's no way this works lololol
