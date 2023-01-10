import Head from '~/components/shared/Head'
import { Inter } from '@next/font/google'
import { SwiperBanner } from '~/components/shared'
import React, { useEffect, useState } from 'react'
import { curentImageBannerAtom } from '~/store';
import { useAtomValue } from 'jotai';
import { extractColors } from 'extract-colors';
type Blackground = {
  color1: string,
  color2: string,
}
const inter = Inter({ subsets: ['latin'] })

const Home = () => {
  const img = useAtomValue(curentImageBannerAtom);
  const [blackground, setBlackground] = useState<Blackground[]>([]);


  useEffect(() => {
    if (img) {
      extractColors(`http://localhost:3000/${img}`)
        .then((colors) => {
          const sortedColors = colors.sort((a, b) => b.area - a.area);
          setBlackground([
            // @ts-ignore
            sortedColors[0].hex,
            // @ts-ignore
            sortedColors[1].hex
          ])
        }).catch(console.error);
    }
  }, [img])

  return (
    <React.Fragment>
      <Head title="Hikky Manga" />

      <div className="relative mb-[calc(5rem)] md:mb-[calc(8rem)] flex justify-center box-content">
        {/* banner */}
        <SwiperBanner />
        {/* blackground */}

        <div className="absolute w-full h-[calc(5rem+80%)] md:h-[calc(7rem+80%)] top-0 left-0 brightness-75 animate-fadeSlow"
          style={{
            background: `linear-gradient(132deg, ${blackground[0]} 0%, ${blackground[1]} 100%)`
          }}>
        </div>

      </div>
    </React.Fragment >
  )
}

export default Home;