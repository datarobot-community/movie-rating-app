const unirest = require("unirest");

module.exports = async (req, res) => {

    let review = req.body.review
    console.log("Predicting review: ")
    console.log(review)

    let response = await unirest.post(`${process.env.DATAROBOT_URL}/api/v2/deployments/${process.env.DATAROBOT_DEPLOYMENT_ID}/predictions`)
    .headers({
        "Authorization": `Bearer ${process.env.DATAROBOT_API_KEY}`
    })
    .type('json')
    .send(
        [{
        review
    }]
    )
    res.send({prediction: response.body.data[0].prediction})
}