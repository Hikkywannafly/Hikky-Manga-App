import { Media } from "~/types/anilist";

export const slice_title = (title: any) => {
    return title.replace(/^a-zA-Z0-9 ]/g, '').toLowerCase().trim().replace(/\s/g, '-');

}
export const slug_title = (str: string) => {
    const from =
        "àáãảạăằắẳẵặâầấẩẫậèéẻẽẹêềếểễệđùúủũụưừứửữựòóỏõọôồốổỗộơờớởỡợìíỉĩịäëïîöüûñçýỳỹỵỷ";
    const to =
        "aaaaaaaaaaaaaaaaaeeeeeeeeeeeduuuuuuuuuuuoooooooooooooooooiiiiiaeiiouuncyyyyy";

    let newStr = str;

    for (let i = 0, l = from.length; i < l; i++) {
        newStr = newStr.replace(RegExp(from[i], "gi"), to[i]);
    }

    newStr = newStr
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\-]/g, "-")
        .replace(/-+/g, "-");

    return newStr;
};

export const createMediaDetailUrl = (media: Media) => {
    // @ts-ignore
    return `/manga/${media.id}/${slug_title(media.title.userPreferred)}`;

}
export const createTitleFromParam = (title: string) => {
    return title.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
};