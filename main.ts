/* Copyright (c) 2025 MTHS All rights reserved
 *
 * Created by: Noyan
 * Created on: Sep 2025
 * This program converts degress Celsius to Kelvin.
*/

basic.clearScreen()
basic.showIcon(IconNames.Happy)

// variables
let celsius: number
let kelvin:number 

input.onButtonPressed(Button.A, function() {
  // input
  celsius =  input.temperature()

  // process
  kelvin = celsius + 273.15
  kelvin = Math.round(kelvin)

  // output
  basic.clearScreen()
  basic.showString('The temperature is:')
  basic.showNumber(kelvin)
  basic.showString('K')
})