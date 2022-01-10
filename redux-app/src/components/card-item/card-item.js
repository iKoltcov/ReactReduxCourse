import React from 'react';

import {Card, Image, Button, Icon} from 'semantic-ui-react';
import './card-item.css'

const CardItem = ({ data }) => (
    <Card>
        <Image src={`https://picsum.photos/200/300?random=${data.id}`}/>
        <Card.Content>
            <Card.Header>{data.name}</Card.Header>
            <Card.Meta>
                <Button className='buy-button' icon>
                    <span>{data.price}</span>
                    <Icon name='add to cart'/>
                </Button>
            </Card.Meta>
            <Card.Description>{data.description}</Card.Description>
        </Card.Content>
    </Card>
);

export default CardItem;