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
      <div className="relative ">
        {
          trendingLoading ? <SwiperSkeleton /> : (
            <SwiperBanner
              //@ts-ignore
              data={trendingManga}
            />
          )
        }

      </div>

    </React.Fragment >
  )
}

export default Home;