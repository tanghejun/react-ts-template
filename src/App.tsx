import * as React from 'react'
import './style.css'

class App extends React.Component {
  state = {
    Map: null
  }
  onclick = () => {
    console.log('clicked')
    import('./Map').then(Map => {
      this.setState({Map: Map.default})
    })
  }
  render() {
    const {Map} = this.state
    return (
      <div>
        <p className="hello" onClick={this.onclick}>click to load a Map component</p>
        {Map && <Map />}
      </div>
    )
  }
}

export default App
