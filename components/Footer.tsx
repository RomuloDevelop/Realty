import React, {Component} from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { Button } from 'reactstrap';
import './Footer.scss';
type SocialButtonProps ={
    icon:IconProp,
    color:string
}

type ContactItemProps ={
    icon:IconProp,
    title: string,
    body:string
}
const SocialButton = (props:SocialButtonProps)=>(
    <Button color="primary" style={{backgroundColor:props.color, marginRight:'5px', marginLeft: '5px'}}>
        <FontAwesomeIcon size='lg' icon={props.icon} style={{color:'white'}}/>
    </Button>
)

const ContactItem = (props:ContactItemProps)=>(
    <li>
        <div>
            <FontAwesomeIcon size='sm' icon={props.icon}/>
            <h3 className = "h6 d-inline ml-2">{props.title}</h3>
        </div>
        <p>{props.body}</p>
    </li>
)

const Footer = ()=>{
       return (
           <div>
                <div className ="footerTop" style={{backgroundColor:'#CC9B39'}}>
                    <div>
                        <h3 className="h3">Delia Lugo / Broker Associate</h3>
                        <ul>
                            <ContactItem title="Teléfono 1:" icon={['fas','phone']} body="+1 (407) 760-5150"/>
                            <ContactItem title="Teléfono 2:" icon={['fas','phone']} body="+1 (407) 446-5318"/>
                            <ContactItem title="Email" icon={['fas','envelope']} body="orlandohousesale@gmail.com"/>
                        </ul>
                    </div>
                    <div>
                        <h3 className="h3">Siguenos</h3>
                        <div className="iconList"> 
                            <SocialButton icon={['fab', 'facebook-f']} color="#39569c"/>
                            <SocialButton icon={['fab', 'twitter']} color="#00acee"/>
                            <SocialButton icon={['fab', 'instagram']} color="#3f729b"/>
                        </div>
                    </div>
                </div>
                <div className="footerBottom">
                    <span>Política Legal | Política de Privacidad</span>
                </div>
            </div>
       )
    }

export default Footer;