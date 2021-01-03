import React, { useState } from "react";

export const Home = () => {
  const picLinks = [
    "https://source.unsplash.com/random/200x200",
    "https://source.unsplash.com/random/201x201",
    "https://source.unsplash.com/random/202x202",
    "https://source.unsplash.com/random/203x203",
    "https://source.unsplash.com/random/204x204",
    "https://source.unsplash.com/random/205x205",
    "https://source.unsplash.com/random/206x206",
    "https://source.unsplash.com/random/207x207",
    "https://source.unsplash.com/random/208x208",
    "https://source.unsplash.com/random/209x209",
  ];

  const [namaClass, setNamaClass] = useState ('')
  function menuToggle () {
    var css = (namaClass === '')? "slide" :""
    setNamaClass(css)
  }
  return (
    <>
      <div className="container">
        <header className="header">
          <div className="hero">
            <h2 className="heading">Rossi House Coffee Merch Store</h2>
            <p className="sub-heading">Coffee Gift Set & Coffee Maker Set</p>
          </div>
          <div className="features feature-1">
            <h4 className="price">IDR 150K</h4>
            <p className="item">Coffee Gift-Set</p>
          </div>
          <div className="features feature-2">
            <h4 className="price">IDR 1.250K</h4>
            <p className="item">Coffee Maker Set</p>
          </div>
        </header>

        <nav className="menu">
          {/* hamburger menu */}
          <div className="menu-toggle" onClick={menuToggle}>
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
          </div>
          {/* hamburger menu ends */}
          <div className="brand">
            <h1>Rossi House Coffee Merch</h1>
          </div>
          <ul className={namaClass}>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Products</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Gallery</a>
            </li>
          </ul>
        </nav>
        <section className="services">
          <div className="service">
            <div className="icon">
              <img
                src="https://cdn0.iconfinder.com/data/icons/engineering-3/64/repair-512.png"
                alt="machine repair"
              />
            </div>
            <h3>Coffee Machine Repair</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
              quisquam nihil dolores. Accusantium, unde nesciunt.
            </p>
          </div>
          {/* card */}
          <div className="service">
            <div className="icon">
              <img
                src="https://cdn4.iconfinder.com/data/icons/online-education-9/500/online-education-study_15-512.png"
                alt="coffee course"
              />
            </div>
            <h3>Coffee Course</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
              quisquam nihil dolores. Accusantium, unde nesciunt.
            </p>
          </div>
          <div className="service">
            <div className="icon">
              <img
                src="https://images.vexels.com/media/users/3/210611/isolated/preview/61be446270cdd0cd3e599a95df8819c7-woman-talking-in-podcast-character-woman-by-vexels.png"
                alt="podcast"
              />
            </div>
            <h3>Podcast</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
              quisquam nihil dolores. Accusantium, unde nesciunt.
            </p>
          </div>
          <div className="service">
            <div className="icon">
              {" "}
              <img
                src="https://lh3.googleusercontent.com/MzHfrsFA1F3pJXpuy2UNGC2CKlTmUajfE0QN7zue0r896zVOgPTrLwjJNxcF-tQ3Sen1ASgjPwzNe41ok4cYUmYuNyodbyb4xJoQCXnN9pb9la8uj2hwmC8c0G2c_5smtTD-n_wHmtQi3yPXNnlthpQ9uYBEtiEJOBLWyr-zZcWX9dQbBiqXPnLxZ4Wauhfw7ThuEzB2Tj43CriCkXtSgAWrFRyc0O_RAXMgW1nzyXN0PDPfiq5gPo52bBBonme53acD-z95Fep__68eP0PJUeBWl3B0KAVUcRqg06-SVgnaCtmKeTZEK8sWBEWO2ivHejJyYxEloJ1bpmI4Hx7eE6JVNwdpdffxRCQWo8IAjh-gPRra9Lydd7wBkN4wYY3T6g4STPAkLNCU6hUno8RpsEIL0RtGZEsUp4Ip6jxUqnKz-BJ6lq8iUwgQByfcl6al6ZIWHMWA96U87H8ii6wDkp6H0HtF-UByPuA8F5yWuTpnDITCu2JM-XO3jjcUs_-SwyP0mhSFNvzp-3A0fHUca0zfURUucBr6aj9GIPTMQdWr1Hcf_RzNWjJ9WuirnvtDts8a79HeuqqJV6pdfaq-ere22thWuAvE7JCQNwzzaJUqvXUgPuuLZbY3GARTMDK4cSzah_vvMyAX4OntQDyTAb57XDkPSlz8kNtdz4Q4q6oBuOkj76eoI2VaHKI=s588-no?authuser=0"
                alt="merchandise store"
              />
            </div>
            <h3>Merchandise</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
              quisquam nihil dolores. Accusantium, unde nesciunt.
            </p>
          </div>
        </section>

        <section className="gallery">
          <h2>Gallery</h2>
          {picLinks.map((value, index) => (
            <img src={value} alt="" />
          ))}
        </section>
      </div>
    </>
  );
};
