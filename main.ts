function Rouge () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P8, 1)
}
function Vert () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 1)
    pins.digitalWritePin(DigitalPin.P8, 0)
}
function Blanc () {
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 1)
    pins.digitalWritePin(DigitalPin.P8, 1)
}
basic.showNumber(pins.digitalReadPin(DigitalPin.P0))
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) < 550 && pins.digitalReadPin(DigitalPin.P0) > 450) {
        Blanc()
    } else if (pins.digitalReadPin(DigitalPin.P0) < 450 && pins.digitalReadPin(DigitalPin.P0) > 250) {
        Rouge()
    } else if (pins.digitalReadPin(DigitalPin.P0) < 250 && pins.digitalReadPin(DigitalPin.P0) > 0) {
        Vert()
    } else {
    	
    }
})
