const dataProductsItems = `
    [
        {
            "name": "ELLERY X M'O CAPSULE",
            "url": "./image/card_1.png",
            "infoText": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
            "price": "$52"
        },

        {
            "name": "ELLERY X M'O CAPSULE",
            "url": "./image/card_2.png",
            "infoText": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
            "price": "$52"
        },

        {
            "name": "ELLERY X M'O CAPSULE",
            "url": "./image/card_3.png",
            "infoText": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
            "price": "$52"
        },

        {
            "name": "ELLERY X M'O CAPSULE",
            "url": "./image/card_4.png",
            "infoText": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
            "price": "$52"
        },

        {
            "name": "ELLERY X M'O CAPSULE",
            "url": "./image/card_5.png",
            "infoText": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
            "price": "$52"
        },

        {
            "name": "ELLERY X M'O CAPSULE",
            "url": "./image/card_6.png",
            "infoText": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
            "price": "$52"
        }
    ]
`

const dataItemCards = JSON.parse(dataProductsItems);

const productBox = document.querySelector('.product-items');

const productItemCards = document.querySelector('.product-items__cards');
const itemButtonElem = document.querySelector('.product-items__button');
const deleteItemElem = document.createElement('button');
deleteItemElem.classList.add('product-items__delete');
deleteItemElem.textContent = 'Delete All Product';

itemButtonElem.addEventListener('click', function () {
    dataItemCards.forEach(element => {
        const itemCard = document.createElement('div');
        itemCard.classList.add('product-items__cards_card');
    
        const itemCardImg = document.createElement('img');
        itemCard.classList.add('product-items__cards_card_img');
        itemCardImg.src = element.url;
    
        const itemCardText = document.createElement('div');
        itemCardText.classList.add('product-items__cards_card_text');
    
        const itemCardTextName = document.createElement('h1');
        itemCardTextName.classList.add('product-items__cards_card_text_h1');
        itemCardTextName.textContent = element.name;
    
        const itemCardTextInfo = document.createElement('h1');
        itemCardTextInfo.classList.add('product-items__cards_card_text_p');
        itemCardTextInfo.textContent = element.infoText;
    
        const itemCardTextPrice = document.createElement('h2');
        itemCardTextPrice.classList.add('product-items__cards_card_text_price');
        itemCardTextPrice.textContent = element.price;

    
        productItemCards.appendChild(itemCard);
        itemCard.appendChild(itemCardImg);
        itemCard.appendChild(itemCardText);
        itemCardText.appendChild(itemCardTextName);
        itemCardText.appendChild(itemCardTextInfo);
        itemCardText.appendChild(itemCardTextPrice);
    });

    itemButtonElem.remove();
    productBox.appendChild(deleteItemElem);
});

deleteItemElem.addEventListener('click', function () {
    dataItemCards.forEach(element => {
        const itemCard = document.createElement('div');
        itemCard.classList.add('product-items__cards_card');
    
        const itemCardImg = document.createElement('img');
        itemCard.classList.add('product-items__cards_card_img');
        itemCardImg.src = element.url;
    
        const itemCardText = document.createElement('div');
        itemCardText.classList.add('product-items__cards_card_text');
    
        const itemCardTextName = document.createElement('h1');
        itemCardTextName.classList.add('product-items__cards_card_text_h1');
        itemCardTextName.textContent = element.name;
    
        const itemCardTextInfo = document.createElement('h1');
        itemCardTextInfo.classList.add('product-items__cards_card_text_p');
        itemCardTextInfo.textContent = element.infoText;
    
        const itemCardTextPrice = document.createElement('h2');
        itemCardTextPrice.classList.add('product-items__cards_card_text_price');
        itemCardTextPrice.textContent = element.price;

    
        productItemCards.remove(itemCard);
    });

    deleteItemElem.remove();
    productBox.appendChild(itemButtonElem);
});