import React from "react";
import monkeyking from "../../assets/img/monkeyking.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import IPaslon from "../../interfaces/AuthPaslon";
const AddPaslonForm: React.FC = () => {
  const navigate = useNavigate();

  const [formPaslon, setPaslon] = useState<IPaslon>({
    name: "",
    number: 0,
    coalition: [],
    vismis: [],
    image: "/img/monkey-table.png",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = event.target;
    setPaslon({
      ...formPaslon,
      [name]: name === 'vismis'? JSON.parse(value) : value,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/v1/paslon", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formPaslon),
      });

      const data = await response.json();
      console.log(data);

      navigate("/paslon");
    } catch (error) {
      throw error;
    }
  };

  return (
    <div className="container">
      <h1 onClick={() => navigate('/paslon')} className="text-bottomvote text-5xl font-black text-center mt-16">
        ADD PASLON
      </h1>
      <div className="lg:flex lg:justify-center lg:gap-12  ">
        <div className="flex justify-center ">
          <img
            src={monkeyking}
            alt=""
            className="lg:w-368 w-[345px] h-523 radius-xl mt-14"
          />
        </div>
        <form onSubmit={handleSubmit} className="flex justify-center">
          <div className="flex flex-col">
            <label
              htmlFor="username"
              className="text-2xl font-bold text-logincolor mt-10"
            >
              Nama
            </label>
            <input
              type="text"
              name="name"
              required
              onChange={handleChange}
              className="px-6 lg:w-478 lg:h-70 w-[330px] h-[40px]  border-logincolor border-2 rounded-2xl mt-3"
            />
            <label
              htmlFor="username"
              className="text-2xl font-bold text-logincolor mt-5"
            >
              Nomor Urut
            </label>
            <input
              type="text"
              name="number"
              required
              onChange={handleChange}
              className=" px-6 lg:w-478 lg:h-70 w-[330px] h-[40px] border-logincolor border-2 rounded-2xl mt-3"
            />
            <label
              htmlFor="username"
              className="text-2xl font-bold text-logincolor mt-5"
            >
              Visi & Misi
            </label>
            <textarea
              name="vismis"
              required
              onChange={handleChange}
              className=" py-6 px-6 lg:w-478 lg:h-249 w-[330px] h-[150px] border-logincolor border-2 rounded-2xl mt-3"
            ></textarea>
            <button className="cursor-pointer lg:w-478 lg:h-68 w-[330px] h-[40px] bg-bottomvote font-bold lg:text-3xl text-2xl text-white rounded-2xl mt-10">
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPaslonForm;
