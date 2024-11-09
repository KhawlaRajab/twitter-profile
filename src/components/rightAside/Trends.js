import style from './RightSide.module.css'

const trends = [
    {
        name: 'VALORANTChampions',
        postNum: '27.9k posts'
    },
    {
        name: 'Insta',
        postNum: '1411 posts'
    },
    {
        name: 'todays message',
        postNum: '22k posts'
    },
    {
        name: 'Messi',
        postNum: '77k posts'
    },
    {
        name: 'Messi',
        postNum: '77k posts'
    },{
        name: 'todays message',
        postNum: '22k posts'
    }
]


export default function Trends () {
    const trend = trends.map(tr =>
        <li key={tr.id} className={style.trend}>
            <h3>{tr.name}</h3>
            <p>{tr.postNum}</p>
        </li>)
     return (
         <div className={style.trendContainer}>
            <h2 style={{margin:'15px'}}>
             Trends for you
            </h2>
            <ul >
                {trend}                 
            </ul>
        
           <p style={{color:'cornflowerblue', padding:'7px'} }>show more</p>    
         </div>
    )
}
