import Head from '~/components/shared/Head'
import { Inter } from '@next/font/google'
import { SwiperBanner } from '~/components/shared'
import React, { useEffect, useState } from 'react'
import useMedia from '~/hooks/useMedia';
import { MediaType, MediaSort, Media } from '~/types/anilist';
import SwiperSkeleton from '~/components/skeletons/SwiperSkeleton';

const inter = Inter({ subsets: ['latin'] })

const Home = () => {


  const { data: trendingManga, isLoading: trendingLoading } = useMedia({
    type: MediaType.Manga,
    sort: [MediaSort.Trending_desc, MediaSort.Popularity_desc],
    countryOfOrigin: 'JP',
    perPage: 10,
  });
  return (
    <React.Fragment>
      <Head title="Hikky Manga" />
      <div className="relative mb-[calc(5rem)] md:mb-[calc(8rem)] flex justify-center box-content">
        {
          trendingLoading ? <SwiperSkeleton /> : (
            <SwiperBanner
              //@ts-ignore
              data={trendingManga}
            />
          )
        }
        {/* banner */}
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