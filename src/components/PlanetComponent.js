import React from 'react'

const PlanetComponent = ({ planet, zoom }) => {

    const dimensions = `${planet.radius * zoom * 2}px`;
    const time = planet.system.time
    let [x, y] = planet.position(time)
    x *= zoom
    y *= zoom

    const style = {
        height: dimensions,
        width: dimensions,
        backgroundColor: planet.color,
        borderRadius: "50%",
        left: `${x - planet.radius}px`,
        bottom: `${y - planet.radius}px`,
    }

    return (
        <div className="entity planet" style={style}></div>
    )

}

export default PlanetComponent