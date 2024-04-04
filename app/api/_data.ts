const flowers = () => [
    {
        title: 'pink rose bouquet',
        imgUrl: 'https://tokyoflora.com/wp-content/uploads/2022/02/fbq-pn-2028.jpg',
        likes: 15,
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
        category: ['bouquet', 'orchid', 'wedding', 'anniversary'],
    },
    {
        title: 'fifteen red rose bouquet',
        imgUrl: 'https://tokyoflora.com/wp-content/uploads/2022/03/fbq-rd-2065.png',
        likes: 259,
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
        category: ['bouquet', 'orchid', 'wedding', 'anniversary'],
    },
    {
        title: 'Normal Grade White Orchid 3',
        imgUrl: 'https://tokyoflora.com/wp-content/uploads/2019/01/jp-orch-1539.jpg',
        likes: 15,
        price: 1500,
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
        sale: 249,
        discount: 0,
        category: ['pot', 'orchid', 'wedding'],
    },
    {
        title: 'Areca Palm Tree',
        imgUrl: 'https://tokyoflora.com/wp-content/uploads/2022/02/plt-gr-2209.jpg',
        likes: 245,
        price: 350,
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
        sale: 249,
        discount: 0,
        category: ['pot', 'orchid', 'wedding'],
    },
    {
        title: 'Lovely Pink Arrangement',
        imgUrl: 'https://tokyoflora.com/wp-content/uploads/2022/02/fbs-pn-2110.jpg',
        likes: 245,
        price: 350,
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
        sale: 249,
        discount: 0,
        category: ['pot', 'orchid', 'wedding'],
    },
]

export { flowers }