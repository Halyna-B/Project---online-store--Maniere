const armchairsJSON = `
[
    {
        "id":"1",
        "image":"yellow-fusion-armchair.png",
        "title":"Fusion armchair, LEXX",
        "price": 320.00
    },
    {
        "id":"2",
        "image":"biej-aurora-armchair.png",
        "title":"Aurora armchair, MDS",
        "price": 210.00
    },
    {
        "id":"3",
        "image":"blue-cloud-armchair.png",
        "title":"Cloud armchair, DIX",
        "price": 150.00
    },
    {
        "id":"4",
        "image":"white-gray-jeanine-armchair.png",
        "title":"Jeanine armchair, KUKO",
        "price": 210.00
    }
]
`

const lampsJSON = `
[
    {
        "id":"5",
        "image":"white-lamp.png",
        "title":"3-peace Minimal, ARM",
        "price": 110.00
    },
    {
        "id":"6",
        "image":"red-lamp.png",
        "title":"Red Drops, KUKO",
        "price": 210.00
    },
    {
        "id":"7",
        "image":"gold-lamp.png",
        "title":"Delar, Uni Studio",
        "price": 350.00
    },
    {
        "id":"8",
        "image":"bright-lamp.png",
        "title":"Bubbles, Udion",
        "price": 410.00
    }
]
`
const tablesJSON = `
[
    {
        "id":"9",
        "image":"white-table.png",
        "title":"Upi table, Landstrom",
        "price": 90.00
    },
    {
        "id":"10",
        "image":"gold-table.png",
        "title":"Monica table, Orro",
        "price": 110.00
    },
    {
        "id":"11",
        "image":"wood-table.png",
        "title":"Snitch cabinet, ARM",
        "price": 100.00
    },
    {
        "id":"12",
        "image":"gray-table.png",
        "title":"Hugo table, KUKO studio",
        "price": 99.00
    }
]
`
function renderProducts(products){
    const productsContainer = document.querySelector('.shop-range');
    for(const product of products)
        productsContainer.innerHTML += `
        <article>
                <img src="img/${product.image}" alt="${product.title}">
                <h3>${product.title}</h3>
                <p>$${product.price} USD</p>
                <button class="order nav-btn">Order now</button>
        </article>
        `
    }

    document.querySelector('.armchairs').addEventListener('click', armchairRendering);
    document.querySelector('.lamps').addEventListener('click', lampRendering);
    document.querySelector('.tables').addEventListener('click', tableRendering);

    function armchairRendering(){
     const productsContainer = document.querySelector('.shop-range');
     productsContainer.innerHTML = '';
     renderProducts(JSON.parse(armchairsJSON));
    }

    function lampRendering(){
     const productsContainer = document.querySelector('.shop-range');
     productsContainer.innerHTML = '';
     renderProducts(JSON.parse(lampsJSON));
    }

    function tableRendering(){
     const productsContainer = document.querySelector('.shop-range');
     productsContainer.innerHTML = '';
     renderProducts(JSON.parse(tablesJSON));
    }

    