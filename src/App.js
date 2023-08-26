import React, { useState } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'



const App = () => {
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <BrowserRouter>
        <LoadingBar
          color='#f11946'
          height={3}
          progress={progress}

        />
        <Navbar />

        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} key="general" pageSize={6} country="in" con="India" category="general" />} />
          <Route exact path="/business" element={<News setProgress={setProgress} key="business" pageSize={6} country="in" con="India" category="business" />} />
          <Route exact path="/entertainment" element={<News setProgress={setProgress} key="entertainment" pageSize={6} country="in" con="India" category="entertainment" />} />
          <Route exact path="/health" element={<News setProgress={setProgress} key="health" pageSize={6} country="in" con="India" category="health" />} />
          <Route exact path="/science" element={<News setProgress={setProgress} key="science" pageSize={6} country="in" con="India" category="science" />} />
          <Route exact path="/sports" element={<News setProgress={setProgress} key="sports" pageSize={6} country="in" con="India" category="sports" />} />
          <Route exact path="/technology" element={<News setProgress={setProgress} key="technology" pageSize={6} country="in" con="India" category="technology" />} />
          <Route exact path="/india" element={<News setProgress={setProgress} con="India" key="in" pageSize={6} country="in" category="general" />} />
          <Route exact path="/usa" element={<News setProgress={setProgress} con="Usa" key="usa" pageSize={6} country="us" category="general" />} />
          <Route exact path="/japan" element={<News setProgress={setProgress} con="Japan" key="jp" pageSize={6} country="jp" category="general" />} />

        </Routes>
      </BrowserRouter>



    </div>
  )

}

export default App;

