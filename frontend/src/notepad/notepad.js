import axios from "axios";
import React, { useEffect, useState } from "react";
import "../FrameComponent/framecomponent.css";
import "./notepad.css";
const NotePad = (props) =>
{
    const [x,sx]=useState();
    const [note,snote]=useState();
    const [data,sdata]=useState([])
    const date=new Date();
    // console.log(date.toLocaleTimeString())
    const Send=()=>
    {
      axios.post("https://noteserver-tzg3.onrender.com/sendnotes/"+sessionStorage.group+"/"+note+"/"+date.toDateString()+"/"+date.toLocaleTimeString())
      .then((res)=>
      {
        if(res)
        {
          window.location.reload(5);
        }
      })
      .catch((e)=>console.log(e));
    }
    useEffect(()=>
    {
      axios.post("https://noteserver-tzg3.onrender.com/notes/"+sessionStorage.group)
      .then((res)=>
      {
        if(res)
        {
          sdata(res.data)
          // console.log(res.data)
        }
      })
      .catch((e)=>console.log(e))
    })
  return (
    <>
      <div className="notepad" >
        {
          data.map((value) =>
          (
            <>
              <div className="nav">
                <nav className="encrypted-frame-parent nav1">
                  <div className="encrypted-frame">
                    <div className="encrypted-frame-child">
                      <div className="mn2">{value.Groupname[0].toUpperCase()}</div>
                    </div>
                  </div>
                </nav>
                <div className="name">
                  {value.Groupname}
                </div>
              </div>

              <div className="body" onClick={()=>{sessionStorage.id=true}}>
                {
                  value.Notes && value.Notes.map((val) =>
                  (
                    <>
                    <p className="message">{val.Note}</p>
                    <p className="message1">{val.Date} <b>.</b> {val.Time}</p>
                    </>
                  ))
                }
              </div>

            </>
          ))
        }

        <div className="textarea">
          <textarea className="input" placeholder="Enter Your Text Here..." cols={50} onChange={(e) => snote(e.target.value)} />
          <button className="msg-arrow-div" onClick={Send}>
            {
              note&&<img src="arrow.jpg" className="msg-arrow" />
            }
          </button>
        </div>

      </div>
    </>
  );
};

export default NotePad;