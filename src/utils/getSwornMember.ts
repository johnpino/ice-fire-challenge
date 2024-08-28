import 'server-only'

const getSwormMember = async (id: string) => {
    const url = `${process.env.API_BASE_URL}/characters/${id}`

    const response = await fetch(url)

    if (!response.ok) {
        throw new Error('Error while fetching Sworn Member data')
    }

    const data = await response.json()

    return data
}

export default getSwormMember