export async function getPastriesLoader() {
    const res = await fetch('http://localhost:3000/pastries/')
    const pastries = await res.json()
    return { pastries }
}


export async function getPicturesLoader() {
    const res = await fetch('http://localhost:3000/pictures')
    const pictures = await res.json()
    return { pictures }
}