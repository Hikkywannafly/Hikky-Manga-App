import React, { useRef } from "react";
import { Media, MediaType } from "~/types/anilist";
import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import { REVALIDATE_TIME } from "~/constants";
import { getMediaDetails } from "~/services/anilist";
import { Banner, Cover } from '~/components/manga_details';
import { Section, Head } from "~/components/shared";
import Tag from "~/components/shared/Tag";
import { VietNameseTitles } from "~/constants";
import Editor from '~/components/shared/Editor';
import InfoItem from "~/components/shared/InfoItem";
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
                        <div className="-mt-32">
                            <div className="text-[20px] text-gray-400 font-semibold">
                                {
                                    manga.staff.edges[0].node.name.full
                                }
                            </div>

                            <div className="mt-3">
                                <p className="text-3xl md:text-4xl font-bold mb-2">
                                    {manga.title.userPreferred}
                                </p>
                            </div>
                            <div className="mt-16">
                                <div className="flex gap-4 my-6">
                                    {
                                        manga.genres.map((gender, index) => {
                                            return (
                                                <Tag title={VietNameseTitles[gender]} key={index} link="" />
                                            )
                                        })
                                    }
                                </div>
                            </div>

                            <div className="hidden md:flex gap-x-8 overflow-x-auto md:gap-x-16 [&>*]:shrink-0 mt-5">
                                <InfoItem
                                    title={`Quốc Gia`}
                                    value={VietNameseTitles[manga.countryOfOrigin]}
                                />

                                <InfoItem
                                    title={`Tình Trạng`}
                                    value={VietNameseTitles[manga.status]}
                                />
                                <InfoItem
                                    title={`Chaptter`}
                                    value={manga.chapters}
                                />
                                <InfoItem
                                    title={`Năm Phát Hành`}
                                    value={manga.startDate.year}
                                />
                                <InfoItem
                                    title={`Năm Kết Thúc`}
                                    value={manga.endDate.year}
                                />
                                <InfoItem
                                    title={`Độ tuổi`}
                                    value={manga.isAdult ? "18+" : ""}
                                />
                            </div>
                            <div className="mt-10">
                                <Editor
                                    readOnly
                                    editorClassName="text-2xl"
                                    defaultContent={manga.description}
                                />
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