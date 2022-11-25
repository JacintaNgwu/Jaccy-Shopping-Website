const myProduct = [
  {
    image: './image/T-shirt.jpg',
    title: 'Jaccy',
    description: 'T-shirt',
    star: ['<i class="fas fa-star"></i>', '<i class="fas fa-star"></i>', '<i class="fas fa-star"></i>', '<i class="fas fa-star"></i>', '<i class="fas fa-star"></i>'],
    amount: '$100',
  },
  {
    image: './image/trouser suit.jpg',
    title: 'Jaccy',
    description: 'Trouser suit',
    star: ['<i class="fas fa-star"></i>', '<i class="fas fa-star"></i>', '<i class="fas fa-star"></i>', '<i class="fas fa-star"></i>', '<i class="fas fa-star"></i>'],
    amount: '$200',
  },
  {
    image: './image/gown.jpg',
    title: 'Jaccy',
    description: 'Gown',
    star: ['<i class="fas fa-star"></i>', '<i class="fas fa-star"></i>', '<i class="fas fa-star"></i>', '<i class="fas fa-star"></i>', '<i class="fas fa-star"></i>'],
    amount: '$60',
  },
  {
    image: './image/blue jean.jpg',
    title: 'Jaccy',
    description: 'Blue Jean',
    star: ['<i class="fas fa-star"></i>', '<i class="fas fa-star"></i>', '<i class="fas fa-star"></i>', '<i class="fas fa-star"></i>', '<i class="fas fa-star"></i>'],
    amount: '$100',
  },
  {
    image: './image/pencil skirt.jpg',
    title: 'Jaccy',
    description: 'Pencil Skirt',
    star: ['<i class="fas fa-star"></i>', '<i class="fas fa-star"></i>', '<i class="fas fa-star"></i>', '<i class="fas fa-star"></i>', '<i class="fas fa-star"></i>'],
    amount: '$80',
  },
  {
    image: './image/mens wear.jpg',
    title: 'Jaccy',
    description: 'Shoe',
    star: ['<i class="fas fa-star"></i>', '<i class="fas fa-star"></i>', '<i class="fas fa-star"></i>', '<i class="fas fa-star"></i>', '<i class="fas fa-star"></i>'],
    amount: '$300',
  },
];

//= == Generating feature product section dynamically===//
const featured = document.getElementById('featured');
featured.innerHTML += myProduct.map((products) => `
<div class="product-container">
<div class="product-img">
    <img src='${products.image}' alt="">
</div>
<div class="product-description">
    <span>${products.title}</span>
    <h5>${products.description}</h5>
   <div class="star-icons">${products.star.map((stars) => `
    ${stars}
    `).join('')}</div>
    <h4>${products.amount}</h4>
</div>
</div>
`).join('');

// mobile screen//
const mobile = document.querySelector('.mobile');
const header3 = document.querySelector('.header3');
const xBtn = document.querySelector('.x-btn');
const navBar3 = document.querySelector('#navbar3');

mobile.addEventListener('click', () => {
  header3.classList.toggle('active');
  xBtn.classList.toggle('show');
});

navBar3.addEventListener('click', () => {
  header3.classList.toggle('active');
  xBtn.classList.toggle('show');
});