import React, { Component } from 'react';
import Submission from './Submission';

import '../css/Submission.css';

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
        let layout_theme = 'leftTest';
        let layout_class = 'submission ' + layout_theme;

        return(
            <div id="subreddit" className="subreddit">
                <p>this is the subreddit</p>
                <p>{subreddit}</p>

                <div>{this.state.submissions.map(sub =>

                     <Submission key={sub.id} submission={sub} layout_class={layout_class} />

                )}</div>
            </div>

        )
    }
}

export default Subreddit;