import "./styles.css";
import { useState } from "react";
import useInfiniteScroll, {
  ScrollDirection
} from "react-easy-infinite-scroll-hook";
import { createItems, loadMore } from "./lib/utils";

export default function App() {
  const [data, setData] = useState(createItems());
  const [isLoading, setIsLoading] = useState(false);

  
  window.addEventListener("wheel", e => {
    let list = document.getElementById("List")

    if(list){
      e.deltaY === 100 ?  list.scrollLeft += 5 : list.scrollLeft -= 5
    }
   
  });
  
  
  const next = async (direction: ScrollDirection) => {
    console.log("direction")

    try {
      setIsLoading(true);
      const newData = await loadMore();

      setData((prev) =>
        direction === "right" ? [...newData, ...prev] : [...prev, ...newData]
      );
    } finally {
      setIsLoading(false);
    }
  };

    const ref = useInfiniteScroll<HTMLInputElement>({
      next,
      columnCount: data.length,
      hasMore: { right: true },
      scrollThreshold: 0.1

    });
  
  return (
    <div>
      <div
        ref={ref}
        id="List">
        {data.map((key, index) => (
          <div className="item" key={index}>
            {key} - {index}
            
            {Math.floor(Math.random()*6) > 3 ? <div className="event">Evnt</div> : ""}

          </div>
        ))}
      </div>
      {isLoading && <div>Loading...</div>}
    </div>
  );
}