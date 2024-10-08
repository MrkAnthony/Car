

export const carImageUrl = async (manufacturer, year, model) => {
    const url = new URL(import.meta.env.VITE_CAR_IMAGE_API_URL);

    url.searchParams.append("customer", import.meta.env.VITE_CAR_IMAGE_CUSTOMER);
    url.searchParams.append('make', manufacturer);
    url.searchParams.append('modelFamily', model.split(' ')[0]);
    url.searchParams.append('modelYear', year);
    url.searchParams.append("angle", "front");
    url.searchParams.append("zoomType", "standard");
    console.log("Generated Car Image url: ", url.toString());

    return url.toString()
}

