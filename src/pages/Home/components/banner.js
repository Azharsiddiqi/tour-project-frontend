import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Banner extends Component {

    render() {

    return  (<div className="banner-area viaje-go-top">
			  <div className="banner-slider">

			    <div className="banner-slider-item banner-bg-1">
			      <div className="container">
			        <div className="row">
			          <div className="col-xl-8 col-lg-9 offset-xl-2 offset-lg-1">
			            <div className="row">
			              <div className="col-lg-9 col-sm-8">
			                <div className="banner-inner">
			                  <h2 className="banner-title s-animate-2">Navagio <br /> Beach</h2>
			                </div>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
			    </div>
			    
				<div className="banner-slider-item banner-bg-2">
			      <div className="container">
			        <div className="row">
			          <div className="col-xl-8 col-lg-9 offset-xl-2 offset-lg-1">
			            <div className="row">
			              <div className="col-lg-9 col-sm-8">
			                <div className="banner-inner">
			                  <h2 className="banner-title s-animate-2">Mykonos <br /> island</h2>
			                </div>
			              </div>
						</div>
			          </div>
			        </div>
			      </div>
			    </div>
			    <div className="banner-slider-item banner-bg-3">
			      <div className="container">
			        <div className="row">
			          <div className="col-xl-8 col-lg-9 offset-xl-2 offset-lg-1">
			            <div className="row">
			              <div className="col-lg-9 col-sm-8">
			                <div className="banner-inner">
			                  <h2 className="banner-title s-animate-2">Navagio <br /> Beach</h2>
			                </div>
			              </div>
						<div className="col-lg-12 banner-tour-package">
			                <div className="row">
			                  <div className="col-sm-4 s-animate-3">
			                    <div className="tp-price-meta">
			                      <p>Price</p>
			                      <h2>620 <small>$</small></h2>
			                      <p className="tp-price-meta-details">7 Days Tour <span>on 2 person</span></p>
			                    </div>
			                  </div>
			                  <div className="col-sm-4 s-animate-4">
			                    <div className="tp-price-meta">
			                      <p>5 Star</p>
			                      <h2>Hotel</h2>
			                      <p className="tp-price-meta-details">Hotels <span>to choice</span></p>
			                    </div>
			                  </div>
			                  <div className="col-sm-4 s-animate-5">
			                    <div className="tp-price-meta">
			                      <p>Flight date</p>
			                      <h2>17</h2>
			                      <p className="tp-price-meta-details">September <span>or later</span></p>
			                    </div>
			                  </div>
			                </div>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
			    </div>
			  
			  </div>
			  <div className="banner-social-meta">
			    <div className="banner-slider-dots" />
			    <ul className="social-icon">
			      <li>
			        <Link className="facebook" to="https://www.facebook.com/codingeek.net/" target="_blank"><i className="fa fa-facebook" /></Link>
			      </li>
			      <li>
			        <Link className="twitter" to="https://twitter.com/codingeeknet" target="_blank"><i className="fa fa-twitter" /></Link>
			      </li>
			      <li>
			        <Link className="pinterest" to="https://www.instagram.com/codingeeknet/" target="_blank"><i className="fa fa-instagram" /></Link>
			      </li>
			    </ul>
			  </div>
			  <div className="container">
			    <div className="banner-slider-controls">
			      <div className="slider-nav tp-control-nav" />
			      {/*slider-nav*/}
			      <div className="tp-slider-extra slider-extra">
			        <div className="text">
			          <span className="first">01</span>
			          <span className="devider">/</span>
			          <span className="last" />
			        </div>
			      </div>
			      {/*slider-extra*/}
			    </div>
			  </div>
			</div>)
        }
}

export default Banner