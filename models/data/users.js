let users = [
    {
        "name": "Chiara",
        "lastName": "Signori",
        "role": "admin",
        "photo": "https://www.pngarts.com/files/3/Employee-Avatar-Transparent-Image.png",
        "age": 19,
        "email": "chiarasignori37@gmail.com",
        "password": "chiara19",
        "code": "cghs25ds",
        "verified": true,
        "logged": true
      },
      {
        "name": "Matias",
        "lastName": "Rodriguez",
        "role": "admin",
        "photo": "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png",
        "age": 23,
        "email": "mati.rodriguezph@gmail.com",
        "password": "mati23",
        "code": "45da17q9",
        "verified": true,
        "logged": true
      },
      {
        "name": "Sabrina",
        "lastName": "Meritano",
        "role": "admin",
        "photo": "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359554_960_720.png",
        "age": 29,
        "email": "sabrimeritano@gmail.com",
        "password": "sabri29",
        "code": "54dss26",
        "verified": true,
        "logged": true
      },
      {
        "name": "Stefano",
        "lastName": "Signori",
        "role": "admin",
        "photo": "https://www.pngplay.com/wp-content/uploads/12/User-Avatar-Profile-Clip-Art-Transparent-PNG.png",
        "age": 24,
        "email": "stefanosignori.98@gmail.com",
        "password": "stefano24",
        "code": "26fesj25",
        "verified": true,
        "logged": true
      }
]

require('dotenv').config()
require('../../config/database')
const User = require('../User')

users.forEach(element => {
    User.create({
        name: element.name,
        lastName: element.lastName,
        role: element.role,
        photo: element.photo,
        age: element.age,
        email: element.email,
        password: element.password,
        code: element.code,
        verified: element.verified,
        logged: element.logged
    })
})