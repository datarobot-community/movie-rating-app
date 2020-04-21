# Sample app - Movie Rating Predictor and Classifier

An example web application showing how to use DataRobot to classify movie ratings by audiences.
Demo: https://movie-rating-classifier.now.sh/

The app lets you rate the movie and uses ML to clasify your rating in either positive or negative - Rotten Tomatoes style. <br/>
It uses DataRobot to create the ML model, deploy it, and expose it as a prediction API, and the movie database from RapidAPI to get movie details. <br/>
The movies you can rate are taken from IMDB's top 250 movies of all time.

## Usage

### Requirements 

- You will need a [DataRobot](datarobot.com) account and access to deployments. You can apply for a DataRobot trial account using this link: https://www.datarobot.com/lp/trial/.

- You will also need a [RapidAPI](rapidapi.com) account and subscribe to the [Movie Database (IMDB Alternative) API](https://rapidapi.com/rapidapi/api/movie-database-imdb-alternative)

- To deploy, you can use the free [Vercel Now](https://vercel.com/now).

### Usage

- Train the model in DataRobot using `resource/labeledTrainData.tsv`, and deploy the trained model.
- To run locally, create a file `movie-rating-classifier/.env` and populate it with the following environment variables, replacing `YOUR_...` values for the actual values.
- Run `now dev`

```sh
MOVIE_DB_KEY=YOUR_MOVIE_DB_KEY
DATAROBOT_PREDICTION_SERVER=YOU_DATAROBOT_PREDICTION_SERVER
DATAROBOT_DEPLOYMENT_ID=YOUR_DATAROBOT_DEPLOYMENT_ID
DATAROBOT_API_KEY=YOUR_DATAROBOT_API_KEY
DATAROBOT_KEY=YOUR_DATAROBOT_KEY
```

- To deploy directly, populate `movie-rating-classifier/now.json` `env` field with your actual keys, deployment ID, and server hostname.
- Run `now`

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


