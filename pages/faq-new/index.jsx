import * as React from 'react';
import { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
// import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PrimaryHeader from '../../components/primary-header/PrimaryHeader'
import SecondaryHeader from '../../components/secondary-header/SecondaryHeader'
import InnerBanner from '../../components/InnerBanner/InnerBanner'
import Footer from '../../components/footer/Footer'
import { FiPlusCircle } from "react-icons/fi";
import { LuMinusCircle } from "react-icons/lu";
import styles from '../faq-new/Faq.module.css'

export default function AccordionExpandIcon() {
  const baseUrl = "https://ethical3.s3.ca-central-1.amazonaws.com/images/"
  let data = {
    inner_banner_title: {
      title: " FAQ",
      image:`${baseUrl}FAQsHeroBanner.jpg`
    },


    product_customization: [
      {
        question: "What are the decoration methods available?",
        answer: "We offer 1-colour decoration and multi-colour decoration options to customize the products, but the technique used to decorate vary from manufacturer to manufacturer.The most popular decoration methods we do are: silk screen, pad print, digital print, heat transfer, embroidery, laser engraving, and deboss / emboss.When placing your order, you can select how many colours your logo or artwork has and we'll suggest the best decoration type for what you want to print on the product."
      },
      {
        question: "How many logos or different kinds of artwork can be imprinted on the products?",
        answer: "Some products can only be decorated in one location, but several products can be decorated in 2 or more locations (i.e. the front and back of a t-shirt). If you’re interested in decorating a product in more than one location, just let your order representative know when you submit your order (you can leave a note for us when you submit your estimate request online) and we’ll connect with you to set it up."
      },
      {
        question: "Do you offer unbranded items?",
        answer: "Yes, if you’re interested in a bulk order of undecorated products, we can help - for most products. If this is something you’re interested in, please make a note on your order when submitting it!"
      },
      {
        question: "Can we use multiple designs?",
        answer: ""
      },
      {
        question: "What is silkscreening?",
        answer: "Silkscreen printing is a versatile printing method where ink is applied directly to the product through a customized screen. The method ensures excellent adhesion and vibrant color reproduction on these surfaces. We can guarantee a PMS color match with the silkscreening decoration method."
      },
      {
        question: "I don't have a logo or an artwork ready. Can Ethical Swag help?",
        answer: "We can absolutely help get your artwork ready to be decorated on your products! If you do not have artwork in vector artwork, we can create it for you based on a high-resolution png or jpg file. Please note that additional fees apply."
      },
    ]
    ,

    production_process: [
      {
        question: "How long is the production time?",
        topic1: "Bulk Orders:",
        topic1_ans: "Standard orders have a turnaround time of roughly 20 business days including shipping. However, there are some exceptions to this, for example for orders including apparel. If your product is Swift Swag Qualified, we can turn your order around in 10 business days. Our production team will outline the specific production time for your order on your Estimate.",
        topic2: "Swag Pack Orders:",
        topic2_ans: "The turnaround time is an average of 30-35 business days, which includes the time to decorate, kit, and ship your swag packs.",
        topic3: "Need It In A Rush?",
        topic3_ans: "Be sure to shop our Swift Swag collection to browse products that qualify for rush service. When submitting your estimate request, but sure to let us know your in-hands date and we’ll check if it is possible to meet the deadline. Rush order fees may apply."
      },
      {
        question: "How long does it take after I submit my “Estimate Request”?",
        answer: "Our team will be in contact with you within 24 hours.  At that stage we highlight any missing information (if any) and provide virtual proofs (provided we have your logo). Once we’ve received your approval, you can pay your invoice. Upon receipt of payment, we’ll submit your order to production. Please note that delays in receipt of payment may result in extending your in hands date."
      },
      {
        question: "How can I request a virtual mockup?",
        answer: "Simply go to our website, select the items you’re interested in, and submit your estimate request. Make sure you’ve uploaded your art / logo file for each product. Once we’ve received your request, we’ll mock up the products and send you the virtual proof for review. Please note that all Estimates will include virtual proofs, provided that vector art files were submitted. "
      },
      {
        question: "How long does it take for the order approval / proofs to be ready?",
        answer: "Virtual proofs will be included in your Estimate, if the artwork you’ve submitted is in the proper format. You can expect to receive your Estimate within 1 business day. If our team has any concerns about your artwork, or if the artwork submitted is not vector, we will let you know."
      },
      {
        question: "How can I process a return?",
        answer: "Please contact your Order Rep within 10 business days of receiving your order if you notice any problems with your order!"
      },
    ]
    ,

    building_packs:
      [
        {
          question: "What do I need to get started?",
          answer: "You simply select the products you’re interested in on our site, and then check off the box during checkout to let us know you’re interested in swag pack services and one of our team members will reach out via email to start the process."
        },
        {
          question: "What is the minimum quantity of swag packs I can order?",
          answer: "Swag packs order starts at 25 units with as many products inside as you need. Please note that minimum order quantities (MOQ) for all products apply. But, if there are leftover products, we can ship it to you in bulk for future uses! Contact us if you have specific questions regarding quantities."
        },
        {
          question: "Are all products in the swag pack customizable?",
          answer: "Most products are able to be customized with your logo or message. Edible products, such as coffee bags, candy, honey, etc cannot be customized."
        },
        {
          question: "Can I order unbranded (undecorated) swag in my swag pack?",
          answer: "Yes, you can. Please leave us a note while placing your order."
        },
        {
          question: "How many products can I add in a swag pack?",
          answer: "You can add as many products as you like to a swag pack. Note that the heavier the pack, the shipping expenses will be higher and you might require to upgrade to a bigger box!"
        },
        {
          question: "How many logos or artwork can be imprinted on the products in a swag pack?",
          answer: "Each product in the swag pack can be decorated independently - they don’t all have to have the same logo or design. For example, if you have a 5 products in your swag pack, each can be individually designed with different logos or artwork based on your preference."
        },
        {
          question: "Do you charge for assembly (kitting)?",
          answer: "Yes, we do and the assembly (kitting) cost is already included in each swag pack. The price you see on the screen is final, except if there are modifications to be made to the order after the kitting process has already been completed. In this case, a “rekitting” fee applies. Our team can provide more info about our fulfilment services and pricing - just reach out!"
        },
        {
          question: "What happens if apparel items don’t fit?",
          answer: "Ethical Swag does not assume responsibility for items that do not fit so please choose your sizes wisely."
        },
        {
          question: "What is the difference between swag pack services and pick and pack services?",
          answer: "Swag Packs: A selection of 1 or more products that are purchased in bulk and shipped to one of our fulfilment centres. Once we receive all the products, we kit up the inventory into swag packs and store the assembled packs so they can be shipped out as needed.Pros of Swag Packs: Because all of the kitting is done up front, these packs can be shipped out very quickly upon receipt of a shipment request. Pick and Pack: Items are purchased in bulk and stored in bulk at one of our fulfilment centres. When you want to ship something, you submit a shipment request and let us know what you want to ship. We then pick and pack up the items and ship the package. Pros of Pick and Pack: More flexibility so ship different combinations of products based on the situation or the recipient."
        },
      ]
    ,

    bulk_order_shipping: [
      {
        question: "How much does shipping cost?",
        answer: "We recommend ground shipping on our bulk orders for a couple of reasons.  It is better on our carbon footprint and it is significantly more cost effective!  So we allow for up to 5 days shipping on all orders.  Shipping will be calculated by one of our team members and included on your “Estimate” once we know all the details of your order."
      },
      {
        question: "Can my order be shipped to multiple locations?",
        answer: "Yes, we call that split shipping.  Please make a note of the multiple shipping addresses if you know them when submitting your “Request for Estimate”.  If you know you need to ship to multiple addresses but don’t have the addresses yet, we can finalize those details before you “approve” your order and pay."
      },
      {
        question: "Why isn't the shipping cost calculated on the website?",
        answer: "We need to confirm your shipping address, quantities, etc. of your order so a shipping quote will be included on our “Estimate” once one of our team has had a chance to review all of your details."
      },
      {
        question: "Can I change the shipping date after placing my order?",
        answer: "You can update the in-hands date for your order during the “Estimate” stage. You can go ahead and submit your “Request for Estimate” and still have a chance to change the date. It is important to note that once you “Approve” the order no more changes can be made."
      },
    ]
    ,

    swag_pack_shipping: [
      {
        question: "How are swag packs shipped?",
        answer: "Swag Packs are typically drop-shipped to individual addresses. Additionally, we can ship multiple assembled swag packs in a bigger box to one address (your office, for example). You decide how you want your swag pack project to be shipped!"
      },
      {
        question: "How are pick and pack items shipped?",
        answer: "For pick and pack shipments, freight costs depend on the size and weight of the products, as well as the shipping destination. We charge market rates for each shipment and provide you with a monthly bill for all shipping costs accrued throughout the month"
      },
      {
        question: "Will all items fit in the swag pack?",
        answer: "We choose a custom sized box to best fit your products and keep your shipping footprint as small as possible."
      },
      {
        question: "What kinds of boxes or packaging is used for the swag packs?",
        answer: "We have various gift box sizes or eco-mailers that will fit your swag pack needs!"
      },
      {
        question: "How much does it cost to send a swag pack?",
        answer: "For Swag Packs, standard shipping is currently $20 for domestic addresses and market rate for anything being shipped internationally."
      },
      {
        question: "Can my order be shipped to multiple locations?",
        answer: "Yes! We'll ship Swag Packs to as many addresses as needed. We can also split-ship your bulk orders to more than one location. Just let us know when placing your order."
      },
      {
        question: "Can you ship some of my swag packs right away and warehouse the rest to be shipped as needed?",
        answer: "If you need us to hold on to part of your order to send out at a later date, let us know!  We can warehouse your branded products for you. Contact us to let us know you’re interested in warehousing - we would love to chat! "
      },
      {
        question: "What happens if a swag pack is returned?",
        answer: "If a package is returned, we will contact you to ensure that the shipping address that was provided is correct. We will check the details and attempt to ship it out again. Additional fees will apply for handling and reshipping."
      },
      {
        question: "How do I handle submitting multiple shipping addresses?",
        answer: "We have a Shipment Request Template (available as a csv file or Google Sheet) that we will send you and it must be filled out and returned to us at least 2 weeks prior to your target in-hands date for the shipments."
      },
      {
        question: "Do you ever contact our recipients?",
        answer: "No, we do not. We will be only working with you, the person who is responsible for submitting the order."
      },
      {
        question: "Do you ship swag packs or pick and pack shipments internationally?",
        answer: "Yes! International shipments will take longer and additional costs will apply to cover duties or customs fees."
      },
      {
        question: "How do you verify recipient addresses?",
        answer: "We do our best to ensure that the addresses submitted to us are correct, but it is up to you to make sure you are submitting the correct address of your recipients. If you would like us to collect recipient addresses on your behalf, reach out to us about our Pop-Up Shops service."
      },
      {
        question: "Do you send swag packs directly to the recipient?",
        answer: "We can ship the packs directly to your recipients’ addresses or in bulk (several kitted swag packs in a larger box) if you prefer to distribute them yourself. Please notify us how you would like it shipped while placing your order."
      },
    ]
    ,

    our_services:
      [
        {
          question: "We need somewhere to store our swag. Can Ethical Swag help?",
          answer: "If you need us to warehouse your branded swag for on-demand drop-shipping, let us know! We can warehouse your branded products for you. Contact us to let us know you’re interested in warehousing - we would love to chat!"
        },
        {
          question: "What if I don't have an artwork file in vector format? Can your graphic designers help?",
          answer: "We can absolutely help get your artwork ready to be decorated on your products! If you do not have artwork in vector artwork, we can create it for you based on a high-resolution png or jpg file. Please note that additional fees apply."
        },
        {
          question: "I don't know how many of each size to order. Can you help with this?",
          answer: "Absolutely. Our pop-up shop is perfect for this. We can set up a branded, temporary 1-page website that can be used to collect your recipients' information so you know exactly what swag needs to be ordered. Whether you need to collect sizing, colors shipping addresses, or even choices between different gift options, we can take care of it for you. All you have to do is share the link with the recipients, they submit their details, and we provide you with the information needed to move forward with your project.Our pop-up shop service is safe and secure - your data is encryped and kept strictly confidential."
        },
      ]
    ,

    samples: {
      data:
        [
          {
            question: "Can I get a sample before placing the order?",
            answer: "Of course! You can order a sample from any product directly from the product pages. Simply toggle on “This is a sample”. You can order a maximum of 3 samples of any product. Note that the samples will be shipped unbranded (undecorated).If you require branded samples, please contact us. Please note that some products are not available for branded samples."
          }
        ]
    }
    ,

    payment: {
      data:
        [
          {
            question: "How do I pay for my order?",
            answer: "Once you approve all details of your Estimate, your invoice will be available within your client dashboard. You can both download the PDF of the invoice from within the dashboard, as well as send a copy of the invoice via email.You can pay for your invoice within the dashboard via credit card (Visa, Mastercard, American Express), or you can pay via wire transfer (ACH, EFT, Wire). If selecting wire transfer, the banking details for the transfer will be provided within the dashboard and you will be prompted to upload a copy or your remittance. Once the payment has been received, our bookkeeper will update the payment status as “Paid”."
          },
          {
            question: "What are your payment terms?",
            answer: "Our invoices are due upon receipt. All new clients are required to pre-pay for their first order. If you want to apply for credit terms, you can let our team know and we will send you a credit application. If approved for credit, we will let you know and will apply the terms to your next invoice. If you fail to pay in accordance with the credit terms, you will be required to pre-pay for future orders."
          }
        ]
    }

  }


  const [expanded, setExpanded] = useState(null);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  console.log(data, "data check")
  return (
    <div>
      <PrimaryHeader />
      <SecondaryHeader />
      <InnerBanner data={data?.inner_banner_title} />


      <section className='container'>
        <div className={styles.faq_content}>
          <h2 className='text-center mt-5 mb-3'>Frequently <b>Asked Questions</b></h2>
          <p className='text-center'>You have questions and we have answers.<br></br>
            You can also <a href='/contact'>contact us</a>, we’ll be happy to answer any of your inquiries.</p>
        </div>
        <div className={styles.accordion_content}><h3>Product Customization</h3>
          {data?.product_customization.map((res, index) =>
            <Accordion key={index}
              className={styles.Accordion_div}
              expanded={expanded === index}
              onChange={handleChange(index)}>
              <AccordionSummary
                expandIcon={expanded === index ? <LuMinusCircle className={styles.Plus_mins} /> : <FiPlusCircle className={styles.Plus_mins} />
                }
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
                className={styles.accordion_heading}>
                <Typography>{res?.question}</Typography>
              </AccordionSummary>
              <AccordionDetails className={styles.accordion_para}>
                <Typography>{res?.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          )}
        </div>
        <div className={styles.accordion_content}><h3>Production Time & Ordering Process</h3>
          {data?.production_process.map((res, index) =>
            <Accordion className={styles.Accordion_div} expanded={expanded === index}
              onChange={handleChange(index)}>
              <AccordionSummary
                expandIcon={expanded ? <LuMinusCircle className={styles.Plus_mins} /> : <FiPlusCircle className={styles.Plus_mins} />
                }
                aria-controls="panel1-content"
                id="panel1-header"
                className={styles.accordion_heading}>
                <Typography>{res?.question}</Typography>
              </AccordionSummary>
              <AccordionDetails className={styles.accordion_para}>
                <Typography>
                  {res?.topic1}</Typography>
                <Typography>
                  {res?.topic1_ans}</Typography>
                <Typography>
                  {res?.topic2}</Typography>
                <Typography>
                  {res?.topic2_ans}</Typography>
                <Typography>
                  {res?.topic3}</Typography>
                <Typography>
                  {res?.topic3_ans}</Typography>
              </AccordionDetails>
            </Accordion>)}
        </div>
        <div className={styles.accordion_content}><h3>Building Swag Packs</h3>
          {data?.building_packs.map((res) =>
            <Accordion className={styles.Accordion_div} expanded={expanded} onChange={handleChange}>
              <AccordionSummary
                expandIcon={expanded ? <LuMinusCircle className={styles.Plus_mins} /> : <FiPlusCircle className={styles.Plus_mins} />
                }
                aria-controls="panel1-content"
                id="panel1-header"
                className={styles.accordion_heading}>
                <Typography>{res?.question}</Typography>
              </AccordionSummary>
              <AccordionDetails className={styles.accordion_para}>
                <Typography>{res?.answer}</Typography>
              </AccordionDetails>
            </Accordion>)}
        </div>
        <div className={styles.accordion_content}><h3>Bulk Order Shipping</h3>
          {data?.building_packs.map((res) =>
            <Accordion className={styles.Accordion_div} expanded={expanded} onChange={handleChange}>
              <AccordionSummary
                expandIcon={expanded ? <LuMinusCircle className={styles.Plus_mins} /> : <FiPlusCircle className={styles.Plus_mins} />
                }
                aria-controls="panel1-content"
                id="panel1-header"
                className={styles.accordion_heading}>
                <Typography>{res?.question}</Typography>
              </AccordionSummary>
              <AccordionDetails className={styles.accordion_para}>
                <Typography>{res?.answer}</Typography>
              </AccordionDetails>
            </Accordion>)}
        </div>
        <div className={styles.accordion_content}><h3>Swag Pack and "Pick and Pack" Shipping</h3>
          {data?.building_packs.map((res) =>
            <Accordion className={styles.Accordion_div} expanded={expanded} onChange={handleChange}>
              <AccordionSummary
                expandIcon={expanded ? <LuMinusCircle className={styles.Plus_mins} /> : <FiPlusCircle className={styles.Plus_mins} />
                }
                aria-controls="panel1-content"
                id="panel1-header"
                className={styles.accordion_heading}>
                <Typography>{res?.question}</Typography>
              </AccordionSummary>
              <AccordionDetails className={styles.accordion_para}>
                <Typography>{res?.answer}</Typography>
              </AccordionDetails>
            </Accordion>)}
        </div>
        <div className={styles.accordion_content}><h3>Our Services</h3>
          {data?.building_packs.map((res) =>
            <Accordion className={styles.Accordion_div} expanded={expanded} onChange={handleChange}>
              <AccordionSummary
                expandIcon={expanded ? <LuMinusCircle className={styles.Plus_mins} /> : <FiPlusCircle className={styles.Plus_mins} />
                }
                aria-controls="panel1-content"
                id="panel1-header"
                className={styles.accordion_heading}>
                <Typography>{res?.question}</Typography>
              </AccordionSummary>
              <AccordionDetails className={styles.accordion_para}>
                <Typography>{res?.answer}</Typography>
              </AccordionDetails>
            </Accordion>)}
        </div>
        <div className={styles.accordion_content}><h3>Samples</h3>
          {data?.building_packs.map((res) =>
            <Accordion className={styles.Accordion_div} expanded={expanded} onChange={handleChange}>
              <AccordionSummary
                expandIcon={expanded ? <LuMinusCircle className={styles.Plus_mins} /> : <FiPlusCircle className={styles.Plus_mins} />
                }
                aria-controls="panel1-content"
                id="panel1-header"
                className={styles.accordion_heading}>
                <Typography>{res?.question}</Typography>
              </AccordionSummary>
              <AccordionDetails className={styles.accordion_para}>
                <Typography>{res?.answer}</Typography>
              </AccordionDetails>
            </Accordion>)}
        </div>
        <div className={styles.accordion_content}><h3>Payment</h3>
          {data?.building_packs.map((res) =>
            <Accordion className={styles.Accordion_div} expanded={expanded} onChange={handleChange}>
              <AccordionSummary
                expandIcon={expanded ? <LuMinusCircle className={styles.Plus_mins} /> : <FiPlusCircle className={styles.Plus_mins} />
                }
                aria-controls="panel1-content"
                id="panel1-header"
                className={styles.accordion_heading}>
                <Typography>{res?.question}</Typography>
              </AccordionSummary>
              <AccordionDetails className={styles.accordion_para}>
                <Typography>{res?.answer}</Typography>
              </AccordionDetails>
            </Accordion>)}
        </div>
        {/* )} */}
      </section>
      <Footer />
    </div>
  );
}
