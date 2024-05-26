const SiteTop = () => {
  return (
    <div className="site-top">
      <div className="site-header clearfix">
        <div className="container d-lg-flex justify-content-lg-between align-items-lg-center">
          <a href="#" className="site-brand pull-left">
            <img
              src="images/KALASTAMBH-LOGO.webp"
              style={{ maxWidth: "400px", width: "100%" }}
            />
          </a>

          <div className="social-icons pull-right">
            <ul>
              <li>
                <a
                  href="https://instagram.com/kalaastambh"
                  className="fa fa-instagram"
                  target="_blank"
                ></a>
              </li>
              <li>
                <a
                  href="https://chat.whatsapp.com/GyzUEXmYDtjIooKMECuGs6"
                  target="_blank"
                  className="fa-brands fa-whatsapp"
                ></a>
              </li>
              <li>
                <a href="#" className="fa fa-facebook"></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* .site-header */}
      <div className="site-banner_">
        {/* Remaining content in the original HTML */}
      </div>
      {/* .site-header */}
    </div>
  );
};

export default SiteTop;
