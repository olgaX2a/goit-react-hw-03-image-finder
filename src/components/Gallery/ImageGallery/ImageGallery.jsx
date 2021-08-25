import "./ImageGallery.css";
import ImageGalleryItem from "../ImageGalleryItem";
import { Component } from "react";
import getPictures from "../../../apiService/apiService";
import { toast } from "react-toastify";

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

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevProps.query;
    const nextQuery = this.props.query;
    const prevPage = prevProps.page;
    const nextPage = this.props.page;
    const prevGallery = prevState.gallery;

    if (prevQuery !== nextQuery) {
      this.setState({ page: 1, status: Status.PENDING });
      getPictures(nextQuery, nextPage)
        .then((response) =>
          this.setState({
            gallery: [...response.hits],
            status: Status.RESOLVED,
          })
        )
        .catch((error) => this.setState({ error, status: Status.REJECTED }));
    }
    if (prevPage !== nextPage) {
      this.setState({ status: Status.PENDING });
      getPictures(nextQuery, nextPage)
        .then((response) =>
          this.setState({
            gallery: [...prevGallery, ...response.hits],
            status: Status.RESOLVED,
          })
        )
        .catch((error) => this.setState({ error, status: Status.REJECTED }));
    }

    return;
  }

  handlePictureSelect = (url) => {
    this.props.getSelectedPic(url);
  };

  render() {
    const { gallery, status, error } = this.state;
    if (status === Status.IDLE) {
      return null;
    }
    if (status === Status.REJECTED) {
      return toast.error(error);
    }
    if (status === Status.RESOLVED && gallery.length === 0) {
      return toast.error("No matches found. Please check your query.");
    }

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
  }
}

export default ImageGallery;
