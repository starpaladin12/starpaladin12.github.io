//create a list to hold all the accounts made by users
let accounts = [];
//create function for users to create accounts
function signIn(){
    //create username and password 
    let username;
    let password;
    //get value from username and password input and store it in username and password
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;
    //check if username and password === undefined
    if (username === "" || password === ""){
        //if yes then show alert nothing has been entered
        return alert("nothing has been entered");
    }  
    //if no then check if username value is inside account list
   for (let i = 0; i < accounts.length; i++){
       //check if the first value in the nested array of accounts is equal to username value 
       if (accounts[i][0] == username){
           //if true then that account is already made so return message
           return alert("An account with the same username is already created \n put a different username.");
       }
   }
    //if username is not already in accounts list then add it with password as a nested array
    return accounts.push([username,password]);
}