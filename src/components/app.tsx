import * as React from 'react';

import Select from './core/Select';

import * as APIUtils from "../utils/APIUtils";
import {Cities, Parameters, DefaultCity} from '../constants/constants'

interface IState{
  selectedCity:number
  selectedCityName:string
  selectedParam:string
}

class App extends React.Component<any, IState> {

  constructor(props){
    super(props)

    this.state = {
      selectedCity:DefaultCity.id,
      selectedCityName:DefaultCity.name,
      selectedParam:'celcius',
    }

    this.fetchTodaysData(this.state.selectedCity)
  }

  fetchTodaysData=(selectedCity:number):void=>{
    APIUtils.fetchTodaysWeather(selectedCity)
    
  }

  fetchFiveDayData(){

  }

  handleCityChange=(selectedCity:number,selectedObj:any):void=>{
    this.setState({selectedCity, selectedCityName:selectedObj.name})
  }

  handleParameterChange=(selectedParam:string):void=>{
    this.setState({selectedParam})
  }

  render() {

    let {selectedCity, selectedCityName, selectedParam} = this.state

    return (
      <div>
          <div>
            <Select
              value={selectedCity}
              onChange={this.handleCityChange}
              options={Cities}
              optionText='name'
              optionValue='id'
            >
            </Select>
          </div>

          <div>
            <span>{ selectedCityName }</span>
          </div>

          
          <Select
            value={selectedParam}
            onChange={this.handleParameterChange}
            options={Parameters}
            optionText='name'
            optionValue='code'
          >
          </Select>

          <div>

          </div>

      </div>
    );
  }
}

export default App;
