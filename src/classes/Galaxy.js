import System from './System'

class Galaxy {
    
    constructor(game) {
        this.game = game
        this.systems = []
    }

    new_system() {
        const system = new System(self)
        this.systems.push(system)
        return system
    }

}

export default Galaxy