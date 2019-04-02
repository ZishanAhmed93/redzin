import React, { Component } from 'react';
import { matchPath } from 'react-router';

class Submission extends React.Component{
    constructor(props){
        super(props);
        // may not need state if all data is passed in props

        // current route/path
        // this.props.location.pathname

        this.state={
            submission_id: '',
            submission_title: '',
            submission_ups: '',
            submission_downs: '',
            submission_url_count: '',
            submission_url: []
        };
    }
    // might not need
    componentDidMount(){
        // fetch
        // implement fetch
    }

    render(){
        return(
            <div id="subreddit" className="subreddit">
                <p>this is the subreddit</p>
                <p>${this.props.location.pathname}</p>

            </div>

        )
    }
}

export default Submission;