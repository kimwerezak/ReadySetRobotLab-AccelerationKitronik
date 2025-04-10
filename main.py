#This will move the position of the servo to create tick marks to measure velocity
def move_servo(position_1, position_2, time_1, time_2): 
    pins.servo_write_pin(AnalogPin.P15, position_1)
    basic.pause(time_1)
    pins.servo_write_pin(AnalogPin.P15, position_2)
    basic.pause(time_2)

#This will accelerate the robot and leave a tick mark with each acceleration.        
def accelerate_movement(speed, accelerations): 
    Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.FORWARD, speed)
    for i in range(accelerations):
        move_servo(0, 180, 200, 800)
        speed += 5
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.FORWARD, speed)
    Kitronik_Move_Motor.stop()

#The main function will accelerate the robot, starting at speed 10 for 6 accelerations,
#leaving a tick with each acceleration.
def main():
    accelerate_movement(10, 6)

#Touch the logo on the MicroBit to start the code.
input.on_logo_event(TouchButtonEvent.PRESSED, main)

