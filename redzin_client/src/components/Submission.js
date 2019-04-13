import React, { Component } from 'react';
import { matchPath } from 'react-router';

import '../css/Submission.css';


class Submission extends React.Component{
    constructor(props){
        super(props);
    }
    // might not need
    componentDidMount(){
    }

    render(){
        let id =this.props.submission.id;
        let title = this.props.submission.title;
        let ups =this.props.submission.ups;
        let downs = this.props.submission.downs;
        let url_count = this.props.submission.url_count;
        let url = this.props.submission.url;
        let visited = this.props.submission.visited;
        let layout_class = this.props.layout_class;

        return(
            <div id="submission" className={layout_class}>

                <img className="submission_img" src={url} width='50%'/>
                <p className="submission_title">{title}</p>
            </div>
        )
    }
}

export default Submission;