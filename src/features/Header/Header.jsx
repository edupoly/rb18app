import React from 'react'

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="">
            <img src="https://img.freepik.com/free-vector/detailed-barbecue-logo-template_23-2149001021.jpg?w=1060&t=st=1673020528~exp=1673021128~hmac=488457814d79f5a29bcd771fb0406a58d33ad535b1cac54ce8f2b6e6f245c2a8" style={{width:'50px'}} alt="" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mynavbar">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link" href="/foodItems">Billing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/addFoodItem">Add Food</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">Sales</a>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="text" placeholder="Search" />
              <button className="btn btn-outline-danger" type="button">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header