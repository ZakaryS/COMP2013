import './App.css'
import Card from "./Components/Card";

function App() {
  return (
    <>
      <h1>Resorts Lite</h1>
      <hr></hr>
      <div className="main-container">
        <Card Image="/images/1.jpg" Country="Indonesia" Hotel="Gili Air Hotel" Rating="4.8" Price="589"/>
        <Card Image="/images/2.jpg" Country="Seychelles" Hotel="Hilton Resort" Rating="4.2" Price="629"/>
        <Card Image="/images/3.jpg" Country="US Virgin Islands" Hotel="Goa Resort" Rating="3.5" Price="485"/>
        <Card Image="/images/4.jpg" Country="Bahamas" Hotel="Kuredu Resort" Rating="4.1" Price="729"/>
        <Card Image="/images/5.jpg" Country="Mauritius" Hotel="Trou D'eau Douce" Rating="4.9" Price="877"/>
        <Card Image="/images/6.jpg" Country="Bermuda" Hotel="Staniel Cay Hotel" Rating="3.2" Price="365"/>
      </div>
    </>
  )
}

export default App;