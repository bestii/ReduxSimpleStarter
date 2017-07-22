import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props){
		// calling parent(ie Component) methods constructor
		super(props);

		this.state = { term : ''};
	}
	render(){
		// only manipulate state using setState
        return (<input onChange={(event) => { this.setState({term : event.target.value});  }} />);
	};

}

export default SearchBar;