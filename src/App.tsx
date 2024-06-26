import "./styles.css";
import { useState } from "react";
import useInfiniteScroll, {
  ScrollDirection
} from "react-easy-infinite-scroll-hook";
import { createItems, loadMore } from "./lib/utils";

import { months } from "./lib/dictionaries";
import { Language } from "./lib/enums";
import YearTitle from "./lib/components/YearTitle";

export default function App() {
  const [data, setData] = useState(createItems());
  const [isLoading, setIsLoading] = useState(false);

  const storedLan: string | null = localStorage.getItem('language')

  const lanSelected: Language = storedLan ? Language[Language[parseInt(storedLan)] as keyof typeof Language] : Language.English
  const mn = months[lanSelected]


  const [year, setYear] = useState(new Date().getFullYear() + 1);
  const [yearHead, setyearHead] = useState(2024);

  window.addEventListener("wheel", e => {
    let list = document.getElementById("calendar-container")

    if (list) {
      e.deltaY === 100 ? list.scrollLeft += 5 : list.scrollLeft -= 5

      if (list.scrollLeft < (366 * 5)) {
        setyearHead(2024)

      } else {
        setyearHead(2025)
      }
    }


  });





  const next = async (direction: ScrollDirection) => {
    try {

      setYear(year + 1);

      setIsLoading(true);
      const newData = await loadMore(year);

      setData((prev) =>
        direction === "right" ? [...prev, ...newData] : [...prev, ...newData]
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

    <div id="calendar-container" ref={ref} className="flex">
      <YearTitle year={yearHead} />

      {data.map((v, i) => (
        <div key={i + "-" + v.year} >
          <div className="yearHead">

          </div>
          <div className="month flex">
            {v.months.map((days, month) => (
              <div key={month + "-month"}>
                <b className="month-name">{mn[month]}</b>
                <div className="day-container">
                  {days.map((day, id_day) => (
                    <div className="day" key={id_day}>

                      <div>{ }<br></br>
                        {day}</div>
                      <span>{Math.floor(Math.random() * 6) > 3 ? <div className="event">Evnt</div> : <div className=""> +</div>}</span>
                      <span>{Math.floor(Math.random() * 6) > 3 ? <div className="event">Evnt</div> : <div className=""> +</div>}</span>

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