const unirest = require("unirest");

module.exports = async (req, res) => {

    let movieId = req.query.id
    console.log(`Movie requested: ${movieId}`)

    let response = await unirest.get(`https://${process.env.MOVIE_DB_HOST}`)
    .query({
        "i": movieId,
        "r": "json"
    })
    .headers({
        "x-rapidapi-host": process.env.MOVIE_DB_HOST,
        "x-rapidapi-key": process.env.MOVIE_DB_KEY
    })

    let movieResponse = response.body

    console.log(`Returning response for film: ${movieResponse.Title} and ID ${movieId}`)
    res.status(200).send(movieResponse)
}