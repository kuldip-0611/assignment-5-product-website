
import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";

import { useNavigate, useParams } from "react-router-dom";
import {BsCurrencyDollar} from 'react-icons/bs';
import {MdOutlineStarOutline} from 'react-icons/md';
import {AiOutlinePercentage} from 'react-icons/ai';
import { apiCall } from "../../utils/apiCall";

const DetailPage = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const { id } = useParams();
  

  useEffect(()=>{
    if(isNaN(id)){
      navigate("/products");
    }
    const fetchData = async () => {
      const response = await apiCall(id);
      setData(response);
    }
    fetchData();
  })

  return (
    <>
      <div className="main-content row">
        <div className="product-images col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12 ">
          <Carousel className="m-5">
            {data.images
              ? data.images.map((item) => (
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={item}
                      alt="First slide"
                      key = {item.id}
                    /> 
                  </Carousel.Item>
                ))
              : "loading"}
          </Carousel>
        </div>
        <div className="details  col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12 mt-5">
          <div className="heading h1 text-center  mt-5 text-secondary ">
            <span>{data.title}</span>
          </div>
          <div className="text-dark h5 mt-3 font-italic text-center">
            <p>{data.description}</p>
          </div>
          <div className="d-flex  justify-content-center  align-items-center">
            <span className="h4 text-primary">Price : <span className="h4 text-secondary">{data.price}<BsCurrencyDollar color="green"/></span></span>
          </div>
          <div className="d-flex  justify-content-center mt-2 my-auto  align-items-center">
            <div>
            <span className="h4 text-primary">Ratting : </span>  
            </div> 
            <div className="my-auto">
            <span className="h4 text-secondary">{data.rating}<MdOutlineStarOutline color="green" /></span>
            </div>
          </div>
          <div className="d-flex justify-content-center mt-3 align-items-center">
            <span className="h4 text-primary">Category : <span className="h4 text-secondary">{data.category}</span></span>
          </div>
          <div className="d-flex justify-content-center mt-2 align-items-center">
            <span className="h4 text-primary">Brand : <span className="h4 text-secondary">{data.brand}</span></span>
          </div>
          <div className="d-flex justify-content-center mt-2 align-items-center">
            <span className="h4 text-primary">Discount : <span className="h4 text-secondary">{data.discountPercentage}<AiOutlinePercentage color="green" /></span></span>
          </div>
          
          
        </div>
      </div>
    </>
  );
};

export default DetailPage;
