class ProductManager{

    constructor() {
        this.products = [];
        this.lastId = 0;
    }

    getProducts() {
        const myProducts = this.products.map((product) => { return product; });
        return myProducts;
    }

    addProducts = (title, description, price, thumbnail, code, stock) => {
        const repeatCode = this.products.some((product) => product.code === code);
        if (repeatCode) {
            console.log(`El código del Productor ${title} ya está registrado, por lo tanto, no es posible agregarlo.`);
        }
        else {
            const productId = this.newId();
            const product = { id: productId, title, description, price, thumbnail, code, stock };
            this.products.push(product);
        }
    }

    newId() {
        this.lastId++;
        return this.lastId;
    }

    getProductsById(id) {
        for (const productId of this.products) {
            if (productId.id === id) { return productId }
            else { return console.log('No se encontró el ID') }
        }
    }
}

const productos = new ProductManager()

productos.addProducts('Prueba 1', 'Descripción de Prueba 1', 234, 'https://', 'qwert1', 13);

productos.addProducts('Prueba 2', 'Descripción de Prueba 2', 345, 'https://', 'qwert2', 26);

productos.addProducts('Prueba 3', 'Descripción de Prueba 3', 7901, 'https://', 'qwert3', 85);

console.log("--------------------------------------------------")
console.log("Array de Productos:    ", productos.getProducts()) //funciona getProducts
console.log("--------------------------------------------------")
console.log("Producto por ID:    ", productos.getProductsById(1))