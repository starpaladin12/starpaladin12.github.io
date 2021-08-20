let reviews = [];
let reviewsTag = [];
function writeReview(){
    //state position, content, rating
    let position;
    let content;
    let rating;
    //let position to equal the resturant user picked
    position = document.getElementById("pickReview").value;
    //let content to equal the review the user made
    content = document.getElementById("review").value;
    //let rating equal the rating num given
    rating = document.getElementById("rate").value;
    //remove the values from the text field
    document.getElementById("review").value = "";
    document.getElementById("rate").value = "";
    //check if rating is not between 1 to 5 range
    if (rating < 1 || rating > 5){
        return alert("You can not enter that rating");
    }
    //check if user entered nothing for ether position, content, rating
    if (position == ""){
        return alert("You did not enter which restaurant to review\n try again.");
    }else if (content == ""){
        return alert("You did not enter a review\n try again.");
    }else if (rating == ""){
        return alert("You did not enter a rating\n try again.");
    }
    //put position, content and rating into a dic with the key being the active account and store it in reviews
    let review = [activeAccount, position, content, rating];
    //loop through restaurants to check which restaurant to put the review in
    for(let i = 0; i < restaurants.length; i++){
        //check if the title of the resturant is equal to postion 
        if(restaurants[i][0] == position){
            //set reviewContain to a dev element
            let reviewContain = document.createElement("div");
            //set reviewContain class to the restaurant name
            reviewContain.className = restaurants[i][0].replace(" ","");
            //state reviewInfo to a p tag
            let reviewInfo = document.createElement("p");
            //put content and rating into reviewInfo
            reviewInfo.innerHTML = "User: "+activeAccount+"<br>Rating given: "+rating+"<br>"+content;
            //append reviewInfo into reviewContain
            reviewContain.appendChild(reviewInfo);
            reviewsTag.push(reviewContain);
        }
    }
    //call avgRate
    avgRate(position,rating);
    //show that review has been created
    alert("Review created");
    //put review into reviews as a nested array
    return reviews.push(review);
    
}
reviewscheck = true
function showReviewsButton(){
    //state showReview to be a button element and state the type to button and onclick to showReviewfunction
    let showReview = document.createElement("button");
    showReview.setAttribute("type","button");
    showReview.addEventListener("click",showReviews);
    //set value inside button
    showReview.innerHTML = "Show your reviews";
    //add a class name
    showReview.className = "headerbutton";
    //state logout id to be logout
    showReview.id = "showReviews"
    //append logout into body beside the other buttons
     
    return document.getElementById("writeReview").insertAdjacentElement("afterend",showReview);
}
function showReviews(){
    //check if no reviews have been created
    if (reviews.length == 0){
        return alert("No reviews have been created");
    }
    if (reviewscheck){
        reviewscheck = false;
    }else{
        reviewscheck = true;
        return document.getElementById("accountReviews").remove()
    }
    //create a div element to hold all the reviews created for that account
    let personalReviews = document.createElement("div");
    personalReviews.id = "accountReviews"
    //state heading to hold a h1 element to put into the div element
    let heading = document.createElement("h1");
    heading.id = "userReviewTitle";
    heading.innerHTML = "Account Reviews";
    //put heading into the div element
    personalReviews.appendChild(heading);
    //go through reviews list with loop
    for (let i = 0; i < reviews.length; i++){
        //check if current account is the same account used to make the reviews 
        if (reviews[i][0] == activeAccount){
            //if so then combine all the review elments: positon, rating, and content to show the review the user made
            let review = document.createElement("p");
            review.className = "reviews";
            review.id = "review"+i;
            review.innerHTML = "Reviewed: "+reviews[i][1]+"<br>"+"Rating given: "+reviews[i][3]+"<br>"+reviews[i][2];
            personalReviews.appendChild(review);
        }
    } 
    //return with review append into div element and then appended into body
    return document.body.appendChild(personalReviews);
}
//variable to check if function is called twice or once
reviewCheck = true;
//function to create a forum for users to write their reviews
function reviewForum(){
    //check if activeAccount is not null which means user is no loged in then return message
    if (activeAccount === null){
        return alert("You need to create an account and log in\n to write a review.");
    }
    //check if reviewCheck is true
    if (reviewCheck){
        /*change reviewCheck to false because it lets the 
        function only run once and do another thing when called again*/ 
        reviewCheck = false; 
    }else{
        reviewCheck = true;
        return document.getElementById("reviewContain").remove();
    }
    //state reviewBox to store a div element
    let reviewBox = document.createElement("div");
    //give id review to div element
    reviewBox.id = "reviewContain";
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
    //state create to be inpue tag with type = button with a click event and a value
    let create = document.createElement("input");
    create.setAttribute("type","button");
    create.setAttribute("value","Create");
    create.addEventListener("click",writeReview);
    //put all elements that need to be in forum tag inside a list in order to easilly append them into forum
    let forumTags = [pickLabel,pick,ratingLabel,rating,reviewLable,review,create];
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
function avgRate(position,rating){
    //check which restaurant to take rating from using loop
    for ( let i = 0; i < restaurants.length; i++){
        if ((restaurants[i])[0] == position){
            //take the rating of the restaurant and find avg rate
            let sum = Number(rating) + restaurants[i][1];
            let avg = (sum/2).toFixed(1);
            //show avg rating
            document.getElementById("resturantRate"+i).innerHTML = "Average Rating: "+avg;
            //put the rating into restaurants array
            console.log(restaurants)
            return restaurants[i][1] = Number(avg)
            
        }
    } 
}