import React from "react";
import { Media, MediaType } from "~/types/anilist";
import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import { REVALIDATE_TIME } from "~/constants";
import { getMediaDetails } from "~/services/anilist";
import { Banner, Cover } from '~/components/manga_details';
import { Section, Head } from "~/components/shared";
import Tag from "~/components/shared/Tag";
interface DetailsPageProps {
    manga: Media;
}
const DetailsPage: NextPage<DetailsPageProps> = ({ manga }) => {
    console.log(manga);
    return (
        <React.Fragment>
            <Head
                title={manga.title.userPreferred}
                description={manga.description}
                keywords=""
                key="head"
            />
            <div className="">
                <Banner
                    banner={manga.bannerImage}
                    title={manga.title.userPreferred}
                />
                <Section className="relative ">
                    <div className="flex gap-8 ">
                        <div className="flex md:space-x-8">
                            <div className="shrink-0 relative md:static md:left-0 md:-translate-x-0 w-[120px] md:w-[186px] -mt-48 space-y-6 h-[280px]">
                                <Cover src={manga.coverImage.extraLarge} alt={manga.title.userPreferred} />
                            </div>

                        </div >
                        <div className="">
                            <div className="-mt-32">
                                <p className="text-3xl md:text-4xl font-bold mb-2">
                                    {manga.title.userPreferred}
                                </p>
                            </div>
                            <div>
                                <div className="flex gap-4 my-6">
                                    {
                                        manga.genres.map((gender, index) => {
                                            return (
                                                <Tag title={gender} key={index} link="" />
                                            )
                                        })
                                    }

                                </div>
                            </div>


                        </div>
                    </div>
                </Section>
            </div>
        </React.Fragment>
    )
}

export const getStaticProps: GetStaticProps = async ({
    params: { params },
}) => {
    try {
        const media = await getMediaDetails({
            type: MediaType.Manga,
            id: Number(params[0]),
        });

        return {
            props: {
                manga: media as Media,
            },
            revalidate: REVALIDATE_TIME,

        }
    } catch (error) {
        return {
            notFound: true,
            revalidate: REVALIDATE_TIME,
        }
    }
}

export const getStaticPaths: GetStaticPaths = async () => {

    return { paths: [], fallback: 'blocking' };
};

export default DetailsPage;