import Like from './Like'
import Search from './Search'
import Trends from './Trends'
import style from './RightSide.module.css'

export default function RightSide() {
    return (
        <div className={style.Rightcontainer}>    
            <Search />
            <div className='LikeContainer'>
                <Like/>
            </div> 
            <Trends/>
    </div>   
    )
}
