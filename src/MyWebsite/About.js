import React from 'react'

const About = () => {
  let PageColor = {
    background: '#f7f7f7'
  }
  return (
    <>
    <h1 className="text-center mt-5 mb-5">About Us</h1>
    <div style={PageColor}>
      
       <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 mb-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img src="./images/sideimg4.jpg" className="d-block mx-lg-auto img-fluid rounded img-thumbnail" alt="Bootstrap Themes" width={700} height={500} loading="lazy"/>
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 lh-1 mb-3 fs-3">The Biggest Store for Online Mobile Shopping in Pakistan</h1>
            <p className="lead"> TechVillage steps in with online mobile shopping platform in Pakistan,
              customers can purchase items from the comfort of their own homes
              or workplace and do not have to spend time travelling. One can simply browse through
              the sites and buy the phone as per their needs. It
              is also easy to cancel the transactions. The TechVillage have
              huge collections of the mobile phones from which an individual can
              select as per their wish. TechVillage is not only restricted
              to cities but delivers all around
              Pakistan.</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <div className="btn-group">
                  <button type="button" className="btn btn-lg btn-outline-success">Read More</button>
                    
                  </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default About

