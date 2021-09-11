import React from 'react'

const ShipComponent = ({ ship, zoom }) => {

    // const dimensions = `${ship.radius * zoom * 2}px`;
    const time = ship.system.time;
    const position = ship.position(time);
    let [x, y] = [0, 0];

    if (position) {
        [x, y] = ship.position(time)
    }
    x *= zoom
    y *= zoom
    const direction = ship.direction(time)

    const width = ship.radius
    const height = ship.radius * 3

    const style = {
        width: 0,
        height: 0,
        borderLeft: `${width * zoom}px solid transparent`,
        borderRight: `${width * zoom}px solid transparent`,
        borderBottom: `${height * zoom}px solid ${ship.color}`,
        // transform: `rotate(${direction * 180 / Math.PI}deg)`,
        transform: `rotate(${direction}rad)`,
        // left: `${x - ship.radius}px`,
        // bottom: `${y - ship.radius}px`,
        left: `${x - width * zoom}px`,
        bottom: `${y - height * zoom / 2.5}px`,
        // left: `${x}px`,
        // bottom: `${y}px`,
    }
   
    const pRad = 2
    const dimensions = `${pRad * zoom * 2}px`;

    const planetStyle = {
        height: dimensions,
        width: dimensions,
        backgroundColor: 'red',
        borderRadius: "50%",
        left: `${x - pRad * zoom}px`,
        bottom: `${y - pRad * zoom}px`,
        // left: `${x}px`,
        // bottom: `${y}px`,
    }

    const pRad2 =0.5
    const dimensions2 = `${pRad2 * zoom * 2}px`;

    const planetStyle2 = {
        height: dimensions2,
        width: dimensions2,
        backgroundColor: 'yellow',
        borderRadius: "50%",
        left: `${x - pRad2 * zoom}px`,
        bottom: `${y - pRad2 * zoom}px`,
    }

    return (
        <div>
            <div className="entity ship" style={style}></div>
            {/* <div className="entity planet" style={planetStyle}></div>
            <div className="entity planet" style={planetStyle2}></div> */}

        </div>
    )

}

export default ShipComponent