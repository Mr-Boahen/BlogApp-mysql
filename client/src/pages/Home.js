import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  const posts=[
    {
      id:1,
      title:"lorem32 Lorem ipsum, dolor sit amet consectetur adipisicing eli",
      desc:" consectetur adipisicing elit. Necessitatibus molestias consequatur atque dolor deleniti iure eveniet magni vero, dicta aut, quisquam possimus quidem quis, unde hic doloremque minima reiciendis? Offic",
      img:"https://images.pexels.com/photos/6607387/pexels-photo-6607387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    
    },
    {
      id:2,
      title:"lorem32 Lorem ipsum, dolor sit amet consectetur adipisicing eli",
      desc:" consectetur adipisicing elit. Necessitatibus molestias consequatur atque dolor deleniti iure eveniet magni vero, dicta aut, quisquam possimus quidem quis, unde hic doloremque minima reiciendis? Offic",
      img:"https://images.pexels.com/photos/14691038/pexels-photo-14691038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    
    },
    {
      id:3,
      title:"lorem32 Lorem ipsum, dolor sit amet consectetur adipisicing eli",
      desc:" consectetur adipisicing elit. Necessitatibus molestias consequatur atque dolor deleniti iure eveniet magni vero, dicta aut, quisquam possimus quidem quis, unde hic doloremque minima reiciendis? Offic",
      img:"https://images.pexels.com/photos/14557815/pexels-photo-14557815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    
    },
    {
      id:4,
      title:"lorem32 Lorem ipsum, dolor sit amet consectetur adipisicing eli",
      desc:" consectetur adipisicing elit. Necessitatibus molestias consequatur atque dolor deleniti iure eveniet magni vero, dicta aut, quisquam possimus quidem quis, unde hic doloremque minima reiciendis? Offic",
      img:"https://images.pexels.com/photos/6607387/pexels-photo-6607387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    
    },
    {
      id:5,
      title:"lorem32 Lorem ipsum, dolor sit amet consectetur adipisicing eli",
      desc:" consectetur adipisicing elit. Necessitatibus molestias consequatur atque dolor deleniti iure eveniet magni vero, dicta aut, quisquam possimus quidem quis, unde hic doloremque minima reiciendis? Offic",
      img:"https://images.pexels.com/photos/13539518/pexels-photo-13539518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    
    },
    {
      id:6,
      title:"lorem32 Lorem ipsum, dolor sit amet consectetur adipisicing eli",
      desc:" consectetur adipisicing elit. Necessitatibus molestias consequatur atque dolor deleniti iure eveniet magni vero, dicta aut, quisquam possimus quidem quis, unde hic doloremque minima reiciendis? Offic",
      img:"https://images.pexels.com/photos/13716813/pexels-photo-13716813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    
    },
  ]
  return (
    <div className='home'>
    <div className="posts">  
      {posts.map((post)=>(
        <div className='post' key={post.id}> 
          <div className="img">
            <img src={post.img} alt="" />
          </div>
          <div className="content">
              <Link className='link'  to={`/post/${post.id}`}>
            <h1>{post.title}</h1>
            
            </Link>
            <p>{post.desc}</p>
            <button>Read More</button>
          </div>
        
        </div>
       )

      )}</div>
   </div>
  )
}

export default Home