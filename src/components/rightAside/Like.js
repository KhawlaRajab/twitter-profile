import RetriveAccounts from "../retriveAccounts"
import style from './RightSide.module.css'



export default function Like() {
    return (
        <div className={style.youMightLike}>
            <RetriveAccounts prop='like' />
         </div>
    )
}