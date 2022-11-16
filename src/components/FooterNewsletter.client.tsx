import React from 'react'
import {useState} from 'react'
import {Image, fetchSync} from '@shopify/hydrogen'

export function FooterNewsletter() {
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
      e.preventDefault();
      const response = await fetchSync('/newsletter', {
        method: 'POST',
        body: JSON.stringify({email}),
      });
  
      // Log the response from our API route
      console.log(await response.json());
    };


  return (
    <>
        <Image  src='https://cdn.shopify.com/s/files/1/0677/4017/2569/files/Logo-whhite.png?v=1668592785'
                alt='Olia logo Image'
                width={150}
                height={100}
        />
        <div className='flex flex-col'>
            <h1>Spar 10% på første køb ved tilmelding af nyhedsbrev</h1>
                  <form method="POST" action="/" onSubmit={handleSubmit}>
                    <label>
                    Email:{' '}
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    </label>
                    <button>Subscribe</button>
                </form>
        </div>
    </>
    
  )
}