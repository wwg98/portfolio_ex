import "./App.css";
import { useState } from "react";
import { Routes, Route, Navigate } from "react-router";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Figure from "./components/Figure";
import Pagination from "./components/Pagination";

function App() {
  const works = [
    { id: 1, title: "work1", url: "images/img-1.jpg", desc: "Cafe photo, Coffee" },
    { id: 2, title: "work2", url: "images/img-2.jpg", desc: "Cafe photo, Latte" },
    { id: 3, title: "work3", url: "images/img-3.jpg", desc: "Cafe photo, Dripper" },
    { id: 4, title: "work4", url: "images/img-4.jpg", desc: "Cafe photo, table" },
    { id: 5, title: "work5", url: "images/img-1.jpg", desc: "Cafe photo, Coffee" },
    { id: 6, title: "work6", url: "images/img-2.jpg", desc: "Cafe photo, Latte" },
    { id: 7, title: "work7", url: "images/img-3.jpg", desc: "Cafe photo, Dripper" },
    { id: 8, title: "work8", url: "images/img-4.jpg", desc: "Cafe photo, table" },
  ];
  const [selectId, setSlectId] = useState(1);
  const work = works.find(_work => _work.id === selectId);
  const maxid = works.length;

  const changeId = id => {
    setSlectId(id);
  };

  return (
    <>
      <Header />
      <Nav data={works} onChangeMode={changeId} />
      {work && <Figure url={work.url} desc={work.desc} />}
      <Pagination maxid={maxid} id={selectId} onChangeMode={changeId} />
      <Routes>
        <Route path="/" element={<Navigate to="/1" replace />} />
      </Routes>
    </>
  );
}

export default App;
