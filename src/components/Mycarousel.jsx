import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

const Mycarousel = () => {
  return (
    // data-bs-ride="carousel" initializes it on page load
    // data-bs-interval="3000" makes it slide every 3 seconds
    <div id="delicacyCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
      <div className="carousel-inner p-4">
        
        {/* Slide 1 */}
        <div className="carousel-item active">
          <div className="row justify-content-center">
            {/* Card 1 */}
            <div className="col-md-2">
              <div className="dark-card">
                <img src="/novel1.jfif" className="card-img-top" alt="Cupcake" />
                <div className="card-body text-center">
                  <h5 className="brand-text fs-5">Luna Lona The Moon Wolf</h5>
                  {/* <p className="card-text small">So soft, it melts instantly.</p> */}
                  <div className="mt-auto"> {/* This pushes the button to the bottom */}
                    <button className="signup-btn border-0 py-1 px-3">Read More</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-2">
              <div className="dark-card">
                <img src="/novel2jfif.jfif" className="card-img-top" alt="Cookie" />
                <div className="card-body text-center">
                  <h5 className="brand-text fs-5">Chained by Choice</h5>
                  {/* <p className="card-text small">Classic crunch in every bite.</p> */}
                  <button className="signup-btn border-0 py-1 px-3">Read More</button>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-md-2">
              <div className="dark-card">
                <img src="/novel3.jfif" className="card-img-top" alt="Cookie" />
                <div className="card-body text-center">
                  <h5 className="brand-text fs-5">The Omegas Awekening</h5>
                  {/* <p className="card-text small">Classic crunch in every bite.</p> */}
                  <button className="signup-btn border-0 py-1 px-3">Read More</button>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="col-md-2">
              <div className="dark-card">
                <img src="/novel4.jfif" className="card-img-top" alt="Cookie" />
                <div className="card-body text-center">
                  <h5 className="brand-text fs-5">You Rejected a Silver Wolf</h5>
                  {/* <p className="card-text small">Classic crunch in every bite.</p> */}
                  <button className="signup-btn border-0 py-1 px-3">Read More</button>
                </div>
              </div>
            </div>

            {/* Card 5 */}
            <div className="col-md-2">
              <div className="dark-card">
                <img src="/novel5.jfif" className="card-img-top" alt="Cookie" />
                <div className="card-body text-center">
                  <h5 className="brand-text fs-5">Shy </h5>
                  {/* <p className="card-text small">Classic crunch in every bite.</p> */}
                  <button className="signup-btn border-0 py-1 px-3">Read More</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="carousel-item">
          <div className="row justify-content-center">
            <div className="col-md-2">
              <div className="dark-card">
                <img src="/novel13.jfif" className="card-img-top" alt="Cookie" />
                <div className="card-body text-center">
                  <h5 className="brand-text fs-5">The Mafias Naughty..</h5>
                  {/* <p className="card-text small">Classic crunch in every bite.</p> */}
                  <button className="signup-btn border-0 py-1 px-3">Read More</button>
                </div>
              </div>
              
            </div>
            {/* Add more cards here so Slide 2 isn't empty! */}

    {/* Card 5 */}
            <div className="col-md-2">
              <div className="dark-card">
                <img src="/novel11.jpg" className="card-img-top" alt="Cookie" />
                <div className="card-body text-center">
                  <h5 className="brand-text fs-5">The Nightmare </h5>
                  {/* <p className="card-text small">Classic crunch in every bite.</p> */}
                  <button className="signup-btn border-0 py-1 px-3">Read More</button>
                </div>
              </div>
            </div>

            <div className="col-md-2">
              <div className="dark-card">
                <img src="/novel12.jfif" className="card-img-top" alt="Cookie" />
                <div className="card-body text-center">
                  <h5 className="brand-text fs-5">Captured By Boss </h5>
                  {/* <p className="card-text small">Classic crunch in every bite.</p> */}
                  <button className="signup-btn border-0 py-1 px-3">Read More</button>
                </div>
              </div>
            </div>

              <div className="col-md-2">
              <div className="dark-card">
                <img src="/novel10.jfif" className="card-img-top" alt="Cookie" />
                <div className="card-body text-center">
                  <h5 className="brand-text fs-5">Money, Murder </h5>
                  {/* <p className="card-text small">Classic crunch in every bite.</p> */}
                  <button className="signup-btn border-0 py-1 px-3">Read More</button>
                </div>
              </div>
            </div>

              <div className="col-md-2">
              <div className="dark-card">
                <img src="/novel9.jfif" className="card-img-top" alt="Cookie" />
                <div className="card-body text-center">
                  <h5 className="brand-text fs-5">Dirty Little Secret </h5>
                  {/* <p className="card-text small">Classic crunch in every bite.</p> */}
                  <button className="signup-btn border-0 py-1 px-3">Read More</button>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>

      {/* FIXED BUTTONS: Removed 'data-bs-data' and left 'data-bs-slide' */}
      <button className="carousel-control-prev" type="button" data-bs-target="#delicacyCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon custom-arrow" aria-hidden="true"></span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#delicacyCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon custom-arrow" aria-hidden="true"></span>
      </button>
    </div>
  )
}

export default Mycarousel