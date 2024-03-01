import axios from "axios"
import Section from "../components/Section";
import Container1 from "../components/Container1";
import Container from "../components/Container";
import HomePosts from "../blog/Blog"
import Navigation1 from "../components/Navigation1"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Loader from '../blog/Loader'


const Home = () => {
  const [posts,setPosts]=useState([])
  const [noResults,setNoResults]=useState(false)
  const [loader,setLoader]=useState(false)

  const fetchPosts=async()=>{
    setLoader(true)
    try{
      const res=await axios.get(`${window.BACKEND_API_SERVER_ADDRESS}/post/`)
      setPosts(res.data)
      if(res.data.length===0){
        setNoResults(true)
      }
      else{
        setNoResults(false)
      }
      setLoader(false)
      
    }
    catch(err){
      console.log(err)
      setLoader(true)
    }
  }

  useEffect(()=>{
    fetchPosts()

  },[])

  return (
    <>
      <Navigation1/>
      <div className="px-8 md:px-[200px] min-h-[80vh]">
          {loader?<div className="h-[40vh] flex justify-center items-center"><Loader/></div>:!noResults?
          posts.map((post)=>(
            <>
            <Link to={`/posts/post/${post._id}`}>
            <HomePosts key={post._id} post={post}/>
            </Link>
            </>
            
          )):<h3 className="text-center font-bold mt-16">No posts available</h3>}
      </div>
      <section className="footer">
        <Section />
        <footer className="section1">
          <Container1 />
          <Container />
        </footer>
      </section>
    </>
  )
}

export default Home