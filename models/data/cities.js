let cities = [
    {  
        "name": "Monterrey",
        "continent": "America del Norte",
        "photo": "https://cdn.travelsafe-abroad.com/wp-content/uploads/f2e4cf07538afb05aa5894cc2b8c9567-700.jpg",
        "population": 5341175,
        "userId": "636d5a9512a6c5227df1ef0d" //sacar corchetes al userId//
    },
    {   
        "name": "Veracruz",
        "continent": "America del Norte",
        "photo": "https://airlines-airports.com/wp-content/uploads/2016/09/Mexico-Veracruz.jpg",
        "population": 405952,
        "userId": "636d5a9512a6c5227df1ef0d"
    },
    {   
        "name": "Buenos Aires",
        "continent": "America del Sur",
        "photo": "https://arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/EWRWZLV7FZEM7C24TIEPFBJCP4.jpg",
        "population": 47327407,
        "userId": "636d5a9512a6c5227df1ef0d"
    },
    {   
        "name": "Cordoba",
        "continent": "America del Sur",
        "photo": "https://px.cdn.lanueva.com/012017/1511593866240.webp?cw=1121&ch=633&extw=jpg",
        "population": 1655481,
        "userId": "636d5a9512a6c5227df1ef0e"
    },
    {   
        "name": "Las Vegas",
        "continent": "America del Norte",
        "photo": "https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_627,q_auto,w_1200/categoryimages/14/66/14667_v10.jpeg",
        "population": 583756,
        "userId": "636d5a9512a6c5227df1ef0e"
    },    
    {   
        "name": "Miami",
        "continent": "America del Norte",
        "photo": "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/MYTNL4OIFBCJNCE5PTOC464XNI.jpg",
        "population": 441003,
        "userId": "636d5a9512a6c5227df1ef0e"
    },
    {   
        "name": "Rio de Janeiro",
        "continent": "America del Sur",
        "photo": "https://www.fotonostra.com/albums/america/fotos/rio.jpg",
        "population": 6320446,
        "userId": "636d5a9512a6c5227df1ef0c"
    },
    {   
        "name": "Natal",
        "continent": "America del Sur",
        "photo": "https://www.tangol.com/Fotos/Tours/city-tour-con-puesta-de-sol_2610202011181027221.Mobile.JPG",
        "population": 896708,
        "userId": "636d5a9512a6c5227df1ef0c"
    },
    {   
        "name": "Lima",
        "continent": "America del Sur",
        "photo": "https://icoplastperu2022.org/wp-content/uploads/revslider/Test-Slider/BG_381278428-min.jpg",
        "population": 9943800,
        "userId": "636d5a9512a6c5227df1ef0c"
    },
    {
        "name": "Arequipa",
        "continent": "America del Sur",
        "photo": "https://planetofhotels.com/guide/sites/default/files/styles/paragraph__live_banner__lb_image__1880bp/public/live_banner/Arequipa.jpg",
        "population": 1142900,
        "userId": "636d5a9512a6c5227df1ef0b"
    },    
    {
        "name": "Bogota",
        "continent": "America del Sur",
        "photo": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/cb/6f/24/caption.jpg?w=600&h=400&s=1",
        "population": 7901653,
        "userId": "636d5a9512a6c5227df1ef0b"
    },    
    {
        "name": "Medellin",
        "continent": "America del Sur",
        "photo": "https://cdn.getyourguide.com/img/location/5cced3e295e02.jpeg/99.jpg",
        "population": 1142900,
        "userId": "636d5a9512a6c5227df1ef0b"
    }
]

require('dotenv').config()
require('../../config/database')
const City = require('../City')

cities.forEach(element => {
    City.create({
        name: element.name,
        continent: element.continent,
        photo: element.photo,
        population: element.population,
        userId: element.userId
    })
})