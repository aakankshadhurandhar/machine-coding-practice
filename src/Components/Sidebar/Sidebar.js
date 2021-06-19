import {products} from "../../Database/products";
import React, { useState } from 'react'
import "./Sidebar.css"
import { Box,Button,Checkbox } from "@chakra-ui/react";
import Main from "../Main/Main";


const Sidebar=()=> {
    const[data,setdata]=useState(products);
    const[selectedsize,setselectedsize]=useState([])
    const[selectedgender,setselectedgender]=useState([])
    




    const HightoLow=()=>{
        setdata([...data].sort((a,b)=>b.price-a.price))
        console.log(data)
    };
    const LowtoHigh=()=>{
        setdata([...data].sort((a,b)=>a.price-b.price))
    };

    const sizeFilter=(e)=>{
        setselectedsize([...selectedsize,e.target.value])
        
        if(e.target.checked){
            setdata([...data].filter((a)=>a.size.includes(e.target.value)))
            console.log(data)
        }
        else{
            let index=selectedsize?.indexOf(e.target.value);
            if(index !== -1){
                selectedsize.splice(index,1);
                setselectedsize(selectedsize)
            }
            const[filteredproduct]=selectedsize.map((size)=>
            products.filter((a)=>a.size.includes(size))
            
            );
            console.log(filteredproduct)
            setdata(filteredproduct?.length? filteredproduct:products)
        }
    }
    const genderfilter=(e)=>{
        setselectedgender([...selectedgender,e.target.value])
        if(e.target.checked){
            setdata([...data].filter((a)=>a.gender.includes(e.target.value)))
            console.log(data)
        }
        else{
            let index=selectedgender?.indexOf(e.target.value);
            if(index !== -1){
                selectedgender.splice(index,1);
                setselectedgender(selectedgender)
            }
            const[filteredproduct]=selectedgender.map((gender)=>
            products.filter((a)=>a.size.includes(gender))
            
            );
            console.log(filteredproduct)
            setdata(filteredproduct?.length? filteredproduct:products)
        }
    }
    const brandfilter=(e)=>{
        if(e.target.checked){
            setdata([...data].filter((a)=>a.brand.includes(e.target.value)))
            console.log(data)
        }
        
    }

    const clearfilter =()=>{
        setdata(products)
    }

    return (
        <div className="container">
            <div className="left-half">
                
                <Box display="flex" flexDirection="column" mt={21}>
                        Price:
                        <Button color="black" mb={5}   onClick={HightoLow}>High to Low</Button>
                        <Button color="black" mb={5} onClick={LowtoHigh}>Low to High</Button>

                </Box>

                <Box display="flex" flexDirection="column" my={5} color="black">
                    Size:
                    <Checkbox value="S" onChange={(e)=>sizeFilter(e)}>Small </Checkbox>
                    <Checkbox value="M" onChange={(e)=>sizeFilter(e)}>Medium</Checkbox>
                    <Checkbox value="XL" onChange={(e)=>sizeFilter(e)}>Extra Large</Checkbox>
                </Box>
                <Box display="flex" flexDirection="column" my={5} color="black">
                    Gender:
                    <Checkbox value="female" onChange={(e)=>genderfilter(e)}>Female</Checkbox>
                    <Checkbox value="Male" onChange={(e)=>genderfilter(e)}>Male</Checkbox>
                    
                </Box>
                
                <Box display="flex" flexDirection="column" my={5} color="black">
                Brands:
                    <Checkbox value="Peter England" onChange={(e)=>brandfilter(e)}>Peter England</Checkbox>
                    <Checkbox value="Highlighter" onChange={(e)=>brandfilter(e)}>Highlighter</Checkbox>
                    <Checkbox value="Vskin" onChange={(e)=>brandfilter(e)}>Vskin</Checkbox>
                    <Checkbox value="Tamina" onChange={(e)=>brandfilter(e)}>Tamina</Checkbox>
                    <Checkbox value="Nayo" onChange={(e)=>brandfilter(e)}>Nayo</Checkbox>
                    
                </Box>
                <Button mb={5} onClick={clearfilter} color="black">Clear filter</Button>
            </div>
            <div className='right-half'>
            <Main data={data} />
      </div>
        </div>
    )
}

export default Sidebar
