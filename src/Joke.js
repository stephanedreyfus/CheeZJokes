import React, { Component } from 'react';

class Joke extends Component {
    render() {
       const { score, joke } = this.props;
        return (
            <div>
                <p>Score: {score}</p>
                <p>Joke: {joke}</p>
            </div>
        );
    }
}

export default Joke;