const getZoomPercentage = (number: number) => {
    let zoomInteger = number.toFixed(2).replace(".", "")
    if (zoomInteger[0] === "0") zoomInteger = zoomInteger.slice(1)
    return `${zoomInteger}%`
}
export default getZoomPercentage
