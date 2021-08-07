import { Artesano, Hotel, Restaurant } from "../interfaces/AppInterfaces";

export const Restaurants: Restaurant[] = [
    {
        name: 'Plaza Pardo',
        description: 'Restaurant especializado en comida mexicana, como deliciosos antojitos típicos, carnes y mariscos',
        schedule: 'Lunes a Domingo 7:30 a.m. – 11:30 p.m',
        location: {
            lat: 20.4469875,
            lng: -97.3240159
        },
        images: [],
        products: [],
        productsImages: []
    },
    {
        name: 'Nakú Restaurante Papanteco',
        description: 'Restaurante orientado a preservar la cultura gastronómica de la región del Totonacapan',
        schedule: 'Lunes a Domingo 8:00 a.m. – 8:00 p.m',
        location: {
            lat: 20.4580135,
            lng: -97.3130713
        },
        images: [],
        products: [],
        productsImages: []
    },
    {
        name: 'Tajín Chico (Akgtzu)',
        description: 'Restaurante tradicional con un encanto típico especializado en la gastronomía del Totonacapan.',
        schedule: 'Martes a Domingo 9:30 a.m. – 6:30 p.m',
        location: {
            lat: 20.4437708,
            lng: -97.3985311
        },
        images: [],
        products: [],
        productsImages: []
    },
    {
        name: 'Restaurante La Parroquia',
        description: 'Este restaurante ofrece una gran variedad de platillos mexicanos, destacándose el sabor jarocho.',
        schedule: 'Lunes a Domingo 7:00 a.m. – 11 p.m',
        location: {
            lat: 20.4456119,
            lng: -97.3235387,
        },
        images: [],
        products: [],
        productsImages: []
    },
    {
        name: 'Al Son del Chapala',
        description: 'Restaurant con deliciosos platillos mexicanos tradicionales.',
        schedule: 'Lunes a Domingo 9:00 a.m. – 10 p.m.',
        location: {
            lat: 20.4456119,
            lng: -97.3235387,
        },
        images: [],
        products: [],
        productsImages: []
    },  
]

export const Hoteles: Hotel[] = [
    {
        name: 'Hotel Tajín',
        description: 'El Hotel Tajín ofrece una placentera y cómoda estancia para gozar la mejor experiencia durante su viaje por esta linda región.',
        location: {
            lat: 20.4458443,
            lng: -97.3233174
        },
        checkIn: 'Hora de entrada: 15:00 hrs. Hora de salida: 12:00 hrs',
        images: [],
        productsImages: [],
        products: [
            {
                name: 'Habitación estándar',
                description: '1 cama matrimonial. Para 2 personas',
                price: 525
            },
            {
                name: 'Habitación doble estándar',
                description: '2 camas matrimoniales. Para 4 personas',
                price: 672
            },
            {
                name: 'Suite Junior',
                description: 'Cama matrimonial o King Size. Para 3 personas',
                price: 969
            },
            {
                name: 'Suite Junior',
                description: '2 Camas matrimoniales. Para 4 personas',
                price: 1232
            },
        ],
        hasRestaurant: false
    },
    {
        name: 'Hotel María Otilia Falla',
        description: 'El Hotel ofrece una cómoda estadía gracias a sus instalaciones, ya que cuenta con WiFi, TV, Minibar, Microondas y baño privado.',
        location: {
            lat: 20.4496022,
            lng: -97.3208168
        },
        checkIn: 'Hora de entrada: 15:00 hrs. Hora de salida: 11:00 hrs.',
        images: [],
        productsImages: [],
        products: [
            {
                name: 'Habitación estándar',
                description: '1 cama matrimonial. Para 2 personas',
                price: 565
            },
            {
                name: 'Habitación superior',
                description: '2 camas individuales.	Para 2 personas',
                price: 610
            },
            {
                name: 'Estándar',
                description: '2 camas matrimoniales. Para 4 personas',
                price: 720
            },
        ],
        hasRestaurant: false
    },
    {
        name: 'Hotel Totonacapan',
        description: 'El Hotel te ofrece instaaciones cómodas y seguras para pasar una estadía placentera.',
        location: {
            lat: 20.4566601,
            lng: -97.3505469
        },
        checkIn: 'Hora de entrada: 14:00 hrs. Hora de salida: 12:00 hrs',
        images: [],
        productsImages: [],
        products: [
            {
                name: 'Habitación cuádruple económica',
                description: '1 cama King y 2 camas individuales. Para 4 personas',
                price: 575
            },
            {
                name: 'Habitación Superior',
                description: '1 cama King. Para 2 personas',
                price: 340
            },
            {
                name: 'Habitación estándar',
                description: '2 camas individuales. Para 2 personas',
                price: 380
            },
            {
                name: 'Habitación triple estándar',
                description: '1 cama queen y 1 cama individual. Para 3 personas',
                price: 420
            },
        ],
        hasRestaurant: false
    },
    {
        name: 'Hotel Santo Domingo',
        description: 'El Hotel Santo Domingo cuenta con cómodas habitaciones con todos los servicios para una relajante estadía.',
        location: {
            lat: 0,
            lng: 0
        },
        checkIn: 'Hora de entrada: 15:00 hrs. Hora de salida: 12:00 hrs.',
        images: [],
        productsImages: [],
        products: [
            {
                name: 'Habitación Triple.',
                description: '3 camas matrimoniales. Para 6 personas',
                price: 800
            },
            {
                name: 'Habitación doble.',
                description: '2 camas individuales. Para 3 personas',
                price: 450
            },
            {
                name: 'Habitación sencilla',
                description: '1 cama matrimonial. Para 2 personas',
                price: 400
            },
        ],
        hasRestaurant: false
    },
]

export const Artesanos: Artesano[] = [
    {
        name: 'Artesanías y Curiosidades “La Josefina”',
        description: 'Venta de ropa típica, recuerdos, juguetes tradicionales, entre muchos otros artículos que pueden ser de interés para los turistas en la región.',
        location: {
            lat: 20.4456063,
            lng: -97.3269644
        },
        images: [],
        productsImages: []
    },
    {
        name: 'Mercado de artesanías',
        description: 'Este lugar reúne una gran cantidad de oferentes de artesanías. Es el lugar ideal para conseguir los recuerdos de tu viaje.',
        location: {
            lat: 20.4459505,
            lng: -97.326185
        },
        images: [],
        productsImages: []
    },
    {
        name: 'Artesanías Kachikin',
        description: 'El lugar ideal para llevar algo de Papantla a tu hogar, ya que ofrece ropa típica, curiosidades y alimentos.',
        location: {
            lat: 20.4459705,
            lng: -97.326185
        },
        images: [],
        productsImages: []
    },
]