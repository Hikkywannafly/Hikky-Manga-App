
// import { SupabaseQueryFunction, SupabaseQueryOptions } from "@/utils/supabase";
import { User } from "@supabase/gotrue-js";
import { QueryKey } from "react-query";
import { Media, MediaTitle as ALMediaTitle, MediaType } from "./anilist";

export interface MediaTitle extends Partial<ALMediaTitle> {
    [key: string]: string;
}


export type MediaDescription = Record<string, string>;

export type SourceConnection = {
    id: string;
    sourceId: string;
    sourceMediaId: string;
    mediaId: number;
    source: Source;
    created_at?: string;
    updated_at?: string;
};

export interface AnimeSourceConnection extends SourceConnection {
    episodes: Episode[];
}

export interface MangaSourceConnection extends SourceConnection {
    chapters: Chapter[];
}

export type Source = {
    id: string;
    name: string;
    locales: string[];
    addedUserId?: string;
    addedUser?: AdditionalUser;
    isCustomSource: boolean;
};

export type Video = {
    fonts: Attachment[];
    subtitles: Attachment[];
    video: FileInfo;
    episodeId: string;
    userId: string;
    hostingId: string;
};



export type Chapter = {
    name: string;
    sourceConnectionId?: string;
    sourceConnection?: MangaSourceConnection;
    sourceId: string;
    sourceChapterId: string;
    sourceMediaId: string;
    source: Source;
    slug: string;
    images: {
        images: Attachment[];
    }[];
    published: boolean;
};
lientData ?: () => void;
}

export interface Read {
    media: Media;
    mediaId?: number;
    chapterId?: string;
    chapter: Chapter;
    userId: string;
    updated_at?: string;
    created_at?: string;
}



export type ImageSource = {
    image: string;
    useProxy?: boolean;
    proxy?: Proxy;
};

export type Translation = {
    locale: string;
    title: string;
    description: string;
    mediaId?: number;
    mediaType?: string;
};

