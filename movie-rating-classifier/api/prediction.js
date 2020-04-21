const unirest = require("unirest");

module.exports = async (req, res) => {

    let review = req.body.review
    console.log("Predicting review: ")
    console.log(review)

    let response = await unirest.post(`${process.env.DATAROBOT_PREDICTION_SERVER}/predApi/v1.0/deployments/${process.env.DATAROBOT_DEPLOYMENT_ID}/predictions`)
    .headers({
        "Authorization": `Bearer ${process.env.DATAROBOT_API_KEY}`,
        "datarobot-key": process.env.DATAROBOT_KEY
    })
    .type('json')
    .send(
        [{
        review
    }]
    )

    res.send({prediction: response.body.data[0].prediction})




}