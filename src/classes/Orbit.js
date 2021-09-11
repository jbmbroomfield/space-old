import Path from './Path'

class Orbit extends Path {
    constructor(primary, radius, initialAngle, rotation = 0, clockwise_direction = 1) {
        super()
        this.primary = primary;
        this.radius = radius;
        [this.minorRadius, this.majorRadius] = Array.isArray(radius) ? radius.sort() : [radius, radius]

        const gravitationalConstant = primary.system.gravitationalConstant

        this.period = 2 * Math.PI * (this.majorRadius ** 3 / primary.mass / gravitationalConstant) ** 0.5
        this.initialAngle = initialAngle * Math.PI / 180
        this.rotation = rotation * Math.PI / 180
        this.clockwise_direction = clockwise_direction
    }

    position(time) {
        const [minorRadius, majorRadius] = Array.isArray(this.radius) ? this.radius.sort() : [this.radius, this.radius];
        const [centreX, centreY] = this.getCentre(majorRadius, minorRadius, time)
        const angle = 2 * Math.PI * this.clockwise_direction / this.period * time + this.initialAngle;
        const [cosAngle, sinAngle] = [Math.cos(angle), Math.sin(angle)];
        const [cosRotation, sinRotation] = [Math.cos(this.rotation), Math.sin(this.rotation)]
        const x = majorRadius * cosAngle * cosRotation - minorRadius * sinAngle * sinRotation + centreX
        const y = majorRadius * cosAngle * sinRotation + minorRadius * sinAngle * cosRotation + centreY
        return [x, y]
    }

    getCentre(majorRadius, minorRadius, time) {
        const [primaryX, primaryY] = Array.isArray(this.primary) ? this.primary : this.primary.position(time);
        const distanceToCentre = (majorRadius ** 2 - minorRadius ** 2) ** 0.5
        const centreX = primaryX + distanceToCentre * Math.cos(this.rotation)
        const centreY = primaryY + distanceToCentre * Math.sin(this.rotation)
        return [centreX, centreY]
    }
}

export default Orbit