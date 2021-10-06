import { makeStyles,createStyles, Theme} from '@material-ui/core/styles';

const LoginStyles = makeStyles((theme:Theme) => createStyles({
    root: {
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        height:'100vh',
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        opacity: 1
    },
    loginContainer:{
        display:'flex',
        flexDirection:'column',
        background: '#FBFBFB 0% 0% no-repeat padding-box',
        boxShadow: '18px 18px 30px #D1D9E680',
        padding:'50px',
        borderRadius:'40px',
        fontFamily:'Poppins'
    },
    heading:{
        marginBottom:'35px'
    },
    welcome:{
        margin:0,
        color: '#0E2833',
    },
    paragraph:{
        margin:0,
        color: '#0E2833',
    },
    formContainer:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center'
    },
    inputs:{
        width: '528px',
        padding:'10px',
        background: '#FEFEFE 0% 0% no-repeat padding-box',
        border: '0.6600000262260437px solid #333333',
        borderRadius: '30px',
        fontSize:'16px',
    },
    forgetPassword:{
        color: '#1FAED7',
        fontSize:'16px',
        alignSelf:'flex-end',
        margin:0,
        marginTop:'5px'
    },
    signIn:{
        background: '#0E2833 0% 0% no-repeat padding-box',
        borderRadius: '20px',
        marginTop:'50px',
        border:'none',
        color:'white',
        fontSize:'16px',
        alignSelf:'flex-end',
        padding:'10px'
    }
}));

export default LoginStyles
