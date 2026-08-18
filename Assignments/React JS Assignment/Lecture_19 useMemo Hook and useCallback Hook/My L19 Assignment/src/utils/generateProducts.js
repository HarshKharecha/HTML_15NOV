export const generateProducts = (count = 10000) => {
    const categories = ['Electronics', 'Clothing', 'Home & Kitchen', 'Books', 'Sports'];
    const adjectives = ['Smart', 'Eco', 'Pro', 'Ultra', 'Mini', 'Wireless', 'Premium'];
    const nouns = ['Speaker', 'Watch', 'Shirt', 'Blender', 'Headphones', 'Backpack', 'Lamp'];

    const products = [];

    for (let i = 1; i <= count; i++) {
        const category = categories[Math.floor(Math.random() * categories.length)];
        const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
        const noun = nouns[Math.floor(Math.random() * nouns.length)];

        products.push({
            id: i,
            title: `${adj} ${noun} ${i}`,
            category,
            price: parseFloat((Math.random() * 990 + 100).toFixed(2)),
            image: `https://picsum.photos/seed/${i}/200/150`
        });
    }

    return products;
};