

let personAccount: any = {
    firstName: 'Noemi',
    lastName: 'Molina',
    incomes: 725,
    expenses: 'quels frais',
    totalIncome: function () {
        return `${this.incomes}`
    },
    totalExpense: function () {
        return `${this.expenses}`

    },
    accountInfo: function () {

    },
    addIncome: function () {

    },
    addExpense: function () {

    },
    accountBalance: function () {

    },
};

// tablo des exercices qui suivent :

const usersBis: any = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt: '08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt: '08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt: '08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt: '08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt: '08/01/2020 10:00 AM',
        isLoggedIn: false
    }
];

const products: any = [
    {
        _id: 'eedfcf',
        name: 'mobile phone',
        description: 'Huawei Honor',
        price: 200,
        ratings: [
            { userId: 'fg12cy', rate: 5 },
            { userId: 'zwf8md', rate: 4.5 }
        ],
        likes: []
    },
    {
        _id: 'aegfal',
        name: 'Laptop',
        description: 'MacPro: System Darwin',
        price: 2500,
        ratings: [],
        likes: ['fg12cy']
    },
    {
        _id: 'hedfcg',
        name: 'TV',
        description: 'Smart TV:Procaster',
        price: 400,
        ratings: [{ userId: 'fg12cy', rate: 5 }],
        likes: ['fg12cy']
    }
];


// 2 a :

function signUp(nouveauProfil: { _id: string, username: string, email: string, password: string, createdAt : Date, isLoggedIn : boolean }) {
    let emailAlreadyExists = usersBis.some((usermail: { email: string }) => usermail.email === nouveauProfil.email);
    let usernameAlreadyExists = usersBis.some((userUserName: { username: string }) => userUserName.username === nouveauProfil.username);
    if (emailAlreadyExists) {
        return ' Le mail ou le username existent déjà en fait !'
    } else if (usernameAlreadyExists) {
        return ' Le mail ou le username existent déjà en fait !'

    } else {
        usersBis.push(nouveauProfil)
    }

    return 'ok'; 
};

console.log(signUp(
    {
        _id: '1234a',
        username: 'darkno666',
        email: 'nono@nono.com',
        password: 'eho',
        createdAt : new Date(),
        isLoggedIn : true,
    }
))

// 2 b
function signIn(email: string, password: string) {
    let userInfos = usersBis.find((mailAndPasswordOfUser: { email: string, password: string }) => mailAndPasswordOfUser.email === email && mailAndPasswordOfUser.password === password);
    if (userInfos) {
        return 'connexion réussie'
    } else {
        return 'connexion echouée'
    }

};

console.log(signIn('thomas@thomas.com', '123333')) 

// 3 a

function rateProduct(productName : string, userRate : {userId : string, rate : number }) {
    let product = products.find((p: { name: string }) => p.name === productName)
    if (product) {
        product.ratings.push(userRate);
        return product      
    }
    return products
};

console.log(rateProduct('Laptop',
{
    userId : 'Hank',
    rate : 0
}

));

// 3 b

let averageRating = (nomDuProduit: string) => {
    let total = 0;
    let produit: any;

    for (let prod of products) {
        if (prod.name === nomDuProduit)
            produit = prod;
    }

    for (let lUserQuiRateLeProduit of produit.ratings) {
        total += lUserQuiRateLeProduit.rate;
    }
    return total / produit.ratings.length;
}
console.log('la note moyenne du produit choisi est de : ', averageRating('mobile phone'), ' /5 jimagine'); 

// 4


function likeProduct(productNameToLike : string, IDOfTheUserWhoLikedIt : string ) {
    let product = products.find((p : { name : string }) => p.name === productNameToLike)
    if (product) {
        if (product.likes.length === 0) {
        product.likes.push(IDOfTheUserWhoLikedIt);
        return product
        } else {
           product.likes.pop();
           return product

        }
    }
    return products
};

console.log(likeProduct('Laptop', 'Hank')) 


