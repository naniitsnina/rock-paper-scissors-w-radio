input.onPinPressed(TouchPin.P0, function () {
    radio.sendNumber(choice2)
    basic.showIcon(IconNames.Yes)
    selected2 = true
})
radio.onReceivedNumber(function (receivedNumber) {
    received = true
})
input.onButtonPressed(Button.A, function () {
    choice = randint(1, 3)
    if (choice == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else if (choice == 2) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    }
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(choice)
    basic.showIcon(IconNames.Yes)
    selected = true
})
input.onButtonPressed(Button.B, function () {
    choice2 = randint(1, 3)
    if (choice2 == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else if (choice2 == 2) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
})
let selected = false
let choice = 0
let received = false
let selected2 = false
let choice2 = 0
radio.setGroup(2)
basic.forever(function () {
    if (choice == 1 && choice2 == 3) {
        basic.showString("You Win!")
    } else if (choice == 1 && choice2 == 2) {
        basic.showString("You Lose!")
    } else {
        for (let index = 0; index < 2; index++) {
            basic.showString("Try Again")
        }
    }
    if (choice == 2 && choice2 == 1) {
        for (let index = 0; index < 2; index++) {
            basic.showString("You Win!")
        }
    } else if (choice == 2 && choice2 == 3) {
        for (let index = 0; index < 2; index++) {
            basic.showString("You Lose!")
        }
    } else {
        for (let index = 0; index < 2; index++) {
            basic.showString("Try Again")
        }
    }
    if (choice == 3 && choice2 == 2) {
        for (let index = 0; index < 2; index++) {
            basic.showString("You Win!")
        }
    } else if (choice == 3 && choice2 == 1) {
        for (let index = 0; index < 2; index++) {
            basic.showString("You Lose!")
        }
    } else {
        for (let index = 0; index < 2; index++) {
            basic.showString("Try Again")
        }
    }
})
