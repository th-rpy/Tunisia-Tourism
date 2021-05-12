import PropTypes from "prop-types";
import React from "react";
import Gallery from "react-grid-gallery";
import { Link } from "react-router-dom";
import "bulma/css/bulma.css";

export default class Test extends React.Component {
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
          <br></br> <br></br>
          <Gallery images={images} enableImageSelection={false} />
        </div>
      </div>
    );
  }
}

Test.propTypes = {
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

const captionStyle = {
  backgroundColor: "rgba(0, 0, 0, 0.8)",
  maxHeight: "240px",
  overflow: "hidden",
  position: "absolute",
  bottom: "0",
  width: "100%",
  color: "white",
  padding: "2px",
  fontSize: "90%",
};

const customTagStyle = {
  wordWrap: "break-word",
  display: "inline-block",
  backgroundColor: "white",
  height: "auto",
  fontSize: "75%",
  fontWeight: "600",
  lineHeight: "1",
  padding: ".2em .6em .3em",
  borderRadius: ".25em",
  color: "black",
  verticalAlign: "baseline",
  margin: "2px",
};

Test.defaultProps = {
  images: [
    {
      src:
        "https://assets.wego.com/image/upload/v1611848131/country-pages/tn.jpg",
      thumbnail:
        "https://assets.wego.com/image/upload/v1611848131/country-pages/tn.jpg",
      thumbnailWidth: 1800,
      thumbnailHeight: 900,
      tags: [{ value: "Nature", title: "Nature | Sea" }],
      caption: "Tunisia - Sidi Bou-Said",
    },
    {
      src:
        "https://i2.wp.com/24hourslayover.com/wp-content/uploads/2020/03/tunis_photography_tunisia-19_50.jpg?w=512&ssl=1",
      thumbnail:
        "https://i2.wp.com/24hourslayover.com/wp-content/uploads/2020/03/tunis_photography_tunisia-19_50.jpg?w=512&ssl=1",
      thumbnailWidth: 320,
      thumbnailHeight: 190,
      tags: [
        { value: "Architecture", title: "Architecture | Outdoors" },
        { value: "Industrial", title: "Industrial" },
      ],
      caption: "286H (gratisography.com)",
    },
    {
      src:
        "https://lp-cms-production.imgix.net/features/2018/08/raf-raf-peninsula-tunisia-af47e253734c.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850&q=75&dpr=1",
      thumbnail:
        "https://lp-cms-production.imgix.net/features/2018/08/raf-raf-peninsula-tunisia-af47e253734c.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850&q=75&dpr=1",
      thumbnailWidth: 1000,
      thumbnailHeight: 600,
      tags: [
        { value: "People", title: "People" },
        { value: "Architecture", title: "Architecture | Outdoors" },
        { value: "Industrial", title: "Industrial" },
      ],
      caption: "315H (gratisography.com)",
    },
    {
      src:
        "https://lp-cms-production.imgix.net/features/2018/08/zriba-tunisia-4aee86c56808.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850&q=75&dpr=1",
      thumbnail:
        "https://lp-cms-production.imgix.net/features/2018/08/zriba-tunisia-4aee86c56808.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850&q=75&dpr=1",
      thumbnailWidth: 1000,
      thumbnailHeight: 600,
      caption: "The Berber town of Zriba was abandoned in the 1960s",
    },
    {
      src:
        "https://lp-cms-production.imgix.net/features/2018/08/sidi-bou-said-harbour-tunisia-27ce685bbaa0.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850&q=75&dpr=1",
      thumbnail:
        "https://lp-cms-production.imgix.net/features/2018/08/sidi-bou-said-harbour-tunisia-27ce685bbaa0.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850&q=75&dpr=1",
      thumbnailWidth: 1000,
      thumbnailHeight: 600,
      caption:
        "Public transport is available, but it's easiest to hire a car (or boat!)",
    },
    {
      src:
        "https://lp-cms-production.imgix.net/features/2018/08/dougga-roman-ruins-tunisia-3821f8a12b0c.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850&q=75&dpr=1",
      thumbnail:
        "https://lp-cms-production.imgix.net/features/2018/08/dougga-roman-ruins-tunisia-3821f8a12b0c.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850&q=75&dpr=1",
      thumbnailWidth: 1000,
      thumbnailHeight: 600,
      tags: [
        { value: "People", title: "People" },
        { value: "Industrial", title: "Industrial" },
      ],
      caption: "The sprawling and often empty ruins of Dougga ",
    },
    {
      src:
        "https://cdn-bodde.nitrocdn.com/PgnkCIsGyOJiNkMdDOHEAiCvMEeINUsu/assets/static/source/rev-93acb20/wp-content/uploads/2014/02/Chebika-Tunisia.jpg",
      thumbnail:
        "https://cdn-bodde.nitrocdn.com/PgnkCIsGyOJiNkMdDOHEAiCvMEeINUsu/assets/static/source/rev-93acb20/wp-content/uploads/2014/02/Chebika-Tunisia.jpg",
      thumbnailWidth: 1000,
      thumbnailHeight: 600,
      caption: "Chebika – an oasis",
    },
    {
      src:
        "https://cdn-bodde.nitrocdn.com/PgnkCIsGyOJiNkMdDOHEAiCvMEeINUsu/assets/static/optimized/rev-93acb20/wp-content/uploads/2014/02/Hammamet-1.jpg",
      thumbnail:
        "https://cdn-bodde.nitrocdn.com/PgnkCIsGyOJiNkMdDOHEAiCvMEeINUsu/assets/static/optimized/rev-93acb20/wp-content/uploads/2014/02/Hammamet-1.jpg",
      thumbnailWidth: 1000,
      thumbnailHeight: 600,
      tags: [{ value: "Nature", title: "Nature | Flowers" }],
      caption:
        "Hammamet – a small fishing town turned beautiful coastal resort",
    },
    {
      src:
        "https://cdn-bodde.nitrocdn.com/PgnkCIsGyOJiNkMdDOHEAiCvMEeINUsu/assets/static/source/rev-93acb20/wp-content/uploads/2014/02/Monastir-Ribat.jpg",
      thumbnail:
        "https://cdn-bodde.nitrocdn.com/PgnkCIsGyOJiNkMdDOHEAiCvMEeINUsu/assets/static/source/rev-93acb20/wp-content/uploads/2014/02/Monastir-Ribat.jpg",
      thumbnailWidth: 1000,
      thumbnailHeight: 600,
      tags: [{ value: "Nature", title: "Nature | Flowers" }],
      caption: "Monastir Ribat – immaculately preserved military architecture",
    },
    {
      src:
        "https://cdn-bodde.nitrocdn.com/PgnkCIsGyOJiNkMdDOHEAiCvMEeINUsu/assets/static/source/rev-93acb20/wp-content/uploads/2014/02/Matmata-1.jpg",
      thumbnail:
        "https://cdn-bodde.nitrocdn.com/PgnkCIsGyOJiNkMdDOHEAiCvMEeINUsu/assets/static/source/rev-93acb20/wp-content/uploads/2014/02/Matmata-1.jpg",
      thumbnailWidth: 1000,
      thumbnailHeight: 600,
      tags: [{ value: "Nature", title: "Nature | Flowers" }],
      caption:
        "Matmata & the Ksour – a unique desert village with curious honeycomb-like houses",
    },
    {
      src:
        "https://cdn-bodde.nitrocdn.com/PgnkCIsGyOJiNkMdDOHEAiCvMEeINUsu/assets/static/source/rev-93acb20/wp-content/uploads/2014/02/Sousse-1-1536x1014.jpg",
      thumbnail:
        "https://cdn-bodde.nitrocdn.com/PgnkCIsGyOJiNkMdDOHEAiCvMEeINUsu/assets/static/source/rev-93acb20/wp-content/uploads/2014/02/Sousse-1-1536x1014.jpg",
      thumbnailWidth: 1000,
      thumbnailHeight: 600,
      tags: [{ value: "Nature", title: "Nature | Flowers" }],
      caption:
        "Sousse – a beautiful city otherwise known as “the Pearl of the Sahel”",
    },

    {
      src:
        "https://cdn-bodde.nitrocdn.com/PgnkCIsGyOJiNkMdDOHEAiCvMEeINUsu/assets/static/source/rev-93acb20/wp-content/uploads/2014/02/Plage-de-Chaffar-Sfax.jpg",
      thumbnail:
        "https://cdn-bodde.nitrocdn.com/PgnkCIsGyOJiNkMdDOHEAiCvMEeINUsu/assets/static/source/rev-93acb20/wp-content/uploads/2014/02/Plage-de-Chaffar-Sfax.jpg",
      thumbnailWidth: 1000,
      thumbnailHeight: 600,
      tags: [{ value: "Nature", title: "Nature | Flowers" }],
      caption:
        "Plage de Chaffar (Sfax) – a Mediterranean sandy beach resort popular with both tourists and locals",
    },
  ],
};

// Don't forget to include the css in your page

// Using webpack or parcel with a style loader
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
