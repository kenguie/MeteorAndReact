import React from 'react';
import ImageScore from './image_score';

const ImageDetail = (props) => {
  // props.image => this is the image object passed in
  // Now we can use props.image.title and props.image.link !

  if (!props.image.description) {
    props.image.description = "No description entered by this author.";
  }

  return (
    <li className="media list-group-item">
      <div className="media-left">
        <img src={props.image.link} />
      </div>
      <div className="media-body">
        <h4 className="media-heading">
          {props.image.title}
        </h4>
        <p>{props.image.description}</p>
        <ImageScore ups={props.image.ups} downs={props.image.downs}/>
      </div>
    </li>
  )
}

export default ImageDetail;
