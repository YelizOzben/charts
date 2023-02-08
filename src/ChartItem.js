import React from "react";
const ChartItem = (props) => {
return (
<div className='chartItemWrapper' style={{ top:props.topDistance, width: props.barwidth}}>
<div>
<img className="chartItemLogo" src={props.imageUri} />
</div>
<div className="chartItem" style={{backgroundColor: props.backgroundcolor}}> {props.title}</div>
<div className="chartItemRightText">{props.barcount}</div>
</div>
)
}
export default ChartItem