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

/**
 * Run debounce technique on given timeoutId,
 * and return a new timeoutId set on given callback.
 * @param {number} timeoutId timeout ID to be erased.
 * @param {Function} callback callback function to be set timeout.
 * @param {number} timeoutMs milliseconds that callback function will be called in.
 * @returns {number} new timeout ID set on given callback function.
 */
function debounce(timeoutId, callback, timeoutMs){
  clearTimeout(timeoutId);
  return setTimeout(callback, timeoutMs);
}

export {debounce, getRequestToUrl, postRequestToUrl};
