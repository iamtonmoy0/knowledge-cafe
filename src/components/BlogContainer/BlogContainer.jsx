import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BlogCard } from '../BlogCard/BlogCard';
import { BookmarkCard } from '../BookmarkCard/BookmarkCard';

 export const BlogContainer = () => {
	const [blogs,setBlogs]=useState([])
	const [bookmark,setBookmark]=useState([])
	const[time,setTime]=useState([])

	useEffect(()=>{
		fetch('data.json')
		.then(resp=>resp.json())
		.then(data=>setBlogs(data))
	},[])

//   finding products from id
useEffect(()=>{
	//getting stored cart ad

	let cart={};
	const nameCart=[]
	const bookmarkData=localStorage.getItem('bookmark')
	if(bookmarkData){
		cart=JSON.parse(bookmarkData)
	}
	for(const id in cart){
		//finding product by id
		const savedBlog=blogs.find(blog=>blog.id === id)
		// console.log(savedBlog.blog_title)
		//get name of blog
		if(savedBlog){
			const name=savedBlog.blog_title
			 
			nameCart.push(name)
		}
		
		
		

	}
setBookmark(nameCart);

},[blogs])
// time
useEffect(()=>{
	//getting stored cart ad

	let cart={};
	const timeCart=[]
	const timeData=localStorage.getItem('time')
	if(timeData){
		cart=JSON.parse(timeData)
	}
	for(const id in cart){
		//finding product by id
		const savedBlog=blogs.find(blog=>blog.id === id)
		// console.log(savedBlog.blog_title)
		//get name of blog
		if(savedBlog){
			const time=savedBlog.reading_time
			 
			timeCart.push(time)
		}
		
		
		

	}
setTime(timeCart);

},[blogs])



	return (
		<div className="container">
         <div className="row">
       <div className="col-8">
       {blogs.map(blog=><BlogCard blog={blog} key={blog.id}  />)}
    </div>
    <div className="col-4">
      <BookmarkCard name={bookmark} time={time} />
    </div>
      </div>
</div>
	);
}

