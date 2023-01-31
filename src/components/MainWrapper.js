
import React from 'react'
import { useDispatch } from 'react-redux'
import { nextButton } from "../store/store"
import PrimarySearchAppBar from './Navbar/NavBar'

import Drawer from "./Drawer/Drawer";
import Button from "./Button/Button"
import Card from '../layout/Card';
import aAudio from "../assets/tunes/a.wav"

import classes from "./MainWrapper.module.css"
import Select from "./Select/Select"


function MainWrapper(props) {
    const dispatch = useDispatch()

    const aSound = new Audio("../assets/tunes/a.wav")

    const nextBtnHandler = () => {
        dispatch(nextButton())
        aSound.play()
    }

  return (
    <div>
        <PrimarySearchAppBar/>
        <Drawer/>
        <Card>
          {props.children}
          <div className={classes.buttonWrapper}>
          <Button onClick={nextBtnHandler}>Next</Button>
          <Button>preview</Button>
          </div>
        </Card>
    </div>
  )
}

export default MainWrapper