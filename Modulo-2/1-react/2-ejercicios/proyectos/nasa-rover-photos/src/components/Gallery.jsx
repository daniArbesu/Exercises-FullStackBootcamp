import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { API_ROVER } from '../api/rovers';

const Gallery = () => {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    API_ROVER.get(
      `/curiosity/photos?sol=1000&api_key=${
        import.meta.env.VITE_APP_NASA_API_KEY
      }`
    )
      .then((response) => {
        const photosWithCamera = response.data.photos.map((photo) => ({
          src: photo.img_src,
          cameraName: photo.camera.full_name,
        }));

        setPhotos(photosWithCamera);
      })
      .catch((err) => {});
  }, []);

  return (
    <div>
      <h3>Gallery</h3>

      {photos.length ? (
        <div>
          <img src={photos[0].src} alt={photos[0].cameraName} />
        </div>
      ) : null}
    </div>
  );
};

export default Gallery;
