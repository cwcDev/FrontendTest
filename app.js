const endpoint = 'https://fakestoreapi.com/products';

slides();

function slides() {
    fetch(endpoint)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const products = data.map(({ image, title, category, price }) => {
                return { image, title, category, price };
            });

            const sliderContainer = document.getElementById('slider');
            const carousel = document.createElement('div');
            products.forEach(product => {
                const item = document.createElement('div');
                item.innerHTML = `
                <div class="product-wrap">
                    <div class="product-image">
                        <img src="${product.image}" alt="${product.title}"/>
                    </div>
                    <div class="product-info">
                        <div class="category">
                            <a href="#" title="${product.category}">${product.category}</a>
                        </div>
                        <div class="title">${product.title}</div>
                        <div class="price">$${product.price}</div>
                    </div>
                </div>
                `;
                carousel.classList.add('main-carousel');
                item.classList.add('gallery-cell');
                carousel.appendChild(item);
            });
            sliderContainer.appendChild(carousel);

            let elem = document.querySelector('.main-carousel');
            let flkty = new Flickity(elem, {
                cellAlign: 'left',
                contain: true,
                groupCells: true
            });

        })
        .catch(error => console.error(error));
}
