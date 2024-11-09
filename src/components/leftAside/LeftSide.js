import { BsTwitterX } from "react-icons/bs";
import List from "./List";
import Account from './Account'
import style from './leftSide.module.css'
import img from '../person.jpg'



export default function LeftSide() {
    const account = {
        name: 'Mohammad',
        neckname: '@Mohammad',
        url:img
    }

    const compStyle = {
    position: 'fixed',
    bottom: '0px'
    }
    
    return (
        <>
           <div className={style.Container} >
                <BsTwitterX style={{ paddingTop: '10px',paddingLeft: '5px'}} />
            <List />
            <button>Post</button>
            <br/>
            <Account account={account} style={compStyle}  />
            </div>
        </>
    )
}