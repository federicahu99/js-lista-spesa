/*
1-creo un ciclo for per inserire gli elementi della lista in pagina.
2-lo trasformo in un while
*/

/* inizio a creare l'appoggio */
let groceryList = '<ul>';
/* Array */
const listProduct = [ 'Uova', 'Pane','Latte','Biscotti','Pasta', 'Affettati', 'Formaggio', 'Verdura', 'Frutta']

for ( i = 1; i <= listProduct.length -1 ; i++) {
    groceryList += `<li> ${listProduct[i]} </li>`;
    console.log(groceryList);
}

groceryList += '</ul>';
/* Porto nel Dom */
document.getElementById('grocery').innerHTML= groceryList;
