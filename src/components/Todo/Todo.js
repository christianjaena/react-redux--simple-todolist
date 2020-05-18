import React from 'react';
import './Todo.css';

class Todo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			checked: false,
		};
	}

	isChecked = () => {
		this.setState({ checked: !this.state.checked });
	};

	render() {
		const { id, todo, onDelete } = this.props;
		return (
			<div className='todo'>
				<input class='checkbox' type='checkbox' onClick={this.isChecked} />
				<p
					class='to-do'
					style={
						this.state.checked
							? { textDecoration: 'line-through' }
							: { textDecoration: '' }
					}>
					{todo}
				</p>
				<button
					class='delete'
					onClick={() => {
						onDelete(id);
					}}>
					x
				</button>
			</div>
		);
	}
}

export default Todo;
