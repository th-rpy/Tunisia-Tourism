import PropTypes from "prop-types";
import React from "react";
import Gallery from "react-grid-gallery";
import "bulma/css/bulma.css";
import {images, captionStyle, customTagStyle } from "./imagesState"
import {Link} from "react-router-dom";


export default class State extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: this.props.images,
    };
  }

  setCustomTags(i) {
    return i.tags.map((t) => {
      return (
        <div key={t.value} style={customTagStyle}>
          {t.title}
        </div>
      );
    });
  }

  render() {
    const {  location,  } = this.props
    var images = this.state.images.map((i) => {
      i.customOverlay = (
        <div style={captionStyle}>
          <div>{i.caption}</div>
          {i.hasOwnProperty("tags") && this.setCustomTags(i)}
        </div>
      );
      return i;
    });

    return (
      <div>
        <Link to="/">
          <button
            className="button is-success"
            style={{ position: "absolute", top: "90%", right: "45%" }}
          >
            Back To Map
          </button>
        </Link>
        <div
          style={{
            display: "block",
            minHeight: "80px",
            width: "100%",
            height: "100%",
            border: "1px solid #ddd",
            overflow: "auto",
          }}
        >
          <br></br> {location.state.dataState} <br></br>
          <Gallery images={images} enableImageSelection={false} />
        </div>
      </div>
    );
  }
}

State.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      srcset: PropTypes.array,
      caption: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
      thumbnailWidth: PropTypes.number.isRequired,
      thumbnailHeight: PropTypes.number.isRequired,
    })
  ).isRequired,
};

State.defaultProps = {
  images: images
};

// Don't forget to include the css in your page

// Using webpack or parcel with a style loader
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
