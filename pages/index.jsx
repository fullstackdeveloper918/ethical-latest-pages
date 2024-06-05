import React, { useState, useEffect } from 'react'
import PrimaryHeader from '../components/primary-header/PrimaryHeader'
import SecondaryHeader from '../components/secondary-header/SecondaryHeader'
import HeroSection from '../components/hero-section/HeroSection'
import SliderSection from '../components/slider/SliderSection'
import Footer from '../components/footer/Footer'
import AdditionalServices from '../components/HomeComponents/Additional_Services/Additional_services'
import WhatWeDo from '../components/HomeComponents/what_weDo/what_weDo'
import ExploreCollections from '../components/HomeComponents/ExploreCollection/ExploreCollection'
import Handpicked from '../components/HomeComponents/Handpicked/handpicked'
import Tesimoanial from '../components/HomeComponents/Testimonial/testimonial'
// import Styles from '../../styles/common.module.css'
import cybersifyApi from '../utils/cybersifyApi'
// import Certified from '../../components/certified-swag-section/certified'
import BlogCard from "../components/admin/BlogCard/BlogCard";
import Styles from '../components/admin/AllBlogs/AllBlogs.module.css'
import Certified from '../components/certified-swag-section/certified'
// import Styles from '../../components/admin/BlogCard/blog_card.module.css'
import images from '../constants/images';

