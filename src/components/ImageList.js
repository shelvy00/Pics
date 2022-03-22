import React from "react";
import "./ImageList.css"
import Imagecard from "./ImageCard";


export const ImageList = (props) => {
 const images = props.images.map((/*image or Destructor*/ image) => {
      return <Imagecard key={image.id} image={image} />;
    });
    return <div className="image-list">{images}</div>;
}

export default ImageList