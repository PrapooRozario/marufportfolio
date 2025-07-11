import React from 'react';
import Logo from '@/public/MarufLogo.png';
import Image from 'next/image';
import Button from '@/components/ui/button';

 
const Header = () => {
    return (
        <div className='bg-3 rounded-2xl flex items-center justify-between'>
            <div>
                <Image alt="Maruf's Logo" src={Logo} width={80} height={80}/>
            </div>
            <div>
                <Button variant='primary' text="Let's Talk" className='mr-4'>
                </Button>
            </div>
        </div>
    );
};

export default Header;