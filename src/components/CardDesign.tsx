import {Card, CardActions, CardContent, Grid, IconButton, Typography } from '@material-ui/core'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import { makeStyles,createStyles, Theme} from '@material-ui/core/styles';

const useStyles = makeStyles((theme:Theme) => createStyles({

    root:{        
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-evenly',
        height:'355px',
        padding:'40px', 
        background: '#FBFBFB 0% 0% no-repeat padding-box',
        boxShadow: '18px 18px 30px #D1D9E680',
        borderRadius: '50px'       
    },
    iconBox:{
        display:'flex',
        justifyContent:'center',
        background: '#FEFEFE 0% 0% no-repeat padding-box'
    },
    cardHeading:{
        margin:0,
        textAlign:'center',
        fontWeight:'bolder',
        fontSize:'35px',
        padding:'2px',
        color:'#0E2833',
        fontFamily:'Poppins'
    },
    icon:{
        borderRadius:'2rem',
        background: '#1FAED7 0% 0% no-repeat padding-box',
        color:'white',
    }

}))


function CardDesign(props:any) {
    const {text}=props
    const classes=useStyles()

    
    return (
        <Grid xs={3} item>
            <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.cardHeading}>
                        {text}
                    </Typography>
                </CardContent>

                <CardActions className={classes.iconBox}>
                    <IconButton>
                        <ArrowForwardIcon className={classes.icon}/>
                    </IconButton>
                </CardActions>
                
            </Card>
        </Grid>
    )
}

export default CardDesign
