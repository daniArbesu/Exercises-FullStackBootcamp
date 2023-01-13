import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const Slideshow = ({ photoList }) => {
  return (
    <div className="slide-container">
      <Fade>
        {photoList.map((photo) => (
          <div className="each-slide" key={photo.id}>
            <div style={{ backgroundImage: `url(${photo.src})` }}>
              <span>{photo.cameraName}</span>
            </div>
          </div>
        ))}
      </Fade>
    </div>
  );
};

export default Slideshow;
