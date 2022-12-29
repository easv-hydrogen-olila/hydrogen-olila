export function getVendorFromTitle (title:string) {
    let splittedString = title.split(/[ -]/)
    const vendor = splittedString[0]
    splittedString.shift()
    const productTitle = splittedString.join(' ')

    return  {
        vendor,
        productTitle
    }
}

export function getUrlHandle(url:string){
    let urlArray = url.split('/')
    const handle = urlArray[urlArray.length-1] == '' ? '#': urlArray[urlArray.length-1]

    return handle
}