import React from 'react'
import "./style.css";

export default function Footer() {
  return (
    <div className='container-fluid mt-5 pt-5'>
       
    <div className="row" style={{background: 'rgb(236 255 236)',height:'250px'}}>

    </div>

    <div className="row my-5" id='whyweare'>
        <div className="col-md-3">
        <section className="rounded border p-5 my-2 text-center">
            <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=225/assets/web/blinkit-promises/10_minute_delivery.png" alt="" /><br />
            <strong>Superfast Delivery</strong><br />
            <small>Get your order delivered to your doorstep at the earliest from dark stores near you.</small>
        </section>
        </div>

        <div className="col-md-3">
        <section className="rounded border p-5 my-2 text-center">
            <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=225/assets/web/blinkit-promises/Best_Prices_Offers.png" alt="" /><br />
            <strong>Best Prices & Offers</strong><br />
            <small>Cheaper prices than your local supermarket, great cashback offers to top it off.</small>
        </section>
        </div>

        <div className="col-md-3">
        <section className="rounded border p-5 my-2 text-center">
            <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=225/assets/web/blinkit-promises/Wide_Assortment.png" alt="" /><br />
            <strong>Wide Assortment</strong><br />
            <small>Choose from 5000+ products across food, personal care, household & other categories</small>
        </section>
        </div>

        <div className="col-md-3">
        <section className="rounded border p-5 my-2 text-center">
            <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=225/assets/web/blinkit-promises/Easy_Returns_Refund.png" alt="" /><br />
            <strong>Easy Returns/Refund</strong><br />
            <small>Not satisfied with a product? Return it at the doorstep & get a refund within hours.</small>
        </section>
        </div>
    </div>



      <div className="row">
        <div className="col-md-6">
            <h3>Categories</h3>
            <ul className='list-unstyled'>
                <li>Munchies</li>
                <li>Breakfast & Instant Food</li>
                <li>Bakery & Biscuits</li>
                <li>Beverages</li>
                <li>Cold Drinks & Juices</li>
                <li>Tea, Coffee & Health Drinks</li>
                <li>Sweet Tooth</li>
                <li>Pharmacy</li>
            </ul>
        </div>
        <div className="col-md-6">
            <h3>Useful Links</h3>
            <ul className='list-unstyled'>
                <li>About</li>
                <li>Careers</li>
                <li>Privacy</li>
                <li>Terms</li>
                <li>Faq's</li>
                <li>Contact</li>
            </ul>
        </div>
    </div>

    {/* brands */}
    <div className="row">
        <div className="col-12">
            <h4>Brands</h4>
            <p>Bisleri Bournvita treshme dove lifebuoy </p>
        </div>
    </div>

    {/* payment partners */}
    <div className="row">
        <div className="col-12 pay_partners">
            <h4 className='py-3'>Payment Partners</h4>
            <span>
            <img className='img-fluid' src="https://blinkit.com/images/payment/mobikwik-c96e507.png" alt="" />
            </span>
            <span>
            <img className='img-fluid' src="https://blinkit.com/images/payment/paytm-b393728.png" alt="" />
            </span>
            <span>
            <img className='img-fluid' src="https://blinkit.com/images/payment/visa-95f2100.png" alt="" />
            </span>
            <span>
            <img className='img-fluid' src="https://blinkit.com/images/payment/mastercard-01e540b.png" alt="" />
            </span>
            <span>
            <img className='img-fluid' src="https://blinkit.com/images/payment/rupay-39478ad.png" alt="" />
            </span>
            <span>
            <img className='img-fluid' src="https://blinkit.com/images/payment/bhim-upi-02aef45.png" alt="" />
            </span>
            <span>
            <small>Net Banking</small>
            </span>
            <span>
            Cash on Delivery
            </span>
        </div>
    </div>
        {/* footer */}
        <div className="mt-5 py-3 bg-light row">
            <span className='col-md-7'>© TR Technologie Private Limited, 2022-Present</span>
            <section className='col-md-5 text-end'>
            <span className='social_icn'><i class="fa-brands fa-facebook-square"></i></span>
            <span className='social_icn'><i className='fa-brands fa-instagram'></i></span>
            <span className='social_icn'><i className='fa-brands fa-twitter-square'></i></span>
            <span className='social_icn'><i className='fa-brands fa-linkedin'></i></span>
            </section>
        </div>
    </div>
  )
}
