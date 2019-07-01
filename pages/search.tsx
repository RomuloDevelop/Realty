import React from 'react';
import Layout from '../components/Layout';
import PropertyCardList from '../components/PropertyCardList';
import Property from '../interfaces/Property';
import { Container , Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './search.scss';

const Index = (props:{data: Property[]})=>(
  <Layout> 
    <div style={{display:'flex', flexDirection:'row'}}>
    <Container className="form">
    <Form>
        <FormGroup>
          <Label for="exampleSelect">Select</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>hola dolassss</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">Select</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">Select</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
            Check me out
          </Label>
        </FormGroup>
        <Button>Submit</Button>
      </Form>
      </Container>
    <div style={{flex: 3}}>
    <PropertyCardList data={props.data}/>
    </div>
    </div>
  </Layout>
)

export default ()=>Index({data});