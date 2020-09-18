import React, { useState } from 'react';
import './App.css';
import ChooseMeme from './Component/ChooseMeme';
import TextBox1 from './Component/TextBox1';
import TextBox2 from './Component/TextBox2';
import Image from './Component/Image';

//Got an array from website and took a url
//Set up variables for the source, two text boxes and the value
export default function App() {
  const [imageSrc, setImageSrc] = useState(
    'https://api.memegen.link/images/noidea.jpg',
  );
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [value, setValue] = useState('');

  //Need to return the image, image selector, input boxes and a download button
  return (
    <div className="App">
      <h1>Meme Generator</h1>
      <Image imageSrc={imageSrc} />
      <ChooseMeme
        onChange={(e) => {
          setValue(e.target.value);
          setImageSrc(`https://memegen.link/${e.target.value}/_.jpg`);
        }}
      />

      <TextBox1
        onChange={(e) => {
          setTopText(e.target.value);
          setImageSrc(
            `https://memegen.link/${value}/${e.target.value}/${bottomText}_.jpg`,
          );
        }}
      />
      <TextBox2
        onChange={(e) => {
          setBottomText(e.target.value);
          setImageSrc(
            `https://memegen.link/${value}/${topText}/${e.target.value}/_.jpg`,
          );
        }}
      />

      <div
        onClick={() =>
          setImageSrc(
            `https://memegen.link/${value}/${topText}/${bottomText}.jpg`,
          )
        }
      />
      <button>
        <a
          href={`https://memegen.link/${value}/${topText}/${bottomText}.jpg`}
          Download
        >
          Download Meme
        </a>
      </button>
    </div>
  );
}
