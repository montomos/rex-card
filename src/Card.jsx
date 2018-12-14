import React from 'react';
import PropTypes from 'prop-types';
import { composeClassName } from './utils';

export default function Card({
  className,
  card,
  imgCard,
  textCard,
  tag: Tag,
  innerRef,
  href,
  ...attributes
}) {
  const classes = composeClassName([
    className ? className : '',
    card ? 'card' : '',
    imgCard ? 'card-full-img' : '',
    textCard ? 'card-with-text' : ''
  ]);

  if (href) {
    Tag = 'a';
  }
  return (
    <Tag href={href} {...attributes} ref={innerRef} {...classes} />
  );
}

Card.displayName = 'Card';

Card.Prototypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  card: PropTypes.bool,
  imgCard: PropTypes.bool,
  textCard: PropTypes.bool,
  innerRef: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.func,
  ])
}

Card.defaultProps = {
  tag: 'div',
  className: '',
  card: false,
  imgCard: false,
  textCard: false
};