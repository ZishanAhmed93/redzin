import React, { Component } from 'react';

Class Submission extends React.Component{
    constroctor(props){
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
                <p>this is the subreddit</p>

            </div>

        )
    }
}

export default Submission;