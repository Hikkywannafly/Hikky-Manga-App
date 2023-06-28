import { Translation } from "~/types";
import {
    AiringSchedule,
    AiringScheduleArgs,
    CharacterArgs,
    MediaArgs,
    MediaType,
    PageArgs,
    RecommendationArgs,
    StaffArgs,
    StudioArgs,
} from "~/types/anilist";
// import { removeArrayOfObjectDup } from "@/utils";
// import { supabaseClient } from "@supabase/auth-helpers-nextjs";
import supabaseClient from "~/libs/supabase";
import axios from "axios";
// import { getTranslations } from "../tmdb";
import {
    airingSchedulesQuery,
    charactersDefaultFields,
    charactersQuery,
    mediaDefaultFields,
    mediaDetailsQuery,
    MediaDetailsQueryResponse,
    mediaQuery,
    PageQueryResponse,
    recommendationsQuery,
    staffDefaultFields,
    staffQuery,
    studioDetailsQuery,
    StudioDetailsQueryResponse,
    studiosQuery,
    mediaDetailsDefaultFields,
} from "./queries";

const GRAPHQL_URL = "https://graphql.anilist.co";

export const anilistFetcher = async <T>(query: string, variables: any) => {
    type Response = {
        data: T;
    };

    const { data } = await axios.post<Response>(GRAPHQL_URL, {
        query,
        variables,
    });

    return data?.data;
};


export const getMedia = async (args: MediaArgs & PageArgs, fields?: string) => {
    const response = await anilistFetcher<PageQueryResponse>(
        mediaQuery(fields),
        args
    );

    const mediaList = response?.Page?.media || [];

    const mediaIdList = mediaList.map((media) => media.id);

    const { data: chapterCounter, error } = await supabaseClient
        .from("chapter_counter")
        .select("*")
        .in("mediaId", mediaIdList);
    // return mediaList;
    if (error || !chapterCounter?.length) return mediaList;

    return mediaList.map((media) => {
        const counter = chapterCounter.filter(
            (count) => count.mediaId === media.id
        );
        return {
            ...media,
            counter,
        };

    });
}

export const getMediaDetails = async (
    args: MediaArgs & PageArgs,
    fields?: string
) => {
    const response = await anilistFetcher<MediaDetailsQueryResponse>(
        mediaDetailsQuery(fields),
        args
    );
    const media = response?.Media;

    return {
        ...media,
    };
};