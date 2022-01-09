// 요구사항에 맞는 api를 가져옴
export const getApi = async (url) =>{
  try {
    const response = await fetch(url);
    console.log(response);
    if (response.ok) {
      return response.json();
    }
    throw response.statusText;
  } catch (error) {
    console.log(error);
  }
};
