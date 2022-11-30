import React from 'react'

function Footer() {
  return (
    <div>
      <footer className="bg-dark text-light text-center text-lg-start mt-1 " style={{position:"absolute",bottom:"0px",width:"100vw"}}>
        <div className="container p-4 pb-0">
          <form action="">
            <div className="row">
              <div className="col-auto mb-4 mb-md-0">
                <p className="pt-2">
                  <strong>Web Play list</strong>
                </p>
              </div>

              

              <div className="col-auto mb-4 mb-md-0">
            <ul className="nav justify-content-center">
                <li class="nav-item">
                    <a className="nav-link active" href="#">Active link</a>
                </li>
                <li class="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
            
            </ul>
              </div>
            </div>
          </form>
        </div>

        <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
          © 2020 Copyright: Zorouss
          <a className="text-dark" href="#"></a>
        </div>
      </footer>
    </div>
  )
}

export default Footer