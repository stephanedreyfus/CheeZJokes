import React, { Component } from 'react';
import Joke from './Joke';
import axios from 'axios';

const I_CAN_HAZ_DAD_JOKES_URL = `https://icanhazdadjoke.com/`;
class JokeList extends Component {
    constructor(props){
        super(props);
        this.state = {
            jokes: []
        };
        this.upVote = this.upVote.bind(this);
        this.downVote = this.downVote.bind(this);
    }

    //make API call to ICANˀHAZDADJOKES, get ten jokes, and insert into jokes state
    async componentDidMount(){
        for(let i = 0; i < 10; i++){
            let getJoke = await axios.get(I_CAN_HAZ_DAD_JOKES_URL,
                                        {headers: {'Accept': 'application/json'} });
            this.setState(  { jokes:  [...this.state.jokes, {score:0, joke: getJoke.data.joke, id: getJoke.data.id }]  });                            
        }
        //map through and insert jokes into state
        //getJokes.data.results.map( jk => this.setState( { jokes:  [...this.state.jokes, {score:0, joke: jk.joke, id: jk.id }]  }) );
    }

    // Increment joke score by one, track by joke id.
    //FIXME FIXME FIXME FIXME FIXME FIXME 
    upVote(jkID) {
        const updateScore = this.state.jokes.map(jk => {
            if (jk.id === jkID) {
                return { ...jk, score: ++jk.score};
            }
            return jk;
        });
        this.setState({ jokes: updateScore });
    }

    // Decrement joke score by one, track by joke id.
    //FIXME FIXME FIXME FIXME FIXME FIXME
    downVote(jkID) {
        const updateScore = this.state.jokes.map(jk => {
            if (jk.id === jkID) {
                return { ...jk, score: --jk.score};
            }
            return jk;
        });
        this.setState({ jokes: updateScore });
    }
  

    render() {
        // Map over jokes array, render new Joke instace for each joke.
        const someJoke = this.state.jokes.map( jk => {
            return <Joke key={jk.id}
                         score={jk.score}
                         joke={jk.joke}
                         triggerUpVote={() => this.upVote(jk.id)}
                         triggerDownVote={() => this.downVote(jk.id)}/> 
        });
        return (
            <div>
               { someJoke }
            </div>
        );
    }
}

export default JokeList;