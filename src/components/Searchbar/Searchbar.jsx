import "./Searchbar.css";
import { Component } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";

class Searchbar extends Component {
  state = {
    query: "",
  };

  handleInputChange = (event) => {
    this.setState({ query: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.query.trim() === "") {
      toast.error("Your query is empty. Please enter correct query.");
      return;
    }
    this.props.onFormSubmit(this.state.query);
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleInputChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;

Searchbar.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};
