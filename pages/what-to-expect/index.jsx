import * as React from 'react';
// import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PrimaryHeader from '../../components/primary-header/PrimaryHeader'
import SecondaryHeader from '../../components/secondary-header/SecondaryHeader'
import InnerBanner from '../../components/InnerBanner/InnerBanner'
import Footer from '../../components/footer/Footer'
import styles from './whatToExpect.module.css'
import images from '../../constants/images';
import Image from 'next/image';

export default function WhatToExpect() {
  const baseUrl = "https://ethical3.s3.ca-central-1.amazonaws.com/images/"

  let data = {
    inner_banner_title: {
      title: " What To Expect",
      image: `${baseUrl}HowOrderHeroBanner.jpg`
    },
    title:"How to order at <b>Ethical Swag</b>",
    sub_title:"It’s easy to find products you’ll love at Ethical Swag.",
    note:"By submitting an order, you are not committing to buy. You also don't have to pay anything until all your virtual proofs are approved and sent to production. 6+ Our team will work with you to make sure it is all perfect before any payment is required!",
    card_data: [
      {
        image: `${baseUrl}shipping_Expect.svg`,
        title: "Discover and Customize:",
        description: "Browse our sustainable product range on our website. Use filters to easily find what you need and add to your cart.Upload your artwork for customization."
      },
      {
        image: `${baseUrl}Viral_proof.svg`,
        title: "Confirm and Produce:",
        description: "Receive a detailed estimate, virtual proofs, and make any changes. Approve the order, pay the invoice, and we’ll start production."
      },
      {
        image:`${baseUrl}tracking_expect.svg`,
        title: "Track and Feedback:",
        description: "Monitor your order’s progress through our client portal. Receive your products and share your experience with us."
      },
      {
        image: `${baseUrl}estimate_expect.svg`,
        title: "Request and Review:",
        description: "Submit a no-obligation estimate request. First-timers, review and approve your orders by signing up for our secure client portal. Our team verifies details like inventory and artwork quality."
      },
      {
        image: `${baseUrl}Invoice_expect.svg`,
        title: "Invoice Provided",
        description: "Once Virtual Proof is approved, payment is required. Link to payment portal is provided."
      },
      {
        image: `${baseUrl}delivered.svg`,
        title: "Delivered",
        description: "To you in bulk or individually to clients/staff your choice!"
      },
    ]
  }


  const leftContent = data?.card_data.filter((_, index) => index % 2 === 0);
  const rightContent = data?.card_data.filter((_, index) => index % 2 !== 0);
  return (
    <div>
      <PrimaryHeader />
      <SecondaryHeader />
      <InnerBanner data={data?.inner_banner_title} />


      <section className='container'>
        <div className='d-none d-md-block'>
          <div className={styles.WahtToExpect_content}>
            <h2 className='text-center mt-5 mb-3' dangerouslySetInnerHTML={{ __html: data?.title }}/>
            <p className='text-center' dangerouslySetInnerHTML={{ __html: data?.sub_title }}/>
          </div>

          <div className={styles.WahtToExpectInner}>
            {/* <div className={styles.left_content}>


              <div className={styles.ExpectInner_Div}>
                <div className={styles.Expect_Image}>
                  <Image src={images.shipping_Expect} alt='shipping_Expect' />
                </div>
                <h3>Discover and Customize:</h3>
                <p>Browse our sustainable product range on our website. Use filters to easily find what you need and add to your cart.
                  Upload your artwork for customization.</p>
              </div>



              <div className={styles.ExpectInner_Div}>
                <div className={styles.Expect_Image}>
                  <Image src={images.Viral_proof} alt='shipping_Expect' />
                </div>
                <h3>Confirm and Produce:</h3>
                <p>Receive a detailed estimate, virtual proofs, and make any changes. Approve the order, pay the invoice, and we’ll start production.</p>
              </div>

              <div className={styles.ExpectInner_Div}>
                <div className={styles.Expect_Image}>
                  <Image src={images.tracking_expect} alt='shipping_Expect' />
                </div>
                <h3>Track and Feedback:</h3>
                <p>Monitor your order’s progress through our client portal. Receive your products and share your experience with us.</p>
              </div>
            </div>


            <div className={styles.right_content}>
              <div className={styles.ExpectInner_Div}>
                <div className={styles.Expect_Image}>
                  <Image src={images.estimate_expect} alt='shipping_Expect' />
                </div>
                <h3>Request and Review:</h3>
                <p>Submit a no-obligation estimate request. First-timers, review and approve your orders by signing up for our secure client portal. Our team verifies details like inventory and artwork quality.</p>
              </div>

              <div className={styles.ExpectInner_Div}>
                <div className={styles.Expect_Image}>
                  <Image src={images.Invoice_expect} alt='shipping_Expect' />
                </div>
                <h3>Invoice Provided</h3>
                <p>Once Virtual Proof is approved, payment is required. Link to payment portal is provided.</p>
              </div>

              <div className={styles.ExpectInner_Div}>
                <div className={styles.Expect_Image}>
                  <Image src={images.delivered} alt='shipping_Expect' />
                </div>
                <h3>Delivered</h3>
                <p>To you in bulk or individually to clients/staff your choice!</p>
              </div>
            </div> */}
            <div className={styles.left_content}>
              {leftContent.map((data, index) => (
                <div key={index} className={styles.ExpectInner_Div}>
                  <div className={styles.Expect_Image}>
                    <Image src={data.image} height={85} width={85} alt={data.title} />
                  </div>
                  <h3>{data.title}</h3>
                  <p>{data.description}</p>
                </div>
              ))}
            </div>
            <div className={styles.right_content}>
              {rightContent.map((data, index) => (
                <div key={index} className={styles.ExpectInner_Div}>
                  <div className={styles.Expect_Image}>
                    <Image src={data.image} height={85} width={85} alt={data.title} />
                  </div>
                  <h3>{data.title}</h3>
                  <p>{data.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>




        {/* mobile_tab */}
        <div className='d-block d-md-none'>
          <div className={styles.WahtToExpectInner}>
            <div className={styles.left_content}>
              {/* <div className={styles.ExpectInner_Div}> */}
              {data?.card_data.map((data, index) => (
                <div key={index} className={styles.ExpectInner_Div}>
                  <div className={styles.Expect_Image}>
                    <Image src={data.image} height={85} width={85} alt={data.title} />
                  </div>
                  <h3>{data.title}</h3>
                  <p>{data.description}</p>
                </div>
              ))}
              {/* </div> */}
              {/* <div className={styles.ExpectInner_Div}>
                <div className={styles.Expect_Image}>
                  <Image src={images.estimate_expect} alt='shipping_Expect' />
                </div>
                <h3>Request and Review:</h3>
                <p>Submit a no-obligation estimate request. First-timers, review and approve your orders by signing up for our secure client portal. Our team verifies details like inventory and artwork quality.</p>
              </div> */}
              {/* <div className={styles.ExpectInner_Div}>
                <div className={styles.Expect_Image}>
                  <Image src={images.estimate_expect} alt='shipping_Expect' />
                </div>
                <h3>Request and Review:</h3>
                <p>Submit a no-obligation estimate request. First-timers, review and approve your orders by signing up for our secure client portal. Our team verifies details like inventory and artwork quality.</p>
              </div>

              <div className={styles.ExpectInner_Div}>
                <div className={styles.Expect_Image}>
                  <Image src={images.Viral_proof} alt='shipping_Expect' />
                </div>
                <h3>Confirm and Produce:</h3>
                <p>Receive a detailed estimate, virtual proofs, and make any changes. Approve the order, pay the invoice, and we’ll start production.</p>
              </div>

              <div className={styles.ExpectInner_Div}>
                <div className={styles.Expect_Image}>
                  <Image src={images.Invoice_expect} alt='shipping_Expect' />
                </div>
                <h3>Invoice Provided</h3>
                <p>Once Virtual Proof is approved, payment is required. Link to payment portal is provided.</p>
              </div>

              <div className={styles.ExpectInner_Div}>
                <div className={styles.Expect_Image}>
                  <Image src={images.tracking_expect} alt='shipping_Expect' />
                </div>
                <h3>Track and Feedback:</h3>
                <p>Monitor your order’s progress through our client portal. Receive your products and share your experience with us.</p>
              </div>


              <div className={styles.ExpectInner_Div}>
                <div className={styles.Expect_Image}>
                  <Image src={images.delivered} alt='shipping_Expect' />
                </div>
                <h3>Delivered</h3>
                <p>To you in bulk or individually to clients/staff your choice!</p>
              </div> */}


            </div>
          </div>
        </div>


        <div className={styles.note_section}>
          <p><b>Note:</b> {data?.note}</p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
