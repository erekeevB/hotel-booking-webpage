import Login from './Login';
import Registration from './Registration';
import s from './Authentication.module.css'

const Authentication = ({setLogin, isLogin}) => {
    
    const closeAuth = (num, string) => {

        document.body.style.overflow = string;
        setLogin(num);

    }
    
    return (

        <div className={s.authentication}>

            {isLogin===1?
            
                <Login closeAuth={closeAuth}/>:
                <Registration closeAuth={closeAuth}/>
        
            }

        </div>

    )

}

export default Authentication;