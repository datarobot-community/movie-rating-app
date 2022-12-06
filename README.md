**Please note:** The code in these repos is sourced from the DataRobot user community and is not owned or maintained by DataRobot, Inc. You may need to make edits or updates for this code to function properly in your environment.

# Sample app - Movie Rating Predictor and Classifier

An example web application showing how to use DataRobot to classify movie ratings by audiences.
Demo: https://movie-rating-app.now.sh/

The app lets you rate the movie and uses ML to clasify your rating in either positive or negative - Rotten Tomatoes style. <br/>
It uses DataRobot to create the ML model, deploy it, and expose it as a prediction API, and the movie database from RapidAPI to get movie details. <br/>
The movies you can rate are taken from IMDB's top 250 movies of all time.

There is also a corresponding tutorial available on [DataRobot developer portal](https://api-docs.datarobot.com/docs/tutorial-movie-review-classifier).

## Usage

### Requirements 

- You will need a [DataRobot](datarobot.com) account and access to deployments. You can apply for a DataRobot trial account using this link: https://www.datarobot.com/lp/trial/.

- To deploy, you can use the free [Vercel service](https://vercel.com).

### Usage

- Train the model in DataRobot using `resource/labeledTrainData.tsv`, and deploy the trained model.
- To run locally, create a file `movie-rating-classifier/.env` and populate it with the following environment variables, replacing `YOUR_...` values with the actual values:

```sh
DATAROBOT_URL="https://YOUR_DATAROBOT_URL"
DATAROBOT_DEPLOYMENT_ID=YOUR_DATAROBOT_DEPLOYMENT_ID
DATAROBOT_API_KEY=YOUR_DATAROBOT_API_KEY
```

- Run `vercel dev` (you might have to set up the project in Vercel first)
- To deploy to Vercel, run `vercel` and follow the on-screen instructions

## Repository Contents

- `movie-rating-classifier/` - The React app and 2 serverless functions, ready to be deployed to the [Vercel now](https://vercel.com/now) or similar service.
- `resources/` - dataset used for training

## Development and Contributing

If you'd like to report an issue or bug, suggest improvements, or contribute code to this project, please refer to [CONTRIBUTING.md](CONTRIBUTING.md).

# Code of Conduct

This project has adopted the Contributor Covenant for its Code of Conduct. 
See [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) to read it in full.

# License

Licensed under the Apache License 2.0. 
See [LICENSE](LICENSE) to read it in full.


