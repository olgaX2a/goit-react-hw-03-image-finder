import "./Modal.css";
import { Component } from "react";

class Modal extends Component {
  state = {
    url: null,
  };

  componentDidMount() {
    this.setState({ url: this.props.url });
    window.addEventListener("keydown", this.handleEscKeyDown);
  }
  componentWillUnmount() {
    this.setState({ url: null });
    window.removeEventListener("keydown", this.handleEscKeyDown);
  }

  handleEscKeyDown = (event) => {
    if (event.code === "Escape") {
      this.props.closeModal();
    }
  };
  handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      this.props.closeModal();
    }
  };

  render() {
    return (
      <div className="Overlay" onClick={this.handleBackdropClick}>
        <div className="Modal">
          <img src={this.state.url} alt="" />
        </div>
      </div>
    );
  }
}

export default Modal;
