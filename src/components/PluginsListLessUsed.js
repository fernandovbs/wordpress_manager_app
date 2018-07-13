import React, { Component } from 'react'

class PluginsListLessUsed extends Component{
    constructor(props){
        super(props)
        this.renderPluginListItem = this.renderPluginListItem.bind(this)
        this.handleSelection = this.handleSelection.bind(this)
        this.state = {
            pluginDetails: '',
        }
    }
    
    handleSelection(e){
        if(e.target.value){
            const pluginName = e.target.value
            this.setState(
                {pluginDetails: this.props.plugins[pluginName]}
            )    
        }else{
            this.setState(
                {pluginDetails: ''}
            )            
        }
    }

    renderPluginDetails(){
        const {pluginDetails} = this.state
        if (pluginDetails) {
            return (
                <div>
                    <h3>{pluginDetails.name}</h3>
                    {pluginDetails.quantidade > 0 &&
                    <p>Ativo em {pluginDetails.quantidade} hosts:</p>}

                    {pluginDetails.quantidade === 0 &&
                    <p>Nenhum host utiliza este plugin</p>}

                    {pluginDetails.hosts &&
                    <ul className='list-group'>
                        {pluginDetails.hosts.map((host) => 
                            <li key={host['nome']} className='list-group-item'>{host['nome'].replace(new RegExp('_', 'g'),'.')} na versão {host['versão']}</li>)}
                    </ul>}
                </div>
            )
        }else{
            return <h3>Selecione um plugin para exibir detalhes</h3>
        }
    }

    renderPluginListItem(pluginName){
        return <option
            key={pluginName}
            value={pluginName}>
                {this.props.plugins[pluginName].name}
            </option>
    }
    
    render(){        
        return (
            <div className='row'>
                <div className='col-4'>
                    <div className='form-group'>
                        <select className='form-control'
                        onChange={this.handleSelection}>
                            <option>Selecione</option>
                            {Object.keys(this.props.plugins).map(this.renderPluginListItem)}
                        </select>
                    </div>
                </div>
                <div className='col-8'>
                    {this.renderPluginDetails()}
                </div>
            </div>
        )
    }
}

export default PluginsListLessUsed