
const price1 = [1, 4, 9, 12, 8];

const [ x, y, ...des] = price1;

console.log(x);
console.log(y);
console.log(des);

const product = {
    label: 'new book',
    price: undefined,
    stock: 2000,
    description: 'a new book'
}

const { label, price, a = 'nae' , ... rest } = product;

console.log(label);
console.log(a);
console.log(price);
console.log(rest);