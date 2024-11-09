import Account from '../components/leftAside/Account'
import styles from '../components/mainSection/main.module.css'
import tailwind from './tailwind.png'
import ts from './typescript.png'
import freecodecamp from './freecodecamp.jpg'



const accounts = [
    {
        name: 'FreeCodeCamp.org',
        neckname: '@freeCodeCamp',
        url:freecodecamp
    },
    {
        name: 'TypeScript',
        neckname: '@TypeScript',
        url:ts
    },
    {
        name: 'Tailwind.css',
        neckname: '@TailwindCss',
        url:tailwind
    },
    
]


export default function RetriveAccounts ({ prop }) {
    const account = accounts.map(acc =>
        <li key={acc.id} className={styles.Acoount}><Account account={acc} />
            <button className={styles.followButton} >follow</button>
            {prop === 'follow' && (
                <p className={styles.aboutAccount}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </p>)}
        </li>)
     return (
         <>
            <h2 style={{margin:'15px'}}>
            {prop === 'follow' ? 'Who To Follow' : 'You Might Like'}
            </h2>
            <ul>
                {account}                 
            </ul>
        
           <p style={{color:'cornflowerblue', padding:'7px'} }>show more</p>    
         </>
    )
}
