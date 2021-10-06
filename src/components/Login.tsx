import LoginStyles from "./LoginStyles"
import {useState,useEffect} from 'react'

function Login() {

    const classes=LoginStyles()
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    

    const handleLogin = (event:any)=>{
        let name:String= event.target.name
        console.log(event)

        if(name==="email")
            setemail(event.target.value)
        else if(name==="password")
            setpassword(event.target.value)

    }

    return (
        <div className={classes.root}>
            <div className={classes.loginContainer}>
                <div className={classes.heading}>
                    <h1 className={classes.welcome}>Welcome</h1>
                    <p className={classes.paragraph}>Sign in to your course</p>
                </div>

                <form className={classes.formContainer}>
                    <input 
                        type="text" 
                        placeholder="Email or Phone" 
                        className={classes.inputs} 
                        name="email" 
                        onChange={handleLogin}
                        />
                    <br />
                    <input 
                        type="password" 
                        placeholder="password" 
                        className={classes.inputs} 
                        name="password"
                        onChange={handleLogin}
                        />   
                    <p className={classes.forgetPassword}>Forget password?</p>
                    <button className={classes.signIn}>Sign In</button>
                </form>             
            
            </div>
        </div>
    )
}

export default Login
