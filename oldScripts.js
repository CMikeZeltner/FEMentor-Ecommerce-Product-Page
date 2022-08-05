//Adds event listeners to increment/decrement buttons
//Disables/Enables "Add To Cart" button depending on quantity
window.onload = function() { 
    document.querySelectorAll('.inc-dec').forEach(element => {
    element.addEventListener('click', () => {
      const addButton = document.getElementById('add-to-cart-button')
      const addSpan = document.getElementById('quantity')
      if(addSpan.innerHTML === '0'){
        addButton.disabled = true
        addButton.style.backgroundColor = 'hsla(26, 100%, 55%, 0.4)'
      } else {
        addButton.disabled = false
        addButton.style.backgroundColor = 'hsl(26, 100%, 55%)'
      }
    })
  })

  window.addEventListener('resize', () =>{

    //If the window is resized, the nav bar is hidden.
    //Should come back to this later
    if(window.innerWidth <= 769 ){
        document.getElementById('nav-tag-container').style.display = 'none'
        document.getElementById('nav-tag-container').style.position = 'absolute'
        document.getElementById('transparent-background').style.display = 'none'
    } else {
        document.getElementById('nav-tag-container').style.display = 'flex'
        document.getElementById('nav-tag-container').style.position = 'static'
    }
    
  })

  window.addEventListener('resize', () =>{
    //If the window is resized, the carousel modal is hidden.
    //Should come back to this later
    document.getElementById('image-carousel-modal').style.display = 'none'
  })
}



//Slightly different on mobile
function prevNextMobile(direction){

    let index = getIndex() + direction
    const images = document.querySelectorAll('.image-full, .image-full-selected')
    images.forEach(image => {
        image.className = 'image-full'
    })
    //Applies selected class to the selected thumbnail
    const thumbnails = document.querySelectorAll('.image-thumbnail, .image-thumbnail-selected')
    thumbnails.forEach(thumbnail => {
        thumbnail.className = 'image-thumbnail'
    })


    if(index === 4){
        index = 0
        images[0].className = 'image-full-selected'
        thumbnails[0].className = 'image-thumbnail-selected'
    } else if (index === -1){
        index = 3
        images[3].className = 'image-full-selected'
        thumbnails[3].className = 'image-thumbnail-selected'
    } else {
        images[index].className = 'image-full-selected'
        thumbnails[index].className = 'image-thumbnail-selected'
    }

    setModal(index)
}




//When thumbnail is clicked, thumbnail is "selected" and corresponding image is displayed 
function displayThumbnailImage(index){
    //Displays selected image, hides previous
    const images = document.querySelectorAll('.image-full, .image-full-selected')
    images.forEach(image => {
        image.className = 'image-full'
    })
    images[index].className = 'image-full-selected'

    //Applies selected class to the selected thumbnail
    const thumbnails = document.querySelectorAll('.image-thumbnail-selected, .image-thumbnail')
    thumbnails.forEach(thumbnail => {
        thumbnail.className = 'image-thumbnail'
    })
    thumbnails[index].className = 'image-thumbnail-selected'

    setModal(index)
}


////////////////////////////////////////////////////////////////////////


function openImageModal() {
    document.getElementById('image-carousel-modal').style.display = 'flex'
}

//Previous and next button functionality for image modal
function prevNextModal(direction){
    let index = getIndexModal() + direction
    const images = document.querySelectorAll('.image-full-modal, .image-full-modal-selected')
    images.forEach(image => {
        image.className = 'image-full-modal'
    })
    //Applies selected class to the selected thumbnail
    const thumbnails = document.querySelectorAll('.image-thumbnail-modal, .image-thumbnail-modal-selected')
    thumbnails.forEach(thumbnail => {
        thumbnail.className = 'image-thumbnail-modal'
    })


    if(index === 4){
        index = 0
        images[0].className = 'image-full-modal-selected'
        thumbnails[0].className = 'image-thumbnail-modal-selected'
    } else if (index === -1){
        index = 3
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

//////////////////////////////////////////////////////////////////////
//                        Modal Functions
//////////////////////////////////////////////////////////////////////

function getIndex(){
    const images = document.querySelectorAll('.image-full, .image-full-selected')
    let i = 0
    while(i < images.length){
        if(images[i].className === 'image-full-selected'){
            return i
        }
        i++
    }    
}

function getIndexModal(){
    const images = document.querySelectorAll('.image-full-modal, .image-full-modal-selected')
    let i = 0
    while(i < images.length){
        if(images[i].className === 'image-full-modal-selected'){
            return i
        }
        i++
    }    
}

function setModal(index){
    const modalIMGs = document.querySelectorAll('.image-full-modal, .image-full-modal-selected')
    modalIMGs.forEach(img => {
        img.className = 'image-full-modal'
    })
    modalIMGs[index].className = 'image-full-modal-selected'

    const thumbnails = document.querySelectorAll('.image-thumbnail-modal, .image-thumbnail-modal-selected')
    thumbnails.forEach(thumbnail => {
        thumbnail.className = 'image-thumbnail-modal'
    })
    thumbnails[index].className = 'image-thumbnail-modal-selected'
}



function toggleMenu() {
    if(document.getElementById('nav-tag-container').style.display === 'block'){
        document.getElementById('nav-tag-container').style.display = 'none'
        document.getElementById('transparent-background').style.display = 'none'
    } else {
        document.getElementById('nav-tag-container').style.display = 'block'
        document.getElementById('transparent-background').style.display = 'block'
    }
}

