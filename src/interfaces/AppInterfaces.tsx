export interface User{
    status: boolean,
    name: string,
    email: string,
    type: 'business' | 'turist'
}

export interface Location{
    lat: number,
    lng: number
}

export interface Rate{
    title: string,
    opinion: string,
    rate: number
    user: User
}

export interface Platillo{
    name: string,
    description?: string,
    places?: Restaurant[],
    image?: string,
}

export interface Habitacion{
    name: string,
    description: string,
    price: number, //multiplicar por tipo de cambio
}

export interface Restaurant{
    name: string,
    description: string,
    schedule: string,
    location: Location,
    images: string[],
    productsImages: string[],
    products: Platillo[],
    menu?: string,
    rate?: number
    numRates?: number
    opinions?: Rate[]
}

export interface Hotel{
    name: string,
    description: string,
    location: Location,
    checkIn: string,
    images: string[],
    productsImages: string[],
    products: Habitacion[],
    hasRestaurant: boolean,
    restaurantSchedule?: string,
    restaurantImages?: string[],
    restaurantProductsImages?: string[]
    restaurantProducts?: Platillo[]
    menu?: string,
    rate?: number
    numRates?: number
    opinions?: Rate[]
}

export interface Artesano{
    name: string,
    description: string,
    location: Location,
    images: string[],
    productsImages: string[],
    rate?: number
    numRates?: number
    opinions?: Rate[]
}

