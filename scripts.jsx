// Inicializar Firebase
const firebaseConfig = {
    // Tu configuración de Firebase
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// Referencias a los elementos del DOM
const tabs = document.querySelectorAll('.tab');
const contentItems = document.querySelectorAll('.content-item');
const formName = document.getElementById('form-name');
const menu = document.getElementById('menu');
const order = document.getElementById('order');
const btnPay = document.getElementById('btn-pay');

// Generar el menú
const menuItems = [
    { name: 'Ensalada', price: 5 },
    { name: 'Hamburguesa', price: 10 },
    { name: 'Pizza', price: 15 },
];

menuItems.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price}`;
    li.dataset.price = item.price;
    menu.appendChild(li);
});

// Cambiar de pestaña
tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        tabs.forEach(tab => tab.classList.remove('active'));
        contentItems.forEach(item => item.classList.remove('active'));
        tab.classList.add('active');
        contentItems[index].classList.add('active');
    });
});

// Enviar el nombre
formName.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    tabs.forEach(tab => tab.textContent = name);
    contentItems[1].classList.add('active');
});

// Añadir al pedido
menu.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        const price = parseInt(e.target.dataset.price);
        const li = document.createElement('li');
        li.textContent = e.target.textContent;
        li.dataset.price = price;
        order.appendChild(li);
    }
});

// Pagar
btnPay.addEventListener('click', () => {
    const total = Array.from(order.children).reduce((acc, cur) => {
        return acc + parseInt(cur.dataset.price);
    }, 0);

    // Enviar el pedido a Firebase
    const pedidoRef = db.ref('pedidos').push();
    pedidoRef.set({
        nombre: tabs[0].textContent,
        items: Array.from(order.children).map(li => ({
            name: li.textContent,
            price: parseInt(li.dataset.price),
        })),
        total,
    });

    // Limpiar el pedido
    order.innerHTML = '';

    // Mostrar el total
    alert(`El total a pagar es: $${total}`);
});