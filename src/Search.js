import React, { Component } from 'react';
import './Search.css';


class SearchComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        searchValue: '',
        searchResults: [],
      };
    }
  
    // Rest of the component code
    handleSearchChange = (event) => {
        this.setState({ searchValue: event.target.value });
      };

      
      performSearch = () => {
        const { searchValue } = this.state;
        const { Search } = this.props.data;
        console.log(this.props.data);
        console.log(Search);

        const filteredResults = Search.filter((item) =>{
        console.log(item);
          item.Title.toLowerCase().includes(searchValue.toLowerCase())}
        );
      
        this.setState({ searchResults: filteredResults });
      };

      

      render() {
        const { searchValue, searchResults } = this.state;
      
        return (
          <div className='search'>
            <input
              type="text"
              value={searchValue}
              onChange={this.handleSearchChange}
            />
            <button onClick={this.performSearch}>Search</button>
            <ul>
              {searchResults.map((item) => (
                <li key={item.imdbID}>{item.Title}</li>
              ))}
            </ul>
          </div>
        );
      }
      
  }

  export default SearchComponent;  
 
  

