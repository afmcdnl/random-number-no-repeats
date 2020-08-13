input.onButtonPressed(Button.A, function () {
    index += 1
})
input.onButtonPressed(Button.B, function () {
    index += -1
})
let suggested_number = 0
let list = [0]
let min = 1
let max = 5
let index = 0
list.shift()
basic.showIcon(IconNames.Heart)
while (list.length < max - (min + 1)) {
    suggested_number = randint(min, max)
    if (list.indexOf(suggested_number) < 0) {
        list.push(suggested_number)
        basic.showNumber(suggested_number)
    }
}
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    basic.showNumber(list[index])
})
