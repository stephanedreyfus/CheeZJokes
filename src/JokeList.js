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
        this.changeVote = this.changeVote.bind(this);
    }

    //make API call to ICANˀHAZDADJOKES, get ten jokes, and insert into jokes state
    async componentDidMount(){
        for(let i = 0; i < 10; i++){
            let getJoke = await axios.get(I_CAN_HAZ_DAD_JOKES_URL,
                                        {headers: {'Accept': 'application/json'} });
            this.setState(  { jokes: [...this.state.jokes,
                                      { score: 0,
                                        joke: getJoke.data.joke,
                                        id: getJoke.data.id
                                      }]
                                    });                            
        }
    }

    // Updates joke score state, taking in joke id and vote delta.
    changeVote(jkID, delta) {
        // delta +1/-1
        this.setState( st => {
            const updateScore = st.jokes.map(jk => {
                if (jk.id === jkID) {
                    return { ...jk, score: (jk.score + delta) };
                }
                return jk;
            });
            return { jokes: updateScore };
        });
    }
  
    render() {
        // Map over jokes array, render new Joke instace for each joke.
        const someJoke = this.state.jokes.map( jk => {
            return <Joke key={jk.id}
                         score={jk.score}
                         joke={jk.joke}
                         triggerUpVote={() => this.changeVote(jk.id, +1)}
                         triggerDownVote={() => this.changeVote(jk.id, -1)}/> 
        });
        return (
            <div>
               { someJoke }
            </div>
        );
    }
}

export default JokeList;