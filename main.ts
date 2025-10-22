/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Ethan Choy
 * Created on: Sep 2025
 * This program turns motor
*/

// setup
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// variables
const servoNumber1 = robotbit.Servos.S1

// go to 0 degrees
input.onButtonPressed(Button.A, function() {
    basic.clearScreen()
    robotbit.Servo(servoNumber1, 0)
    basic.clearScreen()
    basic.showString("0")
    basic.showIcon(IconNames.SmallSquare)
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
})

// go to 180 degrees
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    robotbit.Servo(servoNumber1, 180)
    basic.clearScreen()
    basic.showString("180")
    basic.showIcon(IconNames.SmallSquare)
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
})
