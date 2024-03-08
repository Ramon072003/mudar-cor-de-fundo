function greenMode(){
    let sheet = document.styleSheets[0]
    sheet.insertRule('body {background-color: green;}', sheet.cssRules.length)
}

function redMode(){
    let sheet = document.styleSheets[0]
    sheet.insertRule('body {background-color: red;}', sheet.cssRules.length)
}

function blueMode(){
    let sheet = document.styleSheets[0]
    sheet.insertRule('body {background-color: blue;}', sheet.cssRules.length)
}

function yellowMode(){
    let sheet = document.styleSheets[0]
    sheet.insertRule('body {background-color: yellow;}', sheet.cssRules.length)
}

let greenButton = document.querySelector("#green-button")
let redButton = document.querySelector("#red-button")
let blueButton = document.querySelector("#blue-button")
let yellowButton = document.querySelector("#yellow-button")

greenButton.addEventListener("click",greenMode)
redButton.addEventListener("click",redMode)
blueButton.addEventListener("click",blueMode)
yellowButton.addEventListener("click",yellowMode)
