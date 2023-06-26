import React from "react";
import { Media, MediaType } from "~/types/anilist";
import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import { REVALIDATE_TIME } from "~/constants";
import { getMediaDetails } from "~/services/anilist";
import { Banner } from '~/components/manga_details';
import { Section, Head } from "~/components/shared";
interface DetailsPageProps {
    manga: Media;
}
const DetailsPage: NextPage<DetailsPageProps> = ({ manga }) => {
    return (
        <React.Fragment>
            <Head
                title={manga.title.userPreferred}
                description={manga.description}
                keywords=""
                key="head"
            />
            <div className="relative mb-[calc(5rem)] md:mb-[calc(8rem)] flex justify-center box-content">
                <Banner
                    banner={manga.bannerImage}
                    title={manga.title.userPreferred}
                />
                <Section>
                    


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