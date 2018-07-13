import React, { Component } from 'react';
import PluginsListLessUsed from './components/PluginsListLessUsed'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      plugins: {},
      mounted: false
    }
    //this.handlePluginsList = this.handlePluginsList.bind(this)
    //this.parsePluginsList = this.parsePluginsList.bind(this)
  }
  /*
  handlePluginsList(){
    const {dbPlugins} = this.state
    const pluginsList = dbPlugins.reduce((pluginsList, host) => {
      return this.parsePluginsList(host.plugins_pouco_utilizados, pluginsList)
    }, {})
    this.setState({plugins: pluginsList, mounted: true})
  }
  
  parsePluginsList(plugins, pluginsList){
    const pluginsReturn =  Object.keys(plugins).reduce((pluginsList, pluginName) =>{
      if (pluginsList.hasOwnProperty(pluginName)) {
        pluginsList[pluginName]['quantidade'] += plugins[pluginName].quantidade  
        if (pluginsList[pluginName].hasOwnProperty('hosts')){
          pluginsList[pluginName]['hosts'].concat(plugins[pluginName].hosts)
        }else {
          pluginsList[pluginName]['hosts'] = []
        } 
      } else {
        pluginsList[pluginName] = plugins[pluginName]
      }

      return pluginsList
    }, pluginsList)
    return pluginsReturn
  }
  */
  componentDidMount(){
    this.props.base.bindToState('data/plugins_pouco_utilizados', {
      context: this,
      state: 'plugins',
      then: () => this.setState({mounted: true})
    })
  }
  
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <h1 className='text-center'>Lebga 4</h1>
        </div>
        <div className='row'>
          <div className='col'>
            <h2 className='text-center'>Plugins</h2>
          </div>
        </div>
        {(this.state.mounted && <PluginsListLessUsed plugins={this.state.plugins} />) ||
        <p>Loading</p>}
    </div>
  );
  }
}

export default App;
