import {addToProducts} from './products.js';

const title = document.getElementById('title');
const image = document.getElementById('image');
const desc = document.getElementById('desc');
const price = document.getElementById('price');
const date = document.getElementById('date');


document.querySelector('.createProduct').
addEventListener('click',()=>{
    if(title.value === '' || image.value === '' || price.value === ''){
        alert('Empty Input Field');
    }   
    else{
        addToProducts(title.value, imagePath(image), desc.value, date.value,price.value);
        window.location.assign('index.html')
    }
    
})





function imagePath(image){
    let img = image.value;
    img = img.substring(11);
    const imagePath ="images"+img;
    return imagePath;
}