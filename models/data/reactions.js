let reactions = [
    {
        "itineraryId": "637261aad9e73fdc6a602eed",
        "name": "like",
        "icon": "https://cdn-icons-png.flaticon.com/512/456/456115.png",
        "iconBack": "https://cdn-icons-png.flaticon.com/512/739/739282.png",
        "userId": []
    },
    {
        "itineraryId": "637261aad9e73fdc6a602eed",
        "name": "not-like",
        "icon": "https://cdn-icons-png.flaticon.com/512/1612/1612768.png",
        "iconBack": "https://cdn-icons-png.flaticon.com/512/1612/1612623.png",
        "userId": []
    },
    {
        "itineraryId": "637261aad9e73fdc6a602eed",
        "name": "love",
        "icon": "https://cdn-icons-png.flaticon.com/512/2107/2107845.png",
        "iconBack": "https://cdn-icons-png.flaticon.com/512/2107/2107952.png",
        "userId": []
    },
    {
        "itineraryId": "637261aad9e73fdc6a602eed",
        "name": "surprise",
        "icon": "https://cdn-icons-png.flaticon.com/512/2341/2341934.png",
        "iconBack": "https://cdn-icons-png.flaticon.com/512/2341/2341959.png",
        "userId": []
    }
]

 require('dotenv').config()
 require('../../config/database')
 const Reactions= require('../Reactions')
 const Itinerary = require('../Itinerary')
    
 
 reactions.forEach(element =>{
     Itinerary.find({})
     .then (itinerary => {
        console.log('itinerarios encontrados ',itinerary.length)
        itinerary.forEach(itinerary =>{
            Reactions.create({
                name: element.name,
                icon: element.icon,
                iconBack: element.iconBack,
                itineraryId: itinerary._id,
                userId: itinerary.userId
            })
            console.log('reacciones creadas ',element.name," ", itinerary.name);
        })
    })
    .catch(err => console.log(err))
 })


