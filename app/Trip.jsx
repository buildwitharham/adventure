import React from "react";
import Image from "next/image";
import Link from "next/link";

const Trip = () => {
  return (
<>

<div className="wrapper">

    <header id="header">

      <div className="container">

        <div className="main-head">

          <strong className="logo">

            <Link href="#" className="logo-11">

              <Image
                src="/images/header-logo.png"
                alt="Hike More logo"
                className="logo-1" width={150} height={50} />

            </Link>

          </strong>


          <div className="nav">

            <ul className="nav-a">

              <li className="hike">
                <Link href="#" className="nev">Home</Link>
              </li>

              <li className="hike">
                <Link href="#" className="nev">Our Story</Link>
              </li>

              <li className="hike">
                <Link href="#" className="nev">Routes</Link>
              </li>

              <li className="hike">
                <Link href="#" className="nev">Gallery</Link>
              </li>

              <li className="hike">
                <Link href="#" className="nev">Contact</Link>
              </li>

            </ul>


            <div className="forms">

              <div className="img">

                <Image
                  src="/images/magnifying.png"
                  alt="Search"
                  className="img-1" width={1200} height={800} />

              </div>


              <form>

                <div className="search-engine">

                  <input
                    type="search"
                    placeholder="Search"
                    className="search-bar" />

                </div>

              </form>

            </div>

          </div>

        </div>

      </div>

    </header>

  </div>


  <section id="banner">

    <div className="container">

      <div className="parent-div">


        <div className="left-div">

          <div className="main-div">

            <div className="left-div-img">

              <Image
                src="/images/stars-hiking.png"
                alt="Hiking stars"
                className="stars" width={1200} height={800} />

            </div>


            <div className="leftside-para">

              <p className="left-para">
                Step away from the ordinary and discover trails that lead
                to incredible views, peaceful landscapes, and unforgettable
                moments.
              </p>


              <span className="left-bottom">
                “The trail is always worth the climb.”
              </span>

            </div>

          </div>

        </div>


        <div className="right-divs">

          <div className="right-upper">

            <div className="right-para">

              <h1 className="heading">
                HIKE MORE
              </h1>

              <span className="wl">
                Worry less
              </span>

            </div>


            <div className="img">

              <Image
                src="/images/mountains.png"
                alt="Mountain hiking route"
                className="mountains" width={1200} height={800} />

            </div>

          </div>


          <div className="rightside-down">

            <p className="txt">
              Discover scenic trails, unforgettable mountain views,
              and outdoor adventures for every experience level.
              Choose your route, prepare for the journey, and make
              every step count.
            </p>


            <div className="btn">

              <Link href="#" className="button23">
                EXPLORE TRAILS
              </Link>

            </div>

          </div>

        </div>

      </div>

    </div>

  </section>


  <section id="banner-1">

    <div className="container">

      <div className="banner-1">

        <div className="headings">

          <h1 className="routes">
            1,000+ Routes · 1M+ Hikers · Endless Memories
          </h1>

        </div>


        <div className="image-black2">

          <Image
            src="/images/black-iamge-2.png"
            alt="Decorative mountain shape"
            className="black-color" width={1200} height={800} />

        </div>


        <div className="para-banner1">

          <p className="p-banner1">
            From peaceful nature walks to challenging mountain trails,
            discover adventures that bring people closer to nature.
          </p>

        </div>

      </div>


      <div className="image-balck">

        <Image
          src="/images/black-image.png"
          alt="Decorative mountain shape"
          className="color-black" width={1200} height={800} />

      </div>

    </div>

  </section>


  <section id="banner-2">

    <div className="container">

      <div className="choose">

        <h2 className="level">
          Choose Your Level
        </h2>

      </div>


      <div className="columms">


        <div className="columm-1">

          <div className="h-col1">

            <h4 className="beginn">
              Beginner
            </h4>

          </div>


          <div className="p-col1">

            <p className="col-1">
              New to hiking? Start with easy trails, gentle climbs,
              and shorter routes designed to help you build confidence.
            </p>

          </div>


          <div className="btn-col1">

            <Link href="#" className="lm">
              Learn More
            </Link>

          </div>

        </div>



        <div className="columm-1">

          <div className="h-col1">

            <h4 className="beginn">
              Experienced
            </h4>

          </div>


          <div className="p-col1">

            <p className="col-1">
              Ready for something more challenging? Explore longer
              routes, steeper climbs, and trails that test your endurance.
            </p>

          </div>


          <div className="btn-col1">

            <Link href="#" className="lm">
              Learn More
            </Link>

          </div>

        </div>



        <div className="columm-1">

          <div className="h-col1">

            <h4 className="beginn">
              Expert
            </h4>

          </div>


          <div className="p-col1">

            <p className="col-1">
              Take on demanding terrain, high elevations, and technical
              routes built for experienced outdoor adventurers.
            </p>

          </div>


          <div className="btn-col1">

            <Link href="#" className="lm">
              Learn More
            </Link>

          </div>

        </div>

      </div>

    </div>

  </section>


  <section id="banner-3">

    <div className="container">

      <div className="hiking">

        <h1 className="hike-route">
          Find Your Trail
        </h1>

      </div>


      <div className="border">

        <div className="form">

          <div className="img1">

            <Image
              src="/images/magnifyingglass.png"
              alt="Search"
              className="img-2" width={1200} height={800} />

          </div>


          <form>

            <div className="search">

              <input
                type="search"
                placeholder="Search trails"
                className="search-bar2" />

            </div>

          </form>

        </div>

      </div>


      <div className="para-last">

        <p className="p-l">
          Find your next trail with route information, difficulty levels,
          scenic highlights, and practical tips to help you prepare before
          you hit the trail.
        </p>

      </div>

    </div>

  </section>


  <section id="banner-4">

    <div className="container">

      <div className="head-para">

        <div className="head-span">

          <h2 className="our">
            Our
            <span className="jour">
              Journey
            </span>
          </h2>

        </div>

      </div>


      <div className="para-2last">

        <p className="last2">
          Hiking is more than reaching the summit. It is about discovering
          new places, challenging yourself, enjoying the journey, and
          creating memories along the way.
        </p>


        <div className="headings">

          <h2 className="h1">
            Hiking
          </h2>

          <h2 className="h1">
            Fun
          </h2>

          <h2 className="h1">
            Health
          </h2>

        </div>

      </div>

    </div>

  </section>


  <section id="banner-5">

    <div className="container">

      <div className="span-head">

        <span className="time-for">
          It's Time For

          <h1 className="h1-hiking">
            HIKING
          </h1>

        </span>

      </div>


      <div className="pics-3">


        <div className="coll-1">

          <div className="rote">

            <h3 className="rts">
              ROUTE&nbsp;01
            </h3>

          </div>


          <div className="img-mounatins">

            <Image
              src="/images/mountains (2).png"
              alt="Alpine mountain hiking route"
              className="mountain" width={1200} height={800} />

          </div>


          <div className="route-name">
            Alpine Escape
          </div>


          <div className="off">

            <h3 className="offer">
              20% OFF
            </h3>

          </div>

        </div>



        <div className="coll-1">

          <div className="rote">

            <h3 className="rts">
              ROUTE&nbsp;02
            </h3>

          </div>


          <div className="img-mounatins">

            <Image
              src="/images/mountains (2).png"
              alt="Wild mountain hiking route"
              className="mountain" width={1200} height={800} />

          </div>


          <div className="route-name">
            Wild Horizon
          </div>


          <div className="off">

            <h3 className="offer">
              30% OFF
            </h3>

          </div>

        </div>



        <div className="coll-1">

          <div className="rote">

            <h3 className="rts">
              ROUTE&nbsp;03
            </h3>

          </div>


          <div className="img-mounatins">

            <Image
              src="/images/mountains (2).png"
              alt="Summit mountain hiking route"
              className="mountain" width={1200} height={800} />

          </div>


          <div className="route-name">
            Summit Challenge
          </div>


          <div className="off">

            <h3 className="offer">
              40% OFF
            </h3>

          </div>

        </div>

      </div>

    </div>

  </section>


  <section id="banner-6">

    <div className="container">

      <div className="main-div2">

        <div className="h-v-p">

          <div className="head-lorem">

            <h5 className="lorem-ip">
              Stories From the Trail
            </h5>

          </div>


          <div className="vid-span">

            <div className="vid">

              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/Gcf-D1kl1zs"
                title="Hiking adventure video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowFullScreen>
              </iframe>

            </div>


            <div className="head-span">

              <h2 className="our">
                Watch the
                <span className="jour">
                  Adventure
                </span>
              </h2>

            </div>

          </div>


          <div className="para-hvp">

            <p className="line-3">
              We believe the best adventures happen outside your comfort
              zone. Whether you're taking your first hike or searching for
              your next serious challenge, we're here to help you find the
              right trail and make the most of every step.

              Explore new places, experience the outdoors, and create
              memories that last long after the hike is over.
            </p>

          </div>

        </div>

      </div>


      <div className="button2">

        <Link href="#" className="more">
          WATCH MORE
        </Link>

      </div>

    </div>

  </section>


  <section id="banner-7">

    <div className="container">

      <div className="gall">

        <h1 className="gall-1">
          GALLERY
        </h1>


        <p className="gallery-intro">
          A few moments from the trails, peaks, and people who make
          every adventure memorable.
        </p>

      </div>


      <div className="pics-main">


        <div className="div-left">

          <div className="uper">

            <Image
              src="/images/img-1.jpg"
              alt="Hiking adventure"
              className="img-11" width={1200} height={800} />

          </div>


          <div className="uper">

            <Image
              src="/images/img-4.jpg"
              alt="Hiking adventure"
              className="img-11" width={1200} height={800} />

          </div>


          <div className="uper">

            <Image
              src="/images/img-7.jpg"
              alt="Hiking adventure"
              className="img-11" width={1200} height={800} />

          </div>

        </div>



        <div className="mid-dev">

          <div className="uper">

            <Image
              src="/images/img-2.jpg"
              alt="Hiking adventure"
              className="img-11" width={1200} height={800} />

          </div>


          <div className="uper">

            <Image
              src="/images/img-5.jpg"
              alt="Hiking adventure"
              className="img-11" width={1200} height={800} />

          </div>


          <div className="uper">

            <Image
              src="/images/img-8.jpg"
              alt="Hiking adventure"
              className="img-11" width={1200} height={800} />

          </div>

        </div>



        <div className="right-div">

          <div className="uper">

            <Image
              src="/images/img-3.jpg"
              alt="Hiking adventure"
              className="img-11" width={1200} height={800} />

          </div>


          <div className="uper">

            <Image
              src="/images/img-6.jpg"
              alt="Hiking adventure"
              className="img-11" width={1200} height={800} />

          </div>


          <div className="uper">

            <Image
              src="/images/img-9.jpg"
              alt="Hiking adventure"
              className="img-11" width={1200} height={800} />

          </div>

        </div>

      </div>


      <div className="button3">

        <Link href="#" className="PHOTOS">
          VIEW GALLERY
        </Link>

      </div>

    </div>

  </section>


  <footer id="sub-footer">

    <div className="container">

      <strong className="logo">

        <Link href="#" className="logo-11">

          <Image
            src="/images/header-logo.png"
            alt="Hike More logo"
            className="logo-1" width={150} height={50} />

        </Link>

      </strong>


      <div className="left-right">


        <div className="leftside">

          <div className="left">

            <p className="copyright">
              Explore more. Hike farther. Live the adventure.
              Discover memorable trails, outdoor experiences,
              and inspiration for your next journey.
            </p>

          </div>

        </div>



        <div className="right-side">

          <div className="right-upper">

            <h1 className="find">
              FOLLOW THE ADVENTURE
            </h1>


            <ul className="iconss">


              <li className="icons">

                <Link
                  href="#"
                  className="social-icons"
                  aria-label="Facebook">

                  <i className="s-icons fa-brands fa-facebook-f"></i>

                </Link>

                <h2 className="h23">
                  Facebook
                </h2>

              </li>



              <li className="icons">

                <Link
                  href="#"
                  className="social-icons"
                  aria-label="YouTube">

                  <i className="s-icons fa-brands fa-youtube"></i>

                </Link>

                <h2 className="h23">
                  YouTube
                </h2>

              </li>



              <li className="icons">

                <Link
                  href="#"
                  className="social-icons"
                  aria-label="Instagram">

                  <i className="s-icons fa-brands fa-instagram"></i>

                </Link>

                <h2 className="h23">
                  Instagram
                </h2>

              </li>



              <li className="icons">

                <Link
                  href="#"
                  className="social-icons"
                  aria-label="X / Twitter">

                  <i className="s-icons fa-brands fa-twitter"></i>

                </Link>

                <h2 className="h23">
                  X / Twitter
                </h2>

              </li>

            </ul>

          </div>


          <div className="right-down">

            <span className="message">
              Message Us Here

              <h2 className="email">
                hello@yourbrand.com
              </h2>

            </span>

          </div>

        </div>

      </div>

    </div>

  </footer>


  <footer id="footer">

    <div className="container">

      <div className="main-div-2">


        <div className="left-side">

          <div className="heading-footer">

            <h3 className="abot">
              About
            </h3>

          </div>


          <div className="para-footer">

            <p className="lore">
              Explore more. Hike farther. Live the adventure.
              Discover memorable trails, outdoor experiences,
              and inspiration for your next journey.
            </p>

          </div>

        </div>



        <div className="footer-column1">

          <div className="h3">

            <h3 className="h">
              Menu
            </h3>

          </div>


          <ul className="ul2">

            <li className="li2">
              <Link href="#" className="h12">
                Home
              </Link>
            </li>

            <li className="li2">
              <Link href="#" className="h12">
                Find Your Trails
              </Link>
            </li>

            <li className="li2">
              <Link href="#" className="h12">
                Our Journey
              </Link>
            </li>

            <li className="li2">
              <Link href="#" className="h12">
                Gallery
              </Link>
            </li>

          </ul>

        </div>



        <div className="footer-column1">

          <div className="h3">

            <h3 className="h">
              INFORMATION
            </h3>

          </div>


          <ul className="ul2">

            <li className="li2">
              <Link href="#" className="h12">
                Hiking Guide
              </Link>
            </li>

            <li className="li2">
              <Link href="#" className="h12">
                Safety Tips
              </Link>
            </li>

            <li className="li2">
              <Link href="#" className="h12">
                FAQs
              </Link>
            </li>

            <li className="li2">
              <Link href="#" className="h12">
                Trail Conditions
              </Link>
            </li>

          </ul>

        </div>



        <div className="footer-column1">

          <div className="h3">

            <h3 className="h">
              LEGAL
            </h3>

          </div>


          <ul className="ul2">

            <li className="li2">
              <Link href="#" className="h12">
                Privacy Policy
              </Link>
            </li>

            <li className="li2">
              <Link href="#" className="h12">
                Terms &amp; Conditions
              </Link>
            </li>

            <li className="li2">
              <Link href="#" className="h12">
                Cookie Policy
              </Link>
            </li>

            <li className="li2">
              <Link href="#" className="h12">
                Disclaimer
              </Link>
            </li>

          </ul>

        </div>

      </div>

    </div>

  </footer>
</>

  )
}

export default Trip