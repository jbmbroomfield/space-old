import Bezier from './Bezier'
import Vector from './Vector'
import Direction from './Direction'

class Journey {

    static journey(origin, destination, t0, t3) {
        const handling = 100
        const acceleration = 1

        const v0 = origin.velocity(t0)
        const direction0 = Vector.direction(v0)

        const line = Vector.subtract(destination.position(t3), origin.position(t0))
        const unitLine = Vector.unitVector(line)
        const lineDirection = Vector.direction(line)
        const p0 = origin.position(t0)
        const p1 = Vector.build(origin.position(t0), origin.direction(t0), handling)

        const p7 = destination.position(t3)
        const p6 = Vector.build(destination.position(t3), destination.negativeDirection(t3), handling)

        const turn1Angle = Direction.subtract(lineDirection, direction0)
        let p2
        if (turn1Angle <= Math.PI / 2 || turn1Angle >= 3*Math.PI / 2) {
            p2 = p1
        } else if (turn1Angle < Math.PI) {
            const rotatedUnitLine = Vector.rotate(unitLine, 3 * Math.PI / 2)
            const p1p2L = handling * (2 * turn1Angle / Math.PI - 1)
            const p1p2 = Vector.multiply(p1p2L, rotatedUnitLine)
            p2 = Vector.add(p1, p1p2)
        } else { 
            const rotatedUnitLine = Vector.rotate(unitLine, Math.PI / 2)
            const p1p2L = handling * (3 - 2 * turn1Angle / Math.PI)
            const p1p2 = Vector.multiply(p1p2L, rotatedUnitLine)
            p2 = Vector.add(p1, p1p2)
        }

        console.log({t0, t3, p0, p1, p2})

        return new Bezier(t0, t3, p0, p1, p2)

        // const turn2Angle = Direction.subtract()

    }


}

export default Journey