import axios from "axios";

/**
 * @param {number} itemId
 * @param {string} url
 * @returns {Promise.<any>}
 */
function postRequestToUrl(itemId, url){
  return new Promise((resolve, reject)=>{
    axios.post(url, {
      itemId: itemId
    })
      .then(()=>{
        resolve();
      })
      .catch((reason)=>{
        reject(reason);
      });
  });
}

/**
 * @param {string} url
 * @returns {Promise.<any>}
 */
function getRequestToUrl(url){
  return new Promise((resolve, reject)=>{
    axios.get(url)
      .then(({data})=>{
        resolve(data);
      })
      .catch((reason)=>{
        reject(reason);
      });
  });
}

export {getRequestToUrl, postRequestToUrl};
