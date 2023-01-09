// @ts-ignore
import useImageColor from 'use-image-color';

type GrabColorProps = {
    url: string,
    nubmer: number
}
const useGrabColorImage = (
    {
        url, nubmer
    }: GrabColorProps
) => {
    const { colors } = useImageColor(url, { cors: true, colors: nubmer })

    return colors;
}

export default useGrabColorImage;