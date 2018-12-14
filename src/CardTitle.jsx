import React from 'react';
import PropTypes from 'prop-types';
import { composeClassName } from './utils';

export default function CardTitle({
  className,
  tag: Tag,
  ...attributes
}) {
  const classes = composeClassName([
    className ? className : '',
    'card-title'
  ]);

  return (
    <Tag {...attributes} {...classes} />
  );
};

CardTitle.displayName = 'CardTitle';

CardTitle.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};

CardTitle.defaultProps = {
  tag: 'h5',
  className: ''
};
