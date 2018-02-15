import React from 'react';

export default class Form extends React.Component {
    handleClick(evt) {
        this.props.changeName('');
        this.props.updateList(this.props.nameEntry);
        // if (this.props.nameEntry !== '' && 
        //     !this.props.nameList.includes(this.props.nameEntry)) { 
        //     this.props.updateList(this.props.nameEntry);
        // }        
    }
    
    handleChange(evt) {
        this.props.changeName(evt.target.value);
    }
    
    render() {
        return (
            <div className = "form">
                <input
                    className = "form-control"
                    type = "text"
                    value = {this.props.nameEntry}
                    onChange = {this.handleChange.bind(this)}
                />
                <input
                    className = "form-control"
                    type = "button"
                    value = "Add Name"
                    onClick = {this.handleClick.bind(this)}
                />
            </div>
        )
    };
}