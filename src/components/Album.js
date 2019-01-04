import React from 'react';

class Album extends React.Component {
  render() {
    return (
      <div className="col-lg-4 col-md-4">
        <div className="card mb-4 shadow-sm">
          <svg
            className="bd-placeholder-img card-img-top text-center"
            width="100%"
            height="225"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
            role="img"
            aria-label="Placeholder: Thumbnail"
          >
            <title>Placeholder</title>
            <rect fill="#55595c" width="100%" height="100%" />
            <text fill="#eceeef" dy=".3em" x="40%" y="50%">
              Thumbnail
            </text>
          </svg>
          <div className="card-body">
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                >
                  View
                </button>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                >
                  Edit
                </button>
              </div>
              <small className="text-muted text-right">9 mins</small>
            </div>
          </div>
        </div>
        <br />
      </div>
    );
  }
}

export default Album;
