const sumSells = (products) => {
    let totalSells = 0;

    for (let product of products){
        totalSells += product.sellCount;
    }

    return totalSells;
}

const products = [
    { name: "Funko Dr. Strange", sellCount: 10 },
    { name: "Mochila de protones: Ghostbusters", sellCount: 302 },
    { name: "Sable laser FX", sellCount: 23 },
    { name: "Varita de Voldemort", sellCount: 6 },
  ];

  console.log(sumSells(products));