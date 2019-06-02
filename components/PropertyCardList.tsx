import React, { ReactElement } from 'react';
import { Container, Row, Col } from 'reactstrap';
import PropertyCard from './PropertyCard';
import Property from '../interfaces/Property';
const PropertyCardList = (props:{data:Property[]})=>{
    const {data} = props;
    const dataToShow=data.map((item, index)=>(<PropertyCard key={index} {...item}/>));
    //const dataToShow=data.map((item, index)=>(<Col key={index} xs="3"><PropertyCard {...item}/></Col>));
    // const dataWithRow=[];
    // const dataLen:number = dataToShow.length;
    // let temporalData = [];
    // for(let i =0; i<dataLen; i++){
    //     if(i%4 === 0 && i!==0){
    //         dataWithRow.push(<Row key={i/4}>{temporalData}</Row>);
    //         console.log(`row ${i}`);
    //         temporalData = [];
    //     }
    //     temporalData.push(dataToShow[i]);
    //     if(i === dataLen -1)
    //         dataWithRow.push(<Row key={i/4}>{temporalData}</Row>);
    // }
    return (
        <Container style={{display:'block'}}>
            {dataToShow}
        </Container>
    );
}

export default PropertyCardList; 