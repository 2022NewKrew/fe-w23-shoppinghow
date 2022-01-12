let currentObserver = null;

export const observe = fn => {
  currentObserver = fn;
  fn(); // 함수가 실행되는 동안에 get 함수가 불리면 해당 key의 observers set에 해당 fn이 등록되는 형식
  currentObserver = null;
}

export const observable = obj => {
  Object.keys(obj).forEach(key => {
    let _value = obj[key];
    const observers = new Set(); // Set으로 중복 등록 방지?

    Object.defineProperty(obj, key, {
      get () {
        if (currentObserver) observers.add(currentObserver);
        return _value;
      },

      set (value) {
        _value = value;
        observers.forEach(fn => fn());
      }
    })
  })
  return obj;
}