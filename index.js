const newProductModal = document.getElementById("addNewProductModal");

function showProduct(){
    const detailsModal = document.getElementById("showProductModal");
    detailsModal.classList.remove("hidden")
}

function hideShowProduct(){
    const detailsModal = document.getElementById("showProductModal");
    detailsModal.classList.add("hidden")
}

function openAddProduct(){

    newProductModal.classList.remove("hidden")
}


function closeAddProduct(){
    const closeNewProductModal = document.getElementById("addNewProductModal");
    closeNewProductModal.classList.add("hidden")
}





let form = document.forms['addProduct'];
const LINK="https://images.unsplash.com/photo-1494173853739-c21f58b16055?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80";

let products = [];



function renderProducts(){
    let productsListingContainer = document.getElementById("productsListing");
    productsListingContainer.innerHTML="";
    products.map(function(product){
        productsListingContainer.innerHTML+=`<li class="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
        <div class="flex-1 flex flex-col p-8">
            <img class="w-50 h-50 flex-shrink-0 mx-auto "
                src="https://images.unsplash.com/photo-1494173853739-c21f58b16055?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
                alt="">
            <h3 class="mt-6 text-gray-900 text-2xl font-medium">${product.name} </h3>
            <dl class="mt-1 flex-grow flex flex-col justify-between">
                <dd class="text-gray-500 text-lg">Store A</dd>
                <dd class="mt-3">
                    <span
                        class="px-3 py-2 text-center text-green-800 text-lg  font-medium bg-green-100 rounded-full">${product.status}</span>
                </dd>
            </dl>
        </div>
        <a onclick="showProduct()" href="#"
            class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
            View </a>
    </li>`;
    });

   

}

const saveProduct=(e)=>{
e.preventDefault();
let name = form['name'].value;
let price = form['price'].value;
let category = form['category'].value;
let date = form['date'].value;
let photo = form['photo'].value;
let desrciption = form['desrciption'].value;
let status = form['status'].value;
products.push({name,price,status,category,date,photo:LINK,desrciption});
renderProducts();
newProductModal.classList.add("hidden")

}
form.addEventListener("submit",saveProduct);