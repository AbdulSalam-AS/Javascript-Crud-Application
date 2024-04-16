export let products = JSON.parse(localStorage.getItem('products'))
|| [
    {
        productId:'vaxHk',
        productName :'Samsung Galaxy S21 Ultra',
        productImage:'images/S21 Ultra.jpg',
        productDesc:'',
        productDate:'',
        productPriceCents: 1299,
    },
    {
        productId:'kLFba',
        productName :'Iphone 14 pro max',
        productImage:'images/Iphone 14 Pro Max.jpg',
        productDesc:'',
        productDate:'',
        productPriceCents:1399,
    },
    {
        productId:'mhJWo',
        productName :'One Plus 10 pro  5G',
        productImage:'images/OnePlus 11.jpg',
        productDesc:'',
        productDate:'',
        productPriceCents: 899,
    }
]



function saveToStorage(){
    localStorage.setItem('products', JSON.stringify(products));
  }

export function randomString(n){
    const str = '012346789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let randomString = '';
    for(let i =0;i<= n;i++){
        randomString += str[Math.floor(Math.random() * str.length)];
    }
    return randomString;
}

export function addToProducts(title,image,desc,date,price){
    try{
    products.forEach(product=>{
        if(product.productName === title){
            alert('Product Already Exists');
            throw "exit";
        }
    })
    products.push(
        {
            productId:randomString(5),
            productName:title,
            productImage:image,
            productDesc:desc,
            productDate:date,
            productPriceCents:price
        }
        
    )
    saveToStorage();
    }catch(e){}
    
}


export function removeProduct(id){
    let newProduct = [];
    products.forEach(product=>{
        if(product.productId !== id){
            newProduct.push(product);
        }
    })
    products = newProduct; 
    saveToStorage(); 
}


export function updateProduct(Id,title,image,desc,date,price){

    let matchingProduct;
    products.forEach((product)=>{
        if(Id === product.productId){
            matchingProduct = product;
        }
    })

    matchingProduct.productName = title;
    matchingProduct.productImage = image;
    matchingProduct.productDesc = desc;
    matchingProduct.productDate = date;
    matchingProduct.productPriceCents = price;

    saveToStorage();
}