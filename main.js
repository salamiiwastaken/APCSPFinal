// Variables \\\
var swearWords = ["crap", "Crap", "darn", "Darn", "heck", "Heck", "damn", "Damn", "hell", "Hell"]
var textOutput

// Test
console.log("Hi. 2");

//Displays the text from the file
document.getElementById('inputfile')
            .addEventListener('change', function () {

                let fr = new FileReader();
                fr.onload = function () {
                    document.getElementById('output')
                        .textContent = fr.result;
                }
                textOutput = document.getElementById('output').textContent;
                replaceSwears(fr.readAsText(this.files[0]));
                console.log(textOutput);
            })

// Functions \\
function replaceSwears(originalText){
    for(let i = 0; i < swearWords.length; i++){
        let newTextOutput
        newTextOutput = textOutput.replace(swearWords[i], "****")
        textOutput=newTextOutput;
        console.log("Preformed iteration "+i+".");
    }
}