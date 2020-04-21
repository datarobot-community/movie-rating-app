import React, { useState, useEffect } from 'react';

import { Container, Form, Button, Image } from 'react-bootstrap';
import Footer from './components/Footer';
import Header from './components/Header';
import {getNextMovie, predictMovieScore } from './Api'
import ReviewModal from './components/ReviewModal';

function App() {

  const [review, setReview] = useState("")
  const [movie, setMovie] = useState({
    poster: "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    title: "The Shawshank Redemption",
    year: "1994"
  })
  const [predictionScore, setPredictionScore] = useState("")
  let reviewInput = React.createRef();

  const nextMovie = async () => {
    console.log("Next movie")

    let newMovie = await getNextMovie()
    console.log(newMovie)
    setMovie(newMovie) 
  }

  const submitReview =  async () => {
    console.log("Form submitted!")

    console.log(reviewInput.current.value)
    let myReview = reviewInput.current.value
    console.log(myReview)

    setReview(myReview)
    console.log(review)

    let predictionResponse = await predictMovieScore(myReview)

    let prediction = predictionResponse.prediction === 1 ? '👍' : '👎'

    setPredictionScore(prediction)
  }

  const hideModal = () => {
    reviewInput.current.value = ""
    setReview("")
    setPredictionScore("")
    nextMovie()
  }

  return (
    <div className="App">
      <Header />
      <ReviewModal 
        show={ predictionScore.length > 0}
        score={predictionScore}
        onHide={hideModal}
        />

      <Container className="mw-auto my-2" style={{width: '40rem'}}>

        <div className="text-center my-4">
          <Image style={{width: '30rem'}} variant="top" src={movie.poster} />
        </div>
        
        <h2>{`${movie.title} (${movie.year})`}</h2>
        
        <Form>
          <Form.Group controlId="writeReview">
            <Form.Label>Write your review</Form.Label>
            <Form.Control as="textarea" rows="3" ref={reviewInput} />
          </Form.Group>
        
        </Form>
        <Button variant="primary rx-1" onClick={submitReview}>
            Submit
          </Button>
          <Button variant="secondary mx-1" onClick={nextMovie}>
            Next movie
          </Button>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