import { Subtitles } from 'lucide-react'
import Link from 'next/link'
const Home = () => {

  const [state, setState] = useState("")
  const [blog, setBlog] = useState("")

  const homePage = async () => {
    try {
      const response = await cybersifyApi.dashboard.getDashboardData();
      setState(response);
    } catch (error) {

    } finally {
      return true
    }
  };
  const blogPage = async () => {
    try {
      const response = await cybersifyApi.dashboard.getBlogs(1);
      setBlog(response);
    } catch (error) {

    } finally {
      return true
    }
  };
  useEffect(() => {
    homePage()
    blogPage()
  }, [])
  const baseUrl = "https://ethical3.s3.ca-central-1.amazonaws.com/images/"
  const data = {
    banner: {
      title: "The Smart, Modern, & Sustainable Way to do Swag",
      sub_title: "Because it shouldn't be difficult to make the right choice.",
      image: `${baseUrl}banner_image.png`
    },
    sponsor: {
      data: [
        {
          image: `${baseUrl}Google_img.png`
        },
        {
          image: `${baseUrl}Greenpeace_img.png`
        },
        {
          image: `${baseUrl}Microsoft_img.png`
        },
        {
          image: `${baseUrl}Nespresso_img.png`
        },
        {
          image: `${baseUrl}Stanford_img.png`
        },
      ]
    },
    we_do: {
      title: "What We Do",
      description: "Because it shouldn't be difficult to make the right choice.",
      sub_title: "How We Can Help You",
      sub_description: "Ethical Swag makes it easy to build loyalty and brand awareness with clients, staff, influencers, and other stakeholders by providing useful, high-quality and ethically sourced Swag. But that’s not the only thing we do. From artwork design to inventory management, we’ve got you covered."
    },
    additional: [
      {
        image: `${baseUrl}graphic.svg`,
        title: "Graphic Design Support",
        description: "Our expert designers know the world of promotional products. From artwork optimization to custom solutions, our graphic designers have you covered."
      },
      {
        image: `${baseUrl}mangement.svg`,
        title: "Effortless Inventory Management",
        description: "Say goodbye to cluttered offices and logistical headaches with Ethical Swag's seamless inventory management solutions."
      },
      {
        image: `${baseUrl}shipping.svg`,
        title: "Shipping",
        description: "Due to the current global challenges, freight costs are fluctuating daily and we are able to quote your shipping for estimate purposes only. You will be charged according to the actual shipping costs at the time of fulfillment."
      },
      {
        image: `${baseUrl}fullfillment.svg`,
        title: "Complete Swag Fulfillment Solutions",
        description: "Ethical Swag provides a suite of turn-key services designed with convenience in mind to streamline your swag management process and elevate your brand presence."
      },
    ],
    explore_collections: {
      data: {
        title: "Shop Ethical Swag",
        Sub_titles: "Explore Our Collections",
      },
      images: [
        {
          image: `${baseUrl}jpeg-optimizer_Apparel.webp`,
          title: "Shop Apparel",
        },
        {
          image: `${baseUrl}jpeg-optimizer_office.webp`,
          title: "Shop Office",
        },
        {
          image: `${baseUrl}jpeg-optimizer_Bag.webp`,
          title: "Shop Bags",
        },
        {
          image: `${baseUrl}jpeg-optimizer_Drink.webp`,
          title: "Shop Drinkware",
        },

      ]
    },
    handpicked: {
      logo_image: images.CertifyImg,
      card_image: `${baseUrl}jpeg-optimizer_certify_img.png`,
      title: "Handpicked and Ethically Sourced Promotional Products",
      description: "At Ethical Swag, we only work with suppliers that have passed strict audits related to social compliance, environmental impact, product safety, supply chain security and product quality. We look for sustainable goods which includes recycled content, organic, biodegradable, etc., we watch carbon footprint when shipping and make sure there is no green washing with our suppliers. As a Certified B Corp, we opened up and were audited to a global sustainability standard so that you know you can trust us. It's important to us because it's not what you say, but what you do, that matters.",
    },
    feedback: {
      data: {
        title: "Our client feedback",
        sub_title: "What Our Clients Say"
      },
      client_data: [
        {
          heading: "Cape Breton Regional Chamber of Commerce",
          paragraph: "We had a fantastic experience working with Ethical Swag! They were so quick to answer any of our very many questions. Our customized journals are of excellent quality and at a fantastic price. We look forward to working with Ethical Swag in the future, and we highly recommend them.",
          sub_heading: "Stories M Fully Custom Notebook 5'' X 7'' With 150 Pages Made in Canada",
          timing: "02/01/2021"
        },
        {
          heading: "Cape Breton Regional Chamber of Commerce",
          paragraph: "We had a fantastic experience working with Ethical Swag! They were so quick to answer any of our very many questions. Our customized journals are of excellent quality and at a fantastic price. We look forward to working with Ethical Swag in the future, and we highly recommend them.",
          sub_heading: "Stories M Fully Custom Notebook 5'' X 7'' With 150 Pages Made in Canada",
          timing: "02/01/2021"
        },
        {
          heading: "Cape Breton Regional Chamber of Commerce",
          paragraph: "We had a fantastic experience working with Ethical Swag! They were so quick to answer any of our very many questions. Our customized journals are of excellent quality and at a fantastic price. We look forward to working with Ethical Swag in the future, and we highly recommend them.",
          sub_heading: "Stories M Fully Custom Notebook 5'' X 7'' With 150 Pages Made in Canada",
          timing: "02/01/2021"
        },
        {
          heading: "Cape Breton Regional Chamber of Commerce",
          paragraph: "We had a fantastic experience working with Ethical Swag! They were so quick to answer any of our very many questions. Our customized journals are of excellent quality and at a fantastic price. We look forward to working with Ethical Swag in the future, and we highly recommend them.",
          sub_heading: "Stories M Fully Custom Notebook 5'' X 7'' With 150 Pages Made in Canada",
          timing: "02/01/2021"
        },
      ]
    }
  };

  return (
    <>
      <PrimaryHeader />
      <SecondaryHeader />
      <HeroSection data={data?.banner}/>
      <SliderSection data={data?.sponsor} />
      <WhatWeDo data={data?.we_do} />
      <AdditionalServices data={data?.additional} />
      <ExploreCollections data={data?.explore_collections} />
      <section className={Styles.home_blog}>
        <div className={`${Styles.Blog_container} ${Styles.blog_card_container}`}>
          <h2>Read <b>Our Blogs</b></h2>
          <div className={`${Styles.blog_mainDiv}`}>
            {blog?.articles?.data?.slice(0, 3).map(article => (
              <BlogCard key={article.id} article={article} />
            ))}
          </div>
          <Link href="/blogs/articles">
          <button className='btn_global blog_btn'>View All</button>
          </Link>
        </div>
      </section>
      <Certified />
      <Handpicked data={data?.handpicked} />
      <Tesimoanial data={data?.feedback} />
      <Footer />
    </>
  )
}

export default Home
