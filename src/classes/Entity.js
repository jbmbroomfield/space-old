

class Entity {

    constructor(system, color, radius, mass) {
        this.system = system
        this.mass = mass
        this.color = color
        this.radius = radius
        this.paths = []
    }

    position(time) {
        return this.pathValue('position', time)
    }

    velocity(time) {
        return this.pathValue('velocity', time)
    }

    speed(time) {
        return this.pathValue('speed', time)
    }
    
    direction(time) {
        return this.pathValue('direction', time)
    }

    negativeDirection(time) {
        return this.pathValue('negativeDirection', time)
    }

    pathValue(value, time) {
        // console.log(value)
        const path = this.path(time)
        // console.log(path && path.direction(time))
        return path && path[value](time)
    }

    path(time) {
        for (const path of this.paths) {
            if (path.checkTime(time)) {
                return path
            }
        }
    }

}

export default Entity