import "./ImageGalleryItem.css";
import PropTypes from "prop-types";

const ImageGalleryItem = ({ src, alt, onPictureClick }) => {
  return (
    <li className="ImageGalleryItem">
      <img
        src={src}
        alt={alt}
        className="ImageGalleryItem-image"
        onClick={onPictureClick}
      />
    </li>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onPictureClick: PropTypes.func.isRequired,
};
