// ДЗ
/* Задача 1
const numbers = {
    keyin1: 1,
    keyin2: 2,
    keyin3: 3,
    keyin4: 4,
    keyin5: 5,
    keyin6: 6,
    keyin7: 7,
}
for (const key in numbers) {
    if (numbers[key] >= 3) {
        console.log(numbers[key]);
    }
}
*/

/* Задача 2
const post = {
    author: "John", // вывести этот текст
    postId: 23,
    comments: [ {
        userId: 10,
        userName: "Alex",
        text: "lorem ipsum",
        rating: {
            likes: 10,
            dislikes: 2, // вывести это число
            },
        }, 
        
        {
            userId: 5, // вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", // вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1,
            },
        },
    ],
};
console.log(post['author']);
// console.log(post.author)
console.log(post.comments[0].rating.dislikes)
console.log(post.comments[1].userId)
console.log(post.comments[1].text)

// for (const arr of post.comments) {
//     console.log(`${arr.userId}, ${arr.text}`);
//     // for (const key in arr.rating) {
//     //     console.log(key);
//     // }
//     console.log(arr['rating']);
// }
*/

/* Задача 3
const products = [
    {
    id: 3,
    price: 200,
    },
    {
    id: 4,
    price: 900,
    },
    {
    id: 1,
    price: 1000,
    },
];
let reducePrice = 0
products.forEach(element => {
    reducePrice = element['price'] - (element['price'] * 0.15)
    console.log(reducePrice)
});
*/

/* Задача 4
const products = [
    {
    id: 3,
    price: 127,
    photos: ["1.jpg", "2.jpg",],
    },

    {
    id: 5,
    price: 499,
    photos: [],
    },

    {
    id: 10,
    price: 26,
    photos: ["3.jpg",],
    },

    {
    id: 8,
    price: 78,
    },
];

// // a)
// let arrFilter = products.filter(elem => elem != products[3]);
// console.log(arrFilter);

// // b)
// const compProducts = (a,b) => {
//     return a.price - b.price
// };
// products.sort(compProducts).forEach((elem) => console.log(elem));
*/

/* Задача 5
const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

const obj = {};

if (en.length === ru.length) {
    for (let i = 0; i < en.length; i++) {
        obj[en[i]] = ru[i]
    }
}
console.log(obj);
*/
