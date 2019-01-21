let starwars = require("./starwars")

starwars.findPersonWithMostAppearances()
     .then(d => console.log(`The person with most film appearances is ${d}`))
    
starwars.findPlanetsWithGreatestPopulation()
    .then(d => console.log(`The planet with greatest population is ${d.name} with a population of ${d.population}`))
    
starwars.findPlanetsThatAppearsInMostFilms()
    .then(d => console.log(`The planet that appears in most films is ${d.name}`))
    
    
    