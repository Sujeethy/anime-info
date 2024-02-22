import React, { useEffect, useState } from 'react';
import Navbar from './Navbar.js';
import Content from './Content.js';
import Cards from './Cards.js';

function App() {
  const [data, setData] = useState([]);
  const name=["Trending","Top Animes","Top Rating","Top Viewed","Comedy"]

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = [];

        for (let i = 1; i <= 5; i++) {
          const response = await fetch(`https://api.jikan.moe/v4/top/anime?page=${i}`);
          const jsonData = await response.json();

          // Check if the data is empty and retry after a delay
          if (!jsonData.data) {
            await new Promise(resolve => setTimeout(resolve, 2000));

            // Retry the request
            const retryResponse = await fetch(`https://api.jikan.moe/v4/top/anime?page=${i}`);
            const retryJsonData = await retryResponse.json();

            fetchedData.push(retryJsonData);
          } else {
            fetchedData.push(jsonData);
          }
        }

        setData(fetchedData);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <Content />
     
      {console.log("data", data)}
      {data.map((items,index) => (<Cards data={items} index={index} name={name[index]}/>))}
    </div>
  );
}

export default App;
