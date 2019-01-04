import React from 'react';
import { Link } from 'gatsby';
import Album from '../components/Album';
import Header from '../components/Header';
import '../styles/index.css';
import Thumbnail from '../components/Thumbnail';
// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const IndexPage = () => (
  <div>
    <Header />
    <section className="jumbotron text-center">
      <div className="container">
        <h1 className="jumbotron-heading">Album example</h1>
        <p className="lead text-muted">
          Something short and leading about the collection below—its contents,
          the creator, etc. Make it short and sweet, but not too short so folks
          don’t simply skip over it entirely.
        </p>
        <p>
          <button href="#" className="btn btn-secondary my-2">
            Main call to action
          </button>

          <Link className="btn btn-primary my-2" to="/page-2/">
            Go to page 2
          </Link>
        </p>
      </div>
    </section>
    <div className="bg-light">
      <div className="container">
        <div className="row">
          <Album />
          <Album />
          <Album />
          <Album />
        </div>
      </div>
    </div>
  </div>
);

export default IndexPage;
