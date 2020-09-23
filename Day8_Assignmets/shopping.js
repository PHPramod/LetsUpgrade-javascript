let products = [
  {
    id: 1,
    name: 'product1',
    price: 31,
  },
  {
    id: 2,
    name: 'product2',
    price: 32,
  },
  {
    id: 3,
    name: 'product3',
    price: 33,
  },
  {
    id: 4,
    name: 'product4',
    price: 34,
  },
  {
    id: 5,
    name: 'product5',
    price: 35,
  },
  {
    id: 6,
    name: 'product6',
    price: 36,
  },
  {
    id: 7,
    name: 'product7',
    price: 37,
  },
  {
    id: 8,
    name: 'product8',
    price: 38,
  },
  {
    id: 9,
    name: 'product9',
    price: 39,
  },
  {
    id: 10,
    name: 'product10',
    price: 40,
  },
  {
    id: 11,
    name: 'product11',
    price: 20,
  },
  {
    id: 12,
    name: 'product12',
    price: 80,
  },
];


function showProducts(products) {
  let productCards = '';
  products.forEach(function(product) {
    productCards += `<div class="col-lg-4 col-md-6 mb-4">
                      <div class="card h-100">
                        <a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>
                        <div class="card-body">
                          <small class="text-muted">
                            <h5>$${ product.price }</h5>
                            <p class="card-text">${ product.name }</p>
                          </small>
                        </div>
                        <div class="card-footer">
                          <button type="button" class="btn btn-success" onclick="addItem(this)" id="prod${ product.id }">Add to cart</button>
                        </div>
                      </div>
                    </div>`;
  });

  let productWindow = document.getElementById('productWindow');
  productWindow.innerHTML = productCards;
}

function addItem(element) {
  addToCart(element)
}

let cartItemsIds = [];
function addToCart(element) {
  if (cartItemsIds.indexOf(element.id) == -1) {
    cartItemsIds.push(element.id);
    updateCartCount();
  } else {
    alert('Item is already in cart');
  }
}

let cartCount = 0;
function updateCartCount() {
  let cart = document.getElementById('cartCounts');
  cart.value = ++cartCount;
}

function priceFilter() {
  let priceMin = document.getElementsByClassName('priceMin')[0].value;
  let priceMax = document.getElementsByClassName('priceMax')[0].value;

  
  if (priceMax == '' && priceMin == '') {
    showProducts(products);

    return;
  }

  if (priceMin > priceMax) {
    return false;
  }

  let result = products.filter(function(product) {
    if (product.price >= priceMin && product.price <= priceMax) {
      return product;
    }
  });

  showProducts(result);
}

showProducts(products);