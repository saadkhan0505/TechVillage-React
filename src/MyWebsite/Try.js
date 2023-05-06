import React from 'react'

const Try = () => {
    let imgSize = {
        width: '100%',
        height: '250px',
        cursor: 'pointer'
    }
    let PageColor = {
      background: '#f7f7f7'
      // background: 'blue'
    }

  return (
    <>
    <div>
    <h1 className='text-center mt-5 mb-5' >Top Brands</h1>
    <div className='pb-3' style={PageColor}>
      <div className="container mb-5 pt-5" >
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

          <div className="col">
            <div className="card shadow-sm">
              <img className='rounded' src="./images/logo2.png" alt="" style={imgSize}/>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-sm">
            <img className='rounded' src="/images/logo3.jpg" alt="" style={imgSize}/>
            </div>
          </div>

          <div className="col">
            <div className="card shadow-sm">
             <img className='rounded' src="/images/logo1.jpg" alt="" style={imgSize}/>
            </div>
          </div>
          
        </div>
      </div>

    </div>
    </div>
    </>
  )
}

export default Try
