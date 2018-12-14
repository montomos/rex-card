import React from 'react';
import PropTypes from 'prop-types';
import { composeClassName } from './utils';

export default function CardText({
  className,
  children,
  tag: Tag,
  ...attributes
}) {
  const classes = composeClassName([
    className ? className : '',
    'card-text'
  ]);

  return (
    <Tag {...attributes} {...classes}>{children}</Tag>
  );
};

CardText.displayName = 'CardText';

CardText.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};

CardText.defaultProps = {
  tag: 'p',
  className: ''
};
