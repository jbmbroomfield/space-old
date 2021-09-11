class Direction {
    
    static yZero(x) {
        if (x === 0) {
            return 0
        }
        if (x > 0) {
            return Math.PI/2
        }
        return Math.PI*3/2
    }

    static fromVelocity(x, y) {
        if (y === 0) {
            return this.yZero(x)
        }
        let result = Math.atan(x/y)
        if (y < 0) {
            result += Math.PI
        }
        if (result < 0) {
            result += 2 * Math.PI
        }
        return result
    }

    static direction(x, y) {
        return this.fromVelocity(x, y)
    }

    static subtract(a, b) {
        return this.standardise(a - b)
    }

    static add(a, b) {
        return this.standardise(a + b)
    }

    static negative(a) {
        return this.subtract(0, a)
    }

    static standardise(a) {
        while (a < 0) {
            a += 2 * Math.PI
        }
        return a
    }
}

export default Direction