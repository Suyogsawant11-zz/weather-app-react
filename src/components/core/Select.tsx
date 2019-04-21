import * as React from 'react';

import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

interface IProps{
  onChange?:Function
  value?:number|null|string
  options:any
  optionText?:string
  optionValue?:string
}

class CutsomSelect extends React.Component<IProps, any> {

  static defaultProps={
    value:null,
    options:[],
    optionText:null,
    optionValue:null,
  }

  constructor(props){
    super(props)
  }

  handleChange=(selectedClassObj:any):void=>{
    const selectedVal = selectedClassObj.target.value
    const selectedObj = this.props.options.filter((option:any)=>{
      let tempOption = this.props.optionValue?option[this.props.optionValue]:option 
      
      return tempOption===selectedVal

    })[0]
    
    this.props.onChange && this.props.onChange(selectedVal,selectedObj)  
  }

  getOptions(){
    let { options, optionText, optionValue } = this.props
    
    return options.map((option, index)=>{

        let text = optionText? option[optionText]:option
        let val = optionValue? option[optionValue]:option

        return <MenuItem value={val} key={'option-'+index} >{text}</MenuItem>
       
    })

  }

  render() {
    let { value } = this.props
    
    const options = this.getOptions()

    return (
      <div>
          <div>
            <Select
              value={value}
              onChange={this.handleChange}
            >
              { options }
            </Select>
          </div>

      </div>
    );
  }
}

export default CutsomSelect;
