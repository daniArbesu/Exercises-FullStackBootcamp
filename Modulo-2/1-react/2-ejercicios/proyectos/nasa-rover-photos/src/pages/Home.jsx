import React from 'react';

const Home = () => {
  return (
    <main className="home">
      <h1>Welcome to Mars Rovers Photo Gallery!</h1>
      <iframe
        src="https://www.youtube.com/embed/21X5lGlDOfg"
        title="NASA Live: Official Stream of NASA TV"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </main>
  );
};

export default Home;
