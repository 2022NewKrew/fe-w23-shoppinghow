export const json2query = (json) => {
  if (!json) return '';
  return (
    '?' +
    Object.keys(json)
      .map((v) => `${v}=${json[v]}`)
      .join('&')
  );
};
