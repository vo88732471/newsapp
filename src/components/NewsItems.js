import React from 'react'

const NewsItems = (props) => {
  
        let { title, discription, imageUrl, newsUrl, author, date, source } = props;
        return (
            <div>
                <div className="card" >
                    <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0' }}>
                        <span className="badge  bg-danger" >
                            {source}
                        </span>
                    </div>
                    <img src={!imageUrl ? "https://t4.ftcdn.net/jpg/05/24/79/53/360_F_524795399_deNrm5E4w2YDrx0JRP8mTe89ghUMvIoC.jpg" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title} </h5>
                        <p className="card-text">{discription}</p>
                        <p className="card-text" style={{color:"#663319"}}><small className="text-body-info">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    
}
export default NewsItems;
