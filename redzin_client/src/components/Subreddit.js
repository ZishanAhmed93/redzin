import React, { Component } from 'react';

Class Subreddit extends React.Component{
    constroctor(props){
        super(props);
        this.state={
            submissions: [],
        }
    }
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

export default Subreddit;