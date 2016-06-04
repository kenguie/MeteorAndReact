import React from 'react';

const ImageDetail = (props) => {
  // props.image => this is the image object passed in
  // Now we can use props.image.title and props.image.link !

  return (
    <li className="media list-group-item">
      <div className="media-left">
        <img src={props.image.link} />
      </div>
      <div className="media-body">
        <h4 className="media-heading">
          {props.image.title}
        </h4>
      </div>
    </li>
  )
}

export default ImageDetail;
