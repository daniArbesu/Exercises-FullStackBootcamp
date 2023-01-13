import React from 'react';
import { useState, useEffect } from 'react';
import { getRoverPhotos, ROVERS } from '../api/rovers';
import Slideshow from './SlideShow';

const roverIds = Object.keys(ROVERS);

const Gallery = () => {
  const [rover, setRover] = useState(roverIds[0]);
  const [photos, setPhotos] = useState(() =>
    roverIds.reduce(
      (acc, nextKey) => ({
        ...acc,
        [nextKey]: [],
      }),
      {}
    )
  );

  useEffect(() => {
    if (photos[rover].length) {
      return;
    }

    getRoverPhotos(rover).then((photoList) => {
      setPhotos((prevState) => ({ ...prevState, [rover]: photoList }));
    });
  }, [rover]);

  const handleSelectRover = (ev) => {
    setRover(ev.target.value);
  };

  const roverPhotos = photos[rover];

  return (
    <div className="gallery">
      <h3>Gallery</h3>
      <select
        name="rover"
        id="rover"
        value={rover}
        onChange={handleSelectRover}
      >
        {Object.entries(ROVERS).map((rover) => (
          <option key={rover[0]} value={rover[0]}>
            {rover[1]}
          </option>
        ))}
      </select>

      {roverPhotos.length ? <Slideshow photoList={roverPhotos} /> : null}
    </div>
  );
};

export default Gallery;
