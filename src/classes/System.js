import Planet from './Planet'
import Ship from './Ship'
import Orbit from './Orbit'
import Journey from './Journey'
// import Bezier from './Bezier'
// import ShipComponent from '../components/ShipComponent'
import Stationary from './Stationary'
import CircularTurn from './CircularTurn'

class System {

    constructor(galaxy, radius) {
        this.galaxy = galaxy
        this.radius = radius
        this.centre = [radius / 2, radius / 2]
        this.planets = []
        this.ships = []
        this.time = 0
        this.gravitationalConstant = 1/50
    }

    step() {
        this.time++
        // for (const planet of this.planets) {
        //     planet.color !== 'yellow' && planet.step() 
        // }
        // for (const ship of this.ships) {
        //     ship.step() 
        // }
        return this
    }

    new_planet(color, radius, mass, x, y) {
        const planet = new Planet(this, color, radius, mass, x, y)
        this.planets.push(planet)
        return planet
    }

    new_ship(color, radius, mass, x, y) {
        const ship = new Ship(this, color, radius, mass, x, y)
        this.ships.push(ship)
        return ship
    }

}

export default System

const baseSystem = new System('Galaxy', 500)

// let [p0, p1, p2, p3] = [[250, 250], [400, 400], [300, 250], [400, 150]]

// p0 = [100, 100]

// p1 = [400, 100]

// p2 = [400, 400]

// p3 = [100 , 400]

// const t = 2000

const sun = baseSystem.new_planet('yellow', 5, 10000);
sun.paths.push(new Stationary(250, 250))


// const diff = 0

const planet = baseSystem.new_planet('red', 2, 100)
planet.paths.push(new Orbit(sun, [150, 150], 0, 100, 1))

const planet2 = baseSystem.new_planet('purple', 2, 10)
planet2.paths.push(new Orbit(sun, [100, 100], 0, 208, -1))

// const planet4 = baseSystem.new_planet('green', 2, 10, p3[0], p3[1])
// planet4.path = new Stationary(...p3)
// planet3.path = new Orbit(sun, [75, 60], 500, 0, 180, 1)

const ship = baseSystem.new_ship('green', 2.5, 10)
ship.paths.push(new CircularTurn(planet, 20, 0, 1))

// // console.log(`${planet.position(0)} === ${ship.position(0)}`)

const ship2 = baseSystem.new_ship('orange', 2.5, 10)
ship2.paths.push(new CircularTurn(planet, 20, 0, -1))

// // console.log(`${planet.position(0)} === ${ship2.position(0)}`)

const ship3 = baseSystem.new_ship('green', 2.5, 10)
ship3.paths.push(new CircularTurn(planet2, 20, 0, 1))


const ship4 = baseSystem.new_ship('orange', 2.5, 10)
ship4.paths.push(new CircularTurn(planet2, 20, 0, -1))


// const ship5 = baseSystem.new_ship('green', 100, 10)
// ship5.paths.push(new Stationary(250, 250))


// ship.paths.push(new Orbit(sun, [100, 100], 0, 270, -1))

// for (let i = 0; i < 1000; i++) {
//     ship.paths.push(Bezier.newLinearFromEndTime(planet2, planet, 0 + 100*i, 45 + 100 * i))
//     ship.paths.push(Bezier.newLinearFromEndTime(planet, planet2, 50 + 100*i, 95 + 100 * i))
// }
// ship.paths.push(Bezier.newCubicFromEndTime(planet, planet2, 200 + i * 200, 300 + i * 200))
// ship.path = new Bezier(0, t, p0, p1)


// const ship2 = baseSystem.new_ship('orange', 2, 10)
// ship2.path = new Bezier(0, t, p1, p2)

// const ship3 = baseSystem.new_ship('orange', 2, 10)
// ship3.path = new Bezier(0, t, p2, p3)


// const ship4 = baseSystem.new_ship('red', 2, 10)
// ship4.path = new Bezier(0, t, p0, p1, p2)

// const ship5 = baseSystem.new_ship('red', 2, 10)
// ship5.path = new Bezier(0, t, p1, p2, p3)


// const ship6 = baseSystem.new_ship('blue', 2, 10)
// ship6.path = new Bezier(0, t, p0, p1, p2, p3)

// console.log(ship.path.initial_speed * 3)
// console.log(ship4.path.initial_speed * 3/2)
// console.log(ship6.path.initial_speed)
// console.log(ship5.path.initial_speed / 2)

