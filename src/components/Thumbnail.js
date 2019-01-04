import React from 'react';

const Thumbnail = () => {
  return (
    <div className="col-lg-4">
      <svg
        className="bd-placeholder-img rounded-circle align-center "
        width="140"
        height="140"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
        role="img"
        aria-label="Placeholder: 140x140"
      >
        <title>Placeholder</title>
        <rect fill="#777" width="100%" height="100%" />
        <text fill="#777" dy=".3em" x="50%" y="50%">
          140x140
        </text>
      </svg>
      <h2 className="text-center text-justify">Heading</h2>
      <p>
        Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod.
        Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus,
        porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus
        magna.
      </p>
      <p>
        <a className="btn btn-secondary" href="#" role="button">
          View details »
        </a>
      </p>
    </div>
  );
};

export default Thumbnail;
