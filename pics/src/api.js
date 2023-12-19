import axios from 'axios'

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID zmzXBsTDkTUg4Nvm01bPJOp8OhwVD6WhMJmpPnz3hG8'
        },
        params: {
            query: term
        }
    })

    console.log(response)
    return response
}

export default searchImages