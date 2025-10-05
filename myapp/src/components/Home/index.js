import React, { useState, useEffect } from "react";

import { v4 as uuidv4 } from "uuid";
import Slider from "react-slick";

import Navbar from "../Navbar";
import CouresItem from "../CouresItem";
import RecentlyPlacedCandidates from "../RecentlyPlacedCandidates";
import BannerCard from "../BannerCard";

import { HiOutlineHome } from "react-icons/hi2";
import { BsChatLeftText, BsBag, BsRobot } from "react-icons/bs";
import { GiBookshelf, GiWhiteBook } from "react-icons/gi";
import { GrAnnounce } from "react-icons/gr";
import { VscFeedback } from "react-icons/vsc";
import { MdOutlineAccessTime } from "react-icons/md";

import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const frentendTechnologies = "FRENTEND";
const backendTechnologies = "BACKEND";
const database = "DATABASE";

const couresDetails = [
  {
    id: uuidv4(),
    title: "HTML",
    category: "FRENTEND",
    discription:
      "Html stands for Hypertext Markup Language, a markup language used to structure and display content on the web",
    imgUtl:
      "https://ik.imagekit.io/izqq5ffwt/programming-background-collage.jpg?updatedAt=1759561173491",
  },
  {
    id: uuidv4(),
    title: "CSS",
    category: "FRENTEND",
    discription:
      "Html stands for Hypertext Markup Language, a markup language used to structure and display content on the web",
    imgUtl:
      "https://ik.imagekit.io/izqq5ffwt/Gemini_Generated_Image_dnsya8dnsya8dnsy.png?updatedAt=1759563289540",
  },
  {
    id: uuidv4(),
    category: "BACKEND",
    title: "Python",
    discription:
      "Html stands for Hypertext Markup Language, a markup language used to structure and display content on the web",
    imgUtl:
      "https://ik.imagekit.io/izqq5ffwt/Gemini_Generated_Image_cnhxeycnhxeycnhx.png?updatedAt=1759564622970",
  },
  {
    id: uuidv4(),
    category: "FRENTEND",
    title: "JavaScript",
    discription:
      "Html stands for Hypertext Markup Language, a markup language used to structure and display content on the web",
    imgUtl:
      "https://ik.imagekit.io/izqq5ffwt/Gemini_Generated_Image_l1cohul1cohul1co.png?updatedAt=1759565247805",
  },
  {
    id: uuidv4(),
    category: "FRENTEND",
    title: "React js",
    discription:
      "Html stands for Hypertext Markup Language, a markup language used to structure and display content on the web",
    imgUtl:
      "https://ik.imagekit.io/izqq5ffwt/Gemini_Generated_Image_f16psxf16psxf16p.png?updatedAt=1759566491555",
  },
  {
    id: uuidv4(),
    category: "BACKEND",
    title: "Node js",
    discription:
      "Html stands for Hypertext Markup Language, a markup language used to structure and display content on the web",
    imgUtl:
      "https://ik.imagekit.io/izqq5ffwt/Gemini_Generated_Image_hc2xifhc2xifhc2x.png?updatedAt=1759569792518",
  },
  {
    id: uuidv4(),
    category: "BACKEND",
    title: "Express js",
    discription:
      "Html stands for Hypertext Markup Language, a markup language used to structure and display content on the web",
    imgUtl:
      "https://ik.imagekit.io/izqq5ffwt/Gemini_Generated_Image_pe48pppe48pppe48.png",
  },
  {
    id: uuidv4(),
    category: "DATABASE",
    title: "SQLite",
    discription:
      "Html stands for Hypertext Markup Language, a markup language used to structure and display content on the web",
    imgUtl:
      "https://ik.imagekit.io/izqq5ffwt/Gemini_Generated_Image_x9unx4x9unx4x9un.png",
  },
  {
    id: uuidv4(),
    category: "DATABASE",
    title: "MongoDB",
    discription:
      "Html stands for Hypertext Markup Language, a markup language used to structure and display content on the web",
    imgUtl:
      "https://ik.imagekit.io/izqq5ffwt/Gemini_Generated_Image_bciwyibciwyibciw.png",
  },
];

