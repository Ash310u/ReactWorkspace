import axios from 'axios'

// Using axios to fetch data from unsplash api
const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID zmzXBsTDkTUg4Nvm01bPJOp8OhwVD6WhMJmpPnz3hG8'
        },
        params: {
            query: term
        }
    })
    console.log(response.data.results)
    return response.data.results
}

export default searchImages