// import React from 'react'
// import { useRouter } from 'next/navigation';
// import Select from './Select';
// import Home from '../page';
// // import { useRouter } from 'next/navigation';


//         const {
//             query = 'all',
//             Brand = 'all',
//             pricesRange = 'all',
//             KMS = 'all',
//             Year = 'all',
//             BodyType = 'all',
//             Fuel = 'all',
//             Transmission = 'all',
//             page = 1,
//             sort = 'featured'
//         } = router.query;

   

// import React, { useState, useEffect } from 'react';


// const FilterSearch = ({ Select, onFilter }) => {
//   const [selectedFilters, setSelectedFilters] = useState({
//     priceRange: null,
//     kms: null,
//     year: null,
//     brand: null,
//     bodyType: null,
//     transmission: null,
//     fuel: null,
//   });

//   useEffect(() => {
//     // Apply filtering logic based on selected filters
//     const filteredData = exoticCars.filter((exoticCars) => {
//       // Implement your filtering logic here
//       return (
//         (!selectedFilters.priceRange || selectedFilters.priceRange === car.PriceRange) &&
//         (!selectedFilters.kms || selectedFilters.kms === car.Km) &&
//         (!selectedFilters.year || selectedFilters.year === car.Year) &&
//         (!selectedFilters.brand || selectedFilters.brand === car.Brand) &&
//         (!selectedFilters.bodyType || selectedFilters.bodyType === car.BodyType) &&
//         (!selectedFilters.transmission || selectedFilters.transmission === car.Transmission) &&
//         (!selectedFilters.fuel || selectedFilters.fuel === car.Fuel)
//       );
//     });

//     // Pass the filtered data to the parent component
//     onFilter(filteredData);
//   }, [selectedFilters, exoticCars, onFilter]);

//   const handleFilterChange = (filterType, value) => {
//     setSelectedFilters((prevFilters) => ({
//       ...prevFilters,
//       [filterType]: value,
//     }));
//   };

//   return (
//     <div>
//       {/* Add filter options here */}
//       {/* Example: Price Range */}
//       <select onChange={(e) => handleFilterChange('priceRange', e.target.value)}>
//         <option value="">Select Price Range</option>
//         {pricesRange.map((range) => (
//           <option key={range.Id} value={range.Value}>
//             {range.Name}
//           </option>
//         ))}
//       </select>

//       {/* Add other filter options similarly */}

//       {/* Display selected filters */}
//       <div>
//         <strong>Selected Filters:</strong>
//         {Object.entries(selectedFilters).map(([filterType, value]) => (
//           <div key={filterType}>
//             {filterType}: {value}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// // export default FilterSearch;

    import React from 'react'
import { useRouter } from 'next/navigation';
    
    export default function FilterSearch() {
        const router = useRouter();
  
        const {
            query = 'all',
            Brand = 'all',
            pricesRange = 'all',
            KMS = 'all',
            Year = 'all',
            BodyType = 'all',
            Fuel = 'all',
            Transmission = 'all',
            page = 1,
            sort = 'featured'
        } = router.query;
    
        // const { item,countItems ,odyType, brand, pricesRange,kms,year,transmission,pages}= props
    
        const filterSearch = ({
            page,BodyType,Year,KMS,pricesRange,Transmission,Brand,sort,min,max,searchQuery,
        }) => {
            const { query } = router;
          
            if (page ) query.page = page;
            if (searchQuery ) query.searchQuery = searchQuery;
            if (sort) query.sort = sort;
            if (pricesRange) query.priceRange = pricesRange;
            if (BodyType) query.BodyType = BodyType;
            if (Year) query.Year = Year;
            if (Fuel) query.Fuel = Fuel;
            if (Brand) query.Brand = Brand;
            if (KMS) query.KMS = KMS;
            if (Transmission) query.Transmission = Transmission;
            if (min) query.min = query.min === 0 ? 0 : min;
            if (max) query.max = query.max === 0 ? 0 : max;
    
            router.push({
                pathname: router?.pathname || '/',
                query: query || {},
            });
        
            const pricesRangeHandler = (e) => {
                filterSearch({ pricesRange: e.target.value });
                console.log(pricesRange);

            };
            
            const KMSHandler =(e)=>{
                filterSearch({KMS : e.target.value});
                console.log(pricesRange);
                        };
            const BodyTypeHandler =(e)=>{
                filterSearch({BodyType : e.target.value});
                console.log(pricesRange);
                        };
            const YearHandler =(e)=>{
                filterSearch({Year : e.target.value});
                console.log(pricesRange);
                        };
            const FuelHandler =(e)=>{
                filterSearch({Fuel : e.target.value});
                console.log(pricesRange);
                        };
                        const BrandHandler =(e)=>{
                            filterSearch({Brand : e.target.value});
                            console.log(pricesRange);
                                    };
    
                                    const  TransmissionHandler =(e)=>{
                                        filterSearch({Transmission : e.target.value});
                                        console.log(pricesRange);
                                                };
       };
      return (
        <div>
           {exoticCars.map((exoticCars) => {
                    return (

                        <Box sx={{ display: 'inline-flex' }}>
                            <Box>
                                <Card sx={{ Width: 445, margin: 4 }} >
                                    <CardMedia
                                        sx={{ height: 240 }}
                                        image={exoticCars.Src}
                                        title={exoticCars.Name}
                                    />
                                    <CardContent sx={{ display: 'flex' }}>
                                        <Typography gutterBottom variant="h5" className="p-2" component="div">
                                            {exoticCars.Name}
                                        </Typography>
                                        <Typography gutterBottom variant="h5" className="p-2" component="div">

                                            {exoticCars.Km}
                                        </Typography>
                                        <Typography variant="h5" color="text.secondary" className="p-2">
                                            {exoticCars.bodytype}
                                        </Typography>
                                    </CardContent>

                                </Card>
                                
                            </Box>
                        </Box>
                    
                    )
           }
           )
        }
                    </div>
            
      )
    }




    