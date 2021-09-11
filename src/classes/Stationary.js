import Path from './Path'

class Stationary extends Path {

    constructor(x, y, startTime = null, endTime = null) {
        super()
        this.x = x
        this.y = y
        this.startTime = startTime
        this.endTime = endTime
    }

    position(time) {
        return [this.x, this.y]
    }

}

export default Stationary