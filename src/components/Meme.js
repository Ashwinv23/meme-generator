import React from "react";
import memesData from "../memesData";

function Meme() {
  const [memeImage, setMemeImage] = React.useState("");

  const handleClick = () => {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMemeImage(memesArray[randomNumber].url);
  };

  return (
    <main>
      <div className="form">
        <input type="text" placeholder="top" className="form-input" />
        <input type="text" placeholder="bottom" className="form-input" />
        <button className="form-button" onClick={handleClick}>
          Get a new meme image
        </button>
      </div>
      <img src={memeImage} alt="memeimage" className="meme-image" />
    </main>
  );
}

export default Meme;
