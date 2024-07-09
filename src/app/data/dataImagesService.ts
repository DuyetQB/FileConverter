
type OptionProps = {
    fileFrom: string,
    fileTo: string
}

export const imagesServiceBox = (option: OptionProps) => {

    return {
        id: Math.random(),
        title: `Convert ${option.fileFrom.substring(0, 1).toLocaleUpperCase() + option.fileFrom.substring(1)} to ${option.fileTo.substring(0, 1).toLocaleUpperCase() + option.fileTo.substring(1)} - FilesConvert`,
        description: `Convert file ${option.fileFrom} to ${option.fileTo} online and free. Try with us now.`,
        slug: `${option.fileFrom}-to-${option.fileTo}`,
        imageUrl: ""
    }

}

export const optionImage = [
    {
        id: 1,
        name: "JPEG",
        value: "jpeg"
    },
    {
        id: 2,
        name: "PNG",
        value: "png"
    },
    {
        id: 3,
        name: "WEBP",
        value: "webp"
    },
    {
        id: 4,
        name: "AVIF",
        value: "avif"
    },
    {
        id: 5,
        name: "GIF",
        value: "gif"
    },
    {
        id: 6,
        name: "HEIC",
        value: "heic"
    },
    {
        id: 7,
        name: "TIF",
        value: "tif"
    },

]