const recentlyPlacedCandidatesList = [
  {
    id: uuidv4(),
    imageUrl:
      "https://ik.imagekit.io/izqq5ffwt/WhatsApp%20Image%202025-10-04%20at%2020.45.09_89267057.jpg",
    name: "Ayya gandla Kullai",
    brantch: "Finance",
    role: "Frentend Developer",
    companyUrl:
      "https://ik.imagekit.io/izqq5ffwt/TATA%20Consultancy%20Services%20Limited_logo.png",
    feedback:
      "Coming from a finance background, I never imagined stepping into the tech world. Wonew’s clear guidance and practical training made learning to code simple and enjoyable.",
  },
  {
    id: uuidv4(),
    imageUrl:
      "https://ik.imagekit.io/izqq5ffwt/WhatsApp%20Image%202025-10-04%20at%2021.02.28_f7818851.jpg",
    name: "Vishwanath",
    brantch: "Finance",
    role: "Full stack Developer",
    companyUrl: "https://ik.imagekit.io/izqq5ffwt/Deloitte-Logo-PNG-Pic(1).png",
    feedback:
      "As a Finance graduate, I had little to no background in coding when I joined Wonew. The structured curriculum and constant guidance made it simple and exciting.",
  },
  {
    id: uuidv4(),
    imageUrl:
      "https://ik.imagekit.io/izqq5ffwt/Gemini_Generated_Image_srwerlsrwerlsrwe.png?updatedAt=1759579096027",
    name: "Ayesha Aaliyah",
    brantch: "Civil Engineer",
    role: "Frentend Developer",
    companyUrl:
      "https://ik.imagekit.io/izqq5ffwt/infosys-logo-png.png?updatedAt=1759587313828",
    feedback:
      "Before Wonew, I was a civil engineering graduate with zero coding experience and little confidence in my tech skills. The structured curriculum gave me a strong foundation, and the constant practice made me a confident coder. I'm so happy to have landed my first job as a Graduate Engineer Trainee—it was a truly life-changing experience. modigy student background is Finance give short feedback.",
  },
  {
    id: uuidv4(),
    imageUrl:
      "https://ik.imagekit.io/izqq5ffwt/Gemini_Generated_Image_gczkj1gczkj1gczk.png?updatedAt=1759590504585",
    name: "Chandra Shekar",
    brantch: "EEE",
    role: "Backend Developer",
    companyUrl: "https://ik.imagekit.io/izqq5ffwt/DXC_BIG-91ae4367.png",
    feedback:
      "As an EEE graduate, I initially found coding challenging, but Wonew’s step-by-step approach made it easy to understand.",
  },
];

const bannerTemplateData = [
  {
    id: uuidv4(),
    imgUtl: "https://ik.imagekit.io/izqq5ffwt/EXPRESS%20JS%20BANNER.png",
    altText: "express js",
  },
  {
    id: uuidv4(),
    imgUtl:
      "https://ik.imagekit.io/izqq5ffwt/MERN%20Stack%20Developer%20(3).png",
    altText: "python",
  },
];

