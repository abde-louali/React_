import React from "react";

export default function Singlecard({Praier,praierN,img}) {
  return (
    <div> 
        <div className="card ">
          <img src={img}  style={{width:'18v'}}/>
          <div className="card-body">
            <h4 className="card-title">{praierN}</h4>
            <h2>{Praier}</h2>
          </div>

        </div>
    </div>
  )
}
