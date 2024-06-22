import { useEffect, useState } from "react";
// import { apiUrl } from "./ConnectionAPI"

export default function GetAllCategory() {
  const [data, setData] = useState([])
  const url = 'https://localhost:7101/api/Category/GetAllCategories'

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(json => {
        console.log("json", json)
        setData(json)
      })
      .catch(e => {
        console.log("e", e)
      })
  }, [])

  return data;
}
