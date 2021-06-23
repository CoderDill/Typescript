"use strict";
exports.__esModule = true;
var computer_vision_1 = require("./computer-vision");
var Car = /** @class */ (function () {
    function Car(props) {
        this.isRunning = props.isRunning;
        this.steeringControl = props.steeringControl;
    }
    Car.prototype.respond = function (events) {
        var _this = this;
        if (!this.isRunning) {
            console.log("Car is off.");
        }
        Object.keys(events).forEach(function (eventKey) {
            if (!events[eventKey]) {
                return;
            }
            if (eventKey === "ObstacleRight") {
                _this.steeringControl.turn("left");
            }
            if (eventKey === "ObstacleLeft") {
                _this.steeringControl.turn("right");
            }
        });
    };
    return Car;
}());
var SteeringControl = /** @class */ (function () {
    function SteeringControl() {
    }
    SteeringControl.prototype.excute = function (command) {
        console.log("Executing: " + command);
    };
    SteeringControl.prototype.turn = function (direction) {
        this.excute("turn " + direction);
    };
    return SteeringControl;
}());
var steering = new SteeringControl();
var autonomousCar = new Car({ isRunning: true, steeringControl: steering });
autonomousCar.respond(computer_vision_1.getObstacleEvents());
