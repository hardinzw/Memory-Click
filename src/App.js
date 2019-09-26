import React, { Component } from "react";
import TunesCard from "./components/TunesCard";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Jumbotron from "./components/Jumbotron";
import tunes from "./tunes.json";

class App extends Component {
  // Setting this.state.tunes to the tunes json array
  state = {
    tunes,
    score: 0,
    highScore: 0,
    navMsgColor: '',
    navMsg: 'Click an image to begin!',
    allTunes: this.shuffleTunes(),
    wasClicked: [],
    shake: false
  };

  clickEvent = this.checkClicked.bind(this);

  shuffleTunes() {
    const newArr = tunes.slice();
    const shuffleArr = [];
    while (newArr.length > 0) {
      shuffleArr.push(newArr.splice(Math.floor(Math.random() * newArr.length), 1)[0]);
    }
    return shuffleArr;
  }
  

  // Map over this.state.tunes and render a TunesCard component for each tunes object
  render() {
    return (
      <Wrapper>
        <Header></Header>>
        <Jumbotron></Jumbotron>
        {this.state.tunes.map(tunes => (
          <TunesCard
            id={tunes.id}
            key={tunes.id}
            name={tunes.name}
            image={tunes.image}
          />
        ))}
      </Wrapper>
    );
  };
};

export default App;
