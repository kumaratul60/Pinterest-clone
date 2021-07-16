import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import unsplash from "./api/unsplash";

function App() {
  const [pins, setNewPins] = useState([]);

  const getImages = (term) => {
    return unsplash.get("https://api.unsplash.com/search/photos", {
      params: {
        query: term,
      },
    });
  };

  const handleSearchSubmit = (term) => {
    console.log("on submit", term);
    getImages(term).then((res) => {
      let results = res.data.results;
      let newPins = [...results, ...pins];

      newPins.sort(function (a, b) {
        return 0.5 - Math.random();
      });
      setNewPins(newPins);
    });
  };
  //handleSearchSubmit("animal");

  const getNewPins = () => {
    let promises = [];
    let pinData = [];

    let pins = [
      "ocean",
      "india",
      "car",
      "balloon",
      "fun",
      "animals",
      "bali",
      "cats",
      "dogs",
      "gym",
    ];

    pins.forEach((pinTerm) => {
      promises.push(
        getImages(pinTerm).then((res) => {
          let results = res.data.results;

          pinData = pinData.concat(results);
          pinData.sort(function (a, b) {
            return 0.5 - Math.random();
          });
        })
      );
    });
    // collection all promises request
    Promise.all(promises).then(() => {
      setNewPins(pinData);
    });
  };

  useEffect(() => {
    getNewPins();
  }, []);

  return (
    <div className="app">
      <Header onSubmit={handleSearchSubmit} />
      <Card pins={pins} />
    </div>
  );
}

export default App;
