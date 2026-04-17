async function getProducts () {
    const response = await fetch('http://localhost:3000/products');
    if (!response.ok) {
        throw new Error('Error fetching products');
    }
    return await response.json();
}

async function createProduct (product) {
    const response = await fetch('http://localhost:3000/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product)
    });
    if (!response.ok) {
        throw new Error('Error creating product');
    }
    return await response.json();
}

async function updateProduct (product) {
    const response = await fetch(`http://localhost:3000/products/${product.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product)
    });
    if (!response.ok) {
        throw new Error('Error updating product');
    }
    return await response.json();
}

async function deleteProduct (id) {
    const response = await fetch(`http://localhost:3000/products/${id}`, {
        method: 'DELETE'
    });
    if (!response.ok) {
        throw new Error('Error deleting product');
    }
    return await response.json();
}

const ProductService = {
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct
};

export default ProductService;