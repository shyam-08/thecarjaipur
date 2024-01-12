import { Box, Divider, Typography } from "@mui/material";
import Demo from "./Demo";
import React from 'react'


const exoticCars = [

    { Name: 'BMW X3 XDrive20D', Km: '71k', Src: "img/BMW 2019 .jpeg", bodyType: 'SEDAN', Transmission: "AUTOMATIC", Year: '2019', fuel: 'PETROL', pricesRange: '5,500,000', brand: 'BMW' ,owner:'1st',  MakeYear:'2020'},
    {Name:'BMW 7 Series 730LD', Km:'44k' ,Src:"img/BMW 7 SEREIES SIGNATURE 2020.jpeg",bodyType:'SEDAN',Transmission:'AUTOMATIC',Year:'2020',fuel:'DIESEL',pricesRange:'10,500,000',brand:'BMW',owner:'1st',  MakeYear:'2020'},
    { Name: 'BMW X1 SDrive20I', Km: '71k', Src: "img/BMW X1 S DRIVE 20I 2022.jpeg", bodyType: 'SUV', Transmission: "AUTOMATIC", Year: '2019', fuel: 'DIESEL', pricesRange: '5,500,000', brand: 'BMW' ,owner:'1st',  MakeYear:'2020'},
    { Name: 'Jaguar XF 2.0L', Km: '70k', Src: "img/mercedes.jpg", bodyType: 'SEDAN', Transmission: "AUTOMATIC", Year: '2018', fuel: 'DIESEL', pricesRange: '3,900,000', brand: 'JAGUAR',owner:'1st' ,  MakeYear:'2020'},
    
    { Name: 'MahindraScorpio S11', Km: '182k', Src: "img/audi.jpg", bodyType: 'SEDAN', Transmission: "MANUAL", Year: '2023', fuel: 'PETROL', pricesRange: '500000', brand: 'MERCEDIES' ,owner:'1st',  MakeYear:'2020'},
    { Name: 'Skoda Laura ', Km: '123k', Src: "img/BMW.jpg", bodyType: 'SUV', Transmission: "MANUAL", Year: '2018', fuel: 'PETROL', pricesRange: '700000', brand: 'AUDI',owner:'1st' ,  MakeYear:'2025'},
    { Name: 'Volvo S90', Km: '123k', Src: "img/BMW 2019 .jpeg", bodyType: 'SEDAN', Transmission: "AUTOMATIC", Year: '2020', fuel: 'DIESEL', pricesRange: '1500000', brand: 'MAHINDRA',owner:'1st',  MakeYear:'2030'},
    { Name: 'Mahindra Thar 4*4', Km: '123k', Src: "img/BMW.jpg", bodyType: 'HATCHBACK', Transmission: "MANUAL", Year: '2020', fuel: 'DIESEL', pricesRange: '5000000', brand: 'FORD',owner:'1st', MakeYear:'2020' },
  
  ]
const CarDetail = () => {
  return (
    <div>
            <>
            <Box className="m-4">
                <Typography variant="h6">
                    Car Overview
                </Typography>
                <ul className='flex space-x-4 space-y-2'>
                    <li>
                        <span className='inline'>MakeYear-</span>
                        <span>{}</span>
                        </li>
                        <li>
                        <span className='inline'>Registration Year-</span>
                        <span>2018</span>
                        </li>
                        <li>
                        <span className='inline'>Fuel Type-</span>
                        <span>2018</span>
                        </li>
                        
                </ul>
                <ul className='flex space-x-4 space-y-2'>
                    <li>
                        <span className='inline'>                Insurance validity
-</span>
                        <span>Jan 2025</span>
                        </li>
                        <li>
                        <span className='inline'>Insurance type-</span>
                        <span>Third Party</span>
                        </li>
                        <li>
                        <span className='inline'>RTO-</span>
                        <span>DL14</span>
                        </li>
                        
                </ul>
                <ul className='flex space-x-4 space-y-2'>
                    <li>
                        <span className='inline'>Km driven-</span>
                        <span>76K km</span>
                        </li>
                        <li>
                        <span className='inline'>Transmission -</span>
                        <span>Manual (Regular)</span>
                        </li>
                        <li>
                        <span className='inline'>No. of Owner-</span>
                        <span>1st Owner</span>
                        </li>
                        
                </ul>
                <Divider black />
            </Box>
            <Box className="m-4 border-e-black">
                <Typography variant="h6">
                    Car Specification
                </Typography>
                <ul className='flex space-x-4 space-y-2'>
                    <li>
                        <span className='inline'>    Mileage (ARAI)-</span>
                        <span>24.3 kmpl</span>
                        </li>
                        <li>
                        <span className='inline'>Ground clearance-</span>
                        <span>198 mm</span>
                        </li>
                        <li>
                        <span className='inline'>Boot space-</span>
                        <span>328 litres</span>
                        </li>
                        
                </ul>
            

                <ul className='flex space-x-4 space-y-2'>
                    <li>
                        <span className='inline'>                Insurance validity
-</span>
                        <span>Jan 2025</span>
                        </li>
                        <li>
                        <span className='inline'>Insurance type-</span>
                        <span>Third Party</span>
                        </li>
                        <li>
                        <span className='inline'>RTO-</span>
                        <span>DL14</span>
                        </li>
                        
                </ul>
                <Divider/>
            </Box>       
            </>
        </div>
  )
}

export default CarDetail
