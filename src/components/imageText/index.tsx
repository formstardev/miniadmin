import React from 'react';
import { Card, Image, Button  } from 'antd';
import './index.css';
interface ITProps {
    imgURL: string,
    title: string,
    des: string,
    type:number
  }
export default function imageText(props:ITProps) {
    if(props.type == 1){
        return (
            <>
               <div className="IT-content">
                   <div className="sub-1">
                       <Image
                           width={400}
                           src={props.imgURL}
                           className="sub-1-image"
                       />
                   </div>
                   <div className="sub-2">
                       <div className="sub-title">
                           {props.title}
                       </div>
                       <div className="sub-des">
                           {props.des}
                       </div>
                   </div>
               </div>
            </>
        )
    }
    else if(props.type == 2){
        return (
            <>
               <div className="IT-content">
                   <div className="sub-2 sub-2-2">
                       <div className="sub-title">
                           {props.title}
                       </div>
                       <div className="sub-des">
                           {props.des}
                       </div>
                   </div>
                   <div className="sub-1">
                       <Image
                           width={400}
                           src={props.imgURL}
                           className="sub-1-image"
                       />
                   </div>
               </div>
            </>
        )
    }
    else if(props.type == 3){
        return (
            <>
               <div className="IT-content">
                    <div className="sub-1">
                        <Image
                           width={400}
                           src={props.imgURL}
                           className="sub-1-image"
                        />
                    </div>
                    <div className="sub-2">
                        <div className="sub-title">
                           {props.title}
                        </div>
                        <div className="sub-des">
                           {props.des}
                        </div>
                        <Button type="primary" block className="IT-btn-1">
                            JETZT UPGRADEN
                        </Button>
                    </div>
               </div>
            </>
        )
    }else {
        return null;
    }
}