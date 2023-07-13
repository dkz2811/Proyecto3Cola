<template >
    <div>
        
    </div>
</template>
<script>
export default {
    name: "InternalProps",
    props:{
    },
    data(){
        return {
            addedItems:[],
            registerd:[
                        { name:"Ramon", email:"ramon@coder.com", password:"1234Abbb"},
                        { name:"Pedro", email:"pedro@coder.com", password:"1234Abbb"}
            ],
            visible:{ "RegisterComp":false, "LogInComp":false ,"HeaderComp":false,"MainCard":true, "CartComp":false},
            navBar:[
                        {title: "Store",comp:"MainCard", to:"/", visible:true},
                        {title: "Register",comp:"RegisterComp", to:"/register", visible:true},
                        {title:"Log In",comp: "LogInComp", to:"/log-in", visible:true},
                        {title:"Cart",comp: "CartComp", to: "/shopping-cart", value: 0, visible:true},
                        {title:"ProductMgm", comp: "CrudProduct", to: "/product-mgm", visible:true}
                ],
                moviles: [
            {
            id: 1,
            price: 699,
            model:"Asus Zenfone 9",
            stock: 10,
            picture: "azf9.jpg",
            specs: [
                    "Fecha: Released 2022, September 15",
                    "Dimensiones: 169g, 9.1mm thickness",
                    "SO: Android 12, up to Android 13",
                    "Almacenamiento: 128GB/256GB",
                    'Pantalla: 5.9"',
                    "Resolucion: 1080x2400 pixels",
                    "Camara: 50MP",
                    "Video: 4320p",
                    "Memoria: 6-16GB RAM",
                    "CPU: Snapdragon 8+ Gen 1",
                    "Bateria: 4300mAh",
                     ]
            },
            {
            id: 2,
            model:"Google Pixel 7",
            stock: 10,
            price: 599,
            picture: "gp7.jpg",
            specs: ["Fecha: Released 2022, October 13",
                    "Dimensiones: 197g, 8.7mm thickness",
                    "SO: Android 13",
                    "Almacenamiento: 128GB/256GB",
                    'Pantalla: 6.3"',
                    "Resolucion: 1080x2400 pixels",
                    "Camara: 50MP",
                    "Video: 2160p",
                    "Memoria: 8GB RAM",
                    "CPU: Google Tensor G2",
                    "Bateria: 4355mAh",
                    ]
            },
            {
            id: 3,
            model:"Google Pixel 7 Pro",
            stock: 10,
            price: 699,
            picture: "gp7p.jpg",
            specs: [
                    "Fecha: Released 2022, October 13",
                    "Dimensiones: 212g, 8.9mm thickness",
                    "SO: Android 13",
                    "Almacenamiento: 128GB/256GB/512GB",
                    'Pantalla: 6.7" ',
                    "Resolucion: 1440x3120 pixels",
                    "Camara: 50MP",
                    "Video: 2160p",
                    "Memoria: 8/12GB RAM",
                    "CPU: Google Tensor G2",
                    "Bateria: 5000mAh",
                    ]
            },
            {
            id: 4,
            model:"Apple iPhone 13 mini",
            stock: 10,
            price: 599,
            picture: "ip13m.jpg",
            specs: [
                    "Fecha: Released 2021, September 24",
                    "Dimensiones: 141g, 7.7mm thickness",
                    "SO: iOS 15, up to iOS 16.5",
                    "Almacenamiento: 128GB/256GB/512GB",
                    'Pantalla: 5.4"',
                    "Resolucion: 1080x2340 pixels",
                    "Camara: 12MP",
                    "Video: 2160p",
                    "Memoria: 4GB RAM",
                    "CPU: Apple A15 Bionic",
                    "Bateria: 2438mAh",
                    ]
            },
            {
            id: 5,
            model:"Apple iPhone 14",
            stock: 10,
            price: 799,
            picture: "ip14.jpg",
            specs: [
                    "Fecha: Released 2022, September 16",
                    "Dimensiones: 172g, 7.8mm thickness",
                    "SO: iOS 16, up to iOS 16.5",
                    "Almacenamiento: 128GB/256GB/512GB",
                    'Pantalla: 6.1"',
                    "Resolucion: 1170x2532 pixels",
                    "Camara: 12MP",
                    "Video: 2160p",
                    "Memoria: 6GB RAM",
                    "CPU: Apple A15 Bionic",
                    "Bateria: 3279mAh",
                    ]
            },
            {
            id: 6,
            model:"Apple iPhone 14 Pro",
            stock: 10,
            price: 999,
            picture: "ip14p.jpg",
            specs:[
                    "Fecha: Released 2022, September 16",
                    "Dimensiones: 206g, 7.9mm thickness",
                    "SO: iOS 16, up to iOS 16.5",
                    "Almacenamiento: 128GB/256GB/1TB",
                    'Pantalla: 6.1"',
                    "Resolucion: 1179x2556 pixels",
                    "Camara: 48MP",
                    "Video: 2160p",
                    "Memoria: 6GB RAM",
                    "CPU: Apple A16 Bionic",
                    "Bateria: 3200mAh",
                    ]
            },
            {
            id: 7,
            model:"Nokia 1100",
            stock: 10,
            price: 10,
            picture: "n1100.jpg",
            specs: [
                    "Fecha: Released 2003, Q3",
                    "Dimensiones: 86g, 20mm thickness",
                    "SO: Nokia OS",
                    "Almacenamiento: No card",
                    'Pantalla: 4"',
                    "Resolucion: 96x65 pixels, 4 lines",
                    "Camara: NO",
                    "Video: No Video recorder",
                    "Memoria: n/a",
                    "CPU: n/a",
                    "Bateria: 850mAh",
                    ]
            },
            {
            id: 8,
            model:" Nokia 6300 4",
            stock: 10,
            price: 70,
            picture: "n6300.jpg",
            specs:[
                    "Fecha: Released 2021, January 0",
                    "Dimensiones:  104.7g, 13.7mm thicknes",
                    "SO:  KaiOS 2.",
                    "Almacenamiento: 4GB, microSDHC",
                    'Pantalla: 2.4"',
                    "Resolucion:  240x320 pixel",
                    "Camara: 0.3M",
                    "Video:  n/a",
                    "Memoria:  512MB RA",
                    "CPU:  Snapdragon 21",
                    "Bateria:  1500mAh",
                    ]
            },
            {
            id: 9,
            model:"OnePlus 11",
            stock: 10,
            price: 699,
            picture: "op11.jpg",
            specs: [
                    "Fecha: Released 2023, January 09",
                    "Dimensiones: 205g, 8.5mm thickness",
                    "SO: Android 13, OxygenOS 13, ColorOS 13",
                    "Almacenamiento: 128GB/256GB/512GB",
                    'Pantalla: 6.7"',
                    "Resolucion: 1440x3216 pixels",
                    "Camara: 50MP",
                    "Video: 4320p",
                    "Memoria: 8-16GB RAM",
                    "CPU: Snapdragon 8 Gen 2",
                    "Bateria: 5000mAh",
                    ]
            },
            {
            id: 10,
            model:"OnePlus Nord N30",
            stock: 10,
            price: 299,
            picture: "opn.jpg",
            specs: [
                    "Fecha: Released 2023, June 08",
                    "Dimensiones: 195g, 8.3mm thickness",
                    "SO: Android 13, OxygenOS 13.1",
                    "Almacenamiento: 128GB, microSDXC",
                    'Pantalla: 6.72"',
                    "Resolucion: 1080x2400 pixels",
                    "Camara: 108MP",
                    "Video: 1080p",
                    "Memoria: 8GB RAM",
                    "CPU: Snapdragon 695 5G",
                    "Bateria: 5000mAh",
                    ]
            },
            {
            id: 11,
            model:"Samsung Galaxy A54",
            stock: 10,
            price: 449,
            picture: "sa54.jpg",
            specs: ["Fecha: Released 2023, March 24",
                    "Dimensiones: 202g, 8.2mm thickness",
                    "SO: Android 13, One UI 5.1",
                    "Almacenamiento: 128GB/256GB, microSDXC",
                    'Pantalla: 6.4"',
                    "Resolucion: 1080x2340 pixels",
                    "Camara: 50MP",
                    "Video: 2160p",
                    "Memoria: 6/8GB RAM",
                    "CPU: Exynos 1380",
                    "Bateria: 5000mAh",
                    ]
            },
            {
            id: 12,
            model:"Samsung Galaxy S22 Ultra 5G",
            stock: 10,
            price: 799,
            picture: "ss22u.jpg",
            specs: ["Fecha: Released 2022, February 25",
                    "Dimensiones: 228g / 229g (mmWave), 8.9mm thickness",
                    "SO: Android 12, up to Android 13, One UI 5.1",
                    "Almacenamiento: 128GB/256GB/1TB",
                    'Pantalla: 6.8"',
                    "Resolucion: 1440x3088 pixels",
                    "Camara: 108MP",
                    "Video: 4320p",
                    "Memoria: 8/12GB RAM",
                    "CPU: Exynos 2200",
                    "Bateria: 5000mAh",
                    ]
            },
            {
            id: 13,
            model:"Sony Xperia 1 V",
            stock: 10,
            price: 1399,
            picture: "sx1v.jpg",
            specs:[
                "Fecha: Exp. release 2023, July 28",
                "Dimensiones: 187g, 8.3mm thickness",
                "SO: Android 13",
                "Almacenamiento: 256GB/512GB, microSDXC",
                'Pantalla: 6.5"',
                "Resolucion: 1644x3840 pixels",
                "Camara: 48MP",
                "Video: 2160p",
                "Memoria: 12GB RAM",
                "CPU: Snapdragon 8 Gen 2",
                "Bateria: 5000mAh",
                ]
            }
        ]
        }
    },
}
</script>
<style>
    
</style>