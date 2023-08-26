import React, { useEffect,useState } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner'
import propTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'



const News = (props) => {
   
     const [articles, setArticles] = useState([]);
     const [totalResults, setTotalResults] = useState(0);
     const [loading, setLoading] = useState(true);
     const [page, setPage] = useState(1);

     

      const updateNews = async () => {
        
        props.setProgress(10);
        let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=33608bd22fca4419a7d7a43f6db0705b&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true);
        
            let data = await fetch(url);
           props.setProgress(50);
        let parsedData = await data.json();
        props.setProgress(70);
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults);
        setLoading(false)
        props.setProgress(100);
       
      }

      useEffect(() => {
        updateNews();
        // eslint-disable-next-line
      }, [])
      

      const fetchMoreData = async () => {
        let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=33608bd22fca4419a7d7a43f6db0705b&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page+1);
            let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
      }

  
    return (
      <>
        <h1 className='text-center' style={{marginTop:"70px"}}>Top Headlines of {props.category} from {props.con} </h1>
       {loading &&<Spinner/>} 

       <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
          
        >
          
        <div className="container">
        <div className="row ">
           {articles.map((element) => {
                return <div className="col-md-4 my-3" key={element.url}>
                <NewsItems title={element.title} discription={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                </div>
            })}
           
        </div>
        </div>
        </InfiniteScroll>
      </>
    )
  
}

News.defaultProps  = {
  country : 'in',
  pageSize: 6,
  category : 'general',
}  
News.propTypes  = {
  country : propTypes.string,
  pageSize : propTypes.number,
  category : propTypes.string,
}  
export default News;