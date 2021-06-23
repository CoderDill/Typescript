import { getObstacleEvents } from './computer-vision';

interface AutonomousCar {
    isRunning?: boolean;
    respond: (events: Events) => void;
}

interface AutonomousCarProps {
    isRunning?: boolean;
    steeringControl: Steering;
}

interface Events {
    [event: string]: boolean
}

interface Control {
    excute: (command: string) => void;
}

interface Steering extends Control {
    turn: (direction: string) => void;
}

class Car implements AutonomousCar{
    isRunning;
    steeringControl;

    constructor(props: AutonomousCarProps) {
        this.isRunning = props.isRunning;
        this.steeringControl = props.steeringControl;
    }

    respond(events: Events): void {
        if (!this.isRunning) {
            console.log("Car is off.")
        }

        Object.keys(events).forEach(eventKey => {
            if (!events[eventKey]) {
                return;
            }
            
            if (eventKey === "ObstacleRight") {
                this.steeringControl.turn("left")
            }
            if (eventKey === "ObstacleLeft") {
                this.steeringControl.turn("right")
            }
        }) 
    }
}

class SteeringControl implements Steering {
    excute(command: string): void {
        console.log(`Executing: ${command}`)
    }

    turn(direction: string): void {
        this.excute(`turn ${direction}`)
    }
}

const steering = new SteeringControl()

const autonomousCar = new Car({ isRunning: true, steeringControl: steering});

autonomousCar.respond(getObstacleEvents())