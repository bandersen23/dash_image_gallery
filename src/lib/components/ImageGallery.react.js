import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Gallery from 'react-grid-gallery';

/**
 * DashImageGallery is an image gallery component wrapping react-grid-gallery for Plotly Dash.
 * It takes a list of images and displays them.
 */
export default class ImageGallery extends Component {
    render() {
        const {id, images, enableImageSelection, enableLightbox} = this.props;

        return (
          <Gallery id={id} images={images} enableImageSelection={enableImageSelection} enableLightbox={enableLightbox}/>
        );
    }
}

ImageGallery.defaultProps = {enableLightbox: true, enableImageSelection: true};

ImageGallery.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * The images to display in the gallery
     * More fields available listed in react-grid-gallery docs.
     */
    images: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      thumbnailWidth: PropTypes.number.isRequired,
      thumbnailHeight: PropTypes.number.isRequired,
      alt: PropTypes.string,
      tags: PropTypes.array,
      isSelected: PropTypes.boolean,
      caption: PropTypes.string
    })).isRequired,

    /**
     * Allows images to be selectable
     */
    enableImageSelection: PropTypes.bool,

    /**
     * Enables lightbox display of full sized image when clicked.
     */
    enableLightbox: PropTypes.bool
};
