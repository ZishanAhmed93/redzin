import React, { Component } from 'react';

class Home extends React.Component{
    constructor(props){
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

export default Home;