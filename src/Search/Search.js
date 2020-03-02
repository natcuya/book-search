import React from "react";
import Filter from "./Filter/Filter";

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      printType: "all",
      bookType: "none"
    };
  }

  updateSearchTerm(term) {
    console.log(term);
    this.setState({
      searchTerm: term
    });
  }

  updatePrintType(newSelection) {
    this.setState({
      printType: newSelection
    });
  }

  updateBookType(newSelection) {
    this.setState({
      bookType: newSelection
    });
  }

  render() {
    return (
      <form className="Search">
        <div className="SearchBar">
          Search:
          <input
            placeholder="Search..."
            onChange={e => this.updateSearchTerm(e.target.value)}
          />
          <button
            onClick={(e, searchTerm, printType, bookType) =>
              this.props.handleSearch(
                e,
                this.state.searchTerm,
                this.state.printType,
                this.state.bookType
              )
            }
          >
            Search
          </button>
        </div>
        <Filter
          updatePrintType={newSelection => this.updatePrintType(newSelection)}
          updateBookType={newSelection => this.updateBookType(newSelection)}
        />
      </form>
    );
  }
}