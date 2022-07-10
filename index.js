
document.getElementById("loginButton").onclick = logIn();
function logIn(){
    let userName = "Ralph"
    let userInbox = 2;

    function alertUser(){
        alert(`Welcome ${userName}. 
    You have ${userInbox} messages`)
        userInbox = 0;
    }
return alertUser;
}


//Nested Function
// let userName;
// let UserInbox = 0;

// userName = "Rooney"

// login()

// function login(){
//     displayUserName();
//     displayInbox();

//     function displayUserName(){
//         console.log(`Welcome ${userName}, you are fantastic`)
//     }

//     function displayInbox(){
//         console.log (`You have ${UserInbox} unread messages`)
//     }
// }





