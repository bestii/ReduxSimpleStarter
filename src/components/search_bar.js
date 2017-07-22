import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props){
		// calling parent(ie Component) methods constructor
		super(props);

		this.state = { term : ''};
	}
	render(){
        return (<input onChange={(event) => { console.log(event.target.value)}} />);
	};

}

export default SearchBar;