import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { IoIosSearch } from 'react-icons/io'
import { useSetAtom } from 'jotai'
import { showSearchModalAtom } from '~/store'
import { useAtomValue } from 'jotai'
const MyModal = () => {
    const setShowSearchModal = useSetAtom(showSearchModalAtom)
    const showSearchModal = useAtomValue(showSearchModalAtom);
    function closeModal() {
        setShowSearchModal(false)
    }
    function openModal() {
        setShowSearchModal(true)
    }


    return (
        <Transition appear show={showSearchModal} as={Fragment}>
            <Dialog as="div" className="relative z-[999] " onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm" />
                </Transition.Child>
                <div className="fixed top-[10%] left-0 right-0 overflow-y-auto ">
                    <div className="flex min-h-full items-center justify-center p-4 text-center ">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"

                        >
                            <Dialog.Panel className="max-h-[70vh] w-[85%] md:w-[75%] lg:max-h-[85vh] 
                             transform overflow-hidden rounded-2xl bg-blackground p-10 text-left align-middle shadow-xl transition-all">
                                <div className="">
                                    <Dialog.Title
                                        as="h1"
                                        className="text-3xl font-semibold leading-6"
                                    >
                                        Tìm kiếm truyện
                                    </Dialog.Title>
                                </div>

                                <div className="my-10 flex h-[45px] items-center rounded-xl bg-secondary py-3 text-white ">
                                    <IoIosSearch className="mx-2 h-8 w-8 md:mx-6 md:h-12 md:w-14" />
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>

    )
}
export default MyModal