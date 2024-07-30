const Article = require("./Article")
const Author = require("./Author")
const City = require("./City")
const Country = require("./Country")

//! articles -> authorId
Article.belongsTo(Author)
Author.hasMany(Article)


//! City --> countryId
// Relación: Una ciudad (City) pertenece a un país (Country)
City.belongsTo(Country)
// Relación: Un país (Country) tiene muchas ciudades (City)
Country.hasMany(City)