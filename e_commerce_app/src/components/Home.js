import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Home = () => {
  const{isloading,data,loadingError}=useSelector((state)=>state.user);
 
  if(isloading){
    return <div>User data is loading please wait!!!</div>
  }else if(loadingError){
    return <div>User failed to load</div>
  }else if(data){
  return (
    <div>
      <h1>Hello {data.name.firstname}</h1>
        <h1>MyStore App</h1>
        <Link className="text-blue-600 underline" to="/products">Go to Products</Link>
        <br/>
        <Link className="text-blue-600 underline" to="/not-found">Go to Not found</Link>
    </div>
  )
  }else{
    return <div>User data is null please try again</div>
  }
}


export default Home;