import React from 'react'
import {useState} from 'react'
import {Image, fetchSync} from '@shopify/hydrogen'
import Button from './elements/Button';

export function FooterNewsletter() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');

    //REVIEW - Newsletter Form
    const handleSubmit = async (e) => {
      e.preventDefault();
          const response = await fetchSync('/newsletter', {
            method: 'POST',
            body: JSON.stringify({email}),
          })
    };

  return (
    <>
        {/* Logo */}
        <Image  src='https://cdn.shopify.com/s/files/1/0677/4017/2569/files/Logo-whhite.png?v=1668592785'
                alt='Olia logo Image'
                width={150}
                height={100}
                className='h-[100px]'
        />
        {/* Newsletter Form */}
        <div className='flex flex-col items-center justify-center'>
            <h1 className='uppercase whitespace-nowrap lg:text-2xl md:text-xl sm:text-regular text-white font-bold'>
                Spar 10% på første køb ved <br /> tilmelding af nyhedsbrev
            </h1>
            <form method="POST" action="/" onSubmit={handleSubmit} className='flex flex-col items-center justify-center'>
            <div className='flex flex-col md:flex md:flex-row items-center justify-center space-y-3 my-3 md:space-y-0 md:space-x-3'>
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
                    Subscribe
            </Button>
            </form>
        </div>



    </>
    
  )
}