const flowers = [
    {
        name: 'pink rose bouquet',
        imgUrl: 'https://tokyoflora.com/wp-content/uploads/2022/02/fbq-pn-2028.jpg',
        like: 15,
        size: {
            small: {
                price: 350,
                stalk: 15
            },
            medium: {
                price: 450,
                stalk: 20
            },
            large: {
                price: 500,
                stalk: 25
            },
        },
        sale: 129,
        discount: 0,
        category: 'bouquet',
        theme: 'birthday'
    },
    {
        name: 'fifteen red rose bouquet',
        imgUrl: 'https://tokyoflora.com/wp-content/uploads/2022/03/fbq-rd-2065.png',
        like: 259,
        size: {
            small: {
                price: 600,
                stalk: 10
            },
            medium: {
                price: 750,
                stalk: 15
            },
            large: {
                price: 800,
                stalk: 20
            },
        },
        sale: 194,
        discount: 0,
        category: 'bouquet',
    },
    {
        name: 'Normal Grade White Orchid 3',
        imgUrl: 'https://tokyoflora.com/wp-content/uploads/2019/01/jp-orch-1539.jpg',
        like: 15,
        price: 1500,
        size: { 'small': 10, 'medium': 15, 'big': 20 },
        sale: 249,
        discount: 0,
        category: ['pot', 'orchid', 'wedding'],
    },
    {
        name: 'Areca Palm Tree',
        imgUrl: 'https://tokyoflora.com/wp-content/uploads/2022/02/plt-gr-2209.jpg',
        like: 245,
        price: 350,
        size: { 'small': 10, 'medium': 15, 'big': 20 },
        sale: 249,
        discount: 0,
        category: ['pot', 'orchid', 'wedding'],
    },
]

export { flowers }