import "./styles.css";
import { useState } from "react";
import useInfiniteScroll, {
  ScrollDirection
} from "react-easy-infinite-scroll-hook";
import { createItems, loadMore } from "./lib/utils";

import { Calendar } from "./lib/types";
import { months } from "./lib/dictionaries";
import { Language } from "./lib/enums";

export default function App() {
  const [data, setData] = useState(createItems());
  const [isLoading, setIsLoading] = useState(false);

  const storedLan:string | null = localStorage.getItem('language')

  const lanSelected:Language = storedLan ? Language[Language[parseInt(storedLan)] as keyof typeof Language] : Language.English
  const mn = months[lanSelected]
  

  let actualYear:number = new Date().getFullYear();

  window.addEventListener("wheel", e => {
    let list = document.getElementById("calendar-container")

    if(list){
      e.deltaY === 100 ?  list.scrollLeft += 5 : list.scrollLeft -= 5
    }
  });
  
  
  const next = async (direction: ScrollDirection) => {

    try {

      actualYear = actualYear + 1

      setIsLoading(true);
      const newData = await loadMore(actualYear);

      setData((prev) =>
        direction === "right" ? [...newData, ...prev] : [...prev, ...newData]
      );

      console.log(data)

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

    <div id="calendar-container" ref={ref}>
      {data.map((v, i)=> (
        <div key={i+"-"+v.year} >
          <div>
            {v.year}
          </div>
          
          <div className="month">
            {v.months.map((days, month) => (
              <div key={month + "-month"}>
                <b>{mn[month]}</b>
                <div className="day-container">
                  {days.map((day, id_day) => (
                    <div className="day" key={id_day}>
                    
                      <div>{day}</div>
                      <span>{Math.floor(Math.random()*6) > 3 ? <div className="event">Evnt</div> : <div className=""> +</div>}</span>
                      <span>{Math.floor(Math.random()*6) > 3 ? <div className="event">Evnt</div> : <div className=""> +</div>}</span>

                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {isLoading && <div>Loading...</div>}
    </div>
  );
}