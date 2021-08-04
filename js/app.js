//variables
const sendBtn = document.getElementById('sendBtn');


//functions
function appInit() {
    //diasble on load
    sendBtn.disabled=true;

}



//event listeners

eventListeners();

function eventListeners() {
    document.addEventListener('DOMContentLoaded', appInit)
}