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
			<div className="search-bar">
				<input
					value={this.state.term}
					onChange={(event) => { this.onInputChange(event.target.value)}}
				/>
			</div>


		);
	};

	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
	}

}

export default SearchBar;