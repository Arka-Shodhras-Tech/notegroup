import axios from 'axios';
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./framecomponent.css";
const FrameComponent = (props) =>
{
  const [groupname,sgroupname]=useState();
  const [color,scolor]=useState();
  const [data,sdata]=useState([])
  const [select,sselect]=useState();
  const AddgGoup=()=>
  {
    axios.post("https://noteserver-tzg3.onrender.com/addgroup/"+groupname+"/"+color)
    .then((res)=>
    {
      if(res.data!=="exist")
      {
        alert("Sucessfully created group");
        window.location.reload(4)
        sessionStorage.id=true;
      }
      else if(res.data==="exist")
      {
        alert("Already Exist");
      }
      else
      {
        alert("Try again")
      }
    })
    .catch((e)=>console.log(e));
  }
  useEffect(()=>
  {
    axios.post("https://noteserver-tzg3.onrender.com/allgroups")
    .then((res)=>
    {
      if(res.data)
      {
        sdata(res.data)
      }
    })
    .catch((e)=>console.log())
  })
  // console.log(select)
  return (
    <>
    <div className="main-page-inner">
      <div className="frame-parent1">
        <div className="pocket-notes-container">
          <h3 className="pocket-notes2">Pocket Notes</h3>
        </div>
        <div className="frame-parent2">
            {
              data.map((value) =>
              (
                
                <div className="frame-parent3" onClick={()=>{sessionStorage.group=value.Groupname;sessionStorage.id=true}} onClickCapture={()=>window.location.reload(0)}>
                  <nav className="encrypted-frame-parent" >
                    <div className="encrypted-frame">
                      <div className="encrypted-frame-child" style={{backgroundColor:`${value.Color}`}}>
                        <Link className="mn2" >{value.Groupname[0].toUpperCase()}</Link>
                      </div>
                    </div>
                  </nav>
                  <div className="personal-javascript-wrapper">
                    <div className="personal-javascript">
                      <Link className="my-notes2">{value.Groupname}</Link>
                    </div>
                  </div>
                </div>
              ))
          }
          
         
          <div className="remove-image-frame-wrapper">
            <div className="remove-image-frame">
              <div className="remove-image-frame-child" />
              <Link onClick={()=>{sessionStorage.removeItem('id')}} className="vector-tool">+</Link>
            </div>
          </div>
        </div>
      </div>
    </div>

            {!sessionStorage.id&&<div className="group-pop" id="group">
            <h4>Create New group</h4>
            <h5>Group Name <input type="text" className="group-name-input" placeholder="Enter group name" onChange={(e)=>sgroupname(e.target.value)}/></h5>
            <ul style={{display:'flex',justifyContent:'space-around'}}>
              <li><h6>Choose Color</h6></li>
                <li>
                  <h6>
                  <button className="btn-color" style={{backgroundColor:"blue"}} onClick={()=>scolor("blue")}></button>
                  </h6>
                </li>
                <li>
                <h6>
                  <button className="btn-color" style={{backgroundColor:"orange"}} onClick={()=>scolor("orange")}></button>
                </h6>
                </li>
                <li>
                <h6>
                <button className="btn-color" style={{backgroundColor:"yellow"}} onClick={()=>scolor("yellow")}></button>
                </h6>
                </li>
                <li>
                <h6>
                <button className="btn-color" style={{backgroundColor:"green"}} onClick={()=>scolor("green")}></button>
                </h6>
                </li>
                <li>
                <h6>
                <button className="btn-color" style={{backgroundColor:"red"}} onClick={()=>scolor("red")}></button>
                </h6>
                </li>
                </ul>
                <div>
            <Link className="create-btn" onClick={AddgGoup}>Create</Link>
          </div>
          
          </div>
}
    </>
    
  );
};

export default FrameComponent;