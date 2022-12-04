import { Fragment, useState } from 'react'
import {Link, Image} from '@shopify/hydrogen'
//@ts-ignore
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { IconAccount, IconCart, IconFavorite, IconSearch } from '../elements/index'
import { MenuItem } from '@shopify/hydrogen/storefront-api-types'


const SHOP_BANNER_LOGO = 'https://cdn.shopify.com/s/files/1/0677/4017/2569/files/logo-sort_1.png?v=1668592585'


const navigation = {
  categories: [
    {
      id: 'women',
      name: 'Women',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          name: 'Basic Tees',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
          imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [
            { name: 'Tops', href: '#' },
            { name: 'Dresses', href: '#' },
            { name: 'Pants', href: '#' },
            { name: 'Denim', href: '#' },
            { name: 'Sweaters', href: '#' },
            { name: 'T-Shirts', href: '#' },
            { name: 'Jackets', href: '#' },
            { name: 'Activewear', href: '#' },
            { name: 'Browse All', href: '#' },
          ],
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            { name: 'Watches', href: '#' },
            { name: 'Wallets', href: '#' },
            { name: 'Bags', href: '#' },
            { name: 'Sunglasses', href: '#' },
            { name: 'Hats', href: '#' },
            { name: 'Belts', href: '#' },
          ],
        },
        {
          id: 'brands',
          name: 'Brands',
          items: [
            { name: 'Full Nelson', href: '#' },
            { name: 'My Way', href: '#' },
            { name: 'Re-Arranged', href: '#' },
            { name: 'Counterfeit', href: '#' },
            { name: 'Significant Other', href: '#' },
          ],
        },
      ],
    },
    {
      id: 'men',
      name: 'Men',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
          imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
        },
        {
          name: 'Artwork Tees',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
          imageAlt:
            'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [
            { name: 'Tops', href: '#' },
            { name: 'Pants', href: '#' },
            { name: 'Sweaters', href: '#' },
            { name: 'T-Shirts', href: '#' },
            { name: 'Jackets', href: '#' },
            { name: 'Activewear', href: '#' },
            { name: 'Browse All', href: '#' },
          ],
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            { name: 'Watches', href: '#' },
            { name: 'Wallets', href: '#' },
            { name: 'Bags', href: '#' },
            { name: 'Sunglasses', href: '#' },
            { name: 'Hats', href: '#' },
            { name: 'Belts', href: '#' },
          ],
        },
        {
          id: 'brands',
          name: 'Brands',
          items: [
            { name: 'Re-Arranged', href: '#' },
            { name: 'Counterfeit', href: '#' },
            { name: 'Full Nelson', href: '#' },
            { name: 'My Way', href: '#' },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: 'Company', href: '#' },
    { name: 'Stores', href: '#' },
  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NewHeader({menu}:{menu?: MenuItem[]}) {
  const [open, setOpen] = useState(false)

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
                                {menu.items.map((item) => (
                                  <li key={item.title} className="flow-root">
                                    <Link to={item.url} className="-m-2 block p-2 text-gray-500">
                                      {item.title}
                                    </Link>
                                  </li>
                                ))}
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

      <header className="relative bg-white">
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

        <nav aria-label="Top" className="mx-auto  px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6 text-black" aria-hidden="true" />
              </button>
              <IconSearch className='md:hidden' width={23} height={23}/>


              {/* Logo */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2">
                <a href="#">
                  <span className="sr-only">Your Company</span>
                  <Image
                    className="h-10 w-auto"
                    src={SHOP_BANNER_LOGO}
                    alt="Olila logo"
                    width={90}
                    height={40}
                  />
                </a>
              </div>

              {/* Flyout menus */}
              <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
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
                                              collection.items.map((item) => (
                                              <li key={item.title} className="flex">
                                                <Link to={item.url} className="hover:text-white hover:underline">
                                                  {item.title}
                                                </Link>
                                              </li>
                                            )))}
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

              <div className="ml-auto flex items-center">
                {/* Icons */}
                <div className='ml-4 flex lg:ml-6 space-x-2'>
                    <Link className='md:block' to='/account'>
                        <IconAccount width={25} height={25}/>
                    </Link>
                    <IconFavorite width={25} height={25}/>
                    <IconCart width={25} height={25}/>
                    <IconSearch className='hidden md:block' width={23} height={23}/>

                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}
