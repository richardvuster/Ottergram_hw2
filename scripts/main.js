
//get all the thumbnail
var thumbnails = document.getElementsByClassName("thumbnail-item");

var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
var THUMBNAIL_LINK_SELECTOR= '[data-image-role="trigger"]';


//chapter 7: visual effects
var HIDDEN_DETAIL_CLASS = 'hidden-detail';
const ESC_KEY = 27;
//number between 1-5
const RandomNumber = () => {
    return Math.floor(Math.random() * 5 ) + 1;
}
function setDetails(imageUrl, titleText) {
    'use strict';
    let randomNum = RandomNumber(); 
    console.log(`Number: ${randomNum}`);
    if(!(imageUrl && titleText) ) {
        imageUrl = `resources/ottergram-resources/img/otter${randomNum}.jpg`;
        titleText = 'You should be doing da dancing.';
    }
    var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
    detailImage.setAttribute('src', imageUrl);

    var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
    //textContent refers to the text inside html element tag, not including the tags. 
    detailTitle.textContent = titleText;
    
}

function imageFromThumbnail(thumbnail) {
    'use strict';

    return thumbnail.getAttribute("data-image-url");
}

function titleFromThumbnail(thumbnail) {
    'use strict';
    return thumbnail.getAttribute("data-image-title");
}
function setDetailsFromThumbnail(thumbnail) {
    'use strict';
    setDetails(imageFromThumbnail(thumbnail), titleFromThumbnail(thumbnail));
}

function addThumbClickHandler(thumb) {
    'use strict';
    thumb.addEventListener('click', (event) => {
        event.preventDefault();
        setDetailsFromThumbnail(thumb);

        //chapter 7
        showDetails();
    })
}

function getThumbnailsArray() {
    'use strict';
    var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
    var thumbnailArrays = [].slice.call(thumbnails);
    return thumbnailArrays;
}

//chapter 7: visual css edits
function hideDetails() {
    'use strict';
    document.body.classList.add(HIDDEN_DETAIL_CLASS);
}

function showDetails () {
    'use strict';
    document.body.classList.remove(HIDDEN_DETAIL_CLASS);
}

function addKeyPressHandler() {
    'use strict';
    document.body.addEventListener('keyup', (event) => {
        event.preventDefault();
        console.log(event.keyCode);
        if(event.keyCode == ESC_KEY){
            hideDetails();
        }
    })
}



function initializeEvents() {
    'use strict';
    var thumbnails = getThumbnailsArray();
    thumbnails.forEach(addThumbClickHandler);
    addKeyPressHandler();
}

initializeEvents();

//adding a event listener for an indiviudal thumbnail. 
//we are using the variable var THUMBNAIL_LINK_SELECTOR= '[data-image-role="trigger"]', which refers to all the <a> tags in the li of the ul, of the thumbnail list.

