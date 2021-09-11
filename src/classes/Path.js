import Vector from './Vector'
import Direction from './Direction'

class Path {

    velocity(time) {
        let previousPosition = this.position(time - 1)
        let currentPosition
        if (previousPosition == null) {
            previousPosition = this.position(time)
            currentPosition = this.position(time + 1)
        } else {
            currentPosition = this.position(time)
        }
        return Vector.subtract(currentPosition, previousPosition)
    }

    speed(time) {
        const v = this.velocity(time)
        return (v[0] ** 2 + v[1] ** 2) ** 0.5
    }

    direction(time) {
        return Direction.fromVelocity(...this.velocity(time))
    }

    negativeDirection(time) {
        return Direction.subtract(this.direction(time), Math.PI)
    }

    checkTime(time) {
        if (this.startTime && this.startTime > time) {
            return false
        }
        if (this.endTime && this.endTime < time) {
            return false
        }
        return true
    }

}

export default Path