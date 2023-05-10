const array = [4, 3, 1, 5, 11];

function MaxValue(shares) {
  // Your code here:
  // llega un array del estilo [4, 3, 2, 5, 11]

  // Ejercicio sin optimizar => complejidad O(n^2)

  // let maxProfit = -Infinity; // mayor ganancia, empieza en -infinito para que acepte numeros negativos, ya que el max value puede ser la menor perdida posible.
  // for (let i = 0; i < shares.length - 1; i++) {
  //   const buy = shares[i]; // precio de compra en el dia i
  //   for (let j = i + 1; j < shares.length; j++) {
  //     const sell = shares[j]; // precio de venta en el dia j
  //     const actualProfit = sell - buy; // ganancia
  //     if (actualProfit > maxProfit) maxProfit = actualProfit;
  //   }
  // }


  // Ejercicio optimizado => complejidad O(n)

  // let maxProfit = -Infinity;
  // let minValue = shares[0];
  // for(let i = 1; i < shares.length; i++) {
  //   const sell = shares[i];
  //   const actualProfit = sell - minValue;
  //   if(actualProfit > maxProfit) maxProfit = actualProfit;
  //   if(sell < minValue) minValue = sell;
  // }

// solución con ternarios

  let maxProfit = -Infinity;
  let minValue = shares[0];
  for(let i = 1; i < shares.length; i++) {
    const sell = shares[i];
    const actualProfit = sell - minValue;
    maxProfit = actualProfit > maxProfit ? actualProfit : maxProfit;
    minValue = sell < minValue ? sell : minValue;
  }
  
  return maxProfit;
}

console.log(MaxValue(array));

module.exports = MaxValue;
