// This will move the position of the servo to create tick marks to measure velocity
function move_servo(position_1: number, position_2: number, time_1: number, time_2: number) {
    pins.servoWritePin(AnalogPin.P15, position_1)
    basic.pause(time_1)
    pins.servoWritePin(AnalogPin.P15, position_2)
    basic.pause(time_2)
}

// This will accelerate the robot and leave a tick mark with each acceleration.        
function accelerate_movement(speed: number, accelerations: number) {
    Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, speed)
    for (let i = 0; i < accelerations; i++) {
        move_servo(0, 180, 200, 800)
        speed += 5
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, speed)
    }
    Kitronik_Move_Motor.stop()
}

// The main function will accelerate the robot, starting at speed 10 for 6 accelerations,
// leaving a tick with each acceleration.
// Touch the logo on the MicroBit to start the code.
input.onLogoEvent(TouchButtonEvent.Pressed, function main() {
    accelerate_movement(10, 6)
})
