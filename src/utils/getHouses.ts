import { cache } from 'react'
import 'server-only'

export const preload = (id: string) => {
    void getHouses()
}

export const getHouses = cache(async () => {
    const response = await fetch(`${process.env.API_BASE_URL}/houses`)

    if (!response.ok) {
        throw new Error('Error while fetching Houses data')
    }

    const data = await response.json()

    const linkHeader = response.headers.get('Link');
    let next, prev, first, last

    if (linkHeader) {
        next = linkHeader.split(',').find(link => link.includes('rel="next"'))?.split(';')[0].trim().slice(1, -1) || '';
        prev = linkHeader.split(',').find(link => link.includes('rel="prev"'))?.split(';')[0].trim().slice(1, -1) || '';
        first = linkHeader.split(',').find(link => link.includes('rel="first"'))?.split(';')[0].trim().slice(1, -1) || '';
        last = linkHeader.split(',').find(link => link.includes('rel="last"'))?.split(';')[0].trim().slice(1, -1) || '';
    }

    return {
        data,
        next,
        prev,
        first,
        last
    }
})