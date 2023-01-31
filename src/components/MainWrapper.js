
import React from 'react'
import { useDispatch } from 'react-redux'
import { nextButton } from "../store/store"
import Drawer from "./Drawer/Drawer";
import Button from "./Button/Button"
import Card from '../layout/Card';
import classes from "./MainWrapper.module.css"


function MainWrapper(props) {
  const dispatch = useDispatch()

  const aSound = new Audio("../assets/tunes/a.wav")

  const nextBtnHandler = () => {
    dispatch(nextButton())
    aSound.play()
  }

  return (
    <div>
      <Drawer>
        <Card>
          {props.children}
          <div className={classes.buttonWrapper}>
            <Button onClick={nextBtnHandler}>Next</Button>
            <Button>preview</Button>
          </div>
        </Card>
      </Drawer>
    </div>
  )
}

export default MainWrapper