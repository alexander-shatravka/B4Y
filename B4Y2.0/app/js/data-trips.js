window.catalog = [{
    id: '0',
    dateAdded: '2017-05-15T16:58:40.000Z',
    title: 'Ролл Аляска',
    description: 'The best food for you and your friends.Филадельфия',
    placeholder: null,
    discountedPrice: 145,
    price: 145,
    popularity: 1,
    hasNew: true,
    category: ['суши', 'presentation'],
    weight: 220,
    info: {'грамм':'215','калорий':'400','гривен':'145'},
    ingredients: 'Состав: рис, нори, сливочный сыр, лосось 50г., огурец, японский майонез, авокадо, тобико(икра летучей рыбы)',
    ingredientsFull: {'рис':'100', 'нори':'1шт', 'лосось':'50гр', 'огурец':'10гр', 'майонез': '10гр'},
    size: 8,
    thumbnail: 'img/dishes/Alaska-600.jpg', // replace with path to image extracted from catalog layout
    imgFull: 'img/dishes/alaska-big.jpg' // replace with paths to images extracted from item layout
},{
    id: '1',
    dateAdded: '2017-05-15T16:58:40.000Z',
    title: 'Ролл Королевский Дракон',
    description: 'The best food for you and your friends.Филадельфия',
    placeholder: null,
    discountedPrice: 370, 
    price: 370,
    popularity: 1,
    hasNew: true,
    category: ['суши', 'presentation'],
    weight: 230,
    info: {'грамм':'243','калорий':'550','гривен':'370'},
    ingredients: 'Состав: рис, нори, сливочный сыр, авокадо, тобико (икра летучей рыбы), соус унаги, кунжут, 2 тигровые креветки, угорь 75 г.',
    size: 8,
    thumbnail: 'img/dishes/Dragon-600.jpg', // replace with path to image extracted from catalog layout
    imgFull: 'img/dishes/Dragon-big.jpg' // replace with paths to images extracted from item layout
},];


window.catalog.sort(function(a,b){
    return a.id - b.id;
})
