import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { checkA11y } from '@storybook/addon-a11y';
import { host } from 'storybook-host';

const Card = (
  process.env.NODE_ENV === 'production' ?
    require('../build/node_modules/rex-card').default :
    require('../src/Card').default
);

import CardTitle from '../src/CardTitle';
import CardImg from '../src/CardImg';
import CardBody from '../src/CardBody';
import CardText from '../src/CardText';
import CardLink from '../src/CardLink';
import 'rex-core';

const stories = storiesOf('Card', module);
// stories.addDecorator(checkA11y);
// stories.addDecorator(withKnobs);
// stories.addDecorator(withInfo);
// stories.addDecorator(
//   host({
//     align: 'center bottom',
//     height: '80%',
//     width: 425,
//   }),
// );
// // Stories
// stories.add('default', () => <Card />);
// stories.add('with text', () => <Card text={'Welcome to React example'} />);
// stories.add('with className', () => <Card className={'color-black active'} />);

stories.add('with onClick', () => {
  const onClickSample = action('clicked');

  return (
    <Card onClick={onClickSample} />
  );
});

stories.add('Default', () => {

  return (
    <Card card url="index">
      <CardImg />
      <CardBody imgCard>
        <CardTitle>Card title</CardTitle>
        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
        <CardLink href="index.html">Learn More</CardLink>
      </CardBody>
    </Card>
  );
});

stories.add('Image Card Default', () => {
  return (
    <Card card url="index">
      <CardImg />
      <CardBody imgCard>
        <CardTitle>Card title</CardTitle>
        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
        <CardLink href="index.html">Learn More</CardLink>
      </CardBody>
    </Card>
  );
});
