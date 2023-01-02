import React from 'react'
import {useState} from 'react'
import {Image, Link, fetchSync} from '@shopify/hydrogen'
import Button from './elements/Button';
import { IconFacebook, IconInstagram } from './elements/Icon';

export function FooterNewsletter() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = async (e) => {
      e.preventDefault();
          const response = await fetchSync('/newsletter', {
            method: 'POST',
            body: JSON.stringify({email}),
          })
    };

  return (
    <div className='px-8 flex flex-col items-center justify-center lg:flex-row lg:justify-between text-white py-12'>
        {/* Logo */}
        <Image  src='https://cdn.shopify.com/s/files/1/0677/4017/2569/files/Logo-whhite.png?v=1668592785'
                alt='Olia logo Image'
                width={150}
                height={100}
                className='h-[100px] my-4'
        />
        {/* Newsletter Form */}
        <div className='flex flex-col items-center justify-center my-4 space-y-2'>
            <h1 className='uppercase whitespace-nowrap lg:text-2xl text-xl text-white font-bold'>
                Spar 10% på første køb ved <br /> tilmelding af nyhedsbrev
            </h1>
            <form method="POST" action="/" onSubmit={handleSubmit} className='flex flex-col items-center justify-center'>
            <div className='flex flex-col lg:flex lg:flex-row items-center justify-center space-y-4 my-3 lg:space-y-0 lg:space-x-3'>
                <input
                    type="text"
                    placeholder="NAVM"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className='rounded-full p-2 px-6 text-center text-black'
                />
                <input
                    type="text"
                    placeholder="E-MAIL"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='rounded-full p-2 px-6 text-center text-black'
                />
            </div>
            <Button type='submit' 
                    buttonStyle='btn--footer'>
                    Tilmeld nu
            </Button>
            </form>
        </div>

        <div className='flex flex-col my-8'>
          <h3 className='font-bold text-2xl mb-3'>FØLG OS</h3>
          <div className='flex items-center justify-center space-x-2'>
            <Link to={'https://www.facebook.com/olila.dk/'}>
                <IconFacebook height={40} width={40} fill='white'/>
            </Link>
            <Link to={'https://www.instagram.com/olila.dk/?hl=en'}>
                <IconInstagram height={42} width={42} fill='white'/>
            </Link>
          </div>
        </div>
    </div>
    
  )
}