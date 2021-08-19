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
    //create a label for pick 
    let pickLabel = document.createElement("label");
    pickLabel.setAttribute("for","restaurants");
    pickLabel.innerHTML = "Pick a restaurant to review: ";
    //state pick to a select tag that has the options be the restaurant names that are in the website right now
    let pick = document.createElement("select");
    //give a name of resturants and id of pickReview to select tag
    pick.setAttribute("name","restaurants");
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
    // create a label for ratting
    let ratingLabel = document.createElement("label");
    ratingLabel.setAttribute("for","rate");
    ratingLabel.innerHTML = "Provide a rating:"
    //state ratting to store a input element with number type and name rate
    let rating = document.createElement("input");
    rating.setAttribute("type","number");
    rating.setAttribute("name","rate");
    //set a min and max for number field to let user provide a ratting from 1 to 5
    rating.setAttribute("min",1);
    rating.setAttribute("max",5);
    //set the id for ratting to rate
    rating.id = "rate";
    //create a label for review
    let reviewLable = document.createElement("label");
    reviewLable.setAttribute("for","review");
    reviewLable.innerHTML = "Write a review:";
    //state review = to a input tag with type = text and name is reivew
    let review = document.createElement("input")
    review.setAttribute("type","text");
    review.setAttribute("name","review");
    //review id = review
    review.id = "review";
    //put all elements that need to be in forum tag inside a list in order to easilly append them into forum
    let forumTags = [pickLabel,pick,ratingLabel,rating,reviewLable,review];
    //loop through forumTags in order to append each tag into forum 
    for (let tag = 0; tag < forumTags.length; tag++){
        //create br element to append into forum
        forum.appendChild(document.createElement("br"));
        //append an element in forumTags into forum
        forum.appendChild(forumTags[tag]);
    }
    //put forum element into the div element
    reviewBox.appendChild(forum);
    //return with the div appened into the body 
    return document.body.appendChild(reviewBox);
}