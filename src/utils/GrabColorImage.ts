
// get image data

export const getImageData = (image: any) => {
    const canvas = document.createElement("canvas");
    canvas.width = image.width;
    canvas.height = image.height;
    const ctx = canvas.getContext("2d");
    // @ts-ignore
    ctx.drawImage(image, 0, 0);
    // @ts-ignore
    return ctx.getImageData(0, 0, image.width, image.height);

}

export const grabColorImage = (image: any) => {

}