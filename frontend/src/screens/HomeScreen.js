const HomeScreen = {
  render: async () => {
    const resposne = await fetch('http://localhost:5000/api/products', {
      headers: {
        'Content-type': 'application/json',
      }
    })


    http: if (!resposne || resposne.ok == false) {
      return `<div>Error in getting data</div>`;
    }

    const products = await resposne.json();

    return `
      <ul class="products">
        ${products.map(
          (product) => `
          <li>
              <div class="product">
                <a href="#/product/${product._id}">
                  <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                  <a href="/#/prduct/${product._id}">
                    ${product.name}
                  </a>
                </div>
                <div class="product-brand">
                  ${product.brand}
                </div>
                <div class="product-price">
                  $${product.price}
                </div>
              </div>
            </li>
        `
        ).join("\n")}
      </ul>
    `;
  },
};

export default HomeScreen;
