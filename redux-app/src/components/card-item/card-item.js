import React from 'react';

import { Card, Image } from 'semantic-ui-react';
import './card-item.css'

const CardItem = ({ data }) => (
    <Card>
        <Image src={`https://picsum.photos/200/300?random=${data.id}`}/>
        <Card.Content>
            <Card.Header>{data.name}</Card.Header>
            <Card.Meta>{data.price}</Card.Meta>
            <Card.Description>{data.description}</Card.Description>
        </Card.Content>
    </Card>
);

export default CardItem;