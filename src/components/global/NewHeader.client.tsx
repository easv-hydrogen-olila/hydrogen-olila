import { Fragment, useState } from 'react'
import {Link, Image, useCart} from '@shopify/hydrogen'
//@ts-ignore
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { IconAccount, IconCart, IconSearch } from '../elements/index'
import { MenuItem } from '@shopify/hydrogen/storefront-api-types'
import { Drawer, useDrawer } from './Drawer.client'
import CartDetails from './CartDetails.client'
import { getUrlHandle } from '../../lib/utils'


const SHOP_BANNER_LOGO = 'https://cdn.shopify.com/s/files/1/0677/4017/2569/files/logo-sort_1.png?v=1668592585'



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NewHeader({menu}:{menu?: MenuItem[]}) {
  const [open, setOpen] = useState(false)
  const {isOpen, openDrawer, closeDrawer}= useDrawer()

  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pt-5 pb-2">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Links */}
                <Tab.Group as="div" className="mt-2">
                  <Tab.Panels as={Fragment}>
                      <Tab.Panel className="space-y-10 px-4 pt-10 pb-8">
                        { menu && (
                          menu.map((menu) => (
                            <div key={menu.title}>
                              <p id={`${menu.id}-heading-mobile`} className="font-medium text-gray-900">
                                {menu.title}
                              </p>
                              <ul
                                role="list"
                                aria-labelledby={`${menu.id}-heading-mobile`}
                                className="mt-6 flex flex-col space-y-6"
                              >
                                {menu.items.map((item) => {
                                  let handle = getUrlHandle(item.url)
                                  return (
                                  <li key={item.title} className="flow-root">
                                    <Link to={`/collections/${handle}`} className="-m-2 block p-2 text-gray-500">
                                      {item.title}
                                    </Link>
                                  </li>
                                )}
                                )}
                              </ul>
                            </div>
                        )))}
                      </Tab.Panel>
                  </Tab.Panels>
                </Tab.Group>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
      
      <Drawer open={isOpen} onClose={closeDrawer}>
        <CartDetails onClose={closeDrawer} />
      </Drawer>

      <header className="relative bg-white">
        {/* Top banner */}
        <div className='flex items-center justify-center md:justify-between h-10 bg-clr_primary md:bg-clr_grey_bg px-4 sm:px-6 lg:px-8'>
          <p className="uppercase text-[11px] font-bold text-white md:text-clr_navigation">
            STORT UDVALG AF DANMARKS 
            <span className='text-clr_gold'> FAVORITMÆRKER </span> 
          </p>
          <p className="hidden md:block uppercase text-[11px] font-bold text-clr_navigation">
            <span className='text-clr_gold'>GRATIS </span> LEVERING VED KØB OVER 399 DKK
          </p>
          <p className="hidden md:block uppercase text-[11px] font-bold text-clr_navigation">
            <span className='text-clr_gold'>HURTIG </span>  LEVERING 365 DAGE OM ÅRET
          </p>
        </div>


        {/* Menu navigation */}
        <nav aria-label="Top" className="mx-auto  px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="rounded-md bg-white p-2 text-gray-400 xl:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6 text-black" aria-hidden="true" />
              </button>
              <div className='sm:block md:hidden'>
                <Link to='/search'>
                  <IconSearch  width={23} height={23}/>
                </Link>
              </div>


              {/* Logo */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2">
                <Link to="/">
                  <span className="sr-only">Your Company</span>
                  <Image
                    className="h-10 w-auto"
                    src={SHOP_BANNER_LOGO}
                    alt="Olila logo"
                    width={90}
                    height={40}
                  />
                </Link>
              </div>

              {/* Flyout menus */}
              <Popover.Group className="hidden xl:block xl:self-stretch">
                <div className="flex h-full space-x-8">
                  {menu && (
                    menu.map((menu) => (
                    <Popover key={menu.title} className="flex">
                      {({ open }) => (
                        <>
                          <div className="relative flex">
                            <Popover.Button
                              className={classNames(
                                open
                                  ? 'text-clr_primary'
                                  : 'border-transparent hover:text-clr_primary',
                                'relative z-10 text-clr_navigation uppercase -mb-px flex items-center border-b-2  pt-px text-sm font-medium transition-colors duration-200 ease-out'
                              )}
                            >
                              {menu.title}
                            </Popover.Button>
                          </div>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Popover.Panel className="z-10 absolute inset-x-0 top-full text-sm text-white font-light">
                              {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                              <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

                              <div className="relative bg-clr_dropdown">
                                <div className="mx-auto px-12">
                                  <div className="grid gap-y-10 gap-x-4 py-8">
                                    <div className={`grid gap-y-10 text-sm ${menu.items.length>4 ? 'grid-5': 'grid-4'}`}>
                                      {menu.items.map((collection) => (
                                        <div key={collection.title}>
                                          <p id={`${collection.title}-heading`} className="text-white font-bold uppercase">
                                            {collection.title}
                                          </p>
                                          <ul
                                            role="list"
                                            aria-labelledby={`${collection.title}-heading`}
                                            className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                          >
                                            { collection.items && (
                                              collection.items.map((item) => {
                                                let handle = getUrlHandle(item.url)
                                                return(
                                                  <li key={item.title} className="flex">
                                                    <Link to={`/collections/${handle}`} className="hover:text-white hover:underline">
                                                      {item.title}
                                                    </Link>
                                                  </li>
                                                )
                                            }))}
                                          </ul>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  )))}
                </div>
              </Popover.Group>

              <div className="ml-auto flex items-center justify-center">
                {/* Icons */}
                <div className='ml-4 flex items-center lg:ml-6 space-x-3'>
                    <div className='hidden md:block'>
                      <SearchForm/>
                    </div>
                    <Link className='md:block' to='/account'>
                        <IconAccount width={25} height={25}/>
                    </Link>
                    {/* <IconFavorite width={25} height={25}/> */}
                    <div className='flex items-center'>
                      <button
                        onClick={openDrawer}
                        className='relative'
                      >
                        <IconCart width={25} height={25}/>
                        <CartBadge/>
                      </button>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}


function CartBadge() {
  const {totalQuantity} = useCart()

  if (totalQuantity < 1) {
    return null
  }

  return (
    <div
    className="text-white bg-black 
    absolute top-0 right-0 text-[0.625rem] 
    font-medium h-3 min-w-[0.75rem] 
    flex items-center justify-center leading-none text-center 
    rounded-full w-auto px-[0.125rem] pb-px"
    >
    <span>{totalQuantity}</span>
  </div>
  )

}

function SearchForm(){
  return(
    <form action="/search" className=''>
      <div className='relative w-36'>
        <input
          className='px-2 p-2 bg-clr_header_bg rounded-full w-full text-center'
          type="search"
          placeholder="SØG"
          name="q"
        />
        <button type='submit' className='absolute right-[15px] bottom-2'>
          <IconSearch  width={23} height={23}/>
        </button>
      </div>
    </form>
  )
}