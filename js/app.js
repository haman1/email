//variables
const sendBtn = document.getElementById('sendBtn');
      email = document.getElementById('email');
      subject = document.getElementById('subject');
      message = document.getElementById('message');
        


//functions
function appInit() {
    //diasble on load
    sendBtn.disabled=true;

}

// validate fields

function validateField() {
        console.log('From validateField');
}

//event listeners

eventListeners();

function eventListeners() {
    document.addEventListener('DOMContentLoaded', appInit);

    //validate forms
    email.addEventListener('blur', validateField);
    subject.addEventListener('blur', validateField);
    message.addEventListener('blur', validateField);

}