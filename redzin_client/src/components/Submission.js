import React, { Component } from 'react';
import { matchPath } from 'react-router';

class Submission extends React.Component{
    constructor(props){
        super(props);
        // may not need state if all data is passed in props


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
                <p>this is the POST</p>
                <p>id: {this.props.submission.id}</p>
                <p>title: {this.props.submission.title}</p>
                <p>ups: {this.props.submission.ups}</p>
                <p>downs: {this.props.submission.downs}</p>
                <p>url_count: {this.props.submission.url_coun}</p>
                <p>url: {this.props.submission.url}</p>
                <p>visited: {this.props.submission.visited}</p>

            </div>

        )
    }
}

export default Submission;