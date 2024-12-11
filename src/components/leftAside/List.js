import { List as list } from './data'
import style from './leftSide.module.css'

export default function List() {
    const LissItem = list.map((item, idx) => {
        return(
        <li key={idx}>
                <span className={style.icon}>{item.icon}</span> 
            {item.name}
        </li>)
    });
    return (
        <>
            <ul>
                {LissItem}
            </ul>
        </>
    )
}


