import { IoIosArrowRoundBack ,IoIosNotificationsOutline  } from "react-icons/io";
import { CiCircleMore } from "react-icons/ci";
import style from './main.module.css'
import img from '../react-logo-pure-css.png'
import { SlCalender } from "react-icons/sl";



export default function Profile() {
    return (
        <>
            <div className={style.header}>
                <IoIosArrowRoundBack className={style.icon} />
            <div className={style.headerContent} >  
            <h3>React</h3>
            <p>2000 posts</p>
            </div>     
        </div>     
        <div className={style.Profile}>
                <img
                    src={img}
                    alt='profile-img'
                />
                
        </div>
            <div className={style.profileHeader}>
                <div className={style.profilePic}>
                    <img src={img}
                    alt='profile-img'/>
                </div>
               <div className={style.actions}> 
                <CiCircleMore className={style.sideAction} />
                <IoIosNotificationsOutline className={style.sideAction}/>
                 <div className={style.sideActionDiv}>Following</div>
                </div>
            </div>
            <div>
                <h2 style={{fontSize:'20px'}}>React</h2>
                <p style={{color:'gray'}}>@reactjs</p>
                <p>the library for web and native user interfaces</p>
                <br/>
                <p>
                    <span style={{color:'gray' , paddingRight:'10px' }}><b>276</b>Followers</span>
                    <span style={{color:'gray'}}><b>700K</b>Following</span>
                </p>
                <div className={style.cont}>
                    <span>Posts</span>
                    <span style={{color:'gray'}}>Replies</span>
                    <span style={{color:'gray'}}>Media</span>
                    <span style={{color:'gray'}}>Links</span>
                </div>
                <br/>
            </div>
        </>
        )
}
