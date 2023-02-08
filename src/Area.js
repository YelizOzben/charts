import React from "react";
const Area = (props) => {
return (
//props olarak gelen datanın boyutuna göre ilgili kapsayıcının yükseliğinin belirlenmesi 40px chart item yüksekliği
<div className="area" style={{height:props.data.length * 40}}>            
        {props.children}
</div>
)}
export default Area