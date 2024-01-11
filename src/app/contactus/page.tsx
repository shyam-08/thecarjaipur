"use client"
import React, { Component } from 'react'
// for navabar header 
// import Navbar from './Navbar'
// for footer
// import Footer from './Footer'
// for bootstrap 
import 'bootstrap/dist/css/bootstrap.min.css'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
// import div from '@mui/material/div';
// for material ui 
import './style.css'
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { Checkbox } from '@mui/material';
import { InputLabel } from '@mui/material';
import { Select } from '@mui/material';
import { FormControl } from '@mui/material';
// for animation framer motion 
// import { motion } from "framer-motion"
import { Metadata } from 'next'

 const metadata ={
    title:'contactUs',
    description:'you can share your car at auto mart '
  
  }


export default class ContactUs extends Component {
    render() {
        return (
            // <!-- START - Contact Us Section -->
            <div className="lightgray contactus-sec">
            <div className="section-1" style={{boxSizing:"border-box"}}>
                 {/* <Navbar /> */}
            </div>

            
                   <div className="section-2" style={{
                    padding:"90px",background:"whitesmoke",boxSizing:"border-box"
                   }}>
                <div className="container">
                
                    <div className="secheader-grp">
                        <h1 className="h4 sectitle">Contact us</h1>
                    </div>
                    <div className="row flexrow">
                        <div className="col-md-6 cntnt-clmn">
                            <div className="cntnt-grp">
                                <ul className="contactusdetail-list">
                                    <li className="mail">
                                        <div className="li-innr">
                                            <h6 className="h7"><a href="mailto:carjaipursince1998@gmail.com">carjaipursince1998@gmail.com</a></h6>
                                            <p>The best way to get answer faster.</p>
                                        </div>
                                    </li>
                                    <li className="call">
                                        <div className="li-innr">
                                            <h6 className="h7">For Preowned Cars</h6>
                                            <h6 className="h7"><a href="tel:+91-9829066706">(+91) 9829066706</a></h6>
                                            <p>We are happy to help (10am to 10pm)</p>
                                        </div>
                                    </li>

                                    <li className="call">
                                        <div className="li-innr">
                                            <h6 className="h7">For Preowned Cars</h6>
                                            <h6 className="h7"><a href="tel:+91874206801-">(+91) 8742068501</a></h6>
                                            <p>We are happy to help (10am to 10pm)</p>
                                        </div>
                                    </li>
                                </ul>
                                <br className="hide-480" />
                                <h2 className="h4 sectitle">Our Showroom</h2>
                                <ul className="contactusloctn-list">
                                    <li>
                                        <h6 className="h7">Jaipur Headquarters <a href="https://www.google.com/search?q=car+jaipur&sca_esv=593955280&rlz=1C1CHBF_enIN994IN994&sxsrf=AM9HkKlv3inUqZLDXznDUoCwoz26gkieQw%3A1703673780147&ei=tP-LZcymCNbR2roPr6WzyA0&oq=car+ja&gs_lp=Egxnd3Mtd2l6LXNlcnAiBmNhciBqYSoCCAAyChAjGIAEGIoFGCcyDRAAGIAEGIoFGEMYsQMyCBAAGIAEGLEDMgUQABiABDILEAAYgAQYsQMYgwEyBRAAGIAEMhMQLhiABBgCGMsBGMcBGK8BGI4FMgUQABiABDIFEAAYgAQyBRAAGIAESIAgUOYFWM8YcAJ4AZABBJgB_wOgAaoTqgEJMC42LjQuNS0xuAEDyAEA-AEBqAIUwgIKEAAYRxjWBBiwA8ICEBAuGIAEGBQYhwIYxwEYrwHCAgsQLhiABBjHARivAcICBxAjGOoCGCfCAhQQABiABBjjBBjpBBjqAhi0AtgBAcICFhAAGAMYjwEY5QIY6gIYtAIYjAPYAQLCAhEQABiABBiKBRiRAhixAxiDAcICERAuGIAEGIoFGJECGMcBGNEDwgIQEC4YgAQYigUYQxjHARjRA8ICChAAGIAEGIoFGEPCAhcQLhiABBiKBRiRAhixAxiDARjHARjRA8ICBBAjGCfCAgsQABiABBiKBRiRAsICChAAGIAEGLEDGAriAwQYACBBiAYBkAYCugYGCAEQARgBugYGCAIQARgL&sclient=gws-wiz-serp&lqi=CgpjYXIgamFpcHVySPO1rreUq4CACFoSEAAYABgBIgpjYXIgamFpcHVykgEPdXNlZF9jYXJfZGVhbGVymgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVU5TYzI5MWNubEJSUkFCqgFECgcvbS8wazRqEAEqByIDY2FyKAAyHhABIhq-teNFjFYCX8cFaSw6NDStS9DucJ6sB2bi1zIOEAIiCmNhciBqYWlwdXI#rlimm=6634819899059044244" target="_blank" className="locatemap">Locate on map</a></h6>
                                       <p>27,SuratPura House</p>
                                        <p>T.N Mishra Marg, Nirman Nagar, Jaipur, Rajasthan - 122001</p>
                                    </li>

                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 form-clmn">
                            <div className="frm-grp cntctfrm-grp">
                                <div className="frm-titles">
                                    <h3 className="h4 frm-title">Send us an email</h3>
                                    <p>Drop us a line by using the below form</p>
                                </div>
                                {/* <div><FormGroup/></div> */}

                                <form>
                                    <div className=" row form-row" style={{ margin: '0px' }}>
                                        <div className="form-group col-md-6" >
                                            {/* <label for="inputEmail4">Email</label>
      <input type="email" className="form-control" id="inputEmail4" placeholder="Email"/> */}
                                            <TextField id="outlined-basic" label="Name" variant="outlined" type='text' required color='secondary'  />
                                            </div>
                                           <div className='col-md-6'> <TextField id="outlined-basic" label="Email" variant="outlined" type='email' required color='secondary' />
                                        </div>
                                        <div className="form-group col-md-6">
                                            {/* <label for="inputPassword4">Password</label>
      <input type="password" className="form-control" id="inputPassword4" placeholder="Password"/> */}

                                        </div>
                                    </div>

                                    <div className="row form-row" >
                                        <div className="form-group col-md-6" style={{ margin: '5px' }}>
                                            {/* <label for="inputCity">City</label> */}
                                            {/* <input type="text" className="form-control" id="inputCity"/> */}
                                            <TextField id="outlined-basic" label="Location" variant="outlined" color='secondary'  />
                                            </div>
                                            <div>
                                            <TextField id="outlined-basic" label="Number" variant="outlined" type='Number' required color='secondary' style={{ margin: '5px' }} />

                                            </div>
                                        </div>
                                        <div className="form-group" style={{ margin: '5px' }}>
                                            {/* <label for="inputAddress">Address</label> */}
                                            {/* <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/> */}
                                            <TextField id="outlined-basic" label="Address" variant="outlined" color='secondary' fullWidth />
                                        </div>

                                        {/* <div className="form-group col-md-4"> */}
                                        {/* <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">State</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={State}
    label="State"
    onChange={handleChange}
  >
    <MenuItem value={raj}>Rj</MenuItem>
    <MenuItem value={maharastra}>Mh</MenuItem>
    <MenuItem value={mp}>Mp</MenuItem>
  </Select>
</FormControl> */}
                                        {/* <label for="inputState">State</label>
      <select id="inputState" className="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select> */}
                                        {/* </div> */}

                                    
                                    <div className="form-group">
                                        <div className="form-check">
                                            {/* <input className="form-check-input" type="checkbox" id="divCheck"/> */}
                                            {/* <label className="form-check-label" for="divCheck"> */}
                                            <Checkbox 
                                            // label="Check me out"
                                             />


                                            {/* </label> */}
                                        </div>
                                    </div>
                                    {/* <button type="submit" className="btn btn-primary">Sign in</button> */}
                                    <Button variant="outlined" color="secondary" >Submit</Button>
                                </form>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div style={{marginTop:'20px',boxSizing:"border-box"}}>
                  {/* <Footer /> */}
                  </div>

                
            </div>
            /* <!-- END - Contact Us Section --> */

        )
    }
}
