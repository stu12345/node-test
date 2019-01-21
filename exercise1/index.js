const request = require("superagent");
var StreamFromPromise = require("stream-from-promise");
var sort = require('sort-stream')

// scrape 9 pages of data
let ess = [1,2,3,4,5,6,7,8,9].map(n => {
        return request.get(`https://swapi.co/api/people/?page=${n}`)
})

let pp = new Promise((resolve, reject) => {
    Promise.all(ess)
    .then(d => {
        resolve(
                Buffer.from(JSON.stringify(
                    // merge 2d array into 1d array
                    d.map(dd => { 
                        return dd.body.results
                    }).reduce((a,c) => a ? a.concat(c) : c)
                ))
        )
    })
    .catch(err => reject(err))
})


StreamFromPromise(pp)
 .pipe(sort((a, b) => b.films.length - a.films.length)) // Sort by film count asc
 //.pipe(process.stdout)
 .on("data", data => console.log(`Person who appeared in most films is ${JSON.parse(data)[0].name}`))


