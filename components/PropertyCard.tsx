import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import Property from '../interfaces/Property'; 

const PropertyCard = (props:Property) => {
  return (
    <div key={props.key} style={{display:'inline-block', width:'300px', margin:10}}>
      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>{props.key}</CardTitle>
          <CardSubtitle>{props.direction}</CardSubtitle>
          <CardText>{props.bathrooms}</CardText>
          <Button>{props.year}</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default PropertyCard;