import Direction from "./Direction"

class Vector {

    static add(v, w) {
        return [v[0] + w[0], v[1] + w[1]]
    }

    static negative(v) {
        return [-v[0], -v[1]]
    }

    static subtract(v, w) {
        return this.add(v, this.negative(w))
    }

    static multiply(a, v) {
        return [a * v[0], a * v[1]]
    }

    static abs(v) {
        return (v[0] ** 2 + v[1] ** 2) ** 0.5
    }

    static unitVector(v) {
        return this.multiply(this.abs(v), v)
    }

    static rotate(v, angle, c = [0, 0]) {
        const [x, y] = this.subtract(v, c);
        const x_ = x * Math.cos(angle) + y * Math.sin(angle)
        const y_ = -x * Math.sin(angle) + y * Math.cos(angle)
        return this.add([x_, y_], c)
    }

    static build(origin, rotation, distance) {
        const x = distance * Math.sin(rotation)
        const y = distance * Math.cos(rotation)
        return this.add([x, y], origin)
    }

    static direction(v) {
        return Direction.direction(...v)
    }

}

export default Vector