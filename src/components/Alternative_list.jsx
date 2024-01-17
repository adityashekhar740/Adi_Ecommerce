import axios from "axios";
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

const Alternative_list = ({ category }) => {
  const [alternatives, setAlternatives] = React.useState([]);

  useEffect(() => {
    const fetdata = async () => {
      const raw = await axios.get(
        `https://dummyjson.com/products/category/${category}`
      );
      setAlternatives(raw.data.products);
    };
    fetdata();
  }, []);
  
  return (
    <div className="flex gap-10  overflow-y-auto w-[90%] mx-auto mt-[40px] ">
      {alternatives.length
        ? alternatives.map((i, id) => (
            <NavLink to={`/alternative/${i.id}`} >
                <div className="flex flex-col gap-1 " key={id}>
              <div className="w-[355px] h-[345px] border-solid border-[1px] border-gray-500 ">
                <img
                  className="w-[100%] h-[100%] object-fill "
                  src={i.thumbnail}
                  alt=""
                />
              </div>
              <div className="flex justify-between px-1 ">
                <h1 className="text-[1.2rem]" >{i.title}</h1>
                <h1>{i.rating}/5.0</h1>
              </div>
              <div className="pl-1 text-[red] font-semibold  " > ₹ {i.price*84}</div>
            </div>
            </NavLink>
          ))
        : null}
    </div>
  );
};

export default Alternative_list;
