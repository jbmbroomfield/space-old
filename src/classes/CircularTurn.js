import Path from './Path'
import Direction from './Direction'
import Vector from './Vector'

class CircularTurn extends Path {

    constructor(source, radius, startTime, clockwiseDirection = -1) {
        super()
        this.clockwiseDirection = clockwiseDirection
        this.speed = source.speed(startTime)
        this.radius = radius
        // const initialVelocity = source.velocity(startTime)
        const initialDirection = source.direction(startTime)
        const initialPosition = source.position(startTime)
        const directionToCentre = Direction.add(initialDirection, clockwiseDirection == 1 ? 3 * Math.PI / 2 : Math.PI / 2)

        this.centre = Vector.build(initialPosition, directionToCentre, radius)

        this.period = 2 * Math.PI * radius / this.speed

        if (clockwiseDirection == 1) {
            this.initialAngle = Direction.negative(initialDirection)
        } else {
            console.log(initialDirection, initialDirection * 180 / Math.PI)
            this.initialAngle = Direction.subtract(Math.PI, initialDirection)
            console.log(this.initialAngle, this.initialAngle * 180 / Math.PI)
        }
    }

    position(time) {
        const angle = 2 * Math.PI * this.clockwiseDirection / this.period * time + this.initialAngle;
        const x = this.radius * Math.cos(angle) + this.centre[0]
        const y = this.radius * Math.sin(angle) + this.centre[1]
        console.log()
        return [x, y]
    }

}

export default CircularTurn