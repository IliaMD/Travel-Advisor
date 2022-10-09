import axios from "axios";

export const getPlacesData = async (type, sw, ne) => {
    try {
const {data : {data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
  params: {
    bl_latitude: sw.lat,
    tr_latitude: ne.lat,
    bl_longitude: sw.lng,
    tr_longitude: ne.lng,
  },
  headers: {
    'X-RapidAPI-Key': 'c3ff257a8amshfdec0ad68a4bd31p1972a5jsn57a4d1bc6857',
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
  }
});

return data;
    } catch (error) {
console.log(error)
    }
}