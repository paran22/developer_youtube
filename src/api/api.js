import axios from "axios";

export async function getVideos(keyword) {
  const items = await axios
    .get("data/dummy.json")
    .then((res) => res.data.items);
  console.log(items);
  return items;
}
