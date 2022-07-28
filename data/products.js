export const products = [{
    id: 1,
    name: 'pencil',
    description: 'special pencil for use',
    price: 7,
}, {
    id: 2,
    name: 'pen',
    description: 'pilot 0.4',
    price: 8,
}, {
    id: 3,
    name: 'sharpener',
    description: 'you dont need me because you use a pen',
    price: 2,
}, {
    id: 4,
    name: 'eraser',
    description: 'whats thats',
    price: 1.5,
}]


export const getProduct = (id) => products.find(p => p.id === id);

export const addProduct = (product) => {
    products.push({
        id: products.length + 1,
        ...product,
    });
}