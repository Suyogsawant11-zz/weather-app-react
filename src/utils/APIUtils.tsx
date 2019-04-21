
import { get } from './BaseMethods';


export async function fetchTodaysWeather(cityId:Number): Promise<any> {
  return get(`/`,{id:cityId}).then((response) => response.data);
}