import React from 'react'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import {Link} from 'react-router-dom'
import Menu from '../components/Menu';
function Single() {
  return (
    <div className='single'>
      <div className="content">
        <img src="https://images.pexels.com/photos/14557270/pexels-photo-14557270.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <div className="user">
          <img src="https://images.pexels.com/photos/6607387/pexels-photo-6607387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <div className="info">
            <span>John</span>
            <div>Posted 2days ago</div>
          </div>
          <div className="edit">
            <Link className='edit__button' to={`/write?edit=2`} >
                <EditOutlinedIcon/>
            
            </Link>
           
            <Link className='delete__button'>
              <DeleteOutlinedIcon/>
            
            </Link>
          </div>
          
         
        
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo ex voluptatem doloremque, consequatur dolores rerum! Ipsam omnis dolores reiciendis, voluptatibus, ab laboriosam dolor dicta eligendi praesentium ipsum, impedit harum accusantium.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam voluptatem distinctio similique dolorum quos accusamus rem ipsam. Culpa ipsam optio totam ratione vel cum in tempora blanditiis saepe necessitatibus? Non, quo nesciunt.
          </p>
      
      </div>
      <div className="menu">
        <Menu/>
      </div>
    </div>
  )
}

export default Single