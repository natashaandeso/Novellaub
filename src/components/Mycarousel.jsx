import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

const Mycarousel = () => {
  return (
    <div id="delicacyCarousel" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner p-4">
    
    {/* Slide 1 */}
    <div className="carousel-item active">
      <div className="row justify-content-center">
        {/* Card 1 */}
        <div className="col-md-2">

          <div className="cute-card">

            <img src="/novel1.jfif" className="card-img-top" alt="Cupcake" />
            <div className="card-body text-center">
              <h5 className="brand-text fs-5">Velvet Dream 🧁</h5>
              <p className="card-text small">So soft, it melts instantly.</p>
              <button className="signup-btn border-0 py-1 px-3">Add</button>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-2">
          <div className="cute-card">
            <img src="/novel2jfif.jfif" className="card-img-top" alt="Cookie" />
            <div className="card-body text-center">
              <h5 className="brand-text fs-5">Choco Chip 🍪</h5>
              <p className="card-text small">Classic crunch in every bite.</p>
              <button className="signup-btn border-0 py-1 px-3">Add</button>
            </div>
          </div>
        </div>

        {/* card 3 */}
         <div className="col-md-2">
          <div className="cute-card">
            <img src="/novel3.jfif" className="card-img-top" alt="Cookie" />
            <div className="card-body text-center">
              <h5 className="brand-text fs-5">Choco Chip 🍪</h5>
              <p className="card-text small">Classic crunch in every bite.</p>
              <button className="signup-btn border-0 py-1 px-3">Add</button>
            </div>
          </div>
        </div>

        {/* card 4 */}
         <div className="col-md-2">
          <div className="cute-card">
            <img src="/novel4.jfif" className="card-img-top" alt="Cookie" />
            <div className="card-body text-center">
              <h5 className="brand-text fs-5">Choco Chip 🍪</h5>
              <p className="card-text small">Classic crunch in every bite.</p>
              <button className="signup-btn border-0 py-1 px-3">Add</button>
            </div>
          </div>
        </div>

        {/* card 5 */}
         <div className="col-md-2">
          <div className="cute-card">
            <img src="/novel5.jfif" className="card-img-top" alt="Cookie" />
            <div className="card-body text-center">
              <h5 className="brand-text fs-5">Choco Chip 🍪</h5>
              <p className="card-text small">Classic crunch in every bite.</p>
              <button className="signup-btn border-0 py-1 px-3">Add</button>
            </div>
          </div>
        </div>

        

      </div>
    </div>

    {/* Slide 2 (Add more slides as needed) */}
    <div className="carousel-item">
      <div className="row justify-content-center">
        {/* ... Cards 1 ... */}
         <div className="col-md-2">
          <div className="cute-card">
            <img src="/novel1.jfif" className="card-img-top" alt="Cookie" />
            <div className="card-body text-center">
              <h5 className="brand-text fs-5">Choco Chip 🍪</h5>
              <p className="card-text small">Classic crunch in every bite.</p>
              <button className="signup-btn border-0 py-1 px-3">Add</button>
            </div>
          </div>
        </div>

      </div>
    </div>

  </div>

  {/* Custom Navigation Arrows */}
  <button className="carousel-control-prev" type="button" data-bs-target="#delicacyCarousel" data-bs-data-slide="prev">
    <span className="carousel-control-prev-icon custom-arrow" aria-hidden="true"></span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#delicacyCarousel" data-bs-data-slide="next">
    <span className="carousel-control-next-icon custom-arrow" aria-hidden="true"></span>
  </button>
</div>
  )
}

export default Mycarousel