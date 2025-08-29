
const productos = [
    { id: 1, nombre: 'Leer un libro', pais: 'España' },
    { id: 2, nombre: 'Salir a pasear al perro', pais: 'España' },
    { id: 3, nombre: 'Lavar la ropa', pais: 'Argentina' },
    { id: 4, nombre: 'Comprar comida', pais: 'Argentina' },
];


module.exports = {

    listarProductos : (request, response) => {
        response.json(productos);
    },
    search : (request, response) => {

        const { q } = request.query;
        console.log(q)
        let productos_filter = productos.filter(producto => {
            if (q) {
                return producto.nombre.toLowerCase().includes(q.toLowerCase());
            }
        }) || productos;

        response.json(productos_filter);
    }, 
    findone: (request, response) => {
        const id = request.params.id;
        let producto = productos.find(producto => producto.id == id);
        response.json(producto);
    }

}

