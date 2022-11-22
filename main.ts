let light_state = 0
input.onPinPressed(TouchPin.P0, function () {
    if (light_state == 0) {
        light_state = 1
    } else {
        light_state = 0
    }
})
basic.forever(function () {
    if (light_state == 1) {
        pins.digitalWritePin(DigitalPin.P2, 0)
    } else {
        pins.digitalWritePin(DigitalPin.P2, 1)
    }
})
