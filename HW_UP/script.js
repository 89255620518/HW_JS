// ------- ДЗ -------

// Задача 1
/*
const musicCollections = [

    {
        title: "The Dark Side of the Moon",
        artist: "Pink Floyd",
        year: "1973"
    },

    {
        title: "Призрак Оперы",
        artist: "Эндрю Ллойд Уэббер",
        year: "1986"
    },

    {
        title: "Millennium",
        artist: "Backstreet Boys",
        year: "1999"
    }

]

musicCollections[Symbol.iterator] = function () {
    return {
        current: 0,
        to: this.length,
        next() {
            return this.current < this.to ? { done: false, value: musicCollections[this.current++] } : { done: true };
        }
    }
}

for (const musicCollection of musicCollections) {
    console.log(` Альбом: ${musicCollection.title}\n Исполнитель: ${musicCollection.artist} \n Год выпуска: ${musicCollection.year}`);
}
*/

// Задача 2
/*
// Повара и блюда
let cookSpecs = new Map();
cookSpecs.set('Victor', ['Pizza Margarita', 'Pizza Pepperoni'])
    .set('Olga', ['Sushi Filadelfia', 'Sushi Kalifornia'])
    .set('Dmitriy', ['Dessert Tiramicy', 'Dessert Cheezkeyk']);
console.log(cookSpecs);


// Заказы
let orders = new Map();
orders.set('Alexey', [cookSpecs.get('Victor')[1], cookSpecs.get('Dmitriy')[0]])
    .set('Maria', [cookSpecs.get('Olga')[1], cookSpecs.get('Victor')[0]])
    .set('Irina', cookSpecs.get('Dmitriy')[1])
console.log(orders);
*/