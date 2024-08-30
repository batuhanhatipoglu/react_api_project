import axios from 'axios';
import './App.css';
import SearchHeader from './SearchHeader';

function App() {
 
  const searchImages = (term)=>{
    const response = axios.get('https://api.unsplash.com/search/photos',{
      headers: {
        Authorization:'Client-ID LBLQX2dlfbmJfiVVBouXmxqHwGjbx28BA6jpZjkEuu8'
      },
      params:{
        query:term
      }
    })
    };
    const handleFormSubmit = (term)=>{
 debugger;
 console.log(term);
 searchImages(term);
 };
  return (
    <div className="App">
      <SearchHeader search={handleFormSubmit}/>
    </div>
  );
}

export default App;
