import { cache } from 'react'
import 'server-only'

export const preload = (id: string) => {
    void getHouses()
}

export const getHouses = async (page?: string) => {
    
    const pageSize = 10
    const url = `${process.env.API_BASE_URL}/houses?pageSize=${pageSize}&page=${page ?? 1}`

    const response = await fetch(url)

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
        next: next && new URL(next).searchParams.get('page'),
        prev: prev && new URL(prev).searchParams.get('page'),
        first: first && new URL(first).searchParams.get('page'),
        last: last && new URL(last).searchParams.get('page'),
    }
}