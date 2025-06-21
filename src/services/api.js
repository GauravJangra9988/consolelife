const API_URL = 'https://consolelife-backend.onrender.com/api' // Change this to your actual API URL

export const submitStory = async (storyData) => {
  try {
    const response = await fetch(`${API_URL}/story`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(storyData),
    })

    if (!response.ok) {
      throw new Error('Failed to submit story')
    }

    return await response.json()
  } catch (error) {
    throw error
  }
}


export const getStories = async () =>{
  try{
    const response = await fetch(`${API_URL}/getstories`,{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    if(!response.ok){
      throw new Error('Failed to fetch data')
    }

    return await response.json();
  }
  catch(error){
    console.error('Error fetching data', error )
    throw error;
  }
}
