
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
var DETAIL_FRAME_SELECTOR = "[data-image-role='frame']";
var TINY_EFFECT_CLASS = 'is-tiny';


function setDetails(imageUrl, titleText) {
    'use strict';
    
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

/*

Firs thing to do, get a new array 
var thumbnails = Array.from(document.getElementsByClassName('thumbnail-item'))
thumbnails[0].firstElementChild.getAttribute('')

//match a number 
var number "resources/ottergram-resources/img/otter2.jpg".match(/\d/)[0] 

changing the source 
detailImageSrc = document.getELementByClassName("detail-image")[0]
detailImageSrc.setAttribute('src', newAdress)

detailImageTitle = document.getElementByClassName("detail-image-title)[0].textContent


*/

function previousImage(){
    
    var thumbnails = getThumbnailsArray()
  
    var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR).getAttribute('src')
    var newDetailTitle;
    var newDetailImage;
   
    var currentIndex = parseInt(detailImage.match(/\d/)[0])

    currentIndex = (currentIndex === 1 ? thumbnails.length : currentIndex - 1);
    
    newDetailImage = thumbnails[currentIndex-1].getAttribute('data-image-url');
    newDetailTitle = thumbnails[currentIndex-1].getAttribute('data-image-title');

    
    var thumbnailImage = document.getElementsByClassName('detail-image')[0]
    thumbnailImage.setAttribute('src', newDetailImage);

    var thumbnailTitle = document.getElementsByClassName('detail-image-title')[0]
    thumbnailTitle.textContent = newDetailTitle;

}

function nextImage() {
    var thumbnails = getThumbnailsArray()
  
    var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR).getAttribute('src')
    var newDetailTitle;
    var newDetailImage;
   
    var currentIndex = parseInt(detailImage.match(/\d/)[0])

    currentIndex = (currentIndex === thumbnails.length ? 1 : currentIndex + 1);
    
    newDetailImage = thumbnails[currentIndex-1].getAttribute('data-image-url');
    newDetailTitle = thumbnails[currentIndex-1].getAttribute('data-image-title');
    
    var thumbnailImage = document.getElementsByClassName('detail-image')[0]
    thumbnailImage.setAttribute('src', newDetailImage);

    var thumbnailTitle = document.getElementsByClassName('detail-image-title')[0]
    thumbnailTitle.textContent = newDetailTitle;
    
}
function buttons() {

    document.getElementById('previousButton').addEventListener('click', (event) => {
        event.preventDefault();
        previousImage();
    });

    document.getElementById('nextButton').addEventListener('click', (event) => {
        event.preventDefault();
        nextImage();
    });
}

function initializeEvents() {
    'use strict';
    var thumbnails = getThumbnailsArray();
    thumbnails.forEach(addThumbClickHandler);
    addKeyPressHandler();
    buttons();
}

initializeEvents();
