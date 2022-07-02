import React, { useState, useEffect } from 'react';
import './UseEffectEx2.css';
const DOGS_API = 'https://dog.ceo/api/breeds/image/random/1';

export default function UseEffectEx2() {
  const [dogsImg, setDogsImg] = useState([]);
  const [number, setNumber] = useState(3);

  useEffect(() => {
    function GetDogs() {}
    fetch(DOGS_API)
      .then((res) => res.json())
      .then((body) => {
        setDogsImg([...dogsImg, ...body.message]);
      });
    GetDogs();
  }, []);

  return (
    <div>
      {dogsImg?.map((dog) => {
        return <img className="dogImg" src={dog} alt="Dog img" />;
      })}
    </div>
  );
}
