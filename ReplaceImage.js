function addLabel(){
    //add info into a p tag
    return document.getElementById("changeLabel").innerHTML = "change image";
}
function removeLabel(){
    return document.getElementById("changeLabel").innerHTML = "";
}
function replaceImg(){
    //accounts
    let accounts = JSON.parse(localStorage.getItem("accounts"));
    //get a link to an image from user to replace the user image
    let link = prompt("Provide a link to the image","https//image.png");
    //check if nothing is in link
    if (link == "https//image.png"){
        return alert("no img link provided");
    }else if (link === null){
        return alert("no img link provided");
    }
    // check if link has the https tag and if not add one
    if (link.includes("https://") == false){
        //add https tag in front of the link 
        let https = "https://";
        link = https.concat(link);
        //find the main account and change avatar to current img link
        for (let i = 0; i < accounts.length; i++){
            //go through global list to find the account that is used by user
            if (accounts[i][0].includes(localStorage.getItem("activeAccount"))){
                //at the active account add the link for the avatar img
                accounts[i][2] = link;
                localStorage.setItem("accounts",JSON.stringify(accounts));
                break;
            }
        }
        return location.reload();
    }
    //find active account and change current avatar link to current link
    for (let i = 0; i < accounts.length; i++){
        //go through global list to find the account that is used by user
        if (accounts[i][0].includes(localStorage.getItem("activeAccount"))){
            //at the active account add the link for the avatar img
            accounts[i][2] = link;
            localStorage.setItem("accounts",JSON.stringify(accounts));
            break;
        }
    }
    return location.reload();
}