"use client"
import React, { useState, useEffect } from 'react';
// import FilterSearch from '../component/FilterSearch'
import ImageSlider from './component/ImageSlider'
// import Select from '../component/Select';
// import MyForm from '../component/MyForm'
// import "./style.css";
// import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem'; import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import QueryBuilderOutlinedIcon from '@mui/icons-material/QueryBuilderOutlined';
import { Box, Card } from '@mui/material';
import { motion } from "framer-motion";
import Image from 'next/image';
import Script from 'next/script';
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Demo from './component/Demo'
import { Metadata } from 'next'
// import SearchResults from '../component/Search';
import { Inter } from 'next/font/google'


const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
})

const metadata = {
    title: 'Home',
    description: 'you can share your car at auto mart '

}





export default function page() {

    return (
        <div>
            <div className='bg-white'>


            </div>

            <div className='section-1Home headerimg  head-text'>
                {/* <div className='row'>
                    <div className='col-sm-12 col-md-12'>

                        <Image
                            src="/img\c-b-cAbH8B-14Vo-unsplash.jpg"
                            width={1350}
                            height={300}
                            alt="header image" />

                    </div>
                    <div className='text-on-image'
                    // style={{ marginRight: "10%", bottom: "15%" }}
                    >
                        <h2 className="" style={{ color: "whitesmoke" }}>LET'S KEEP IT SIMPLE.</h2>
                        <p>We are the best when it comes to Exotic Cars.</p>
                        <Button variant="contained" size='large' color='secondary' >Explore Now</Button>
                    </div>

                    */}

                {/* </div> */}
                <ImageSlider />
            </div>
            {/* <motion.div className='section-2Home'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }} style={{ boxSizing: "border-box" }}
            >
                <div className="container" >

                    <div className='row'>
                        <div className="col-md-6 col-sm-12">
                            <h2>PLANNING TO SELL?</h2>
                            <h2>SELL US YOUR CAR</h2>
                            <h2>IN 29 MINUTES.</h2>
                            <div className="row" style={{
                                padding: '20px'
                            }}>
                                
                                <div>
                                    <ul style={{
                                        listStyle: "none", display: "flex", flexWrap: "wrap", boxSizing: 'border-box',
                                        
                                    }}>
                                        <li style={{ margin: '2px' }}>  <span>
                                            <img className="m-2 p-2" src="\img\outrightsell-icon.png" alt="outrightsell" style={{
                                                padding: "5px", border: "1px solid black ", margin: "5px", borderRadius: "10px", height: "50px", width: "50px"
                                            }} />
                                            Best Offer</span>
                                            <span><strong> Sale</strong></span></li>
                                        <li>
                                            <span>

                                                <img className="m-2 p-2" src="\img\clock-icon.png" alt="clock-icon" style={{
                                                    padding: "5px", border: "1px solid black ", margin: "4px", borderRadius: "10px", height: "50px", width: "50px"
                                                }} /> Best Offer

                                                <strong> in 29 Minutes</strong></span>
                                        </li>
                                        <li>
                                            <span>
                                                <img className="m-2 p-2" src="\img\men-icon1.png" alt="men-icon1" style={{
                                                    padding: "5px", border: "1px solid black ", margin: "4px", borderRadius: "10px", height: "50px", width: "50px"
                                                }} />
                                                7600+ Satisfied
                                                <strong> Customers</strong></span>
                                        </li>
                                        <li>
                                            <span>
                                                <img className="m-2 p-2"
                                                    src="\img\hasslefree-icon1.png" alt="hasslefree-icon1" style={{
                                                        padding: "5px", border: "1px solid black ", margin: "4px", borderRadius: "10px", height: "50px", width: "50px"
                                                    }} />


                                                Hassle Free

                                                <strong> Processing</strong></span>
                                        </li>
                                      

                                    </ul>
                                    <Button variant='outlined' size='large' >Know More...</Button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6" >
                            <Image
                                className='p-2'
                                src="/img\sellyrcar-quotefeactured-img.jpg"
                                width={500}
                                height={400}
                                alt="Picture of the author" />
                           
                        </div>
                    </div>

                </div>
            </motion.div> */}

            <div>
                <Demo />
            </div>
            {/* <motion.div className='section-3Home'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }} style={{ boxSizing: "border-box" }}>
                <div>
                    <h3>HOW IT WORKS </h3>
                    <p>
                        Buying used luxury cars in India was never this easy. You can now own your dream luxury car in just 4 simple steps at The Auto
                        Mart , India's trusted used car portal.
                    </p>
                    <ul

                        style={{

                            display: "flex", flexWrap: "wrap", flexGrow: "-moz-initial", listStyle: 'none',

                        }}>
                        <li
                            style={{ justifyItems: 'center' }}
                        >
                            <Image
                                className='p-2 justify-center ...'
                                src="/img\howitworks-img1.png"
                                width={200}
                                height={200}
                                alt="howitworks" />

                            <p className='Home-basic p-6'>BROWSE FROM OUR COLLECTION</p>

                        </li>
                        <li

                        >  <Image
                                className='p-2 justify-center ...'
                                src="/img\howitworks-img2.png"
                                width={220}
                                height={220}
                                alt="howitworks" />

                            <p className='Home-basic p-6'>GET TO KNOW YOUR RIDE</p>
                        </li>
                        <li

                        >
                            <Image
                                className='p-2 justify-center ...'
                                src="/img\howitworks-img3.png"
                                width={170}
                                height={170}
                                alt="howitworks" />

                            <p className='Home-basic p-6'>VISIT OUR SHOWROOM</p>

                        </li>

                        <li

                        >
                            <Image
                                className='p-2 justify-center ...'
                                src="/img\howitworks-img4.png"
                                width={150}
                                height={150}
                                alt="howitworks" />

                            <p className='Home-basic p-6'>INSTANT PAYMENT & TRANSFER</p>
                        </li>

                    </ul>
                    <hr />
                </div>
            </motion.div> */}
            {/* <div className='Secton-5Home' style={{ textAlign: "center", padding: "60px", boxSizing: "border-box" }}>
                <h2>POPULAR @</h2>
                <h2>THE AUTO MART</h2>
                <ul

                    style={{
                        padding: "10px",
                        display: "flex", flexWrap: "wrap", flexGrow: "-moz-initial", listStyle: 'none',

                    }}>

                    <li
                        style={{
                        
                            padding: '2px'
                        }}
           
                    >
                        <Image
                            className='p-6'
                            src="/Img\rangerover-vogue-white-mumbai-01-17.jpg"
                            width={350}
                            height={350}
                            alt="Picture of the author" />


                    </li>
                    <li

                        style={{

                            padding: '2px'
                        }}
                    >
                        <Image
                            className='p-6'

                            src="/Img\rangerover-vogue-white-mumbai-01-17.jpg"
                            width={350}
                            height={350}
                            alt="Picture of the author" />


                    </li>
                    <li
                        style={{

                            padding: '2px'
                        }}

                    >
                        <Image
                            className='p-6'

                            src="/Img\rangerover-vogue-white-mumbai-01-17.jpg"
                            width={350}
                            height={350}
                            alt="rangerover-vogue-white" />

                    </li>
                </ul>
            </div> */}
            {/* <BasicSpeedDial/> */}

            <motion.div className='secton-4Home'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }} style={{ boxSizing: "border-box" }}>
                <div>

                </div>

            </motion.div>

        </div>
    )


}

