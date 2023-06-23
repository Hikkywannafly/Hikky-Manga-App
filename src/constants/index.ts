import { DropDownItem } from "~/components/shared/DropDown"

export const GENRES_COMICS: DropDownItem[] = [
    { label: "Action", href: "Action" },
    { label: "Adventure", href: "Adventure" },
    { label: "Comedy", href: "Comedy" },
    { label: "Crime", href: "Crime" },
    { label: "Harem", href: "Crime" },
    { label: "Xem thêm", href: "more" },
]

export const RANKING_COMICS: DropDownItem[] = [
    { label: "Mới nhất", href: "new" },
    { label: "Đang hot", href: "hot" },
    { label: "Được yêu thích", href: "favorite" },
    { label: "Được xem nhiều", href: "view" },
]

export const REVALIDATE_TIME = 24 * 60 * 60 // 24 hours