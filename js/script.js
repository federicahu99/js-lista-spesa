/*
1-creo un ciclo for per inserire gli elementi della lista in pagina
*/

/* inizio a creare l'appoggio */
const groceryList = '<ul>';
/* Array */
const listItem = [ 'Uova', 'Pane','Latte','Biscotti','Pasta', 'Affettati', 'Formaggio', 'Verdura', 'Frutta']

for ( i = 1; i <=8; i++) {
    groceryList += `<li> ${listItem[i]} </li>`;
    groceryList += '</ul>';
    console.log(groceryList);
}
