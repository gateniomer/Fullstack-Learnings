/**
 * 
 * @version 2.0.0
 * @author Omer G
 * @license MIT 
 * 
 * 
 */

class easyHTTP2 {

  get(url){
    // // 1.Promise Object
    // console.log(fetch(url));
    // // 2. Result of Promise object (Response Object)
    // fetch(url).then(res => console.log(res));
    // // 3. Parse Body Text of Response object (Promise Object)
    // fetch(url).then(res => console.log(res.json()));
    // // 4. Data from Result of Promise object
    // fetch(url).then(res => res.json()).then(data => console.log(data));

    // // asynchronous way
    // fetch(url)
    // .then(res => res.json())
    // .then(data => data)
    // .catch(error => error);

    //synchronous
    return new Promise((resolve,reject) => {
      fetch(url)
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(error => reject(error));
    })
  }
}