import { useNavigate } from '@shopify/hydrogen';
import React from 'react'
import { useState } from 'react';
import Button from '../elements/Button';
import { Heading } from '../elements/Heading'

// interface FormElements{
//     email: HTMLInputElement;
//     password: HTMLInputElement;
// }

export function AccountLoginForm() {
    const navigate = useNavigate();

    const [hasSubmitError, setHasSubmitError] = useState(false)
    const [showEmailField, setShowEmailField] = useState(true)
    const [showPasswordField, setPasswordField] = useState(false)

    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState<null | string>(null)
    const [password, setPassword] = useState('')
    const [passwordError, setPasswordError] = useState<null | string>(null)


    function onSubmit(event:React.FormEvent<HTMLFormElement> ) {
        event.preventDefault();
        
        setEmailError(null)
        setPasswordError(null)
        
        if(showEmailField){
            checkEmail(event)
        } else {
            checkPassword(event)
        }


    }

    function resetForm() {
        setEmail('');
        setPassword('');
        setShowEmailField(true);
    }

    //TODO Improve email validation
    function checkEmail (event:React.FormEvent<HTMLFormElement>){
        if(event.currentTarget.email.validity.valid){
            setShowEmailField(false)
        } else {
            setEmailError('Please enter a valid email')
        }

    }

    async function checkPassword(event: React.FormEvent<HTMLFormElement>) {
        if(event.currentTarget.password.validity.valid){
            const response = await callLoginApi({ email, password })
            console.log(await response)
            if (response.error){
                console.log(response.error)
            }
        }
    }

    

    return (
        <div className='flex justify-center my-32 md:my-48'>
            <div className='max-w-md w-full'>
                <Heading className='text-2xl my-2'>Sign in</Heading>
                <form noValidate className='' onSubmit={onSubmit}>
                    {showEmailField && (
                        <EmailField 
                            email={email}
                            setEmail={setEmail}
                            emailError={emailError}
                        />
                    )}
                    {!showEmailField && (
                        <PasswordField
                            password={password}
                            setPassword = {setPassword}
                            passwordError = {passwordError}
                        />
                    )}
                </form>
            </div>
        </div>
    )
}


export async function callLoginApi ({
    email,
    password
}:{
    email: string,
    password: string
}){
    try{
        const res = await fetch(`/account/login`,{
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({email, password})
        })

        if(res.ok){
            return {}
        }else{
            return res.json()
        }

    } catch (error: any) {
        return {
            error: error.toString()
        }
    }
}


function EmailField ({
    email,
    setEmail,
    emailError,
    shopName
}: {
    email: string,
    setEmail: (email: string) => void,
    emailError: null | string,
    shopName?: string
}) {

    //TODO - getInputStyleClasses
    return (
        <>
        <div className='mb-3'>
            <input
                className='rounded border focus:border-clr_primary/50 px-3 py-2 w-full'
                name="email"
                type="email" 
                autoComplete='email'
                required
                placeholder='Email address'
                value={email}
                onChange={(event) => {
                    setEmail(event.target.value)
                }}
            />
            {!emailError ?  '' : <p className='text-red-600'>{emailError}</p>}
        </div>
        <div className='flex items-center justify-center w-full'>
                <Button type='submit' buttonStyle='btn--primary--rounded' buttonSize='btn--max-w'>
                    Next
                </Button>
        </div>
        </>
    )
}

function PasswordField({
    password,
    setPassword,
    passwordError
}:{
    password: string,
    setPassword: (password: string) => void,
    passwordError: null | string
}){
    return (
        <>
        <div className='mb-3'>
            <input 
                className='rounded border focus:border-clr_primary/50 px-3 py-2 w-full'
                name='password'
                type="password"
                required
                placeholder='Password'
                value = {password}
                onChange={(event)=>{
                    setPassword(event.target.value)
                }}
            />
            {passwordError ? '': <p className='text-red-600'>{passwordError}</p>}
        </div>
        <div className='flex items-center justify-center w-full'>
                <Button type='submit' buttonStyle='btn--primary--rounded' buttonSize='btn--max-w'>
                    Log in
                </Button>
        </div>
        </>
    )
}
