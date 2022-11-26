const myProduct = [
  {
    image: './image/T-shirt.jpg',
    title: 'T-shirt',
    description: 'Male T-shirt',
    description2: 'This T-shirt is mainly for men and will go<br> perfectly with jean.',
  },
  {
    image: './image/trouser suit.jpg',
    title: 'Trouser-suit',
    description: 'Classic wear',
    description2: 'This classic wear is for ladies and its nice for<br> office wear and social occassion (like award, dinner etc).',
  },
  {
    image: './image/gown.jpg',
    title: 'Gown',
    description: 'Ladies wear',
    description2: 'Flower silk material gown, good for beach<br> outing and any kind of social occasion.',
  },
  {
    image: './image/blue jean.jpg',
    title: 'Blue-Jean',
    description: 'Casual ladies wear',
    description2: 'This blue jean looks so beautiful and will go with any kind<br> of top. It can as both casual and office wear.',
  },
  {
    image: './image/pencil skirt.jpg',
    title: 'Pencil-Skirt',
    description: 'Church-office wear',
    description2: 'Simple but classy! pencil skirt for concert<br> or office wear, grab your now.',
  },
  {
    image: './image/mens wear.jpg',
    title: 'Shoe',
    description: 'Mens office wear',
    description2: 'This is superp and classic. The color, design and material<br> texture is wow!. Get it as your office, church, occasion wear.',
  },
];

//= == Generating featured product section dynamically===//
const featured = document.getElementById('featured');
featured.innerHTML += myProduct.map((products) => `
<div class="product-container">
<div class="product-img">
    <img src='${products.image}' alt="">
</div>
<div class="product-description">
    <span>${products.title}</span>
    <h5>${products.description}</h5>
    <p>${products.description2}</p>
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