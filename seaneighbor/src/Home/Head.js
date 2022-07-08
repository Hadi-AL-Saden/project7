import React from 'react';



function Head(){
    return(
        <>
         {/* start footer Area */}
   {/* start banner Area */}
   <section className="banner-area relative">
    <div className="overlay overlay-bg" />
    <div className="container">
      <div className="row fullscreen align-items-center justify-content-between">
        <div className="col-lg-6 col-md-6 banner-left" style={{ marginTop:'130px' }}>
          <h6 className="text-white">Away to growth your small business</h6>
          <h1 className="text-white">Souk By The Sea</h1>
          <p className="text-white">
            If you are looking space to grow your small business, you may be very
            confused about the place and price. We provide that at nominal prices.
          </p>
          <a href="#" className="primary-btn text-uppercase">
            Get Started
          </a>
        </div>
        <div className="col-lg-4 col-md-6 banner-right " style={{ marginTop:'130px' }} >
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item">
              <a
                className="nav-link active"
                id="flight-tab"
                data-toggle="tab"
                href="#flight"
                role="tab"
                aria-controls="flight"
                aria-selected="true"
              >
               days
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="hotel-tab"
                data-toggle="tab"
                href="#hotel"
                role="tab"
                aria-controls="hotel"
                aria-selected="false"
              >
                Weeks
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="holiday-tab"
                data-toggle="tab"
                href="#holiday"
                role="tab"
                aria-controls="holiday"
                aria-selected="false"
              >
                Months
              </a>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="flight"
              role="tabpanel"
              aria-labelledby="flight-tab"
            >
              <form className="form-wrap">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="From "
                  onfocus="this.placeholder = ''"
                  onblur="this.placeholder = 'From '"
                />
                <input
                  type="text"
                  className="form-control"
                  name="to"
                  placeholder="To "
                  onfocus="this.placeholder = ''"
                  onblur="this.placeholder = 'To '"
                />
                <input
                  type="text"
                  className="form-control date-picker"
                  name="start"
                  placeholder="name "
                  onfocus="this.placeholder = ''"
                  onblur="this.placeholder = 'name '"
                />
                <input
                  type="text"
                  className="form-control date-picker"
                  name="return"
                  placeholder="phone "
                  onfocus="this.placeholder = ''"
                  onblur="this.placeholder = 'phone '"
                />
                <input
                  type="number"
                  min={1}
                  max={20}
                  className="form-control"
                  name="adults"
                  placeholder="email "
                  onfocus="this.placeholder = ''"
                  onblur="this.placeholder = 'email '"
                />
                <input
                  type="number"
                  min={1}
                  max={20}
                  className="form-control"
                  name="child"
                  placeholder="type of business "
                  onfocus="this.placeholder = ''"
                  onblur="this.placeholder = 'type of business '"
                />
                <a href="#" className="primary-btn text-uppercase">
                Book Your Both
                </a>
              </form>
            </div>
            <div
              className="tab-pane fade"
              id="hotel"
              role="tabpanel"
              aria-labelledby="hotel-tab"
            >
              <form className="form-wrap">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="From "
                  onfocus="this.placeholder = ''"
                  onblur="this.placeholder = 'From '"
                />
                <input
                  type="text"
                  className="form-control"
                  name="to"
                  placeholder="To "
                  onfocus="this.placeholder = ''"
                  onblur="this.placeholder = 'To '"
                />
                <input
                  type="text"
                  className="form-control date-picker"
                  name="start"
                  placeholder="Start "
                  onfocus="this.placeholder = ''"
                  onblur="this.placeholder = 'Start '"
                />
                <input
                  type="text"
                  className="form-control date-picker"
                  name="return"
                  placeholder="Return "
                  onfocus="this.placeholder = ''"
                  onblur="this.placeholder = 'Return '"
                />
                <input
                  type="number"
                  min={1}
                  max={20}
                  className="form-control"
                  name="adults"
                  placeholder="Adults "
                  onfocus="this.placeholder = ''"
                  onblur="this.placeholder = 'Adults '"
                />
                <input
                  type="number"
                  min={1}
                  max={20}
                  className="form-control"
                  name="child"
                  placeholder="Child "
                  onfocus="this.placeholder = ''"
                  onblur="this.placeholder = 'Child '"
                />
                <a href="#" className="primary-btn text-uppercase">
                  Search Hotels
                </a>
              </form>
            </div>
            <div
              className="tab-pane fade"
              id="holiday"
              role="tabpanel"
              aria-labelledby="holiday-tab"
            >
              <form className="form-wrap">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="From "
                  onfocus="this.placeholder = ''"
                  onblur="this.placeholder = 'From '"
                />
                <input
                  type="text"
                  className="form-control"
                  name="to"
                  placeholder="To "
                  onfocus="this.placeholder = ''"
                  onblur="this.placeholder = 'To '"
                />
                <input
                  type="text"
                  className="form-control date-picker"
                  name="start"
                  placeholder="Start "
                  onfocus="this.placeholder = ''"
                  onblur="this.placeholder = 'Start '"
                />
                <input
                  type="text"
                  className="form-control date-picker"
                  name="return"
                  placeholder="Return "
                  onfocus="this.placeholder = ''"
                  onblur="this.placeholder = 'Return '"
                />
                <input
                  type="number"
                  min={1}
                  max={20}
                  className="form-control"
                  name="adults"
                  placeholder="Adults "
                  onfocus="this.placeholder = ''"
                  onblur="this.placeholder = 'Adults '"
                />
                <input
                  type="number"
                  min={1}
                  max={20}
                  className="form-control"
                  name="child"
                  placeholder="Child "
                  onfocus="this.placeholder = ''"
                  onblur="this.placeholder = 'Child '"
                />
                <a href="#" className="primary-btn text-uppercase">
                  Book Your Both
                </a>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End banner Area */}
      </>
    )
}
export default Head;