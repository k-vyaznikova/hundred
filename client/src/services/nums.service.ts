import { SERVER_URL } from './../utils/constants';
import {Num} from './../types/types';



class NumsService {
  baseURL = SERVER_URL;

  async getNums(limit = 100): Promise<any[]> {
    try {
      
      const response: Response = await fetch(this.baseURL + '/api/nums', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        credentials: 'include',
        mode: 'cors'
      })
      console.log(response)
      const numsArray: any[] = await response?.json()
      return numsArray
    } catch (error) {
      return null
    }
  }

  
}

export default new NumsService() as NumsService;
