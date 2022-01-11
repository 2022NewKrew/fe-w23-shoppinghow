/**
 * @callback Subscriber
 * @param {any} data
 * @returns {void}
 */

export default class Observable{
  constructor(){
    /** @type {Array.<Subscriber>} */
    this.subscribers=[];
    /** @type {any} */
    this.data;
  }

  /**
   * @param {Subscriber} subscriber
   */
  subscribe(subscriber){
    this.subscribers.push(subscriber);
    this.notify();
  }

  /**
   * @param {Subscriber} subscriber
   */
  unsubscribe(subscriber){
    this.subscribers=this.subscribers
      .filter((aSubscriber)=>aSubscriber!==subscriber);
  }

  notify(){
    this.subscribers.forEach((subscriber)=>subscriber(this.data));
  }
}
