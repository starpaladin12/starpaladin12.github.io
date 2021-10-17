function proxy(){
    //set fake username and password in order to not need to make an account everytime
    localStorage.setItem("activeAccount","Ramtin")
    //put a nested array into accounts of the fake account to acess later
    let account = JSON.parse(localStorage.getItem("accounts"));
    //set the username and password in that order as a 2 demisonal array
    account.push(["Ramtin","starwars",localStorage.getItem("avatar")]);
    //put the value into local storage
    localStorage.setItem("accounts",JSON.stringify(account));
    return;
}
proxy();
