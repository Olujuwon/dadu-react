import React , {Component} from 'react';
import '../css/input.css';

class InputForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            itm : '',
            qty : ''
          }

    }

    onAddNewX = ( a , b)=>{
        this.props.onAddNew(a,b);
        this.setState({
            item:"",
            qty:""
        })
    }
    
    render(){
        return(
        <div className='input'>
            <input type='text' placeholder='Add Item' required className='itm'  onChange = {e => this.setState({itm: e.target.value})} value ={this.state.itm}/>
            <input type='text' placeholder='Add Quantity' required className='qty' onChange = {e => this.setState({qty: e.target.value})} value ={this.state.qty}/>
            <input type='button' value='Add' className='butt' onClick ={() =>  this.onAddNewX(this.state.itm, this.state.qty)} />
      </div>
        );
    }
}

export default InputForm;