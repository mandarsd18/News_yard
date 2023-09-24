import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import NewsCard from "./NewsCard";

const Category = () => {
  const [head, setHead] = useState();
  const [buss, setBuss] = useState();
  const [ent, setEnt] = useState();
  const [heal, setHeal] = useState();
  const [sci, setSci] = useState();
  const [spo, setSport] = useState();
  const [tech, setTech] = useState();

  const topHeadline =
    " https://newsapi.org/v2/top-headlines?country=in&apiKey=10563b0d64834fc395f01cffae040b09";

  const business =
    "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=10563b0d64834fc395f01cffae040b09";

  const entertainment =
    "https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=10563b0d64834fc395f01cffae040b09";

  const health =
    "https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=10563b0d64834fc395f01cffae040b09";

  const science =
    "https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=10563b0d64834fc395f01cffae040b09";

  const sports =
    "https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=10563b0d64834fc395f01cffae040b09";

  const technology =
    "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=10563b0d64834fc395f01cffae040b09";

  const fetchTopHeadline = async () => {
    await axios
      .get(topHeadline)
      .then((res) => setHead(res?.data?.articles))
      .catch(console.error());
  };
  const fetchBussiness = async () => {
    await axios
      .get(business)
      .then((res) => setBuss(res?.data?.articles))
      .catch(console.error());
  };
  const fetchEnter = async () => {
    await axios
      .get(entertainment)
      .then((res) => setEnt(res?.data?.articles))
      .catch(console.error());
  };
  const fetchHealth = async () => {
    await axios
      .get(health)
      .then((res) => setHeal(res?.data?.articles))
      .catch(console.error());
  };
  const fetchScience = async () => {
    await axios
      .get(science)
      .then((res) => setSci(res?.data?.articles))
      .catch(console.error());
  };
  const fetchSports = async () => {
    await axios
      .get(sports)
      .then((res) => setSport(res?.data?.articles))
      .catch(console.error());
  };
  const fetchTech = async () => {
    await axios
      .get(technology)
      .then((res) => setTech(res?.data?.articles))
      .catch(console.error());
  };

  useEffect(() => {
    fetchTopHeadline();
    fetchBussiness();
    fetchEnter();
    fetchHealth();
    fetchScience();
    fetchSports();
    fetchTech();
  }, []);
  return (
    <div className="w-[90%] sm:w-[80%] h-full mx-auto ">
      <NewsCard name='Top-Headline' data={head}/>
      <NewsCard name='Bussiness' data={buss}/>
      <NewsCard name='Science' data={sci}/>
      <NewsCard name='Entertainment' data={ent}/>
      <NewsCard name='Technology' data={tech}/>
      <NewsCard name='Health' data={heal}/>
      <NewsCard name='Sports' data={spo}/>
    </div>
  );
};

export default Category;
