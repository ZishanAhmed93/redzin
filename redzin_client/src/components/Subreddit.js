import React, { Component } from 'react';

class Subreddit extends React.Component{
    constructor(props){
        super(props);
        this.state={
            submissions: []
        }
    }

    // current route/path
    // this.props.location.pathname

    componentDidMount(){
        // fetch
        // implement fetch
        let subreddit = this.props.match.params.subreddit;
        let request = 'http://127.0.0.1:5000/r/' + subreddit + '/';
        
        fetch(request, {mode: 'no-cors'})
            .then(response => console.log(response));
            // .then(data => console.log(data));
    }

    render(){
        let subreddit = this.props.match.params.subreddit;

        return(
            <div id="subreddit" className="subreddit">
                <p>this is the subreddit</p>
                <p>{subreddit}</p>

                <p>{this.state.data}</p>
            </div>

        )
    }
}

export default Subreddit;