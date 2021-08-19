function writeReview(){
    return;
}
//variable to check if function is called twice or once
reviewCheck = true;
//function to create a forum for users to write their reviews
function reviewForum(){
    //check if reviewCheck is true
    if (reviewCheck){
        /*change reviewCheck to false because it lets the 
        function only run once and do another thing when called again*/ 
        reviewCheck = false; 
    }else{
        reviewCheck = true;
        return;
    }
    //state reviewBox to store a div element
    let reviewBox = document.createElement("div");
    //give id review to div element
    reviewBox.id = "review";
    //state forum to store a forum element
    let forum = document.createElement("forum");
    //state pick to a select tag that has the options be the restaurant names that are in the website right now
    let pick = document.createElement("select");
    //give a name of resturants and id of pickReview to select tag
    pick.setAttribute("name","resturants");
    pick.id = "pickReview";
    //for loop through resturants array 
    for (let i = 0; i < restaurants.length; i++){
        //state options to = an options tag and set that value and inner html to the first value of each nested array looped through
       let options = document.createElement("option");
       options.setAttribute("value",(restaurants[i])[0]);
       options.innerHTML = (restaurants[i])[0];
        //append options into pick to have all the options tag created be inside select tag
        pick.appendChild(options);
    }
    //(test) put pick into body tag
    return document.body.appendChild(pick);
    
    //state ratting to store a input element with number type
    //set the id for ratting to rate
    //state review = to a input tag with type = text
    //review id = review
}