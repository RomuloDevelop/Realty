import React, { ReactChild, CSSProperties } from 'react';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';

type Props ={
    children:any,
    style?:CSSProperties
}

const Layout = (props:Props)=>{
    return(
        <div>
            <Header/>
            <div style={props.style?props.style:{margin:'auto'}}>
                {props.children}
            </div>
        </div>
    );
}

export default Layout;