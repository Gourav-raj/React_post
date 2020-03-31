import React from 'react';


const Post = (props) => (
    <article className="Post" onClick={props.clicked}>
        <h1>{props.title}</h1>
        <div className="Info">
            <div className="Author">{props.author}</div>
        </div>
        <style jsx global>{`
            .Post {
                width: 250px;
                padding: 16px;
                text-align: center;
                border: 1px solid #eee;
                box-shadow: 0 2px 3px #ccc;
                margin: 10px;
                box-sizing: border-box;
                cursor: pointer;
            }
            
            .Post:hover,
            .Post:active {
                background-color: #C0DDF5;
            }
            
            .Author {
                margin: 16px 0;
                color: #ccc;
            }
                `}</style>
    </article>
);

export default Post;