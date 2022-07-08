import React, { useEffect, useState } from "react";
import './Blogs.css'
import Navbar from "../../Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route, Outlet, Link, Router, HashRouter } from "react-router-dom";
import Axios from 'axios';
import ReactHtmlParser from 'html-react-parser';

function Blogs() {
  let [content, setContent] = useState(null);
  let [mblogContent, setmBLogContent] = useState(null);
  let [activeButton, setactiveButton] = useState({ prevActive: null});

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


  }, []);

  const DynamicElement = (blog, data) => {
    return (
      // <li onClick={()=>alert(0)} className="dynamic-link">I am New</li>
      <span className="button" id={data.date} onClick={(event) => {
        // console.log(JSON.stringify(data)+" is clicked from left")
        setmBLogContent(data.content)
      
        
          document.getElementById(event.target.id).style.background = "white"
          document.getElementById(event.target.id).style.color = "#FCA61F"
          console.log(event.target.id + " " + activeButton.active)
          if (activeButton.prevActive != null) {
            document.getElementById(activeButton.prevActive).style.background = "linear-gradient(180deg, #fdc50f 26.71%, #fb982f 99.6%)"
            document.getElementById(activeButton.prevActive).style.color = "white"
          }
        
        setactiveButton({prevActive:event.target.id})
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

          {content && content.map(function (d, idx) {
            // return (<span className="button" id="idx" key={idx}>{d.date.substring(0,10)}</span>)
            return DynamicElement(d.date.substring(0, 10), d)
          })}

        </div>
        <div className="b-middle">
          {/* {content && setSelectedContent(nthElement(content,0))} */}


          {/* DynamicElement(content && nthElement(content,0).content) */}
          <span>{(mblogContent != null ? ReactHtmlParser(mblogContent) : content && ReactHtmlParser(nthElement(content, 0).content))}</span>


        </div>
        <div className="b-right">i am right</div>
      </div>
    </div>
  )
}

export default Blogs
