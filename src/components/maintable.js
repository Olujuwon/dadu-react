import React , {Component} from 'react';
import remove from '../imgs/round-delete-button.svg';
import complete from '../imgs/success.svg';
import '../css/table.css';


class TodoList extends Component{
    render(){
        return (
            <table className={this.props.nclas}>
                <caption>{this.props.tag}</caption>
                <thead>
                    <tr>
                    <th>Items</th>
                    <th>Quantity</th>
                    <th colSpan="2">Edit</th>
                    </tr>
                </thead>
                <tbody>
                    { this.props.todo.map((member , i)=>{
                        return (
                            <tr key={i}>
                                <td >{member.item} </td>
                                <td>{member.quantity}</td>
                                <td className='buttons'><img className='complete' src={complete} alt = 'hello' onClick ={()=>this.props.onAdd(i)} /></td>
                                <td className='buttons-1'><img  className='remove' src={remove} alt='hi' onClick ={()=>this.props.onDelete(i)} /></td>
                            </tr>)}
                        )}
                </tbody>
            </table>)
        
        
    }
}

export default TodoList;