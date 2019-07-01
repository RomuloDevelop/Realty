import React, { ReactChild, CSSProperties } from 'react';
import Header from './Header';
import Footer from './Footer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fab, fas, far)
import 'bootstrap/dist/css/bootstrap.min.css';

type Props ={
    children:any,
    style?:CSSProperties
}

const Layout = (props:Props)=>{
    return(
        <div>
            <Header/>
            <div style={props.style?props.style:{margin:'auto'}} className="mt-5 mb-5">
                {props.children}
            </div>
            <Footer/>
        </div>
    );
}

export default Layout;