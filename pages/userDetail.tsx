import React from 'react';
import Layout from '../components/Layout';
import PropertyCardList from '../components/PropertyCardList';
import Property from '../interfaces/Property';
import { Container , Button, Form, FormGroup, Label, Input, FormText,
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, CustomInput } from 'reactstrap';
import './userDetail.scss';
const Index=()=>{
    return(
    <Layout>
        <Container className="container">
        <h1 className='h3 text-capitalize font-weight-normal'>edit user</h1>
        <Form className='form mt-2'>
            <FormGroup>
                <Input type="email" name="email" placeholder="Email"/>
            </FormGroup>
            <FormGroup>
                <Input type="text" name="user" placeholder="password" />
            </FormGroup>
            <CustomInput type="checkbox" label="Change password" />
            <FormGroup>
                <Input type="password" name="oldpassword" placeholder="Password" />
            </FormGroup>
            <FormGroup>
                <Input type="password" name="newpassword" placeholder="New Password" />
            </FormGroup>
            <FormGroup>
                <Input type="password" name="confirmpassword" placeholder="Confirm Password" />
            </FormGroup>
            <Button className='btn-block buttonForm'>Submit</Button>
        </Form>
      </Container>
    </Layout>);
}

export default Index;