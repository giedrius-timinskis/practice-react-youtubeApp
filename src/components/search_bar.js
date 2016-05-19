import React, { Component } from 'react';
// Same as
// const Component = React.Component;

// Class-based React component . Make sure to import the Component object for it to work.
class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {searchTerm: ''};
    }
    render() {
        return(
            <div className="search-bar">
                <input
                    value={this.state.searchTerm}
                    onChange={event => this.onInputChange(event.target.value)}
                />
            </div>
        )
    }
    onInputChange(searchTerm) {
        this.setState({searchTerm});
        this.props.onSearchTermChange(searchTerm);
    }
}

export default SearchBar;
