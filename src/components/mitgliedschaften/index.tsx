import React from 'react';
import { Card, Image, Button  } from 'antd';
import './index.css';
interface MitgliedschaftenProps {
    imgURL: string,
    des1: string,
    des2: string,
    des3: string,
    des4: string,
    des5: string,
    des6: string,
    type: number
  }
export default function Mitgliedschaften(props:MitgliedschaftenProps) {
    if(props.type == 1){
        return (
            <>
               <div className="Mitgliedschaften-content">
                   <div className="Mitgliedschaften-sub-1">
                       <Image
                           src={props.imgURL}
                           style={{width:"33vw"}}
                       />
                   </div>
                   <div className="Mitgliedschaften-sub-2">
                           <span className="pl-sp">{props.des1}</span>
                           <span className="pl-sp pl-sp-1">{props.des2}</span>
                           <span className="pl-sp">{props.des3}</span>
                   </div>
               </div>
            </>
        )
    }else if(props.type == 2){
        return (
            <>
               <div className="Mitgliedschaften-content">
                   <div className="Mitgliedschaften-sub-1">
                       <Image
                           src={props.imgURL}
                           style={{width:"33vw"}}
                       />
                   </div>
                   <div className="Mitgliedschaften-sub-2">
                           <span className="pl-sp">{props.des1}</span>
                           <span className="pl-sp pl-sp-2">{props.des2}</span>
                           <span className="pl-sp">{props.des3}</span>
                           <p className="pl-sp pl-sp-3">{props.des4}</p>
                   </div>
               </div>
            </>
        )
    }else if(props.type == 3){
        return (
            <>
               <div className="Mitgliedschaften-content">
                   <div className="Mitgliedschaften-sub-1">
                       <Image
                           src={props.imgURL}
                           style={{width:"33vw"}}
                       />
                   </div>
                   <div className="Mitgliedschaften-sub-2">
                           <span className="pl-sp">{props.des1}</span>
                           <span className="pl-sp pl-sp-4">{props.des2}</span>
                           <span className="pl-sp">{props.des3}</span>
                           <span className="pl-sp pl-sp-4">{props.des4}</span>
                           <span className="pl-sp">{props.des5}</span>
                           <p className="pl-sp pl-sp-3">{props.des6}</p>

                   </div>
               </div>
            </>
        )
    }else {
        return null;
    }
    
}