import { useState } from 'react'
import './App.css'
import { Header } from './components/Header/Header'
import { BlogContainer } from './components/BlogContainer/BlogContainer'
import { QuBlog } from './components/QuBlog/QuBlog'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
 
  return (
    <>
    <Header/>
    <hr />
    <BlogContainer/>
    <hr />
    <QuBlog/>
    <ToastContainer />
      
    </>
  )
}

export default App
