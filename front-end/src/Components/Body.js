import React, { useState } from "react";

function Body() {
  const [image, setImage] = useState("images/file-upload.png");

  function imageHandler(e) {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  }

  return (
    <div className="d-flex flex-column justify-content-center align-items-center body">
      <h2 className="heading">Please upload your image here.</h2>
      <input type="file" id="imageUpload" onChange={imageHandler} />
      <img src={image} alt="" className="image" />
    </div>
  );
}

export default Body;
