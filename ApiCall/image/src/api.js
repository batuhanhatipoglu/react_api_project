import  axios  from 'axios';
const searchImages = async (term)=>{
    const response= await axios.get('https://api.unsplash.com/search/photos',{
       headers:{
         Authorization:'Client-ID LBLQX2dlfbmJfiVVBouXmxqHwGjbx28BA6jpZjkEuu8'
       },
       params:{
         query:term 
       },
     });
     debugger;
     return response.data.results;
     };

     export default searchImages;