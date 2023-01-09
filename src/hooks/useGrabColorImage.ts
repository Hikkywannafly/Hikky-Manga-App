// @ts-ignore
import useImageColor from 'use-image-color';

type GrabColorProps = {
    url?: string,
    nubmer?: number
}
const GrabColorImage = (

) => {
    const { colors } = useImageColor('https://kyoto-manga-proxy-5niz.onrender.com/proxy?url=http://www.nettruyenme.com&src=https://st.ntcdntempv3.com/data/comics/235/thanh-guom-diet-quy.jpg', { cors: true, colors: 2 })

    return colors;
}

export default GrabColorImage;