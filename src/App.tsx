import "./styles.css";
import { useState } from "react";
import useInfiniteScroll, {
  ScrollDirection
} from "react-easy-infinite-scroll-hook";
import { createItems, loadMore } from "./lib/utils";

import {useRef} from "react";
export default function App() {
  const [data, setData] = useState(createItems());
  const [isLoading, setIsLoading] = useState(false);

  const next = async (direction: ScrollDirection) => {
    console.log(direction)

    try {
      setIsLoading(true);
      const newData = await loadMore();

      setData((prev) =>
        direction === "up" ? [...newData, ...prev] : [...prev, ...newData]
      );
    } finally {
      setIsLoading(false);
    }
  };

   let ref = useRef<HTMLInputElement>(null)

    ref = useInfiniteScroll({
      next,
      rowCount: data.length,
      hasMore: { down: true }
    });
  
  return (
    <div>
      <div
        ref={ref}
        className="List">
        {data.map((key) => (
          <div className="Row" key={key}>
            {key}
          </div>
        ))}
      </div>
      {isLoading && <div>Loading...</div>}
    </div>
  );
}