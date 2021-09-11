import React from 'react'
import PlanetComponent from './PlanetComponent'
import ShipComponent from './ShipComponent'

const SystemComponent = ({ system, displayRadius }) => {

    const zoom = displayRadius / system.radius


    const shipComponents = system.ships.map((ship, index) => (
        <ShipComponent key={index} ship={ship} zoom={zoom} />
    ))
    
    const planetComponents = system.planets.map((planet, index) => (
        <PlanetComponent key={index} planet={planet} zoom={zoom} />
    ))

    const style = {
        width: `${displayRadius}px`,
        height: `${displayRadius}px`,
    }

    return (
        <div className="space" style={style}>
            {planetComponents}
            {shipComponents}
        </div>
    )
}

export default SystemComponent