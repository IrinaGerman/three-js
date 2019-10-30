import React from 'react';
import {connect} from 'react-redux';
import './List.css';

class List extends React.Component {
    constructor() {
        super();

        this.onDelete = this.onDelete.bind(this);    
    }
    onDelete(event) {
        var id = event.target.closest("li").dataset.id;
        const {
            onDel, scene
        } = this.props;
        onDel(id);

        scene.children.forEach(function (item) {
            if (item.uuid === id) {
                scene.remove(item);
            }
        })
    }

    render() {
        const content = [];
        this.props.uuid.forEach(item => {
            content.push(
            <li className="figureId" data-id={item} key={item}>
                
                    <div className="uuidDiv">{item}</div>
                    <button className="btnDel" onClick={this.onDelete} >x</button>
                
            </li>)
        });
        return (
        
                <ul>
                    {content}
                </ul>         
        )
    }
}
export default connect (
    
    (state) => ({
        uuid: state.uuid,
        scene: state.scene
    }),
    (dispatch) => ({
        onDel: (uuid) => dispatch({type: "DEL_UUID", payload: uuid}),
    }),
)(List);