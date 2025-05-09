let start = 0
let time = 0
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    start = 0
    basic.showIcon(IconNames.Heart)
})
input.onLogoEvent(TouchButtonEvent.Released, function () {
    basic.clearScreen()
    time = input.runningTime() - start
    basic.showNumber(time / 1000)
})
