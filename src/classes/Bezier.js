import Path from './Path'
import Vector from './Vector'
import Direction from './Direction'

function getPosition(p0, p1, t) {
    const term1 = Vector.multiply(1 - t, p0)
    const term2 = Vector.multiply(t, p1)
    return Vector.add(term1, term2)
}

class Bezier extends Path {

    constructor(startTime, endTime, ...points) {
        super()
        this.startTime = startTime
        this.endTime = endTime
        if (points.length === 1) {
            this.initial = points[0]
            this.final = points[0]
        } else {
            this.initial = new Bezier(startTime, endTime, ...points.slice(0, points.length - 1))
            this.final = new Bezier(startTime, endTime, ...points.slice(1, points.length))
        }
    }

    position(time) {
        if (time < this.startTime) {
            time = this.startTime
        }
        if (time > this.endTime) {
            time = this.endTime
        }
        const t = (time - this.startTime) / (this.endTime - this.startTime)
        return this.position_by_t(t)
    }

    position_by_t(t) {
        if (this.initial === this.final) {
            return this.initial
        }
        const p0 = this.initial.position_by_t(t)
        const p1 = this.final.position_by_t(t)
        return getPosition(p0, p1, t)
    }

    get initialVelocity() {
        return this.velocity(this.startTime)
    }

    get initialSpeed() {
        return this.speed(this.startTime)
    }

    get finalVelocity() {
        return this.velocity(this.endTime)
    }

    get finalSpeed() {
        return this.speed(this.endTime - 1)
    }

    get maxSpeed() {
        let return_value = 0
        for (let time = this.startTime; time <= this.endTime; time++) {
            return_value = Math.max(return_value, this.speed(time))
        }
        return return_value
    }

    static newLinearFromEndTime(source, destination, startTime, endTime) {
        const p0 = [...source.position(startTime)]
        const p1 = [...destination.position(endTime)]
        return new this(startTime, endTime, p0, p1)
    }

    static newQuadraticFromEndTime(source, destination, startTime, endTime) {
        const duration = endTime - startTime
        const p0 = source.position(startTime)
        const initialV = source.velocity(startTime)
        const p0p1 = Vector.multiply(duration / 2, initialV)
        const p1 = Vector.add(p0, p0p1)
        const p2 = destination.position(endTime)
        return new this(startTime, endTime, p0, p1, p2)
    }

    static newCubicFromEndTime(source, destination, startTime, endTime) {
        const duration = endTime - startTime
        const p0 = source.position(startTime)
        const p1 = this.outgoingPoint(source, startTime, duration)
        const p3 = destination.position(endTime)
        const p2 = this.incomingPoint(destination, endTime, duration)
        const p15 = this.outgoingPoint(source, startTime + 450, duration)
        const p175 = this.incomingPoint(destination, endTime - 450, duration)
        // const p11 = Vector.add(p1, Vector.multiply(5, p0p1))
        // const p21 = Vector.subtract(p2, Vector.multiply(5, p2p3))
        // const p15 = Vector.multiply(0.5, Vector.add(p11, p21))
        return new this(startTime, endTime, p0, p1, p15, p175, p2, p3)

    }

    static outgoingPoint(source, startTime, duration) {
        const p0 = source.position(startTime)
        const initialV = source.velocity(startTime)
        const p0p1 = Vector.multiply(duration / 3, initialV)
        return Vector.add(p0, p0p1)
    }

    static incomingPoint(destination, endTime, duration) {
        const p3 = destination.position(endTime)
        const finalV = destination.velocity(endTime)
        const p2p3 = Vector.multiply(duration / 3, finalV)
        return Vector.subtract(p3, p2p3)
    }

    // static turn(source, destination, startTime, endTime, overallEndTime) {
    //     const turnRadius = 100
    //     const initialDirection = source.direction(startTime)
    //     const finalDirection = Vector.subtract(destination.position(overallEndTime), source.position(startTime), )
    //     const directionDifference = Direction.subtract(finalDirection, initialDirection)
    //     const p3x = 2 * turnRadius * (1 - directionDifference / Math.PI)
        

        
    // }


}

export default Bezier