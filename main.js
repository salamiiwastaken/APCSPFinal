// Variables \\\
var swearWords = [crap, Crap, darn, Darn, heck, Heck, damn, Damn, hell, Hell]
const textOutput = document.getElementById('output')

document.getElementById('inputfile').addEventListener('change', function () {
    let fr = new FileReader();
    fr.onload = function () {
        document.getElementById('output').textContent = fr.result;
    }
    r.readAsText(this.files[0]);
    replaceSwears(textOutput)
});

// Functions \\
function replaceSwears(originalText){
    for(let i = 0; i < swearWords.length-1; i++){
        let newTextOutput
        newTextOutput = textOutput.replace(swearWords[i], "****")
        textOutput.textContent=(newTextOutput);
    }
}
