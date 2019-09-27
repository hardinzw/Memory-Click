import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
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
    allCharacters: this.shuffleCharacters(),
    wasClicked: [],
  };

  // Binds the current this context to checkClicked to have access to the current state
  // When passed down to the Character component
  clickEvent = this.checkClicked.bind(this);

  // Used to shuffle the array of images when the DOM loads, and when an image is clicked
  shuffleCharacters() {
    // creates a copy of the current tunes array to modify it by value, and not by reference.
    const newArr = tunes.slice();
    const shuffleArr = [];

    // Each loop through an index gets spliced from newArr, reducing its length.
    // Gets a random index based off the current length of newArr.
    // Splices the value from newArr, and pushes it to shuffleArr.
    while (newArr.length > 0) {
      shuffleArr.push(newArr.splice(Math.floor(Math.random() * newArr.length), 1)[0]);
    }
    return shuffleArr;
  }

  checkClicked(clickedElement) {
    // Creates a copy of the wasClicked array to modify it by value, and not by reference. wasClicked stores all previous clicked images
    const previousState = this.state.wasClicked.slice();

    // Shuffles the images
    const shuffled = this.shuffleCharacters();

    // Track Score
    let score = this.state.score;
    let highScore = this.state.highScore;

    //if the clicked item is not in wasClicked, then it hasn't been clicked and the score is increased
    if(!this.state.wasClicked.includes(clickedElement)) {
      // If score and highScore are the same, then there is a new high score value
      if (score === highScore) {
        score++;
        highScore++;

        // If they are not equal, then only increase score value
      } else {
        score++;
      };

      // Adds the clicked item to wasClicked to track that it has been clicked
      previousState.push(clickedElement)
    };

    // Resets the current score if the same element was clicked twice
    if (this.state.wasClicked.includes(clickedElement)) {
      let score = 0;
      return this.setState({
        score: score,
        highScore: highScore,
        navMsgColor: 'incorrect',
        navMsg: 'Incorrect Guess!',
        allCharacters: shuffled,
        wasClicked: [],
      });
    };

    // Continue game if an element has not been clicked twice (score increases)
    this.setState({
      score: score,
      highScore: highScore,
      navMsgColor: 'correct',
      navMsg: 'Keep Going!',
      allCharacters: shuffled,
      wasClicked: previousState,
    });

    // Removes green 'correct' indicator after 1s on a successful click to re-render class
    return setTimeout(() => this.setState({ navMsgColor: '' }), 1000)
  };


  // Map over this.state.tunes and render a TunesCard component for each tunes object
  render() {
    const state = this.state;
    return (
      <Wrapper>
        <Navbar
          score={state.score}
          highScore={state.highScore}
          navMsg={state.navMsg}
          navMsgColor={state.navMsgColor}
          />
        <Jumbotron/>
        {this.state.tunes.map(tunes => (
          <CharacterCard
            id={tunes.id}
            image={tunes.image}
            characters={state.allCharacters}
            clickEvent={this.clickEvent}
          />
          ))}
      </Wrapper>
    );
  };
};

export default App;
