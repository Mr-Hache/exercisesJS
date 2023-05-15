//se va a trabajar grafos direccionales, siendo el grafo un objeto 

//Ejemplo de grafo
// const graph = {
//   a: [b, c],
//   b: [d, e],
//   c: [f],
// la respuesta es true si las dos variables que se le pasan a la función estan conectadas, false si no lo estan
const graph = {
  a: ['c'],
  b: ['c'],
  c: ['s', 'r'],
  d: ['a'],
  s: ['a', 'c'],
  r: ['d'],
  z: ['z'],
}


function SolveGraph (graph, start, end, visited = []) {
  // Your code here:
// Si el nodo ya fue visitado, retornar para cortar la recursividad
  if(visited.includes(start)) return;
  // guardar el nodo en el array de visitados
  visited.push(start)
  // recorro el array del nodo actual
for(const node of graph[start]){
  // si el nodo es igual al nodo final, retornar true
  // si al llamar la función recursivamente retorna true, retornar true
  if(node == end || SolveGraph(graph, node, end, visited)) return true

} 
// si no existe graph[start] o no se encontró el nodo final, retornar false
return false
}


// El código proporcionado tiene una complejidad de tiempo de O(V + E), donde V es el número de nodos (vértices) en el grafo y E es el número de aristas. La razón de esta complejidad se debe a que, en el peor caso, cada nodo y arista del grafo se deben visitar una vez

console.log(SolveGraph(graph, 'a', 'r'))
console.log(SolveGraph(graph, 'a', 'z'))
module.exports = SolveGraph
