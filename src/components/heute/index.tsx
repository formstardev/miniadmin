import React from 'react';
import { Card, Image, Button  } from 'antd';
import './index.css';
interface HeuteProps {
    imgURL: string,
    des1: string,
    des2: string
  }
export default function Heute(props:HeuteProps) {
    return (
        <>
           <div className="Heute-content">
               <div className="Heute-sub-1">
                   <Image
                       width={100}
                       src={props.imgURL}
                   />
               </div>
               <div className="Heute-sub-2">
                   <div className="Heute-sub-des1">
                       {props.des1}
                   </div>
                   <div className="Heute-sub-des2">
                       {props.des2}
                   </div>
               </div>
           </div>
        </>
    )
}