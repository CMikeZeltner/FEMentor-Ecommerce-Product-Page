function openImageModal() {
    document.getElementById('image-carousel-modal').style.display = 'flex'
}

//Previous and next button functionality for image modal
function prevNextModal(direction){
    //Displays selected image, hides previous
    const images = document.querySelectorAll('.image-full-modal, .image-full-modal-selected')
    let i = 0
    while(i < images.length){
        if(images[i].className === 'image-full-modal-selected'){
            images[i].className = 'image-full-modal'
            break
        }
        i++
    }

    //Applies selected class to the selected thumbnail
    const thumbnails = document.querySelectorAll('.image-thumbnail-modal-selected, .image-thumbnail-modal')
    thumbnails.forEach(thumbnail => {
        thumbnail.className = 'image-thumbnail-modal'
    })

    let index = i + direction

    if(index === 4){
        images[0].className = 'image-full-modal-selected'
        thumbnails[0].className = 'image-thumbnail-modal-selected'
    } else if (index === -1){
        images[3].className = 'image-full-modal-selected'
        thumbnails[3].className = 'image-thumbnail-modal-selected'
    } else {
        images[index].className = 'image-full-modal-selected'
        thumbnails[index].className = 'image-thumbnail-modal-selected'
    }
}


//Changes image and thumbnail when clicked
function displayThumbnailImageModal(index){
    //Displays selected image, hides previous
    const images = document.querySelectorAll('.image-full-modal, .image-full-modal-selected')
    images.forEach(image => {
        image.className = 'image-full-modal'
    })
    images[index - 1].className = 'image-full-modal-selected'

    //Applies selected class to the selected thumbnail
    const thumbnails = document.querySelectorAll('.image-thumbnail-modal-selected, .image-thumbnail-modal')
    thumbnails.forEach(thumbnail => {
        thumbnail.className = 'image-thumbnail-modal'
    })
    thumbnails[index - 1].className = 'image-thumbnail-modal-selected'
}



function closeModal(){
    document.getElementById('image-carousel-modal').style.display = 'none'
    
}