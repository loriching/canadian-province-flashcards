import { useState } from 'react'
import './App.css'
import Card from './Card.jsx'

function App() {
  const [count, setCount] = useState(0);
  const [side, setSide] = useState(0);

  const cardInfo = [
  {
      "province": "Alberta",
      "capital": "Edmonton"
  },
  {
      "province": "British Columbia",
      "capital": "Victoria"
  },
  {
      "province": "Manitoba",
      "capital": "Winnipeg"
  },
  {
      "province": "New Brunswick",
      "capital": "Fredericton"
  },
  {
      "province": "Newfoundland and Labrador",
      "capital": "St. John's"
  },
  {
      "province": "Nova Scotia",
      "capital": "Halifax"
  },
  {
      "province": "Ontario",
      "capital": "Toronto"
  },
  {
      "province": "Prince Edward Island",
      "capital": "Charlottetown"
  },
  {
      "province": "Quebec",
      "capital": "Quebec City"
  },
  {
      "province": "Saskatchewan",
      "capital": "Regina"
  },
  {
      "province": "Yukon",
      "capital": "Whitehorse"
  },
  {
      "province": "Nunavut",
      "capital": "Iqaluit"
  },
  {
      "province": "Northwest Territories",
      "capital": "Yellowknife"
  }
  ];

  const handleFlip = () => {
    setSide((prevSide) => (prevSide + 1) % 2);
  };

  const handlePrev = () => {
    setCount((prevCount) => (prevCount - 1 + cardInfo.length) % cardInfo.length);
    setSide(0);
  };

  const handleNext = () => {
    setCount((prevCount) => (prevCount + 1) % cardInfo.length);
    setSide(0);
  };

  const handleRandom = () => {
    let randomIndex = Math.floor(Math.random() * cardInfo.length);
    setCount(randomIndex);
    setSide(0);
  };

  const cardSides = {
    0: "province/territory",
    1: "capital city"
  }

  return (
    <>
      <div className="introduction">
        <h1>Learn the Canadian provinces/territories and capitals!</h1>
        <h4>Click each flashcard to flip between the provinces/territories and their capital cities. Click the buttons to navigate between flashcards.</h4>
        <h5>These flashcards include the ten provinces and three territories of Canada, for <strong>13</strong> flashcards total.</h5>
      </div>
      <Card onClick={handleFlip} direction={side} flashcardInfo={cardInfo[count]} />
      
      <p className="flashcard-side-info">Currently seeing: {cardSides[side]}</p>

      <div className="card">
        <button onClick={handlePrev}>
          Previous
        </button>

        <button onClick={handleNext}>
          Next
        </button>

        <button onClick={handleRandom}>
          Random
        </button>
      </div>

      <div className="current-card-count">
        <p>{count+1} / 13</p>
      </div>

    </>
  )
}

export default App;
