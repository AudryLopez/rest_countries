const countries = async (country:string) => {
    const { API_COUNTRIES } = process.env
    const response = await fetch(`${API_COUNTRIES}${country}`);
    return response.json()
}

export default countries;