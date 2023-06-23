import React from "react";
import { Media } from "~/types/anilist";
import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import Head from '~/components/shared/Head';
import { useRouter } from "next/router";
import { createTitleFromParam } from '~/utils';
import { REVALIDATE_TIME } from "~/constants";
interface DetailsPageProps {
    manga: Media;
}
const DetailsPage: NextPage<DetailsPageProps> = ({ manga }) => {
    const router = useRouter();
    const { params } = router.query;



    return (
        <React.Fragment>
            <Head
                title={createTitleFromParam(params as string)}
                description=""
                keywords=""
                key="head"
            />
        </React.Fragment>
    )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    try {
        console.log(`test 2`, params)

        return {
            props: {
                manga: 'test',
            }

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