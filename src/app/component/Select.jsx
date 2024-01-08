

    import React from 'react'
    const pricesRange = [
        {
            Name: '4 to 6 lac',
            Value: '400000 -600000',
            Id: 1,
        },
        {
            Name: '6 to 8lac',
            Value: '600000-800000',
            Id: 2,
        },
        {
            Name: '8 to 10lac',
            Value: '800000 -1000000',
            Id: 3,
        },
        {
            Name: '10 to 15lac',
            Value: '1000000 -1500000',
            Id: 4,
        },
        {
            Name: '15 to 20lac',
            Value: '1500000 -2000000',
            Id: 5,
    
        },
        {
            Name: '20lac above',
            Value: '2000000 -3000000',
            Id: 6,
        },
    ];
    const KMS = [
        {
            name: '0 to  1000KM',
            value: '0 -1000',
        },
        {
            name: '1K to 5K KM',
            value: '1000-5000',
        },
        {
            name: '5K to 10K KM',
            value: '5000 -10000',
        },
        {
            name: 'ABOVE 10K KM ',
            value: '5000 -10000',
        },
        {
            name: 'ABOVE 15K KMS ',
            value: '15000',
        },
        {
            name: 'ABOVE 20K KMS ',
            value: '20000',
        },
        {
            name: 'ABOVE 40K KM ',
            value: '40000',
        },
        {
            name: 'ABOVE 60K KM ',
            value: '60000 ',
        },
        {
            name: 'ABOVE 80K KM ',
            value: '80000',
        },
    ];
    const year = [
        {
            name: 'ABOVE 2022',
        },
        {
            name: 'ABOVE 2020',
        },
        {
            name: 'ABOVE 2018',
        },
        {
            name: 'ABOVE 2016',
        },
        {
            name: 'ABOVE 2014',
        },
        {
            name: 'ABOVE 2012',
        }
        ,
        {
            name: 'ABOVE 2010',
        }
    ]
    
    const Brand = [
    
        {
            name: 'BMW',
            Id: 1,
            value: 'BMW',
        },
        {
            name: 'JAGUAR',
            Id: 2,
            value: 'JAGUAR',
        }
        ,
        {
            name: 'MAHINDRA',
            Id: 3,
            value: 'MAHINDRA',
    
        },
        {
            name: 'TATA',
            Id: 4,
            value: 'TATA',
    
        },
        {
            name: 'VOLVO',
            Id: 5,
            Value: 'VOLVO',
        }
        ,
        {
            name: 'SKODA',
            Id: 6,
            Value: 'SKODA',
        }
        ,
        {
            name: 'AUDI',
            Id: 7,
            Value: 'AUDI',
        },
        {
            name: 'MERCEDES',
            Id: 8,
            Value: 'MERCEDES',
        },
        {
            name: 'HONDA',
            Id: 9,
            Value: 'HONDA',
        }
        ,
        {
            name: 'KIA',
            Id: 10,
            Value: 'KIA',
        }, ,
        {
            name: 'HYUNDAI',
            Id: 11,
            Value: 'HYUNDAI',
        },
        {
            name: 'TOYOTA',
            Id: 12,
            Value: 'TOYOTA',
        },
        {
            name: 'FORD',
            Id: 13,
            Value: 'FORD',
        }
        ,
        {
            name: 'VOLSWAGEN',
            Id: 14,
            Value: 'TATA',
        }
        ,
    ]
    const BodyType = [
        {
            name: 'SUV',
        },
        {
            name: 'SEDAN',
        },
        {
            name: 'SPORTS',
        }, {
            name: 'HATCHBACK',
        },
    ]
    const Transmission = [
        {
            Name: 'MANUAL',
            ID: 1,
        },
        {
            Name: 'AUTOMATIC',
            ID: 1,
        },
    
    ]
    const FUEL = [
        {
            name: 'DIESEL',
        },
        {
            name: 'PETROL',
        },
        {
            name: 'CNG'
        }
    ]
    export default function Select() {
      return (
        <div>
          <ul className='flex flex-wrap  p-3 '>
            <li>Explore by:-</li>
             <li key="1">Price Range
                 <select
                className='w-full'
                // value={pricesRange}
                onChange={pricesRangeHandler}
                >
                    <option value='all'>All</option>
                    {
                        pricesRange &&
                        pricesRange.map((pricesRange) => {
                            return (
                                <option key={pricesRange.Id} value={pricesRange.Value}>
                                    {pricesRange.Name}
                                </option>)
                        })}
                </select>
            </li>
            <li key="2">Brand
                <select
                // className=''
                // value={pricesRange}
                // onChange={BrandHandler}
                >
                    <option value='all'>All</option>
                    {Brand &&
                        Brand.map((Brand) => {
                            return (
                                <option
                                // key={Brand.Id} 
                                // value={Brand.Value}
                                >
                                    {Brand.name}
                                </option>)
                        })}
                </select>
            </li>

            <li key="3">KMS
                <select
                // className=''
                // value={pricesRange}
                // onChange={KMSHandler}
                >
                    <option value='all'>All</option>
                    {KMS &&
                        KMS.map((KMS) => {
                            return (
                                <option
                                // key={KMS.Id} 
                                // value={KMS.Value}
                                >
                                    {KMS.name}
                                </option>)
                        })}
                </select>
            </li>
            <li key="4">Year
                <select
                // className=''
                // value={pricesRange}
                // onChange={YearHandler}
                >
                    <option value='all'>All</option>
                    {year &&
                        year.map((Year) => {
                            return (
                                <option key={Year.Id}
                                // value={year.Value}
                                >
                                    {Year.name}
                                </option>)
                        })}
                </select>
            </li>
            <li key="5">Fuel
                <select
                // className=''
                // value={pricesRange}
                // onChange={FuelHandler}
                >
                    <option value='all'>All</option>
                    {FUEL &&
                        FUEL.map((FUEL) => {
                            return (
                                <option
                                // key={FUEL.Id} 
                                // value={FUEL.Value}
                                >
                                    {FUEL.name}
                                </option>)
                        })}
                </select>
            </li>
            <li key="6">BodyType
                <select
                // className=''
                // value={pricesRange}
                // onChange={BodyTypeHandler}
                >
                    <option value='all'>All</option>
                    {BodyType &&
                        BodyType.map((BodyType) => {
                            return (
                                <option
                                //  key={BodyType.Id} 
                                // value={BodyType.Value}
                                >
                                    {BodyType.name}
                                </option>)
                        })}
                </select>
            </li>
            <li key="7">Transmission
                <select
                // className=''
                // value={pricesRange}
                // onChange={TransmissionHandler}
                >
                    <option value='all'>All</option>
                    {
                        Transmission &&
                        Transmission.map((Transmission) => {
                            return (
                                <option
                                //  key={Transmission.ID} 
                                // value={Transmission.Value}
                                >
                                    {Transmission.Name}
                                </option>)
                        })}
                </select>
            </li>
        </ul>
        </div>
      )
    }
    