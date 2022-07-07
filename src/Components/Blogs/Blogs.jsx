import React, { useEffect, useState } from "react";
import './Blogs.css'
import Navbar from "../../Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route, Outlet, Link, Router, HashRouter} from "react-router-dom";
import Axios from 'axios';
function Blogs() {
  let [content, setContent] = useState(null);
  let [mblogContent, setmBLogContent] = useState(null);
  let [activeButton,setactiveButton] = useState({prevActive:null,active:null}); 

  const nthElement = (arr, n = 0) => (n > 0 ? arr.slice(n, n + 1) : arr.slice(n))[0];
  useEffect(() => { 
     Axios.get('http://localhost:8080/app/api/blogs/get-blogs')
            .then(res => {
               // this.setState({ usersCollection: res.data });
              // setContent(res.data.respose_data)
               console.log(res.data.respose_data)
               setContent(res.data.respose_data)
            })
            .catch(function (error) {
                console.log(error);
            })
          

  },[]);

  const DynamicElement = (blog,data) => {
    return (
      // <li onClick={()=>alert(0)} className="dynamic-link">I am New</li>
      <span className="button" id={data.date} onClick={(event)=>{
        // console.log(JSON.stringify(data)+" is clicked from left")
        setmBLogContent(data.content)
        setactiveButton({prevActive:activeButton.active,active:event.target.id})
        if(activeButton.active != null)
          {
            document.getElementById(activeButton.active).style = {background:"white"}
             console.log(event.target.id+" "+activeButton.active)
          }
           
      }}>{blog}</span>
    )
}
// const blogContent = (blog) => {
//   return (
//     // <li onClick={()=>alert(0)} className="dynamic-link">I am New</li>
//     <span>{blog}</span>
//   )
// }
 
  return (
    <div>
      <Navbar />
    <div className='b-container'> 
          <div className="b-left">

          {content && content.map(function(d, idx){
              // return (<span className="button" id="idx" key={idx}>{d.date.substring(0,10)}</span>)
              return DynamicElement(d.date.substring(0,10),d)
          })}
          
          </div>
          <div className="b-middle"> 
          {/* {content && setSelectedContent(nthElement(content,0))} */}

          
             {/* DynamicElement(content && nthElement(content,0).content) */}
            <spn>{(mblogContent !=null?mblogContent:content && nthElement(content,0).content)}</spn>
           
                    
          </div>
          <div className="b-right">i am right</div>
    </div>
    </div>
  )
}

export default Blogs
