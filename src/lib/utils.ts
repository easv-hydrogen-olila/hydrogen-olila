export function getVendorFromTitle (title:string) {
    let splittedString = title.split(' ')
    const vendor = splittedString[0]
    splittedString.shift()
    const productTitle = splittedString.join(' ')

    return  {
        vendor,
        productTitle
    }
}