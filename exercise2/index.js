let starwars = require("./starwars")

starwars.findPersonWithMostAppearances()
    .then(d => console.log(`Person with most film appearances is ${d}`))