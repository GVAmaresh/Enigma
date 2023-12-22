"use client";
import { useEffect, useState } from "react";
// import fetchData from "@/lib/actions/FetchData";
import React from "react";
import Card from "../../../components/Card/Card";
// import SeachBar from "../../../components/Search/SearchBar";
import SearchBar from "../../../components/Search/SearchBar";
import axios from "axios";
export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const handleChange = (newPrompt: string) => {
    setPrompt(newPrompt);
  };

  useEffect(() => {
    console.log(content);
    const fetchData = async () => {
      setLoading(true);
      if (prompt === "") return;
      try {
        const response = await fetch("http://127.0.0.1:8000/input", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ input: prompt }),
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setContent(data.bot);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    setPrompt("");
    setContent("");
  }, [prompt]);

  return (
    <>
      <div className="flex justify-center items-center -mt-2 mb-2">
        <h1 className="text-heading1-bold text-light-1">
          An AI Based Student <span className="text-primary-500">Bot</span>
        </h1>
      </div>
      <div className="w-full">
        {loading ? (
          <Card answer={content} />
        ) : (
          <>
            {content.length === 0 ? (
              <Card answer={content} />
            ) : (
              <Card answer={content} />
            )}
          </>
        )}
        <div className="w-full">
          <div className="mt-12">
            <SearchBar handleSubmit={handleChange} />
          </div>
        </div>
      </div>
    </>
  );
}
