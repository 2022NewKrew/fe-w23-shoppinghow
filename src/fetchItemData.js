/**
 * @returns {Promise.<Object.<number, string>>}
 */
export default async function fetchItemData(){
  const itemDataUrl="/json/items.json";
  const itemData=await (await fetch(itemDataUrl)).json();
  return itemData;
}
