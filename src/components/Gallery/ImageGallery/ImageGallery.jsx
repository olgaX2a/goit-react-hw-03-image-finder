import "./ImageGallery.css";
import ImageGalleryItem from "../ImageGalleryItem";
import { Component } from "react";
import getPictures from "../../../apiService/apiService";
import { toast } from "react-toastify";
import Loader from "../../Loader";

const Status = {
  IDLE: "idle",
  PENDING: "pending",
  RESOLVED: "resolved",
  REJECTED: "rejected",
};

class ImageGallery extends Component {
  state = {
    gallery: [],
    page: 1,
    status: Status.IDLE,
    error: null,
  };

  setPictures = async (gallery, query, page) => {
    try {
      const response = await getPictures(query, page);
      return this.setState({
        gallery: [...gallery, ...response.hits],
        status: Status.RESOLVED,
      });
    } catch (error) {
      return this.setState({ error, status: Status.REJECTED });
    } finally {
      if (page !== 1) {
        window.scrollTo({
          top: document.querySelector("ul").scrollHeight,
          behavior: "smooth",
        });
      }
    }
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevProps.query;
    const nextQuery = this.props.query;
    const prevPage = prevProps.page;
    const nextPage = this.props.page;
    const prevGallery = prevState.gallery;

    if (prevQuery !== nextQuery) {
      this.setState({ page: 1, status: Status.PENDING });
      this.setPictures([], nextQuery, nextPage);
    }
    if (prevPage !== nextPage) {
      this.setState({ status: Status.PENDING });
      this.setPictures(prevGallery, nextQuery, nextPage);
    }
    return;
  }

  handlePictureSelect = (url) => {
    this.props.getSelectedPic(url);
  };

  renderGallery = () => {
    return (
      <ul
        className="ImageGallery"
        query={this.props.query}
        page={this.props.page}
      >
        {this.state.gallery.map(({ id, webformatURL, largeImageURL, tags }) => (
          <ImageGalleryItem
            key={id}
            src={webformatURL}
            alt={tags}
            onPictureClick={() => this.handlePictureSelect(largeImageURL)}
          />
        ))}
      </ul>
    );
  };

  render() {
    const { gallery, status, error } = this.state;
    if (status === Status.IDLE) {
      return null;
    }
    if (status === Status.PENDING) {
      return (
        <>
          {this.renderGallery()}
          <Loader />
        </>
      );
    }
    if (status === Status.REJECTED) {
      return toast.error(error);
    }
    if (status === Status.RESOLVED && gallery.length === 0) {
      return toast.error("No matches found. Please check your query.");
    }
    return this.renderGallery();
  }
}

export default ImageGallery;
