import { makeStyles,createStyles, Theme} from '@material-ui/core/styles';

const HeaderStyles = makeStyles((theme:Theme) => createStyles({
    navbar:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        paddingTop:'.5rem',
        paddingBottom:'.5rem',
        backgroundColor:'#0E2833',
        color:'#FEFEFE',
        paddingRight:'50px',
        paddingLeft:'50px',
        flexWrap:'wrap'
    },
    linksContainer:{
        flex:'0.5'
    },
    navLinks:{
        display:'flex',
        listStyle:'none',
        padding:'0',
        justifyContent:'space-evenly',
        margin:'0'
    },
    userProfile:{
        display:'flex',
        alignItems:'center'
    },
    navbarBrand:{
        margin:'0',
        fontSize:'1.25rem',
        textDecoration:'none',
        whiteSpace:'nowrap',
        font: 'normal normal bold 40px/12px Poppins'
    },
    signOut:{
        margin:'0',
        fontFamily:'Poppins'
    },
    links:{
        color:'white !important',
        fontSize:'16px !important',
        fontFamily:'Poppins'
    }
}));

export default HeaderStyles
