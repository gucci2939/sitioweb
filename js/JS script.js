let total = 0;

function agregarAlCarrito(nombre, precio) {
    const listaCarrito = document.getElementById('listaCarrito');
    const totalElement = document.getElementById('total');

    const item = document.createElement('li');
    item.textContent = ${nombre} - $${precio};
    listaCarrito.appendChild(item);

    total += precio;
    totalElement.textContent = total;
}