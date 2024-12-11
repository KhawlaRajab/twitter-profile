import style from './main.module.css'
import Profile from './Profile'
import Posts from './Posts'
import Follow from './Follow'


export default function Main() {
    return (
        <div className={style.mainContainer}>
          <Profile/>
          <Posts />
          <Follow/>    
        </div>
        
    )
}