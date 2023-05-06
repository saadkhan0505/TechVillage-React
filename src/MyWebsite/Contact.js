import React from "react";

const Contact = () => {
  let BacColor = {
    backgroundColor: ' #282828',
    color: 'white'
  }
  let fbColor = {
    color: '#0165E1',
    cursor: 'pointer',
  }
  let inColor = {
    // color: '#C13584'
    color:'#E4405F',
    cursor: 'pointer'
  }
  let twColor = {
    color: '#1DA1F2',
    cursor: 'pointer'
  }
  let yoColor = {
    // color: '#c4302b'
    color: '#FF0000',
    cursor: 'pointer'
  }
  let ConColor = {
    color:'#42d8de',
    // color:'#b5c0e6'
    cursor: 'pointer'
  }
  let textSize = {
    fontSize: '1.7rem'
  }

  
  return (
    <div style={BacColor} className="">
      <h1 className="text-center pt-5">Contact Us</h1>
      <div className="container col-xl-10 col-xxl-8 px-4 ">
        <div className="row align-items-center g-lg-5 py-4">
          <div className="col-lg-7 text-center text-lg-start">
            <h3 className="display-6 pb-2" style={textSize}>Contact Information</h3>
            {/* <a href="#" className="link-primary"><p className="col-lg-10 fs-4">Facebook: <i className="bi bi-facebook"></i></p></a> */}
            <p style={ConColor}><i className="bi bi-envelope-fill mx-2" ></i>Email: TechVillage@gmail.com</p>
            <p style={ConColor}><i className="bi bi-telephone-fill mx-2"></i>Phone: +92(312)345678</p>
            <h3 className="display-6" style={textSize}>Our Social Profiles</h3>
            <span className="col-lg-10 fs-4 " style={fbColor}><i className="bi bi-facebook mx-2"></i>Facebook</span><br />
            <span className="col-lg-10 fs-4 " style={inColor}><i className="bi bi-instagram mx-2"></i>Instagram</span><br />
            <span className="col-lg-10 fs-4 " style={twColor}><i className="bi bi-twitter mx-2"></i>Twitter</span><br />
            <span className="col-lg-10 fs-4 " style={yoColor}><i className="bi bi-youtube mx-2"></i>YouTube</span>
            
            
      
            
            
            
          </div>
          <div className="col-md-10 mx-auto col-lg-5">
            <h1 className="display-6" style={textSize}>Write Your Message</h1>
            <form className="needs-validation" noValidate>
                <div className="row g-3">
                  <div className="col-sm-6">
                  <label htmlFor="cc-name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="cc-name" placeholder="Enter your name" required />
                    <div className="invalid-feedback">
                      Name on card is required
                    </div>
                  </div>
                  <div className="col-sm-6">
                  <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="name@example.com" />
                    <div className="invalid-feedback">
                      Please enter a valid email address for shipping updates.
                    </div>
                  </div>
                  <div className="col-12">
                  <div>
        
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows={5} defaultValue={""} />
        </div>
      </div>
      <button type="button" className="btn btn-success btn-lg">Send</button>
      
                  </div>
                </div>
              </form>
              
          </div>
          <div className="text-center pt-5 " style={{color:'white', cursor: 'pointer'}}><p> &copy; 2023 TechVillage. All Rights Reserved. Privacy Policy | Terms & Conditions</p></div>
          
        </div>
        
      </div>

    </div>
  );
};

export default Contact;
