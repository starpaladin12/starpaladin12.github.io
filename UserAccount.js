let currentCheck = true;
function showAccount(){
    if (currentCheck){
        currentCheck = false;
    }else{
        currentCheck = true;
        document.getElementById("username").remove(); 
        document.getElementById("password").remove(); 
        document.getElementById("change").remove(); 
        return;
    }
    //set var to hold an array of info for the current account
    let currentAccount;
    //set local array to value from key accounts
    let accounts = JSON.parse(localStorage.getItem("accounts"));
    //check which nested array to take from the accounts array with activeAccount
    for (let i = 0; i < accounts.length; i++){
        if (accounts[i][0].includes(localStorage.getItem("activeAccount"))){
            //save the nested array with account info into currentAccount
            currentAccount = accounts[i];
            //the current account is already found so stop loop
            break;
        }
    }
    //create div element to hold the p tags that will have then username and password
    let container = document.getElementById("accountInfo")
    //create a p tag with id username to hold the username
    let username = document.createElement("p");
    username.id = "username";
    username.innerHTML = "Username: "+currentAccount[0];
    //create a p tag with id password to the password of the current account
    let password = document.createElement("p");
    password.id = "password";
    password.innerHTML = "Password: "+currentAccount[1];
    //create a button element to change info of current account
    let button = document.createElement("button");
    button.id = "change";
    button.innerHTML = "Change Info"
    button.addEventListener("click",change);
    //put all the created elements into the div element and then into body
    container.appendChild(username);
    container.append(password);
    container.appendChild(button);
    return;
}
function change(){
    let usernameChange = prompt("Change your username:");
    let passwordChange = prompt("Change your password:");
    let accounts = JSON.parse(localStorage.getItem("accounts"));
    if (usernameChange == "" && passwordChange==""){
        return alert("Username invalide\n Pick a different username");
    }else if (usernameChange === null && passwordChange === null){
        return alert("You entered nothing");
    }
    //add the changes into accounts in local storage
    //find the current account and change their username and password
    for (let i = 0; i < accounts.length; i++){
        //go through global list to find the account that is used by user
        if (accounts[i][0].includes(localStorage.getItem("activeAccount"))){
            //check if usernameChange has a value or is not null
            if (usernameChange != "" && usernameChange != null){
                accounts[i][0] = usernameChange;
            }
            //check if passwordChange has a value or is not null
            if (passwordChange != "" && passwordChange != null){
                accounts[i][1] = passwordChange;
            }
            //after setting the new values into the current account nested array put it as the new value in loval storage
            localStorage.setItem("accounts",JSON.stringify(accounts));
            //change active account to the changed username
            localStorage.setItem("activeAccount",accounts[i][0]);
            break;
        }
    }
    return location.reload();
}

function signOut(){
    //replace acvitve account from local storage to an epmty string
    localStorage.setItem("activeAccount","");
    //delete tab
    return window.top.close();
}
//funcition to display reviews created by the account
function showReviews(){
    //set active account as a global var from local storage
    let activeAccount = localStorage.getItem("activeAccount");
    //set local var to public value reviews
    let reviews = JSON.parse(localStorage.getItem("reviews"));
    //go through reviews list with loop
    for (let i = 0; i < reviews.length; i++){
        //check if current account is the same account used to make the reviews 
        if (reviews[i][0] == activeAccount){
            //if so then combine all the review elments: positon, rating, and content to show the review the user made
            //create a div to put a p tag and another a div 
            let review = document.createElement("div");
            review.className = "reviews";
            review.id = "review"+i;
            //create p tag to put heading info of the review in
            let heading = document.createElement("p");
            heading.className = "headings"
            heading.innerHTML = "Reviewed: "+reviews[i][1]+"<br>"+"Rating given: "+reviews[i][3];
            //put the p tag inside reviews div
            review.appendChild(heading);
            //create a div to hold a p tag that will hold the user review
            let container = document.createElement("div");
            container.className = "contentContainer";
            //create p tag
            let content = document.createElement("p");
            content.className = "content";
            content.innerHTML = reviews[i][2];
            //take the content and seperate it with different sections based on num of charecters
            //ad a br tag inbetween each section to add enter to each line of text 
            container.appendChild(content);
            review.appendChild(container);
            document.getElementById("accountReviews").appendChild(review);
        }
    } 
    //return with review append into div element and then appended into body
    return;
}
showReviews();