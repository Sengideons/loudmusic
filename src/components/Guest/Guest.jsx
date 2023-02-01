import React from 'react';
import './Guest.css';


const Guest = () => {
    return(
        <div className="guest-position">
            
            <div className='guest-heading'>
                <h1>OUR HONORABLE GUEST</h1>
                <p>Every year, we try our best to find the most popular singers from all over the world</p>
            </div><br /><br /><br /><br /><br />
            





        <div id="portfolio" class="portfolio section-bottom-only">
      <div class="container">


      
        
   {/*     <div class="portfolio-filter-menu">
          <ul>
            <li data-filter="all" class="active">
              <span>All</span>
            </li>
            <li data-filter="1">
              <span>Web Design</span>
            </li>
            <li data-filter="2">
              <span>Marketing</span>
            </li>
            <li data-filter="3">
              <span>Branding</span>
            </li>
          </ul>
        </div>                                                            */}
        <div class="row no-gutters filter-container">
          <div class="col-md-4 col-sm-6 col-xs-12 filtr-item" data-category="3">
            <div class="content-image">
              <a href="images/offset.jpg" class="portfolio-popup">
                <img src={"images/offset.jpg"} alt="" />
                <div class="image-overlay"></div>
                <div class="image-caption">
                <h4 className='img4-link1'><i class="fa-brands fa-facebook"></i></h4>
                <h4><i class="fa-brands fa-instagram"></i></h4>
                <h4 className='img4-link'><i class="fa-brands fa-twitter"></i></h4>
                </div>
              </a>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-12 filtr-item" data-category="1">
            <div class="content-image">
              <a href="images/drake.jpg" class="portfolio-popup">
                <img src={"images/drake.jpg"} alt="" />
                <div class="image-overlay"></div>
                <div class="image-caption">
                <h4 className='img4-link1'><i class="fa-brands fa-facebook"></i></h4>
                <h4><i class="fa-brands fa-instagram"></i></h4>
                <h4 className='img4-link'><i class="fa-brands fa-twitter"></i></h4>
                </div>
              </a>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-12 filtr-item" data-category="2">
            <div class="content-image">
              <a href="images/divido.jpg" class="portfolio-popup">
                <img src={"images/davido.jpg"} alt="" />
                <div class="image-overlay"></div>
                <div class="image-caption">
                <h4 className='img4-link1'><i class="fa-brands fa-facebook"></i></h4>
                <h4><i class="fa-brands fa-instagram"></i></h4>
                <h4 className='img4-link'><i class="fa-brands fa-twitter"></i></h4>
                </div>
              </a>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-12 filtr-item" data-category="3">
            <div class="content-image">
              <a href="images/wizkid.jpg" class="portfolio-popup">
                <img src={"images/wizkid.jpg"} alt="" />
                <div className="card">
                    <h3>Wizkid</h3>
                    <p>hip-pop singer</p>
                    </div>
                <div class="image-overlay"></div>
                <div class="image-caption">
                <h4 className='img4-link1'><i class="fa-brands fa-facebook"></i></h4>
                <h4><i class="fa-brands fa-instagram"></i></h4>
                <h4 className='img4-link'><i class="fa-brands fa-twitter"></i></h4>
                </div>
              </a>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-12 filtr-item" data-category="2">
            <div class="content-image">
              <a href="images/BillieEilish.jpg" class="portfolio-popup">
                <img src={"images/BillieEilish.jpg"} alt="" />
                <div class="image-overlay"></div>
                <div class="image-caption">
                <h4 className='img4-link1'><i class="fa-brands fa-facebook"></i></h4>
                <h4><i class="fa-brands fa-instagram"></i></h4>
                <h4 className='img4-link'><i class="fa-brands fa-twitter"></i></h4>
                </div>
              </a>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-12 filtr-item" data-category="1">
            <div class="content-image">
              <a href="images/portfolio6.jpg" class="portfolio-popup">
                <img src={"images/stonebwoy.jpg"} alt="" />
                <div class="image-overlay"></div>
                <div class="image-caption">
                <h4 className='img4-link1'><i class="fa-brands fa-facebook"></i></h4>
                <h4><i class="fa-brands fa-instagram"></i></h4>
                <h4 className='img4-link'><i class="fa-brands fa-twitter"></i></h4>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    )
}

export default Guest;