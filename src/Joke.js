import React, { Component } from 'react';

// Renders individual joke with buttons for upvoting and downvoting.
// Upvote and downvote trigger parent function to update score in
// parent state.
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