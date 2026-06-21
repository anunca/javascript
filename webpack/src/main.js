import './main.scss'
import { camelCase, upperCase, lowerCase } from 'lodash'
import $ from 'jquery'

const helloWorld = (name) => {

  console.log('camelCase:', camelCase(`hello ${name}`))
  console.log('upperCase:', upperCase(`hello ${name}`))
  console.log('lowerCase:', lowerCase(`hello ${name}`))
}

$(()=>{

  helloWorld('firstname lastname')
  
  $('body').on('click', (el) => {
    console.log(el)
  })
})
