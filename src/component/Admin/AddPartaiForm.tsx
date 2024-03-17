import React from "react";
import monkeyking from "../../assets/img/monkeyking.png";
import { useNavigate } from "react-router-dom";
import IPartai from "../../interfaces/AuthPartai";
import { useState } from "react";

const AddPartaiForm: React.FC = () => {
  const navigate = useNavigate();

  const [partai, setPartai] = useState<IPartai>({
    name: "",
    number: 0,
    chairman: "",
    vismis: [],
    address: "",
    image: "/img/monkey-table.png",
    paslon: 2,
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = event.target;
    setPartai({
      ...partai,
      [name]: name === "vismis" ? JSON.parse(value) : value,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/v1/partai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(partai),
      });

      const data = await response.json();
      console.log(data);

      navigate("/partai");
    } catch (error) {
      throw error;
    }
  };

  return (
    <div className="container">
      <h1
        className="text-bottomvote text-5xl font-black text-center mt-16"
        onClick={() => navigate("/partai")}
      >
        ADD PARTAI
      </h1>
      <div className="lg:flex lg:justify-center lg:gap-12  ">
        <div className="flex justify-center ">
          <img
            src={monkeyking}
            alt=""
            className="lg:w-368 w-[345px] h-523 radius-xl mt-14"
          />
        </div>
        <div className="flex justify-center">
          <form onSubmit={handleSubmit} className="flex flex-col">
            <label
              htmlFor="username"
              className="text-2xl font-bold text-logincolor mt-10"
            >
              Nama
            </label>
            <input
              required
              type="text"
              name="name"
              onChange={handleChange}
              className="px-6 lg:w-478 lg:h-70 w-[330px] h-[40px]  border-logincolor border-2 rounded-2xl mt-3"
            />
            <label
              htmlFor="username"
              className="text-2xl font-bold text-logincolor mt-5"
            >
              Ketua Umum
            </label>
            <input
              required
              type="text"
              name="chairman"
              onChange={handleChange}
              className="px-6  lg:w-478 lg:h-70 w-[330px] h-[40px] border-logincolor border-2 rounded-2xl mt-3"
            />
            <label
              htmlFor="username"
              className="text-2xl font-bold text-logincolor mt-5"
            >
              Visi & Misi
            </label>
            <textarea
              required
              name="vismis"
              onChange={handleChange}
              className=" px-6  py-6 lg:w-478 lg:h-139 w-[330px] h-[110px] border-logincolor border-2 rounded-2xl mt-3"
            ></textarea>
            <label
              htmlFor="username"
              className="text-2xl font-bold text-logincolor mt-5"
            >
              Alamat
            </label>
            <input
              required
              type="text"
              name="address"
              onChange={handleChange}
              className="px-6 lg:w-478 lg:h-139 w-[330px] h-[110px] border-logincolor border-2 rounded-2xl mt-3"
            />
            <button className="lg:w-478 lg:h-68 w-[330px] h-[40px] bg-bottomvote font-bold lg:text-3xl text-2xl text-white rounded-2xl mt-10">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddPartaiForm;
