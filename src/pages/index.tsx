import Head from '~/components/shared/Head'
import { Inter } from '@next/font/google'
import { SwiperBanner } from '~/components/shared'
import React, { useEffect, useState } from 'react'
import useMedia from '~/hooks/useMedia';
import { MediaType, MediaSort, Media } from '~/types/anilist';
type Blackground = {
  color1: string,
  color2: string,
}
const inter = Inter({ subsets: ['latin'] })

const Home = () => {

  const [blackground, setBlackground] = useState<Blackground[]>([]);
  const { data: trendingManga, isLoading: trendingLoading } = useMedia({
    type: MediaType.Manga,
    sort: [MediaSort.Trending_desc, MediaSort.Popularity_desc],
    perPage: 10,
  });


  console.log(trendingManga)
  return (
    <React.Fragment>
      <Head title="Hikky Manga" />
      <div className="relative mb-[calc(5rem)] md:mb-[calc(8rem)] flex justify-center box-content">
        {
          trendingLoading ? null : (
            <div>

            </div>
          )
        }
        {/* banner */}
        {/* <SwiperBanner /> */}
        {/* blackground */}
        {/* <div className="absolute w-full h-[calc(5rem+80%)] md:h-[calc(7rem+80%)] top-0 left-0 brightness-75 animate-fadeSlow"
          style={{
            background: `linear-gradient(132deg, ${blackground[0]} 0%, ${blackground[1]} 100%)`
          }}>
        </div> */}

      </div>
    </React.Fragment >
  )
}

export default Home;