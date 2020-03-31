import React, { Component } from 'react';
import Axios from 'axios';


class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Gourav'
    }
    postDataHandler=()=>{
        const post = {
            title:this.state.title,
            body:this.state.content,
            author:this.state.aurthon
        }
        Axios.post('https://jsonplaceholder.typicode.com/posts',data)
                  .then(response=>{
                      console.log(response);
                  }) 
    }

    render () {
        return (
            <div className="NewPost">
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
                    <option value="Max">Max</option>
                    <option value="Manu">Manu</option>
                </select>
                <button>Add Post</button>
                <style jsx global>{`
                .NewPost {
                    width: 80%;
                    margin: 20px auto;
                    border: 1px solid #eee;
                    box-shadow: 0 2px 3px #ccc;
                    text-align: center;
                }
                
                .NewPost label {
                    display: block;
                    margin: 10px auto;
                    text-align: center;
                    font-weight: bold;
                }
                
                .NewPost input,
                .NewPost textarea,
                .NewPost select {
                    display: block;
                    width: 40%;
                    box-sizing: border-box;
                    border: 1px solid black;
                    outline: none;
                    font: inherit;
                    margin: auto;
                }
                
                .NewPost button {
                    margin: 5px 0;
                    padding: 10px;
                    font: inherit;
                    border: 2px solid #fa923f;
                    background-color: transparent;
                    color: #fa923f;
                    cursor: pointer;
                }
                
                .NewPost button:hover,
                .NewPost button:active {
                    color: white;
                    background-color: #fa923f;
                }
                `}</style>
            </div>
        );
    }
}

export default NewPost; 