import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const BlogCard = (blog) => {
     
		const {cover_img,author_img,author_name,published_date,reading_time,blog_title,hash_tags,id}=blog.blog;

    //storing data to local storage
    const addToCart=(id)=>{
      let bookmark={};
      
      const storedData=localStorage.getItem('bookmark');
       if(storedData){
       bookmark=JSON.parse(storedData)
       }else{
        bookmark={}
       }
      const quantity=bookmark[id]
      if(quantity){
        toast.success('You have already selected this item !', {
            position: toast.POSITION.TOP_RIGHT
        });
      }else{
        toast.success('Bookmarked!', {
            position: toast.POSITION.TOP_RIGHT
        });
     bookmark[id]=1;
      }
      localStorage.setItem('bookmark',JSON.stringify(bookmark))
    }
    
    const handleReadTime=(id)=>{
      console.log('clicked',id)
      let time={}
      const readTime=localStorage.getItem('time')
      if(readTime){
        time=JSON.parse(readTime)
      }else{
        time={}
      }
      const quantity=time[id]
      if(quantity){
          toast.success('You have already marked this content !', {
            position: toast.POSITION.TOP_RIGHT
        });
      }else{
         toast.success('marked as read!', {
            position: toast.POSITION.TOP_RIGHT
        });
        time[id]=1
      }
localStorage.setItem('time',JSON.stringify(time))
    }


	return (
		<div>
      <div className="blog-container w-100 m-auto">
        <div className="blog-card">
          <div className="blog-img">
            <img
              src={cover_img}
              className="rounded mb-3"
              width="100%"
              height="80%"
              alt=""
            />
          </div>
          <div className="author d-flex justify-content-between">
            <div className="author-info d-flex">
              <div className="author-img">
                <img
                  className="rounded-circle me-3"
                  src={author_img}
                  alt=""
                  width="50"
                  height="50"
                />
              </div>
              <div>
                <h5>{author_name}</h5>
                <p>{published_date}</p>
              </div>
            </div>
            <div className="time-bookmark d-flex gap-3">
              <p className="gap-5">{reading_time} min read</p>

              <a className="f-black" href="#">
                <FontAwesomeIcon
                  icon={faBookmark}
                  onClick={()=>addToCart(id)}
                 
              
                />
              </a>
            </div>
          </div>
        </div>
        <div>
          <h1>{blog_title}</h1>
          <p>{hash_tags}</p>
          <a href="#"  onClick={()=>handleReadTime(id)}     >
            Mark as read
           
            
          </a>
        </div>
      
      </div>
    </div>
		
	);
}


