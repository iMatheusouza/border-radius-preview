let input = document.querySelectorAll('input')
input.forEach(element => {
  element.addEventListener('input', () => {
    getUserInput()
    changeStyle()
  })
})

let userInputs = {
  leftTop: 0,
  rightTop: 0,
  leftBottom: 0,
  rightBottom: 0 
}

function getUserInput() {
  userInputs.leftTop = document.getElementById('leftTopInput').value
  userInputs.leftBottom = document.getElementById('leftBottomInput').value
  userInputs.rightTop = document.getElementById('rightTopInput').value
  userInputs.rightBottom = document.getElementById('rightBottomInput').value
}

function changeStyle() {
  let styledBox = document.getElementById('mainBox').style
  styledBox.borderTopLeftRadius = userInputs.leftTop + 'px'
  styledBox.borderTopRightRadius = userInputs.rightTop + 'px'
  styledBox.borderBottomLeftRadius = userInputs.leftBottom + 'px'
  styledBox.borderBottomRightRadius = userInputs.rightBottom + 'px'
}
