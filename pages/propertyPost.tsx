import React from 'react';
import Layout from '../components/Layout';
import PropertyCardList from '../components/PropertyCardList';
import Property from '../interfaces/Property';
import { Container , Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const PostProperty=()=>{
    <Layout>
        <Container className="form">
        <Form>
            <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
            </FormGroup>
            <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
            </FormGroup>
            <Button>Submit</Button>
        </Form>
      </Container>
    </Layout>
}