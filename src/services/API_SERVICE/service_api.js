import axios from 'axios';

export default async function getResources(url) {
  const { data } = await axios.get(url);
  /* console.log(data); */
  return data;
}
