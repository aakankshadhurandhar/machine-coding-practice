import React from 'react'
import { Button } from '@chakra-ui/button';
import { Input } from '@chakra-ui/input';
import './Navbar.css'
function Navbar() {
    return (
        <div>
            <nav>
      <div className='navWrapper'>
        <div className='navItemWrapper'>
          <div>
            <img
              src='https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png'
              alt='flipkart'
              width='80px'
              height='100px'
            />
          </div>
          <Input
            variant='outline'
            placeholder='Search for products,brand and more'
            backgroundColor='white'
            color='black'
            width='600px'
            ml='8'
          />
        </div>
        <Button color='black' ml={16}>
          Cart
        </Button>
        <Button color='black' ml={10}>
          Sign In / Sign Up
        </Button>
      </div>
    </nav>
        </div>
    )
}

export default Navbar
