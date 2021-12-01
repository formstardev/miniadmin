import React from 'react';
import { Card, Image, Button  } from 'antd';
import './index.css';
interface KundenProps {
    imgURL: string,
    name: string,
    str: string
  }
export default function Kunden(props:KundenProps) {
    return (
        <>
           <div className="Kunden-content">
               <div className="Kunden-sub-1">
                   <Image
                       width={200}
                       src={props.imgURL}
                   />
               </div>
               <div className="Kunden-sub-2">
                   <div className="Kunden-sub-des1">
                       {props.name}
                   </div>
                   <div className="Kunden-sub-des2">
                       {props.str}
                   </div>
               </div>
           </div>
        </>
    )
}