// Write your code here!



let newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.innerHTML = 'YOUR-NAME is the champion'; // Replace YOUR-NAME with actual name if needed
document.body.appendChild(newHeader);

// Remove the <main> node with id 'main' if it exists
const main = document.querySelector('main#main');
if (main) {
  main.remove();
}
