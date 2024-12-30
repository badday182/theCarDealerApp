export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL

export const getMakesUrl = () => 
  `${API_BASE_URL}/GetMakesForVehicleType/car?format=json`

export const getModelsUrl = (makeId, year) => 
  `${API_BASE_URL}/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`