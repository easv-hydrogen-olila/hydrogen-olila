import { Dialog, Transition } from "@headlessui/react"
import { Fragment, useState } from "react"
import { IconClose } from "../elements/Icon"


export function Drawer({
    open,
    onClose, 
    children
}: {
    open: boolean,
    onClose: () => void,
    children?: React.ReactNode
}) {
  return (
    <Transition appear show={open} as={Fragment}>
        <Dialog as ="div" className="relative z-50" onClose={onClose}>
            <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 left-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>
            <div className="fixed inset-0">
          <div className="absolute inset-0 overflow-hidden">
            <div className="fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="max-w-lg transform text-left align-middle shadow-xl transition-all antialiased bg-neutral-50">
                  <header className="sticky top-0 flex items-center justify-between px-4 h-24 sm:px-8 md:px-12">
                    <h2
                      id="cart-contents"
                      className="whitespace-pre-wrap max-w-prose font-bold text-lg"
                    >
                      Cart
                    </h2>
                    <button
                      type="button"
                      className="p-4 -m-4 transition text-primary hover:text-primary/50"
                      onClick={onClose}
                    >
                      <IconClose aria-label="Close panel" />
                    </button>
                  </header>
                  {children}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
        </Dialog>
    </Transition>
  )
}


export function useDrawer (openDefault = false) {
    const [isOpen, setIsOpen] = useState(openDefault)


    function openDrawer() {
        setIsOpen(true);
    }

    function closeDrawer() {
        setIsOpen(false);
    }

    return {
        isOpen,
        openDrawer,
        closeDrawer,
    };
}