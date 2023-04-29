import {Store} from '../core/heropy'

const store = new Store({
  searchText : '',
  page:1,
  movies:[],
  movie:{},
  pageMax:1,
  loading:false,
  message:'Search for the movie title!'
})

export default store
export const searchMovies = async page => {
  store.state.loading=true
  store.state.page = page
  if (page===1){
    store.state.movies = []
    store.state.message=''
  }
 try{
  const res = await fetch('/api/movie',{
    method:'POST',
    body:JSON.stringify({
      title:store.state.searchText,
      page
    })
  })
  const { Search,totalResults,Response,Error } = await res.json()
  if(Response==='True'){
  store.state.movies = [
    ...store.state.movies,
    ...Search
   ]//1p + 2p 합쳐져서 다시 movies의 정보에 들어가짐(누적가능)
   store.state.pageMax = Math.ceil(Number(totalResults)/10)
 }else{
  store.state.message = Error
 }
 }catch(error){
  console.log('searchmovies eror:',error)
 }finally{
  store.state.loading = false
 }
} 

export const getMovieDetails = async id =>{
  try{
    const res = await fetch('/api/movie',{
      method:'POST',
      body: JSON.stringify({
        id
      })
    })

    store.state.movie = await res.json()
  }catch(error){
    console.log('getMovieDetails error:',error)
  }
}