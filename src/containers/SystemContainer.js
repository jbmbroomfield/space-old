import React from 'react'
import SystemComponent from '../components/SystemComponent'
import { baseSystem } from '../classes/System'

class System extends React.Component {

    state = {
        system: baseSystem
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({
                ...this.state,
                system: this.state.system.step()
            }, this.forceUpdate)
        }, 10)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        return (
            <div>
                <SystemComponent system={this.state.system} displayRadius={800} />
                <div>Time: {this.state.system.time}</div>
            </div>
        )
    }

}

export default System