let currentImageIndex = 1;
const imageIndexeValues = [3,4,5,6,7,8,9,10,15,16,17]
const mainHeader = document.getElementById('main-header')

function changeHeaderImage(){
    if (imageIndexeValues[currentImageIndex]<=9){
        const galleryFileURL = `url('./img/oceanwp-architect-image-00${imageIndexeValues[currentImageIndex]}.jpg')`
        mainHeader.style.backgroundImage = galleryFileURL;
    }else
    {
        const galleryFileURL = `url('./img/oceanwp-architect-image-0${imageIndexeValues[currentImageIndex]}.jpg')`
        mainHeader.style.backgroundImage = galleryFileURL;
    }
    currentImageIndex += 1
    if (currentImageIndex >= imageIndexeValues.length){
        currentImageIndex = 0;
    }
}
changeHeaderImage()
setInterval(changeHeaderImage,5000)
