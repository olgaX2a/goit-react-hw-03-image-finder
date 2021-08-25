import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Component } from "react";

import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/Gallery/ImageGallery";
import Button from "./components/Button";
import Modal from "./components/Modal";
import { ToastContainer } from "react-toastify";

class App extends Component {
  state = {
    query: "",
    page: 1,
    selectedPicture: null,
  };

  handleGalleryUpd = (gallery) => {
    this.setState({ pictures: gallery });
  };
  handleOpenModal = (selectedPic) => {
    this.setState({ selectedPicture: selectedPic });
  };
  handleCloseModal = () => {
    this.setState({ selectedPicture: null });
  };
  handleSearchSubmit = (query) => {
    this.setState({ query: query });
  };

  handleLoadMore = () => {
    this.setState((prevState) => ({ page: prevState.page + 1 }));
    window.scrollTo({
      top: document.querySelector("ul").scrollHeight,
      behavior: "smooth",
    });
  };

  render() {
    return (
      <>
        <Searchbar onFormSubmit={this.handleSearchSubmit} />
        <ToastContainer autoClose={2000} />
        <ImageGallery
          query={this.state.query}
          page={this.state.page}
          getSelectedPic={this.handleOpenModal}
        />
        {this.state.query && <Button onLoadMore={this.handleLoadMore} />}
        {this.state.selectedPicture && (
          <Modal
            closeModal={this.handleCloseModal}
            url={this.state.selectedPicture}
          />
        )}
      </>
    );
  }
}

export default App;
