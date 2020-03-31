import React, { Component } from 'react';
import Post from '../Post/Post';
import FullPost from '../FullPost/FullPost';
import NewPost from '../NewPost/NewPost';
import axios from 'axios';

class Blog extends Component {
    state={
        posts:[],
        postSelected:null
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
                   .then(response =>{
                    const posts=response.data.slice(0,4);
                    const updatePosts=posts.map(post=>{
                        return{
                            ...post,
                            author:'Gourav'
                        }
                    })
                    this.setState({posts:updatePosts})
                   })
                   .catch(error=>{
                       console.log(error);
                   });
    }
    postSelected=(id)=>{
      this.setState({postSelected:id})
    }

    render () {
        const posts=this.state.posts.map((post)=>{
        
            return <Post key={post.key} 
            clicked={()=>this.postSelected(post.id)}
            author={post.author} title={post.title}/>
        })
        return (
            <div>
                
                <section className="Posts">
                    {posts}
                   
                </section>
                <section>
                    <FullPost id={this.state.postSelected}/>
                </section>
                <section>
                    <NewPost/>
                </section>
                <style jsx global>{`
                .Posts {
                    display: flex;
                    flex-flow: row wrap;
                    justify-content: center;
                    width: 80%;
                    margin: auto;
                }
                `}</style>
            </div>
        );
    }
}

export default Blog;