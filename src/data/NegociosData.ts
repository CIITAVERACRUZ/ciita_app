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
        images: [
            'https://i.ytimg.com/vi/iId9X8HyOtQ/maxresdefault.jpg'
        ],
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
        images: [
            'https://media-cdn.tripadvisor.com/media/photo-s/05/73/38/af/getlstd-property-photo.jpg'
        ],
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
        images: [
            'https://media-cdn.tripadvisor.com/media/photo-s/08/67/d4/f5/tajin-chico.jpg'
        ],
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
        images: [
            'https://lh3.googleusercontent.com/-YpgXcA-8Wn0/WOxojH7qlYI/AAAAAAAAIKM/Z4MRAntLxg4K0rZNFelhAUMCF1bXFJlwACLIBGAYYCw/photo.jpg'
        ],
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
        images: [
            'https://media-cdn.tripadvisor.com/media/photo-s/0e/93/86/07/cerveza-totonaca-artesanal.jpg'
        ],
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
        images: [
            ''
        ],
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
        images: [
            'data:image/jpeg;base64,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'
        ],
        productsImages: []
    },
    {
        name: 'Mercado de artesanías',
        description: 'Este lugar reúne una gran cantidad de oferentes de artesanías. Es el lugar ideal para conseguir los recuerdos de tu viaje.',
        location: {
            lat: 20.4459505,
            lng: -97.326185
        },
        images: [
            'https://www.vanguardiaveracruz.mx/wp-content/uploads/2020/08/mer2.jpg'
        ],
        productsImages: []
    },
    {
        name: 'Artesanías Kachikin',
        description: 'El lugar ideal para llevar algo de Papantla a tu hogar, ya que ofrece ropa típica, curiosidades y alimentos.',
        location: {
            lat: 20.4459705,
            lng: -97.326185
        },
        images: [
            'https://fastly.4sqi.net/img/general/600x600/451956_eY-wzqGTHsnIrofTNfeFN4DfzYdXU65I0dC0rNjsads.jpg'
        ],
        productsImages: []
    },
]