
//get all the thumbnail
var thumbnails = document.getElementsByClassName("thumbnail-item");

var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
var THUMBNAIL_LINK_SELECTOR= '[data-image-role="trigger"]';

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

//adding a event listener for an indiviudal thumbnail. 
//we are using the variable var THUMBNAIL_LINK_SELECTOR= '[data-image-role="trigger"]', which refers to all the <a> tags in the li of the ul, of the thumbnail list.

var firstThumbnail = document.querySelector(THUMBNAIL_LINK_SELECTOR);
firstThumbnail.addEventListener('click', () => {
    console.log('you clicked')
})