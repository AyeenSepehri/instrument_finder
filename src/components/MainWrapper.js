
import React from 'react'
import { useDispatch } from 'react-redux'
import { nextButton , previewButton } from "../store/store"
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
  const prevBtnHandler = () => {
    dispatch(previewButton())
  }

  return (
    <div>
      <Drawer>
        <Card>
          <div>
          {props.children}
          </div>
        </Card>
          <div className={classes.buttonWrapper}>
            <Button onClick={nextBtnHandler}>بعدی</Button>
            <Button onClick={prevBtnHandler}>قبلی</Button>
          </div>
      </Drawer>
    </div>
  )
}

export default MainWrapper