import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export const BookmarkCard = (props) => {
    const{name,time}=props;
	const sumArray=(time)=> {
  const ourArray = time;
  let sum = 0;

  for (let i = 0; i < ourArray.length; i += 1) {
    sum += ourArray[i];
  }
  
  return sum;
}
	
	return (
	<div className="container-fluid">
      <div className="bg-info bg-opacity-25 fw-bold  border border-info rounded">
        <p className="fs-5 pt-3 text-center">
          Spent Time On Read {sumArray(time)} : Min
        </p>
      </div>

      <div className="bg-info bg-opacity-25 mt-4 mb-4 p-3 border border-info rounded">
        <p className="fs-5 fw-bold">Bookmarked Blogs : {name.length}</p>
        <div className="bg-white rounded p-3">
          <p className="fs-5 fw-semibold">{name}</p>
        </div>
      </div>
    </div>
	);
}

