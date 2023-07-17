import styles from "./Profile.module.css";

export const Profile = (props) => {
    let userId=location.pathname.split("/")[2];
    let user = props.function(userId);
    //console.log(userId);
    return (
        <div className="row">
        <div className="col-md-4">
        <img width="100%" src={user.avatar} alt="" />
        </div>
        <div className="col-md-8">
        <h2 className={styles.id}>Id: <span> {user.id}</span></h2>
        <h3 className={styles.name}>Фамилия, имя <span>{user.lastname} {user.name}</span></h3>
        <h3 className={styles.email}>Email: <span>{user.email}</span></h3>
        <p className={styles.about}>{user.about}</p>
        <button style={{background: "green", padding: "5px", color:"white"}}>Отправить</button>
        </div>
        </div>

    )
  };