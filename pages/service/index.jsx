import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import PrimaryHeader from '../../components/primary-header/PrimaryHeader'
import SecondaryHeader from '../../components/secondary-header/SecondaryHeader'
import Footer from '../../components/footer/Footer'
import InnerBanner from '../../components/InnerBanner/InnerBanner'
import styles from '../../pages/services/services.module.css'
import images from '../../constants/images'
import Image from 'next/image'
import Input from '../../components/input/Input'
import Link from 'next/link'

import Styles from '../../styles/category.module.css'
const Services = () => {
    const baseUrl = "https://ethical3.s3.ca-central-1.amazonaws.com/images/"

    const data = {
        inner_banner_title: {
            title: " Service",
            image:`${baseUrl}term-banner.png`
        },
        solutions: {
            title: "Complete Swag Fulfilment Solutions",
            description: {
                des1: "Our focus is on providing high-quality, ethically sourced swag that is not only useful and desirable but also aligns with your values. However, our services go beyond just offering great products.",
                des2: "From graphic design support to seamless inventory management and the creation of a custom online swag store tailored to your company or organization, we are your comprehensive solution. Discover what Ethical Swag can do to elevate your business:"
            }
        },
        inventory_management: {
            title: "Effortless Inventory Management",
            description: "Say goodbye to cluttered offices and logistical headaches with Ethical Swag's seamless inventory management solution. Here's how we make it hassle-free for you:",
            image: `${baseUrl}jpeg-optimizer_effortlessImg.png`,
            data: [
                {   image: `${baseUrl}white_check.svg`,
                    title: "Volume Discounts",
                    description: "When you're ready to distribute your swag, it's as easy as clicking a button. Have them shipped directly to your office or any desired address with unparalleled convenience."
                },
                {
                    image: `${baseUrl}white_check.svg`,
                    title: "One-Click Shipping:",
                    description: "When you're ready to distribute your swag, it's as easy as clicking a button. Have them shipped directly to your office or any desired address with unparalleled convenience."
                },
                {
                    image: `${baseUrl}white_check.svg`,
                    title: "Space Solutions",
                    description: "No need to let extra boxes of tumblers and tote bags take over your office space. We provide dedicated storage facilities to accommodate your inventory needs."
                },
                {
                    image: `${baseUrl}white_check.svg`,
                    title: "Real-Time Monitoring:",
                    description: "No need to let extra boxes of tumblers and tote bags take over your office space. We provide dedicated storage facilities to accommodate your inventory needs."
                },
            ]
        },
        custom_design: {
            title: "Custom <b>Graphic Design",
            sub_title: "Our designers are on standby to help you with your graphic design needs:",
            topic: [
                {
                    image: `${baseUrl}check_list.svg`,
                    description: "Adjust your artwork to comply with the correct file format for decoration imprint"
                },
                {
                    image: `${baseUrl}check_list.svg`,
                    description: "Create small graphic designs for your Swag"
                },
            ]
        },
        swag_pack: {
            title: "Swag Pack & Kitting <b>Services</b> ",
            description: "At Ethical Swag, we prioritize convenience, security, and data protection every step of the way. Let us handle the details so you can focus on delighting your recipients, growing your brand presence, and building relationships.",
            sub_title: "Our flexible solutions are designed to fit your needs:",
            sub_title_topics: [
                {
                    image: `${baseUrl}check_list.svg`,
                    title: "<b>Swag Pack Service:</b> Our experienced team will work with you to design your swag packs, and upon receipt of your products, we will assemble them into kits, ready for on demand shipping to your clients, staff, and stakeholders as needed.",
                },
                {
                    image: `${baseUrl}check_list.svg`,
                    title: "<b>Pick and Pack Service:</b> Looking to have more flexibility with your swag? With our pick and pack service you can select your products and have them shipped in bulk to our warehouse. As needed, select swag items from your inventory dashboard and submit a shipment request. We'll kit up your shipment and send it out. Easy peasy!",
                },
                {
                    image: `${baseUrl}check_list.svg`,
                    title: "<b>Rekitting: </b>Modify existing swag packs or create new configurations by adding, removing, or replacing items as needed.",
                },
            ]
        },
        swag_shop: {
            title: "<b>Swag </b>Shops",
            description: "Pop-Up Shops<br></br> Set up temporary landing pages for swag gift choices and address or apparel size collection, ensuring a seamless and secure experience for recipients.<br></br> Company Stores<br></br>  Benefit from a customized swag shop hosted by Ethical Swag, where you can add pre-approved branded merchandise options. Team members can easily shop for swag while ensuring designs align perfectly with corporate brand guidelines."
        },
        drop_shipping: {
            title: "<b>Drop Shipping </b>On Demand",
            description: "Experience the ease and convenience of shipping your swag on demand. Simply submit your shipping requests in our user-friendly portal, and our fulfilment team we take care of shipping your swag to your desired recipients. International shipments needed? No problem! Talk to one of our team members for all the details."
        },
        got_questions: {
            title: "<b> Got </b> Questions?",
            description: "Schedule a demo with our Swag Specialists to learn more about our fulfillment services!",
        },
        resources_data_pdf:{
            image: `${baseUrl}pdfImg.webp`,
            title:"Resources",
            sub_title:"Use the guide to help navigate the different type of files.",
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Im is simply dummy typesetting industry."
        }
    }


    const router = useRouter()
    const dispatch = useDispatch()
    const [relatedCategories, setRelatedCategories] = useState([])
    const allCategories = useSelector((state) => state.category.allCategories)
    const collectionForUrl = useSelector(
      (state) => state.category.collectionForUrl
    )
    console.log(relatedCategories, "relatedCategories")
    useEffect(() => {
      const generateRelatedCategories = () => {
        const related =
          allCategories &&
          Object.keys(allCategories).filter(
            (category) => (category === collectionForUrl, 'category')
          )
        if (related.length > 2) {
          const randomIndices = []
          while (randomIndices.length < 2) {
            const randomIndex = Math.floor(Math.random() * related.length)
            if (!randomIndices.includes(randomIndex)) {
              randomIndices.push(randomIndex)
            }
          }
          setRelatedCategories(randomIndices.map((index) => related[index]))
        } else {
          setRelatedCategories(related)
        }
      }
  
      generateRelatedCategories()
    }, [collectionForUrl, allCategories])
  
    const handlePush = (data) => {
      router.push(`/category/${data}?cat_id=${allCategories[data]?.airtabelId}`)
      dispatch(setCollectionForUrl(data))
      // dispatch(setSubCollectionForUrl(''))
    }
    return (
        <>
            <PrimaryHeader />
            <SecondaryHeader />
            <InnerBanner data={data?.inner_banner_title} />


            <section className='container'>
                <div className={styles.ServicesPage}>
                    <div className={styles.ServicesContent}>
                        <h2 className='text-center mt-5 mb-4'>{data?.solutions?.title.slice(0, 8)} <b>{data?.solutions?.title.slice(8, 40)}</b> </h2>
                        <p className='text-center'>{data?.solutions?.description?.des1}<br></br><br></br>{data?.solutions?.description?.des2}</p>
                    </div>

                    <div className='Text_row align_center mt-5'>
                        <div className='Text_row align_cente'>
                            <div>
                                <h2 className='mb-4' dangerouslySetInnerHTML={{ __html: data?.custom_design?.title }} />
                                <div className={styles.light_bg}>
                                    <p className='mb-3'>{data?.custom_design?.sub_title}</p>
                                    {data?.custom_design?.topic.map((res) =>
                                        <ul className={styles.unorderlist}>
                                            <li className='d-flex gap-2'><span><Image src={res?.image} alt='CheckList' layout='fill' /></span>{res?.description}</li>
                                            {/* <li className='d-flex gap-2'> <span><Image src={images.CheckList} alt='CheckList' /></span>Create small graphic designs for your Swag</li> */}
                                        </ul>
                                    )}
                                </div>
                            </div>

                            <Input />

                        </div>
                    </div>
                </div>
            </section>


            <section className='container'>
                <div className={styles.Effortlessmanagement}>
                    <div className='Text_row align_center'>
                        <div>
                            <h2>{data?.inventory_management?.title}</h2>
                            <p className='py-4'>{data?.inventory_management?.description}</p>
                            <ul className={`${styles.unorderlist} ${styles.effortless_list}`}>

                                {data?.inventory_management?.data.map((res) =>
                                    <li className='d-flex gap-3 align-items-start'>
                                        <span className='pt-1 checkList'><Image src={res?.image} width={20} height={20} alt='CheckList' /></span>

                                        <div>
                                            <h3>{res?.title}</h3>
                                            <p className={styles.list_content}>{res?.description}</p></div>
                                    </li>
                                )}

                            </ul>
                        </div>
                        <div className={styles.effortlessImg}>
                            <Image src={data?.inventory_management?.image} height={400} width={400} alt='effortlessImg' />
                        </div>

                    </div>
                </div>
            </section>



            <section className='container'>
                <div className={styles.ServicesPage}>


                    <div >
                        <div className='Text_row align_cente flex-direction'>

                            <Input />

                            <div>
                                <div className={styles.ServicesContent}>
                                    <h2 className='text-left mb-2' dangerouslySetInnerHTML={{ __html: data?.swag_pack?.title }} />
                                    <p className='text-left'>{data?.swag_pack?.description}</p>
                                </div>
                                <div className={styles.purple_bg}>
                                    <p className='mb-3'>{data?.swag_pack?.sub_title}</p>
                                    {data?.swag_pack?.sub_title_topics.map((res) =>
                                        <ul className={`${styles.unorderlist} ${styles.effortless_list}`}>
                                            <li className='d-flex gap-2'><span><Image src={res?.image} alt='CheckList' width={15} height={15} /></span>
                                                <div dangerouslySetInnerHTML={{ __html: res?.title }} /></li>
                                        </ul>
                                    )}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>


            <section className={styles.shipping_swag}>
                <div className='container d-flex flex-column gap-5'>
                    <div className={styles.ShippingSwag}>
                        <h2 dangerouslySetInnerHTML={{ __html: data?.drop_shipping?.title }} />
                        <p dangerouslySetInnerHTML={{ __html: data?.drop_shipping?.description }} />
                    </div>

                    <div className={styles.ShippingSwag}>
                        <h2 dangerouslySetInnerHTML={{ __html: data?.swag_shop?.title }} />
                        <p dangerouslySetInnerHTML={{ __html: data?.swag_shop?.description }} />
                    </div>

                    <div className={styles.ShippingSwag}>
                        <h2 dangerouslySetInnerHTML={{ __html: data?.got_questions?.title }} />
                        <p dangerouslySetInnerHTML={{ __html: data?.got_questions?.description }} />
                    </div>
                </div>
            </section>

            <section className={styles.Resources_sec}>
                <div className='container Text_row align_center'>
                    <div className={styles.PdfImg}> <Image src={data?.resources_data_pdf?.image} alt='ResourcesPdf' layout='fill' /></div>
                    {console.log(data?.resources_data_pdf?.image,"pdf image")}
                    <div><p className={styles.subheading}>{data?.resources_data_pdf?.title}</p>
                        <h2 className='my-3'>{data?.resources_data_pdf?.sub_title}</h2>
                        <p dangerouslySetInnerHTML={{ __html: data?.resources_data_pdf?.description }}/>
                        <div className='d-flex flex-wrap gap-4 mt-5'>
                            <button className='btn_global btnOne'><Link href='https://cdn.shopify.com/s/files/1/0569/9413/6239/files/ES_Image_File_Types_Guide.pdf?v=1690399982'>View Pdf</Link></button>
                            <button className='btn_global btntwo'>Download Pdf</button>

                        </div>
                    </div>

                </div>

            </section>
            <div className={Styles.related_categories}>
        <div className={Styles.content_wrapper}>
          {relatedCategories &&
            relatedCategories.map((data) => (
              <>
                <div className={Styles.img_content_1}>
                  <div className={Styles.imgContent}>
                    <Image
                      src={allCategories[data]?.image}
                      layout="fill"
                      alt="Related Categories"
                    />
                  </div>
                  <div className={Styles.textContent}>
                    <div>
                      <h3 className={Styles.text_capitalize}>{data}</h3>
                    </div>

                    <button onClick={() => handlePush(data)}>Shop Now</button>
                  </div>
                </div>
              </>
            ))}
        </div>
      </div>
            <Footer />
        </>
    )
}

export default Services
