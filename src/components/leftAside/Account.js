
import styles from './accountDetails.module.css'

export default function Account({ account ,style={}}) {
  return (
    <div> 
      <div className={styles.account} style={style}>
        <div className={styles.accountImg}>
         <img
        src={account.url}
        alt={account.name}
        />
        </div>
      <div className={styles.accountName}>
      <p>
          <b>{account.name}</b>
          </p>
            <p style={{ color: "gray" }}> {account.neckname}</p>
          </div>  
      </div>
    </div> 

    )
}