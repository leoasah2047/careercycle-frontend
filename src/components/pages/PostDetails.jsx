import { useParams } from "react-router-dom"
import Navigation1 from "../components/Navigation1"
import Section from "../components/Section";
import Container1 from "../components/Container1";
import Container from "../components/Container";
import axios from "axios"
import { useEffect, useState } from "react"
import Loader from "../components/Loader"


const PostDetails = () => {

  const postId=useParams().id
  const [post,setPost]=useState({})
  const [loader,setLoader]=useState(false)

  const fetchPost=async()=>{
    try{
      const res= await axios.get(`${window.BACKEND_API_SERVER_ADDRESS}/post/${postId}`)
      // console.log(res.data)
      setPost(res.data)
    }
    catch(err){
      console.log(err)
    }
  }

  useEffect(()=>{
    fetchPost()
  },[postId])
  
  return (
    <div>
        <Navigation1/>
        {loader?<div className="h-[80vh] flex justify-center items-center w-full"><Loader/></div>:<div className="px-8 md:px-[200px] mt-8">
        <div className="flex justify-between items-center">
         <h1 className="text-2xl font-bold text-black md:text-3xl">{post.title}</h1>
        </div>
        <div className="flex items-center justify-between mt-2 md:mt-4">
        <p>@{post.username}</p>
       <div className="flex space-x-2">
       <p>{new Date(post.updatedAt).toString().slice(0,15)}</p>
       <p>{new Date(post.updatedAt).toString().slice(16,24)}</p>
       </div>
        </div>
        <img src={IF+post.photo} className="w-full  mx-auto mt-8" alt=""/>
         <p className="mx-auto mt-8">{post.desc}</p>
         <div className="flex items-center mt-8 space-x-4 font-semibold">
          <p>Categories:</p>
          <div className="flex justify-center items-center space-x-2">
          {post.categories?.map((c,i)=>(
            <>
            <div key={i} className="bg-gray-300 rounded-lg px-3 py-1">{c}</div>
            </>
            
          ))}
            
          </div>
         </div>
        </div>}
        <section className="footer">
          <Section />
          <footer className="section1">
            <Container1 />
            <Container />
          </footer>
        </section>
    </div>
  )
}

export default PostDetails