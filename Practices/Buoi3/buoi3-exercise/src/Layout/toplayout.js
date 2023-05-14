import News from "../Components/news.component";
import from "../data/news.json"

function TopLayout(){
    return(
        <div className = "top-layout">
            {news.map(items =>{
                if(items.type == 0){
                    return(
                        <News imageUrl = {items.imageUrl} 
                        imageWidth={300} 
                        customLayout="column"
                        title = "abc" 
                        gridColumn="1/5" 
                        gridRow="1/4"/>
                    )
                }

                if(items.type == 1){
                    return(
                        <News imageUrl = {items.imageUrl} 
                        imageWidth={200} 
                        customLayout="column"
                        title = "abc" 
                        gridColumn="5/76" 
                        gridRow="1/3"/>
                    )
                }

                if(items.type == 2){
                    count1 += 1;
                    return(
                        <News imageUrl = {items.imageUrl} 
                        customLayout="column"
                        title = "abc" 
                        gridColumn="5/7" 
                        gridRow={${2+ count1}/${3 + count1}}/>
                    )
                }

                if(items.type == 3){
                    count2 += 2;
                    return(
                        <News imageUrl = {items.imageUrl} 
                        customLayout="column"
                        title = "abc" 
                        gridColumn={${1+ count2}/${2 + count2}} 
                        gridRow="5/7"/>
                    )
                }
            })}

        </div>
    )
        
}

export default TopLayout;