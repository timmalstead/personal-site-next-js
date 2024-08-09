export const isEven = (num: number): boolean => num % 2 === 0

export const floatingPointToPercentage = (float: number) => {
    let intString = float.toFixed(2).replace(".", "")
    if (intString[0] === "0") intString = intString.slice(1)
    return `${intString}%`
}
