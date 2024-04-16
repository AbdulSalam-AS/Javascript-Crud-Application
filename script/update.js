import {products, updateProduct} from './products.js';
import {getCurrency}from '../utils/money.js';
const productId = JSON.parse(localStorage.getItem('updateId'));
let matchingProduct = '';
products.forEach(product=>{
    if(productId === product.productId){
        matchingProduct = product;
    }
})

let productsHTML =`     <div class="img">
<img src="${matchingProduct.productImage}" alt="">
</div>
<div class="desc">
<p>${matchingProduct.productName}</p>
<p>$${getCurrency(matchingProduct.productPriceCents)}</p>
<p>${matchingProduct.productDate}</p>
<p>${matchingProduct.productDesc}</p>
</div>`;



document.querySelector('.container').innerHTML = productsHTML;




document.getElementById('title').value = matchingProduct.productName;
document.getElementById('description').value = matchingProduct.productDesc;
document.getElementById('date').value = matchingProduct.productDate;
document.getElementById('price').value = matchingProduct.productPriceCents;

function imagePath(image){
    let img = image.value;
    img = img.substring(11);
    const imagePath ="../images"+img;
    return imagePath;
}


const title = document.getElementById('title');
const image = document.getElementById('image');
const price = document.getElementById('price');
const description = document.getElementById('description');
const date = document.getElementById('date');



document.querySelector('.submitBtn').addEventListener('click',()=>{
    updateProduct(productId,title.value,imagePath(image), description.value, date.value, price.value);
    window.location.assign('../index.html');
})