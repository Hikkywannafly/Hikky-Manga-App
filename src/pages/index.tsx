import Head from '~/components/shared/Head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { SwiperBanner } from '~/components/shared'
import React from 'react'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <React.Fragment>
      <Head title="Hikky Manga" />

      <div className="relative mb-[calc(5rem)] md:mb-[calc(8rem)] flex justify-center box-content">
        {/* banner */}
        <SwiperBanner />
        {/* blackground */}
        <div className="absolute w-full h-[calc(5rem+80%)] md:h-[calc(7rem+80%)] top-0 left-0 brightness-75 bg-gradient-to-r from-yellow-500 py-4">

        </div>
      </div>
    </React.Fragment>
  )
}
