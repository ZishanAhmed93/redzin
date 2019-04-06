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
                    <div key={sub.id}>
                        <p>id: {sub.id}</p>
                        <p>title: {sub.title}</p>
                        <p>ups: {sub.ups}</p>
                        <p>downs: {sub.downs}</p>
                        <p>url_count: {sub.url_coun}</p>
                        <p>url: {sub.url}</p>
                        <p>visited: {sub.visited}</p>
                    </div>
                )}</div>
            </div>

        )
    }
}

export default Subreddit;