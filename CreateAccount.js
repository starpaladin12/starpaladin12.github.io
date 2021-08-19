//create a list to hold all the accounts made by users
let accounts = [];

//create function for users to create accounts
function signUp(){
    //create username and password 
    let username;
    let password;
    //get value from username and password input and store it in username and password
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;
    //get rid of values a sucessin the text field
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
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
    accounts.push([username,password]);
    //print out account sucessfully created
    return alert("Account sucessfully created");
}
//set up global var to see if function already ran
signCheck = true;
//function to create forum for user to input account information 
function signUpForum(){
    //check if funciton is called twice 
    if (signCheck == true){
        //if not then change check to false 
        signCheck = false
    }else{
        //set check back to true
        signCheck = true
        //if function called twice then remove div
        return document.getElementById("signUp").remove();
    }
    //create signInBox = to a div element
    let signUpBox = document.createElement("div"); 
    // set id of div element to signUp
    signUpBox.id = "signUp";
    //create forum  = forum html tag
    let forum = document.createElement("forum");
    //create usernameLabel = label element with for=username
    let usernameLable = document.createElement("label");
    usernameLable.setAttribute("for","username");
    usernameLable.innerHTML = "username:"
    //create usernameInput = input element 
    let usernameInput = document.createElement("input");
    usernameInput.setAttribute("type","text");
    usernameInput.setAttribute("name","username");
    //set id for usernameInput to username
    usernameInput.id = "username";
    //create passwordlabel = label element with for = password
    let passwordLabel = document.createElement("label");
    passwordLabel.setAttribute("for","password");
    passwordLabel.innerHTML = "password:"
    //create passwordInput = input element
    let passwordInput = document.createElement("input");
    passwordInput.setAttribute("type","text");
    passwordInput.setAttribute("name","password");
    //set id for passwordInput to password
    passwordInput.id = "password";
    //creat submit = input element type = button
    let submit = document.createElement("input");
    submit.setAttribute("type","button");
    submit.setAttribute("value","Create Account");
    submit.addEventListener("click", signUp);
    //put all the input and label tags into a list in order to loop through later
    let forumTags = [usernameLable,usernameInput,passwordLabel,passwordInput,submit];
    //append the tags from the list into forum tag using a for loop
    for( let i = 0; i < forumTags.length; i++){
        forum.append(document.createElement("br"));
        forum.appendChild(forumTags[i]);
        
    }
    //append forum tag into div tag 
    signUpBox.appendChild(forum);
    //show div tag on body
    return document.body.appendChild(signUpBox);
} 