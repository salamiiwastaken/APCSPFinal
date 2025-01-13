// Variables \\\
var textInput = document.getElementById('textinput');

console.log("Hi");
//test to see if this works
textInput.addEventListener("change", function(){
    let textContent = textInput.value;
    console.log("The user has typed ''"+textContent+"''");
});

/*
okay i know we're going to forget this by tomorrow, so i'm gonna write it down. 
if the getText thing works (go to console and check tomorrow), then you're going
to use that text as a parameter to go to like "https://homestuck.com/story/<textInput>"
to grab the text. and if that works (which, you wont know until you set up a few other things)
then you're going to add the buttons for the 20 homestuck characters excluding the cherubs, 
and search for both their names and troll tags, and return either a "Yes, they do appear on this page!"
or a "No, they do not appear on this page.". then, after that's all working, just format the website 
to look homestuck-esque, and tell Mr. Massey that we're done.
*/


/*
// Functions \\
function searchTextForString(string){
    for(let i = 0; i < string.length-1; i++){
        
    }
}
*/
