function move_servo(position_1: number, position_2: number, time_1: number, time_2: number) {
    pins.servoWritePin(AnalogPin.P15, position_1)
    basic.pause(time_1)
    pins.servoWritePin(AnalogPin.P15, position_2)
    basic.pause(time_2)
}

function accelerate_movement(speed: number, delay: number, accelerations: number) {
    Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, speed)
    for (let index = 0; index < accelerations; index++) {
        move_servo(80, 135, 50, 950)
        basic.pause(delay)
        speed += 5
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, speed)
    }
    Kitronik_Move_Motor.stop()
}

input.onLogoEvent(TouchButtonEvent.Pressed, function main() {
    accelerate_movement(10, 500, 9)
})