// console.log(ship4.path.initial_velocity)
// console.log(ship4.path.initial_speed / 3)
// console.log(ship4.path.max_speed)

// console.log('---')

// // console.log(ship.path.final_speed / ship6.path.final_speed)


// // console.log(ship.path.final_speed / ship3.path.final_speed)

// console.log(ship3.path.final_speed * 3)
// console.log(ship5.path.final_speed * 3/2)
// console.log(ship6.path.final_speed)

// console.log('+++')

// console.log([ship6.path.max_speed, ship6.path.speed(t/2)])
// console.log([ship.path.max_speed, ship2.path.max_speed, ship3.path.max_speed])

// console.log(ship.path.max_speed + ship2.path.max_speed + ship3.path.max_speed)

// console.log(ship4.path.final_speed)


// const planet4 = baseSystem.new_planet('blue', 2, 10)
// planet4.path = new Orbit(sun, [75, 60], 500, 0, 270, 1)

// const planet5 = baseSystem.new_planet('white', 2, 10)
// planet5.path = new Orbit(sun, [75, 60], 500, 0, 45, 1)

// const planet6 = baseSystem.new_planet('brown', 2, 10)
// planet6.path = new Orbit(sun, [75, 60], 500, 0, 135, 1)

// const planet7 = baseSystem.new_planet('pink', 2, 10)
// planet7.path = new Orbit(sun, [75, 60], 500, 0, 225, 1)

// const planet8 = baseSystem.new_planet('purple', 2, 10)
// planet8.path = new Orbit(sun, [75, 60], 500, 0, 315, 1)

// baseSystem.new_planet('green', 1).path = new Orbit(planet, [10, 10], 100, 0, 0, 1)
// baseSystem.new_planet('green', 1).path = new Orbit(planet2, [10, 10], 100, 0, 0, 1)
// baseSystem.new_planet('green', 1).path = new Orbit(planet3, [10, 10], 100, 0, 0, 1)
// baseSystem.new_planet('green', 1).path = new Orbit(planet4, [10, 10], 100, 0, 0, 1)
// baseSystem.new_planet('green', 1).path = new Orbit(planet5, [10, 10], 100, 0, 0, 1)
// baseSystem.new_planet('green', 1).path = new Orbit(planet6, [10, 10], 100, 0, 0, 1)
// baseSystem.new_planet('green', 1).path = new Orbit(planet7, [10, 10], 100, 0, 0, 1)
// baseSystem.new_planet('green', 1).path = new Orbit(planet8, [10, 10], 100, 0, 0, 1)

// baseSystem.new_planet('green', 1).path = new Orbit(planet, [10, 10], 100, 0, 0, -1)
// baseSystem.new_planet('green', 1).path = new Orbit(planet2, [10, 10], 100, 0, 0, -1)
// baseSystem.new_planet('green', 1).path = new Orbit(planet3, [10, 10], 100, 0, 0, -1)
// baseSystem.new_planet('green', 1).path = new Orbit(planet4, [10, 10], 100, 0, 0, -1)
// baseSystem.new_planet('green', 1).path = new Orbit(planet5, [10, 10], 100, 0, 0, -1)
// baseSystem.new_planet('green', 1).path = new Orbit(planet6, [10, 10], 100, 0, 0, -1)
// baseSystem.new_planet('green', 1).path = new Orbit(planet7, [10, 10], 100, 0, 0, -1)
// baseSystem.new_planet('green', 1).path = new Orbit(planet8, [10, 10], 100, 0, 0, -1)

// baseSystem.new_planet('orange', 0.8).path = new Orbit(planet, 20, 400, 0)

// baseSystem.new_planet('green', 1).path = new Orbit(planet2, 10, 200, 0, -1)

// baseSystem.new_planet('orange', 0.8).path = new Orbit(planet2, 20, 400, 0)

// baseSystem.new_planet('green', 1).path = new Orbit(planet3, 10, 200, 0, -1)

// baseSystem.new_planet('orange', 0.8).path = new Orbit(planet3, 20, 400, 0)

// baseSystem.new_planet('green', 1).path = new Orbit(planet4, 10, 200, 0, -1)

// baseSystem.new_planet('orange', 0.8).path = new Orbit(planet4, 20, 400, 0)



export { baseSystem }