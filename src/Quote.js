import React from "react";


// DESTRUCTURED WAY COMPONENT
const Quote = ({ quote, character, image }) => (

  <figure>
    <img src={image} alt={character} />
    <figcaption>
      <blockquote>{quote}</blockquote>
      <cite>{character}</cite>

    </figcaption>
  </figure>
);

export default Quote;