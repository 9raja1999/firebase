import { db, ref, get, onChildAdded, child } from './firebase/firebaseConfig.js'

var products = []
var productContainer = document.getElementById('products-container')


window.onload = getAllProducts()


function getAllProducts() {
    get(child(ref(db), 'products'))
        .then((snapshot) => {
            snapshot.forEach(product => {
                products.push(product.val())
            })
            displayProducts()
        })
        .catch((error) => {
            console.error('error', error)
        })
}

function displayProducts() {
    products.forEach((prod) => {
        var html = `
            <div class="card product-card" style="width: 18rem;">
                <div class="card-image-container">
                    <img class="card-img-top" src="${prod.images[0]}" alt="Card image cap">
                </div>
                <div class="card-body">
                    <h4>${prod.name}</h4>
                    <p class="card-text">${prod.description}</p>
                    <button type="button" id="${prod.key}" class="product-view-btn btn btn-light w-100" >View</button>
                </div>
            </div>
        `
        productContainer.innerHTML += html
    })

    assignTriggers()
}

function assignTriggers() {
    var viewBtns = [...document.getElementsByClassName('product-view-btn')]

    viewBtns.forEach(viewBtn => {
        viewBtn.addEventListener('click', (event) => navigateToDetail(event))
    })
}

function navigateToDetail(event) {
    var { id } = event.target
    window.location = `pages/productDetail/index.html?id=${id}`
}