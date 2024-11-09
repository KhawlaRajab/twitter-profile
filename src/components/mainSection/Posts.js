import { CiRepeat } from "react-icons/ci";
import Account from '../leftAside/Account'
import styles from './main.module.css'
import img from '../person.jpg'

const account = {
    name: 'danabramoy.bask.social',
    neckname: '@dan_abramoy',
    url:img
}

const style = {
    margin: '20px 0px 10px 10px'

}

export default function Posts() {
    return (
        <div className={styles.postContainer}>
            <Account account={account} style={style} prop='post' />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
</p>
         </div>
    )
}