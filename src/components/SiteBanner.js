const SiteBanner = () => (
  <div className="site-banner">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 text-center">
          <div className="pt-5 pb-2">
            <img
              src="images/kalastambh-eng-logo.webp"
              style={{ maxWidth: "400px", width: "100%" }}
            />
          </div>
        </div>
        <p className="description col-md-9">
          Welcome to Kalastambh International Art Group! Unleash Your Artistic
          Passion. Where art and storytelling unite in captivating exhibitions,
          interactive sessions, and transformative workshops. Join our vibrant
          artistic community, showcase your talent, and be part of a global
          artistic movement.
        </p>
        <p
          className="col-12 text-center text-uppercase"
          style={{ wordSpacing: "5px" }}
        >
          <b>Explore Connect Create</b>
        </p>
        <div className="col-12 py-5">
          <h1 className="h1 text-center text-uppercase world-heading">
            <b>World ART DAY</b>
          </h1>
          <h5 className="h5 text-center text-uppercase world-sub-heading">
            <b>heritage art exhibition</b>
          </h5>
        </div>
        {/* Event details */}
        <div className="col-11 col-lg-9">
          <div className="row justify-content-center">
            <div className="col-12 lead d-flex justify-content-center">
              <div className="event-details">
                <div className="mt-3 mt-md-0">When</div>
                <div>
                  <span className="colon">: </span>
                  <span className="fw-bold">14 & 15 April 2024</span>
                </div>
                <div className="mt-3 mt-md-0">Where</div>
                <div>
                  <span className="colon">: </span>
                  <span className="fw-bold">Bada Rawala Palace</span>, Indore
                </div>
                <div className="mt-3 mt-md-0">Last Date of Registration</div>
                <div>
                  <span className="colon">: </span>
                  <span className="fw-bold">10 April 2024</span>
                </div>
              </div>
            </div>
            {/* Registration button */}
            <div className="col-12 py-4 d-flex justify-content-center">
              <div>
                <a
                  href="https://forms.gle/t9ntZ4ofdKMNwWY47"
                  target="_blank"
                  className="btn btn-primary"
                >
                  Register
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default SiteBanner;
