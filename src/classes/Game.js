import Galaxy from './Galaxy'

class Game {

    constructor() {
        this.gravitationalConstant = 1
        this.galaxies = []
    }

    new_galaxy(radius) {
        const galaxy = new Galaxy(self, radius)
        this.galaxies.push(galaxy)
        return galaxy
    }
}

export default Game