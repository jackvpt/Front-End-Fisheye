export async function getData(url) {
  try {
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error(
        `An error occured (${response.status}). Please try again later.`
      )
    }
    const data = await response.json()
    return data
  } catch (error) {
    alert(error)
  }
}
