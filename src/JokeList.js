import React, { Component } from 'react';
import Joke from './Joke';
import axios from 'axios';

const I_CAN_HAZ_DAD_JOKES_URL = `https://icanhazdadjoke.com/search?limit=10`;
class JokeList extends Component {
    constructor(props){
        super(props);
        this.state = {
            jokes: [ ]
        };
    }

    //make API call to IHAZDADJOKES, get ten jokes, and insert into jokes state
    async componentDidMount(){
        
        let getJokes = await axios.get(I_CAN_HAZ_DAD_JOKES_URL,
                                       {headers: {'Accept': 'application/json'} });
        
                                       //map through and insert jokes into state
        getJokes.data.results.map( jk => this.setState( { jokes:  [...this.state.jokes, {score:0, joke: jk.joke, id: jk.id }]  }) );
    }
  

    render() {

        const someJoke = this.state.jokes.map( jk => {
            return <Joke key={jk.id} score={jk.score} joke={jk.joke}/> 
        });
        return (
            <div>
               { someJoke }
            </div>
        );
    }
}

export default JokeList;