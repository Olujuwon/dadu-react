import React , {Component} from 'react';
import remove from '../imgs/round-delete-button.svg';
import complete from '../imgs/success.svg';
import '../css/list.css';


class TodoList extends Component{
    render(){
        const listTodo = this.props.done || this.props.todo.map((item , i)=>{
            return (<li key={i}>{item.item} - {item.quantity}

                <div className="buttons">
            <button className="complete"><img className='svg' src={complete} alt = 'hello' onClick ={()=>this.props.onAdd(i)} /></button>
            <button className="remove"><img  className='svg' src={remove} alt='hi' onClick ={()=>this.props.onDelete(i)} /></button>
        </div>
            </li>)
        })
        return listTodo
        
    }
}

export default TodoList;