const Home = () => {
  const [day, setDay] = useState("");
  const [dateString, setDateString] = useState("");

  useEffect(() => {
    const updateDate = () => {
      const today = new Date();

      // Day (e.g. SUN)
      const dayName = today
        .toLocaleDateString("en-US", { weekday: "short" })
        .toUpperCase();

      // Date format (e.g. 5th October 2025)
      const dayNum = today.getDate();
      const monthName = today.toLocaleDateString("en-US", { month: "long" });
      const year = today.getFullYear();

      // Add st, nd, rd, th
      const suffix =
        dayNum % 10 === 1 && dayNum !== 11
          ? "st"
          : dayNum % 10 === 2 && dayNum !== 12
          ? "nd"
          : dayNum % 10 === 3 && dayNum !== 13
          ? "rd"
          : "th";

      const formattedDate = `${dayNum}${suffix} ${monthName} ${year}`;

      setDay(dayName);
      setDateString(formattedDate);
    };

    updateDate(); // Initial call
    const interval = setInterval(updateDate, 60000); // update every 1 minute

    return () => clearInterval(interval);
  }, []);

  const frentendList = couresDetails.filter(
    (eachCoures) => eachCoures.category === frentendTechnologies
  );

  const backendList = couresDetails.filter(
    (eachCoures) => eachCoures.category === backendTechnologies
  );

  const databaseList = couresDetails.filter(
    (eachCoures) => eachCoures.category === database
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // auto carousel
    autoplaySpeed: 4000, // 2 seconds
    pauseOnHover: false,
    arrows: false,
    cssEase: "linear",
  };
  const bannerSettings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // auto carousel
    autoplaySpeed: 10000, // 2 seconds
    pauseOnHover: false,
    arrows: false,
    cssEase: "linear",
  };

  return (
    <>
      <Navbar />
      <div className="home-container">
        <aside className="side-bar">
          <div className="icons-box active-box">
            <HiOutlineHome />
            <p>Home</p>
          </div>
          <div className="icons-box">
            <GiBookshelf />
            <p>Courses</p>
          </div>
          <div className="icons-box">
            <BsChatLeftText />
            <p>Support</p>
          </div>
          <div className="icons-box">
            <BsBag />
            <p>Jobs</p>
          </div>
          <div className="icons-box">
            <GiWhiteBook />
            <p>Study Material</p>
          </div>
          <div className="icons-box">
            <BsRobot />
            <p>Mock Interview</p>
          </div>
          <div className="icons-box">
            <VscFeedback />
            <p>Feedback</p>
          </div>
        </aside>

        <main className="content">
          <div className="banner">
            <Slider {...bannerSettings}>
              {bannerTemplateData.map((eachBanner) => (
                <BannerCard key={eachBanner.id} bannerDetails={eachBanner} />
              ))}
            </Slider>
          </div>
          <h1>Frontend Technologies</h1>
          <CouresItem couresList={frentendList} />
          <h1>Backend Technologies</h1>
          <CouresItem couresList={backendList} />
          <h1>Database</h1>
          <CouresItem couresList={databaseList} />
        </main>

        <aside className="right-bar">
          <div className="date-box">
            <h2 className="day-text">{day}</h2>
            <p className="date-text">{dateString}</p>
          </div>

          <h3>Recently Placed Candidates</h3>
          <div className="last-manth-updates">
            <div className="time-text">
              <MdOutlineAccessTime />
              <p>Last 3 Months</p>
            </div>
          </div>
          <div className="slider-wrapper">
            <Slider {...settings}>
              {recentlyPlacedCandidatesList.map((eachCandidate) => (
                <RecentlyPlacedCandidates
                  key={eachCandidate.id}
                  recentlyPlacedCandidatesDetails={eachCandidate}
                />
              ))}
            </Slider>
          </div>
          <div className="annoucement-conatainer">
            <h3>Announcement</h3>
            <GrAnnounce />
          </div>
          <div className="announcement-card">
            <img
              src="https://learning.ccbp.in/images/idpJobsPageEmptyList.png"
              alt="img"
              className="accounsement-img"
            />
          </div>
        </aside>

        <footer className="mobile-footer">
          <ul>
            <li className="active-box">
              <HiOutlineHome />
            </li>
            <li>
              <GiWhiteBook />
            </li>
            <li>
              <BsChatLeftText />
            </li>
            <li>
              <BsBag />
            </li>
          </ul>
        </footer>
      </div>
    </>
  );
};

export default Home;
