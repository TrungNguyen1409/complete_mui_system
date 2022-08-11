import React from 'react';
import './App.css';
import SideMenu from '../components/SideMenu';
import Header from '../components/Header';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  appMain:{
    paddingLeft: '320px',
    width:'100%'
  }
  
})

function App() {
  const classes = useStyles()
  return (
    <>
      <Header></Header>
      <SideMenu></SideMenu>
      <div className={classes.appMain}>here we go</div>
    </>
  );
}

export default App;
