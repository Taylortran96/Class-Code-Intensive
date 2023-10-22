import * as React from "react";
import news from "../Data/datahotnews.json";

export default function HotNewsLists({time, text}) {
  return (
    <div>
      {news.map((data) => {
        return(
          <table className="scrollable-list">
            <tr>
              <th className="time">{data.time}</th>
              <th className="text ">{data.text}</th>
            </tr>
          </table>
        )
      })}
    </div>
  );
}

