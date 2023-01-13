import axios from 'axios';

export const ROVERS = {
  curiosity: 'Curiosity',
  spirit: 'Spirit',
  opportunity: 'Opportunity',
};

export const apiHeaders = {
  'Content-type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  Accept: 'application/json',
};

export const API_ROVER = axios.create({
  headers: apiHeaders,
  baseURL: import.meta.env.VITE_APP_NASA_API_ROVER_URL,
  timeout: 6000,
});

export const getRoverPhotos = (roverName) =>
  API_ROVER.get(
    `/${roverName}/photos?sol=100&api_key=${
      import.meta.env.VITE_APP_NASA_API_KEY
    }`
  ).then((response) => {
    const photosWithCamera = response.data.photos.map((photo) => ({
      id: photo.id,
      src: photo.img_src,
      cameraName: photo.camera.full_name,
    }));

    return photosWithCamera;
  });
