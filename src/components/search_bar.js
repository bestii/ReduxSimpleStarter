import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props) {
		// calling parent(ie Component) methods constructor
		super(props);
		
		// This assignment is done only once that too only inside the constructor
		this.state = { term: '' };
	}
	render() {
		// only manipulate state using setState
		// Controlled components-->when the value is determined by state
		return (
			<div>
				<input 
					value={this.state.term}
					onChange={(event) => { this.setState({ term: event.target.value }); }} 
				/>
			</div>
			

		);
	};

}

export default SearchBar;