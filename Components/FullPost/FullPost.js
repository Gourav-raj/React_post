import React, { Component } from 'react';
import Axios from 'axios';


class FullPost extends Component {
    state={
        loadedPost:null
    }
    componentDidUpdate(){
        if(this.props.id){
            if(!this.state.loadedPost||(this.state.loadedPost && this.state.loadedPost!==this.props.id)){
            
            }
        Axios.get('https://jsonplaceholder.typicode.com/posts/1'+ this.props.id)
         .then(resposnse=>{
              this.setState({loadedPost:resposnse.data})
         })
    }}
    
    render () {
    let post = <p style={{textAlign:'center'}}>Please Select Post </p>;
    if(this.props.id){
        <p style={{textAlign:'center'}}>Loading </p>;
    }
    if(this.state.loadedPost){
        post = (
            <div className="FullPost">
                <h1>{this.state.loadedPost.title}</h1>
                <p>{this.state.loadedPost.body}</p>
                <div className="Edit">
                    <button className="Delete">Delete</button>
                </div>
                <style jsx global>{`
               .FullPost {
                width: 80%;
                margin: 20px auto;
                border: 1px solid #eee;
                box-shadow: 0 2px 3px #ccc;
                text-align: center;
            }
            
            .Edit {
            
            }
            
            .Edit label {
                display: block;
                color: grey;
            }
            
            .Edit button {
                border: none;
                background-color: transparent;
                cursor: pointer;
                outline: none;
                color: #fa923f;
            }
            
            .Edit button:hover,
            .Edit button:active {
                color: #521751;
            }
            
            .Edit button.Delete {
                color: red;
            }
            
            .Edit button.Delete:hover,
            .Edit button.Delete:active {
                color: darkred;
            }
                `}</style>
            </div>

        );
    }
        
             
        return post;
    }
}

export default FullPost;