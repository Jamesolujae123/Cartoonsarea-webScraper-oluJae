import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";
import config from "../../../config";
import ClipLoader from "react-spinners/ClipLoader";
import { Link } from "react-router-dom";
import fileDownload from "js-file-download";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";
import { FaCaretUp } from "react-icons/fa6";

const Hero = () => {
  const [isloading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [clicked, setClicked] = useState(false);
  const [error, setError] = useState("");
  const [seasonClicked, setseasonClicked] = useState(false);
  const [animeResult, setAnimeResult] = useState(null);
  const [animeContent, setAnimeContent] = useState(true);
  const [status, setStatus] = useState("");
  const [savedanimeResult, setSavedAnimeResult] = useState(null);
  const [ispresent, setIsPresent] = useState(true);
  const [episodeStatus, setEpisodeStatus] = useState(false);
  const [seasonChange, setSeasonChange] = useState(false);

  const [color, setColor] = useState("#ffffff");

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  const UpdateCont = (e) => {
    setSearch(e.target.value);
  };

  // const setCont = (e) => {
  //   setSearch(e.target.value);
  // };

  // const handleDownload = (ProxyUrl, filename) => {
  //   fileDownload(ProxyUrl, filename);
  // };

  const navigateTo = useNavigate();

  const downloadFile = async (url, filename) => {
    try {
      console.log("Downloading from URL:", url); // Log the URL
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      const blob = await response.blob();
      console.log("Download successful"); // Log successful download
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error("Failed to download file:", error);
    }
  };

  const handleDownload = async (videoUrl) => {
    try {
      const response = await axios.post("http://localhost:3000/download-file", {
        videoUrl,
      });
      setStatus(response.data);
    } catch (error) {
      console.error("Error downloading video:", error);
      setStatus("Error downloading video.");
    }
  };

  const openLinkInNewTab = (url) => {
    window.open(url, "_blank");
  };

  const searchAnime = async (e) => {
    sessionStorage.removeItem("animeResult");
    e.preventDefault();
    setAnimeContent(false);
    setClicked(true);
    const data = { animeUrl: search };
    console.log(data);
    const response = await axios.post(`${config.baseUrl}/anime`, data);
    if (response.status === 200) {
      setClicked(false);
      setIsLoading(false);
      console.log(response);
      setAnimeResult(response.data);
      sessionStorage.setItem("animeResult", JSON.stringify(response.data));
    } else {
      ("");
    }
  };

  const openEpisode = () => {
    setseasonClicked(true);
    setEpisodeStatus(true);
  };

  useEffect(() => {
    // Load saved anime result from sessionStorage
    const savedResult = sessionStorage.getItem("animeResult");
    if (savedResult) {
      setSavedAnimeResult(JSON.parse(savedResult));
      setIsPresent(false);
    }
  }, []);

  return (
    <div className="flex bg-[#ffffff] flex-col gap-10 rounded-b-md border-[1px] border-[#f1f1f1] shadow-md items-center py-20 ">
      <div className="">
        <h1 className="text-4xl text-center">
          Download Your Favourite Anime Episode in a flash
        </h1>
      </div>

      <div className="w-[305px] md:w-[70%]">
        <form onSubmit={searchAnime} className="w-[100%] flex" action="">
          <input
            className="border-4 w-[100%] px-2 py-3 rounded-l-md outline-none border-cyan-600"
            type="search"
            placeholder="Paste link here...."
            onChange={UpdateCont}
          />
          <button
            type="submit"
            className="bg-cyan-600 px-6 hover:bg-blue-400 duration-700 flex cursor-pointer items-center gap-3 rounded-r-md"
          >
            <button
              disabled={clicked}
              type="submit"
              className="hidden md:block"
            >
              {clicked ? "procesing" : "Start"}
            </button>
            <button type="submit" className="text-xl">
              <FaArrowRight />
            </button>
          </button>
        </form>
        <div className="">
          <p className="text-sm text-center">
            By using our service you are accepting our{" "}
            <span className="text-cyan-600">Terms of Use</span>.
          </p>
        </div>
        <div className="py-6">
          {animeContent ? (
            ""
          ) : isloading ? (
            <ClipLoader
              color={color}
              loading={isloading}
              cssOverride={override}
              size={150}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          ) : ispresent ? (
            ""
          ) : (
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-4 items-center">
                <div>
                  <img className="h-64" src={animeResult?.animeImg} alt="" />
                </div>
                <div className="flex flex-col items-center">
                  <p className="font-bold text-xl font-roboto">
                    {animeResult?.animeTitle}
                  </p>
                  <p className="">{animeResult?.animeDetails}</p>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                {animeResult?.seasons?.map((season) => (
                  <div className="flex flex-col gap-3" key={season}>
                    <div className="flex justify-between">
                      {seasonChange ? (
                        <span
                          onClick={() => {
                            setSeasonChange(true);
                            setseasonClicked(false);
                            setEpisodeStatus(false);
                          }}
                        >
                          {season?.seasonNum}
                        </span>
                      ) : (
                        <span onClick={openEpisode} className="">
                          {season?.seasonNum}
                        </span>
                      )}

                      {episodeStatus ? (
                        <span>
                          <FaCaretUp
                            onClick={() => {
                              setseasonClicked(false);
                              setEpisodeStatus(false);
                            }}
                          />
                        </span>
                      ) : (
                        <span>
                          <FaCaretDown onClick={openEpisode} />
                        </span>
                      )}
                    </div>
                    <div>
                      {seasonClicked ? (
                        <div className="flex flex-col justify-center text-[10px] gap-2">
                          {season.episoles?.map((episode) => (
                            <div className="flex gap-4" key={episode}>
                              <span>{episode.filename}</span>
                              <span>{episode.filesize}</span>
                              <span>{episode.duration}</span>
                              <Link
                                className="text-lg"
                                onClick={() =>
                                  openLinkInNewTab(`${episode.video_url}`)
                                }
                              >
                                Download
                              </Link>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div></div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
