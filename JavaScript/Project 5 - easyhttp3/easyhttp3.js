/**
 * 
 * @version 3.0.0
 * @author Omer G
 * @license MIT 
 * 
 * 
 */

class easyHTTP3 {

  async get(url){
    const response = await fetch(url);

    const resData = await response.json();

    return resData;
  }

  async post(url,data){
      const response = await fetch(url,{
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const resData = await response.json();

      return resData;
  }

  async put(url,data){
      const response = await fetch(url,{
        method:'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body:JSON.stringify(data)
      });

      const resData = await response.json();

      return resData;
  }

  async delete(url){
      const response = await fetch(url,{
        method: 'DELETE'
      });

      const resData = await 'Deleted Successfully';

      return resData;
  }
}