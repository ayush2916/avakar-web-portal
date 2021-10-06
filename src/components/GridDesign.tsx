import { Grid } from '@material-ui/core'
import React from 'react'
import CardDesign from './CardDesign'
import { makeStyles,createStyles, Theme} from '@material-ui/core/styles';

const useStyles = makeStyles((theme:Theme) => createStyles({

    root:{
        margin:0,
        width:'100%',
        paddingRight:'50px',
        paddingLeft:'50px',
        justifyContent:'space-evenly'
    },
    pageHeading:{
        margin:0,
        textAlign:'center',
        padding:'5px',
        color:'#0E2833',
        fontWeight:'bolder',
        font: 'normal normal bold 100px/120px Poppins',
        letterSpacing: '0px'
    }

}))

function GridDesign() {

    const courses = ["Home Composting","Grow your Greens","Plastic Management","Global Warming"]
    const classes=useStyles()
    return (

        <>
        
        <h1 className={classes.pageHeading}>Index</h1>
        
        <Grid container spacing={3} className={classes.root}>
            <CardDesign text={courses[0]} />
            <CardDesign text={courses[1]} />
            <CardDesign text={courses[2]} />
            <CardDesign text={courses[3]} />
        </Grid>

        </>
        
    )
}

export default GridDesign
