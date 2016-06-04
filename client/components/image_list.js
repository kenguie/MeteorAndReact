import React from 'react';
import ImageDetail from './image_detail';

const IMAGES = [  //dummy data
  { title: 'Pen', link: 'http://dummyimage.com/600x400/2a9c7a/fff' },
  { title: 'Pinetree', link: 'http://dummyimage.com/600x400/2a9c7a/fff' },
  { title: 'Mug', link: 'http://dummyimage.com/600x400/2a9c7a/fff' }
];

const ImageList = () => {
  const RenderedImages = IMAGES.map(image => 
    <ImageDetail key={image.title} image={image} />
  );

  return (
    <ul className="media-list list-group">
      { RenderedImages }
    </ul>
  )
}

export default ImageList;
