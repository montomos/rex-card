import React from 'react';
import PropTypes from 'prop-types';
import { composeClassName } from './utils';

export default function CardLink({
  className,
  tag: Tag,
  children,
  href,
  alignment = ALIGNMENT[alignment] || '',
  ...attributes
}) {
  const classes = composeClassName([
    alignment,
    className ? className : '',
    'card-link'
  ]);

  return (
    <Tag  {...attributes} {...classes}>
      <a className="more"
        href={href}
      >{children}</a>
    </Tag>
  );
};

const ALIGNMENT = {
  default: '',
  left: 'text-left',
  right: 'text-right',
  center: 'text-center',
  justify: 'text-justify',
  nowrap: 'text-nowrap'
};

CardLink.displayName = 'CardLink';

CardLink.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  alignment: PropTypes.oneOfType(),
  className: PropTypes.string
};

CardLink.defaultProps = {
  alignment: ALIGNMENT.right,
  tag: 'p',
  className: ''
};
