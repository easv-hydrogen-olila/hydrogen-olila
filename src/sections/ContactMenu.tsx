import React from 'react'

function ContactMenu() {
  return (
    <section className='bg-clr_primary_variaton flex flex-col items-center justify-center md:flex-row text-white'>
        <div className='flex flex-col mx-2'>
            <h3 className='uppercase'>Support</h3>
            <div className='content'>
                <h4>+45 53539796</h4>
                <ul>
                    <li>Bestilinger</li>
                    <li>Returnering og refundering</li>
                    <li>Hjælp og kundeservice</li>
                    <li>EU-Kommissionens klageportal</li>
                </ul>
            </div>
        </div>
        <div className='flex flex-col mx-2'>
            <h3 className='uppercase text-center'>Du finder os her</h3>
            <div className='content flex flex-row'>
                <div className='flex flex-col mx-2'>
                    <h4>Olila Esbjerg</h4>
                    <ul>
                        <li>Bestilinger</li>
                        <li>Returnering og refundering</li>
                        <li>Hjælp og kundeservice</li>
                        <li>EU-Kommissionens klageportal</li>
                    </ul>
                </div>
                <div className='flex flex-col mx-2'>
                    <h4>Olila Esbjerg</h4>
                    <ul>
                        <li>Bestilinger</li>
                        <li>Returnering og refundering</li>
                        <li>Hjælp og kundeservice</li>
                        <li>EU-Kommissionens klageportal</li>
                    </ul>
                </div>
                <div className='flex flex-col mx-2'>
                    <div>&nbsp;</div>
                    <ul>
                        <li>Bestilinger</li>
                        <li>Returnering og refundering</li>
                        <li>Hjælp og kundeservice</li>
                        <li>EU-Kommissionens klageportal</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className='flex flex-col mx-2'>
            <h3 className='uppercase'>Support</h3>
            <div className='content'>
                <h4>+45 53539796</h4>
                <ul>
                    <li>Bestilinger</li>
                    <li>Returnering og refundering</li>
                    <li>Hjælp og kundeservice</li>
                    <li>EU-Kommissionens klageportal</li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default ContactMenu