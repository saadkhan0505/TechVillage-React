import React from "react";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";


export default function Header(props) {
  let logIn = () => {
    // alert('Yes')
    
  }

  let signUp = () => {
    prompt('')
  }

  let imgStyle = {
    height: "400px",
    width: "100%",
  };
  let TextSize = {
    fontSize: '20px'
  }
  let Text = {
    fontSize: '25px'
  }
  return (
    <div>

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={TextSize}>
        <div className="container-fluid">
          <a className="navbar-brand " style={Text} href="#">{props.title} </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <Link className="nav-link " aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown ">
                <a
                  className="nav-link dropdown-toggle "
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Products
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Mobile Phones
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Laptops & Tablets
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Other Accessories
                    </a>
                  </li>
                </ul>
              </li>
              {/* <li className="nav-item ">
                <Link className="nav-link " to="/buy">
                  Cart
                </Link>
              </li> */}
              {/* <li className="nav-item ">
                <a className="nav-link " href="#">
                  Brands
                </a>
              </li> */}
              <li className="nav-item ">
                <a className="nav-link " href="#">
                  {props.about}
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link " href="#">
                  Contact
                </a>
              </li>
            </ul>
            <form className="d-flex">
              {/* <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              /> */}
            </form>
            
            <div className="">
              <button className="btn btn-outline-light mx-2"  data-bs-toggle="modal" data-bs-target="#loginModal">Login</button>
              <button className="btn btn-outline-light"  data-bs-toggle="modal" data-bs-target="#signupModal">SignUp</button>
            </div>
          </div>
        </div>
      </nav>

     

{/* <!-- Login Modal --> */}
<div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Login to TechVillage</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Keep me signed in</label>
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>



{/* <!-- SignUp Modal --> */}
<div class="modal fade" id="signupModal" tabindex="-1" aria-labelledby="signupModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="signupModalLabel">Create the TechVillage Account</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputName" className="form-label">Name</label>
          <input type="text" className="form-control" id="exampleInputName"/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="mb-3">
          <label htmlFor="cexampleInputPassword1" className="form-label">Confirm Password</label>
          <input type="password" className="form-control" id="cexampleInputPassword1" />
        </div>
    
        <button type="submit" className="btn btn-danger">Clear Form</button>
        <button type="submit" className="btn btn-primary mx-2">Create Account</button>
      </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
      
    

      <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to={0} className aria-label="Slide 1" />
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to={1} aria-label="Slide 2" className />
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to={2} aria-label="Slide 3" className="active" aria-current="true" />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item" >
           <img src="./images/pic8.jpg" alt="" style={imgStyle}/>
            <div className="container">
              <div className="carousel-caption text-start">
              <h1>Welcome to TechVillage</h1>
              <p>
              TechVillage offers a wide array of mobile phone brands that
                cater to your specific needs. We offer high-end, mid-tier and
                low-end phones that are guaranteed to be delivered in prime
                condition to you.
              </p>
                 <button type="button" className="btn btn-primary mb-5 btn-lg">
                Order Online
              </button>
              </div>
            </div>
          </div>
          <div className="carousel-item" >
           <img src="./images/pic19.jpg" alt="" style={imgStyle} />
            <div className="container">
              <div className="carousel-caption">
              <h1>Online Mobiles Shopping in Pakistan</h1>
              <p>
                With TechVillage, you can now browse and order your favorite
                smartphones from the app or website at your convenience and have
                them delivered anywhere across Pakistan.
              </p>
              <button type="button" className="btn btn-primary mb-5 btn-lg">
                Order Online
              </button>
              </div>
            </div>
          </div>
          <div className="carousel-item active" >
           <img src="./images/pic17.jpg" alt="" style={imgStyle}/>
            <div className="container">
              <div className="carousel-caption text-end">
              <h1>Buy Mobile Phones, Tablets & Accessories</h1>
              <p>
                TechVillage hosts a range of popular mobile brands such as Apple,
                Samsung, Huawei, Sony, as well as Oppo, Vivo and Xiaomi, so you’ll be sure to
                find something that’s right for you.
              </p>
              <button type="button" className="btn btn-primary mb-5 btn-lg">
                Order Online
              </button>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

     
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired
}

Header.defaultProps = {
  title: 'Set Your Title Here',
  about: 'About'
}