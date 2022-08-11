import React from 'react'
import { makeStyles } from '@mui/styles';
//withStyles, make Style
const useStyles= makeStyles({
    sideMenu:{
        visibility:'visible',
        display:'flex',
        flexDirection:'column',
        position: 'absolute',
        left: '0px',
        width: '320px',
        height: '100%',
        backgroundColor: '#253053'
    }
})

function SideMenu() {
    const classes = useStyles()
    console.log(classes)

  return (
    <>
        <div className={classes.sideMenu}>

        </div>

    </>
  )
}

export default SideMenu