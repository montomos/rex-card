import React from 'react';
import { oneOf } from 'prop-types';
import { composeClassName } from './utils';
import DummyImg from './img/card_dummy_landscape.svg';
import DummyImgSquare from './img/card_dummy_square.svg';
import DummyImgPortrait from './img/card_dummy_portrait.svg';
import DummyImgWide from './img/card_dummy_wide2.svg';

export default function CardImg(props) {
  const { imgtype } = props,
    classes = composeClassName(['card-img-top']),
    attributes = {
      src: IMAGETYPE[imgtype]
    }

  return (
    <img {...classes}
      {...attributes}
    />
  );
}

const IMAGETYPE = {
  landscape: DummyImg,
  square: DummyImgSquare,
  portrait: DummyImgPortrait,
  wide: DummyImgWide
};

CardImg.displayName = 'CardImg';

CardImg.Prototypes = {
  imgtype: oneOf(Object.keys(IMAGETYPE)).isRequired
};

CardImg.defaultProps = {
  imgtype: 'landscape'
};