import React, { Component } from 'react';
import base from './base'
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      plugins: {},
      pluginsList: {},
      pluginDetails: {}
    }
    this.handlePluginsList = this.handlePluginsList.bind(this)
    this.parsePluginsList = this.parsePluginsList.bind(this)
  }
  
  handlePluginsList(){
    const {plugins} = this.state
    const pluginsList = plugins.reduce((pluginsList, host) => {
      return this.parsePluginsList(host.plugins_pouco_utilizados, pluginsList)
    }, {})
    this.setState({pluginsList: pluginsList})
  }
  
  parsePluginsList(plugins, pluginsList){
    return Object.keys(plugins).reduce((plugins, plugin, pluginName) =>{
      if (pluginsList.hasOwnProperty(pluginName)) {
        pluginsList[pluginName]['quantidade'] += plugin.quantidade  
        pluginsList[pluginName]['hosts'] = [...plugin.hosts]
      } else {
        pluginsList[pluginName] = plugin
      }
      return pluginsList
    }, pluginsList)
  }

  componentDidMount(){
    const listener = this.props.base.bindToState('data', {
      context: this,
      state: 'plugins',
      asArray: true,
      then: () => {this.handlePluginsList()}
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Plugins Lebga 4</h1>
        </header>
      </div>
    );
  }
}

export default App;
