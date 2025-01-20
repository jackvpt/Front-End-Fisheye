/**
 * GET DATA FROM URL
 * @param {string} url 
 * @returns 
 */
export default async function getData(url) {
  try {
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error(
        `An error occurred (${response.status}). Please try again later.`
      )
    }

    const data = await response.json()
    return data // Return the fetched data
  } catch (error) {
    console.error("Error fetching data from:", url, error) // Log the error for debugging
    alert(error.message) // Alert the error message
    return null // Return null
  }
}
