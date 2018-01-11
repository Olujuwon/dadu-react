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
    onAddNewX = (e,  a , b)=>{
        e.preventDefault()
        this.props.onAddNew(a,b);
        this.setState({
            itm:"",
            qty:""
        })
    }
    render(){
        return(
        <form className='input' onSubmit={(e) =>  this.onAddNewX(e, this.state.itm, this.state.qty)}>
            <input type='text' placeholder='Add Item' required className='itm'  onChange = {e => this.setState({itm: e.target.value})} value ={this.state.itm}/>
            <input type='text' placeholder='Add Quantity' required className='qty' onChange = {e => this.setState({qty: e.target.value})} value ={this.state.qty}/>
            <input type='submit' className='butt' value="Add"/>
        </form>
        );
    }
}

export default InputForm;