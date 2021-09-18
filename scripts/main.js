
//get all the thumbnail
var thumbnails = document.getElementsByClassName("thumbnail-item");

var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
var THUMBNAIL_LINK_SELECTOR= '[data-image-role="trigger"]';
var imageCount = 0;

//chapter 7: visual effects
var HIDDEN_DETAIL_CLASS = 'hidden-detail';
const ESC_KEY = 27;
//second transition 
var DETAIL_FRAME_SELECTOR = "[data-image-role='trigger']";
var TINY_EFFECT_CLASS = 'is-tiny';
//buttons 
const NUMERIC_REGEXP = /[-]{0,1}[\d]*[.]{0,1}[\d]+/g; 

var CurrentThumbnail = {
    imageUrl, titleText
}
CurrentThumbnail.getImageNumber = function() {
   return Number(this.imageUrl.match(NUMERIC_REGEXP).join([]));
}

CurrentThumbnail.getNextImage = function () {
    let i;
    let newImageUrl;
    //now how do i replace the number with my number. 
    if(this.getImageNumber() + 1 > 5){
        i = 1;
        /*
            I was thinking of setting newImageUrl as this.imageUrl. but that would change the currentThumbnail to the nextThumbnail

        */
        newImageUrl =  this.imageUrl.replace(/\d/, i);
    } else {
        i = this.getImageNumber + 1;
        newImageUrl = this.imageUrl.replace(/\d/, i);
    }

    
}

CurrentThumbnail.getPreviousImage = function () {

}

//number between 1-5
const RandomNumber = () => {
    return Math.floor(Math.random() * 5 ) + 1;
}


function setDetails(imageUrl, titleText) {
    'use strict';
    let randomNum = RandomNumber(); 
    if(!(imageUrl && titleText) ) {
        imageUrl = `resources/ottergram-resources/img/otter${randomNum}.jpg`;
        titleText = 'You should be doing da dancing.';
    }
    var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
    detailImage.setAttribute('src', imageUrl);
    currentImageSrc = imageUrl;
    //buttons
    CurrentThumbnail.imageUrl = imageUrl;

    var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
    //textContent refers to the text inside html element tag, not including the tags. 
    detailTitle.textContent = titleText;
    CurrentThumbnail.titleText = titleText;
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
    var frame = document.querySelector(DETAIL_FRAME_SELECTOR);
    document.body.classList.remove(HIDDEN_DETAIL_CLASS);
    frame.classList.add(TINY_EFFECT_CLASS);
    setTimeout(function()  {
        frame.classList.remove(TINY_EFFECT_CLASS);      
    }, 50);
  
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

//buttons
function previousImage () {
        'use strict';

        //using the function setDetails(img, title);
        //how to get the current thumbnail
}

function nextImage() {
    'use strict';
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


