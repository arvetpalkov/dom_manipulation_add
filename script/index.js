let button = document.getElementById('add-button');

button.addEventListener('click', addItem);

function addItem() {
  let container = document.getElementsByClassName('item-container');

  let newItem = document.createElement('div');
  newItem.innerText = 'New Item';

  container[0].appendChild(newItem);
}