import React from 'react';
import { Link } from 'gatsby';
import Header from '../components/Header';
import '../styles/index.css';
import Thumbnail from '../components/Thumbnail';
import Rect from '../components/Rect';
import Slider from '../components/Slider';

const secondPage = () => {
  var cardBlocks = [];
  var block = [];
  for (let index = 0; index < 3; index++) {
    cardBlocks.push(<Thumbnail />);
    block.push(<Rect />);
  }

  return (
    <div className="container">
      <Slider />
      <br />
      <div className="row">{cardBlocks}}</div>

      {block}
    </div>
  );
};
export default secondPage;
