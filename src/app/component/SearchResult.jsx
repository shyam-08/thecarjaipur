// pages/search.js
"use client"
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Box, Card, CardContent, CardMedia, Typography,Divider } from '@mui/material';
import SearchBox from '../component/SearchBox';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

const exoticCars = [

    { Name: 'BMW X3 XDrive20D', Km: '71k', Src: "img/BMW 2019 .jpeg", bodyType: 'SEDAN', Transmission: "AUTOMATIC", Year: '2019', fuel: 'PETROL', pricesRange: '5,500,000', brand: 'BMW' ,owner:'1st'},
    {Name:'BMW 7 Series 730LD', Km:'44k' ,Src:"img/BMW 7 SEREIES SIGNATURE 2020.jpeg",bodyType:'SEDAN',Transmission:'AUTOMATIC',Year:'2020',fuel:'DIESEL',pricesRange:'10,500,000',brand:'BMW',owner:'1st'},
    { Name: 'BMW X1 SDrive20I', Km: '71k', Src: "img/BMW X1 S DRIVE 20I 2022.jpeg", bodyType: 'SUV', Transmission: "AUTOMATIC", Year: '2019', fuel: 'DIESEL', pricesRange: '5,500,000', brand: 'BMW' ,owner:'1st'},
    { Name: 'Jaguar XF 2.0L', Km: '70k', Src: "img/mercedes.jpg", bodyType: 'SEDAN', Transmission: "AUTOMATIC", Year: '2018', fuel: 'DIESEL', pricesRange: '3,900,000', brand: 'JAGUAR',owner:'1st' },
    
    { Name: 'MahindraScorpio S11', Km: '182k', Src: "img/audi.jpg", bodyType: 'SEDAN', Transmission: "MANUAL", Year: '2023', fuel: 'PETROL', pricesRange: '500000', brand: 'MERCEDIES' ,owner:'1st'},
    { Name: 'Skoda Laura ', Km: '123k', Src: "img/BMW.jpg", bodyType: 'SUV', Transmission: "MANUAL", Year: '2018', fuel: 'PETROL', pricesRange: '700000', brand: 'AUDI',owner:'1st' },
    { Name: 'Volvo S90', Km: '123k', Src: "img/BMW 2019 .jpeg", bodyType: 'SEDAN', Transmission: "AUTOMATIC", Year: '2020', fuel: 'DIESEL', pricesRange: '1500000', brand: 'MAHINDRA',owner:'1st'},
    { Name: 'Mahindra Thar 4*4', Km: '123k', Src: "img/BMW.jpg", bodyType: 'HATCHBACK', Transmission: "MANUAL", Year: '2020', fuel: 'DIESEL', pricesRange: '5000000', brand: 'FORD',owner:'1st' },
  
  ]
const SearchResult = () => {
  const router = useRouter();
  const query = window.location.search;
const q=query.slice(3,query.length)
  // const { q } = router.query || { q: 'jaguar'}; // Provide default values

  // Filter cars based on the query parameter and brand filter
  const filteredCars = exoticCars.filter((car) => {
    
    const brand = car.brand || ''; // Default to an empty string if car.brand is undefined
    const query = q || ''; // Default to an empty string if q is undefined
 
    // Return true if the lowercase brand includes the lowercase query
    return brand.toLowerCase().includes(query.toLowerCase());
    // (brand === 'all' || car.brand === brand)
  });
  

  return (
    <div>
      <h1>Search Results for: {q}</h1>
      {/* <h2>Brand Filter: {brand}</h2> */}
      {filteredCars.length === 0 ? (
        <Typography variant='h6' className='p-3' pl-4>
          No results found for {q}.
        </Typography>
      ) : (
        <div>
          <Typography variant='h6' className='p-3' pl-4>
            Total results: {filteredCars.length}
          </Typography>
          {filteredCars.map((car) => (
           <Box sx={{ display: 'inline-flex' }} key={car.Name}>

           <Box className='shadow-lg'>
             <Card sx={{ Width: 445, margin: 4 }} >
               <CardMedia
                 sx={{ height: 240 }}
                 image={car.Src}
                 title={car.Name}
               />
               <Typography variant='h6' className='p-2 font-bold'><CurrencyRupeeIcon/>{car.pricesRange}</Typography>
               <Typography variant='h5' className='pl-2 ml-2 font'>{car.Name}</Typography>
               <CardContent sx={{ display: 'flex' }}>
                 <div className='justify-center p-1'>
                 <Typography variant='h6'  >Reg.Year</Typography>
                 <Typography  variant="h5"   component="div"> </Typography>
                   {car.Year}
                 </div>
                 
                   <Divider orientation="vertical" variant="middle" flexItem />
                   <div className='justify-center p-1'>
                   <Typography variant="h6" >Kms</Typography>
                 <Typography  >
                   {car.Km}
                 </Typography>
                 </div>
                 <Divider orientation="vertical" variant="middle" flexItem />

                <div className='justify-center p-1'>
                <Typography variant="h6" >
                 Fuel
                </Typography>
                 <Typography  component="div">
                   {car.fuel}
                 </Typography>
                </div>
                <Divider orientation="vertical" variant="middle" flexItem />
               <div className='justify-center p-1'> 
               <Typography variant="h6" >Owner</Typography>
                 <Typography  >
                   {car.owner}
                 </Typography>
               </div>
                
               </CardContent>
             </Card>
             <div className="flex items-center"></div>
           </Box>

         </Box>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResult;
