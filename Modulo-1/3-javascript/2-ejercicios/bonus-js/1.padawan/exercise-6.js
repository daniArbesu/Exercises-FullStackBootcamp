const categorizeProducts = (products, goodProducts, badProducts) => {
    for (let product of products) {
        product.sellCount >= 20 ? goodProducts.push(product) : badProducts.push(product);
    }
}

const goodProducts = [];
const badProducts = [];
const products = [
  { name: "Funko Dr. Strange", sellCount: 10 },
  { name: "Mochila de protones: Ghostbusters", sellCount: 302 },
  { name: "Sable laser FX", sellCount: 23 },
  { name: "Varita de Voldemort", sellCount: 6 },
];

categorizeProducts(products, goodProducts, badProducts);
console.log("Good Products:", goodProducts);
console.log("Bad Products:", badProducts);