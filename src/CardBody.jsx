import React from 'react';
import PropTypes from 'prop-types';
import { composeClassName } from './utils';

export default function CardBody({
  className,
  imgCard,
  tag: Tag,
  ...attributes
}) {
  const classes = composeClassName([
    className ? className : '',
    imgCard ? 'card-img-overlay' : '',
    'card-body'
  ]);

  return (
    <Tag {...attributes} {...classes} />
  );
};

CardBody.displayName = 'CardBody';

CardBody.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  imgCard: PropTypes.bool
};

CardBody.defaultProps = {
  tag: 'div',
  className: '',
  imgCard: false
};
