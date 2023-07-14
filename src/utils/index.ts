import { Media, Character } from "~/types/anilist";
import { VietNameseTitles } from "~/constants";
import { DropDownItem } from "~/components/shared/DropDown";
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
export const createCharacterDetailsUrl = (Character: Character) => {

    return `/character/${Character.id}/${slug_title(Character.name.userPreferred)}`
}

export const createTitleFromParam = (title: string) => {
    return title.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
};

export const TranslateGenres = (genres: string[]) => {
    genres = genres.map((genre) => {
        return VietNameseTitles[genre];
    }
    );
}

export const TranslateToVietNames = (genres: string[]) => {

}

// terminal
export const getHrefByLabel = (label: string, constants: DropDownItem[]): string | undefined => {
    const item = constants.find((item) => item.label === label);
    return item ? item.href : undefined;
}