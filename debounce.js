const debounce = (cb, delay) => {
  let stHandler;
  return (...args1) => {
    const ctx = this;
    clearTimeout(stHandler);
    stHandler = setTimeout(() => cb.apply(ctx, args1), delay);
  }
}

const search = (...arg) => console.log('search called: ', arg);
const searchWrapper = debounce(search, 3000);
searchWrapper('h1', 1, 2, 3);
searchWrapper('h111');
searchWrapper('h123');
searchWrapper('h122234');
searchWrapper('h12345');
searchWrapper('h123456');
