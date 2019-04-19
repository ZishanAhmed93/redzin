import React, { Component } from 'react';
import Submission from './Submission';

import '../css/Submission.css';

function getRandomTheme(){
    let themes = ['leftTest', 'rightTest'];

    let min = 0;
    let max = themes.length - 1;
    let ran = Math.floor(Math.random() * (max - min + 1) ) + min;

    return themes[ran];
  }

class Subreddit extends React.Component{
    constructor(props){
        super(props);
        this.state={
            submissions: []
        }
    }

    componentDidMount(){
        // fetch
        // implement fetch
        let subreddit = this.props.match.params.subreddit;
        let request = 'http://127.0.0.1:5000/r/' + subreddit + '/';
        
        fetch(request)
            .then(res => res.json())
            .then(submissions => this.setState({submissions}))
            .then(console.log(this.state));
    }



    render(){
        let subreddit = this.props.match.params.subreddit;


        return(
            <div id="subreddit" className="subreddit">
                <p>this is the subreddit</p>
                <p>{subreddit}</p>

                <div>{this.state.submissions.map(sub =>


                    <Submission key={sub.id} submission={sub} layout_class={getRandomTheme()} />

                )}</div>
            </div>

        )
    }
}

export default Subreddit;