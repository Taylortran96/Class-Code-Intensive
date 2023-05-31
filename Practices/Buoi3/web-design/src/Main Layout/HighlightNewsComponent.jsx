import HighlightNewsLayout from "../Components/MainNews/highlightnews";
import data from "../Components/Data/datanews.json";
// import { useState } from "react";

// let detail = false;
// const [detail, setdetail ] = useState (false);

// const viewDetail = () =>{
//     console.log("viewDetail => true");
//     setdetail (true);

//     console.log(detail);
// }

export default function HightlightNewsLayout(){
    let count1 = 0;
    let count2 = 0;

    return(
        <div className="highlight-news">
            {data.map(element => {
                if(element.type == 0) {
                    let data1 = {
                        imageUrl: element.imageUrl,
                        imgWidth: 300,
                        Customlayout: "column",
                        title: element.title,
                        gridColumn: "1/5", 
                        gridRow: "1/4",
                        
                    }
                    return (
                        <HighlightNewsLayout 
                        viewDetail={viewDetail} 
                        data1= {data1}/>
                    )
                }
                if(element.type == 1) {
                    let data2 = {
                        imageUrl: element.imageUrl,
                        imgWidth: 200,
                        Customlayout: "column",
                        title: element.title,
                        gridColumn: "5/7", 
                        gridRow: "1/3",
                        
                    }
                    return (
                        <HighlightNewsLayout 
                        viewDetail={viewDetail} 
                        data2= {data2}/>
                    )
                }
                if(element.type == 2) {
                    count1+=1;
                    let data3 = {
                        imageUrl: element.imageUrl,
                        imgWidth: 100,
                        Customlayout: "row",
                        title: element.title,
                        gridColumn: "5/7", 
                        gridRow: `${2+count1}/${3+ count1++}`,
                    }
                    return (
                        <HighlightNewsLayout 
                        viewDetail={viewDetail} 
                        data3= {data3}/>
                    )
                }
                if(element.type == 3) {
                    count2+=1;
                    let data4 = {
                        imageUrl: element.imageUrl,
                        imgWidth: 200,
                        Customlayout: "row",
                        title: element.title,
                        gridColumn: `${count2-1}/${count2}`, 
                        gridRow: "5/7",
                    }
                    return(
                        <HighlightNewsLayout 
                        viewDetail={viewDetail} 
                        data4= {data4}/>
                    )
                }
                
            })}
        </div>


    )
}

/* {detail ? (
    <div>
        <h2>Thông tin chi tiết</h2>
    </div>
): (
    <div>
        <h2>Không đúng</h2>
    </div>
)
} */