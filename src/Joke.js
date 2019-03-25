import React, { Component } from 'react';

class Joke extends Component {
    render() {
       const { score, joke, triggerUpVote, triggerDownVote } = this.props;
        return (
            <div>
                <p>Score: {score}</p>
                <p>Joke: {joke}</p>
                <button onClick={triggerUpVote}>Up Vote!</button>
                <button onClick={triggerDownVote}>Down Vote!</button>
            </div>
        );
    }
}

export default Joke;