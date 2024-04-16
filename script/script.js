import {getCurrency} from '../utils/money.js';
import { products, removeProduct} from './products.js';

let productsHTML = '';
products.forEach( (product, idx) =>{
   productsHTML += `
   <tr>
   <td>${idx + 1}</td>
   <td>

   <img src="${product.productImage}" alt="">
    </td>
    <td>${product.productName}</td>
    <td>$${getCurrency(product.productPriceCents)}</td>
    <td>${product.productDate}</td>
    <td>
    
    <a href="../updateProduct.html"><button data-update-id="${product.productId}" class="updateBtn">Update</button></a>
    <button data-delete-id="${product.productId}" class="deleteBtn">Delete</button>
    </td>

    </tr>`;
    
});
document.querySelector('tbody').innerHTML = productsHTML;
const deleteBtn = document.querySelectorAll('.deleteBtn');

deleteBtn.forEach(del =>{
    del.addEventListener('click',()=>{
        const Id = del.dataset.deleteId;
        removeProduct(Id);
        window.location.reload();
})
})  

const update = document.querySelectorAll('.updateBtn');
update.forEach((button)=>{
button.addEventListener('click',()=>{
    localStorage.setItem('updateId', JSON.stringify(button.dataset.updateId));
})

})


const search = document.querySelector('.searchInput');
search.addEventListener("keydown", (event)=>{
    if(event.key === 'Enter'){
        let matchingProduct = '';
        products.forEach((product)=>{
            if(search.value == product.productName){
                matchingProduct = product;
            }
        })

        if(matchingProduct){
            let productsHTML= `
             <tr>
             <td>${1}</td>
             <td>
          
             <img src="${matchingProduct.productImage}" alt="">
              </td>
              <td>${matchingProduct.productName}</td>
              <td>$${getCurrency(matchingProduct.productPriceCents)}</td>
              <td>${matchingProduct.productDate}</td>
              <td>
              
              <a href="../updateProduct.html"><button data-update-id="${matchingProduct.productId}" class="updateBtn">Update</button></a>
              <button data-delete-id="${matchingProduct.productId}" class="deleteBtn">Delete</button>
              </td>
          
              </tr>`;
              
              document.querySelector('tbody').innerHTML = productsHTML;
              const deleteBtn = document.querySelectorAll('.deleteBtn');

              deleteBtn.forEach(del =>{
                  del.addEventListener('click',()=>{
                      const Id = del.dataset.deleteId;
                      removeProduct(Id);
                      window.location.reload();
              })
          })  
          
          const update = document.querySelectorAll('.updateBtn');
          update.forEach((button)=>{
              button.addEventListener('click',()=>{
                  localStorage.setItem('updateId', JSON.stringify(button.dataset.updateId));
              })
          
          })
          

        }else{
            document.querySelector('tbody').innerHTML = `<h1>No Result Found</h1>`;
           }
        }
    })
    
   


