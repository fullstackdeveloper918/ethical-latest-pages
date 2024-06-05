import * as React from 'react';
import { useState, useRef } from 'react';
import PrimaryHeader from '../../components/primary-header/PrimaryHeader'
import SecondaryHeader from '../../components/secondary-header/SecondaryHeader'
import InnerBanner from '../../components/InnerBanner/InnerBanner'
import Footer from '../../components/footer/Footer'
import styles from './terms-of-service.module.css'
import Accordion from '@mui/material/Accordion';
import { FiPlusCircle } from "react-icons/fi";
import { LuMinusCircle } from "react-icons/lu";
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

export default function Terms() {
  const baseUrl = "https://ethical3.s3.ca-central-1.amazonaws.com/images/"
  let data = {
    inner_banner_title: {
      title: "Terms of Service",
      image: `${baseUrl}term-banner.png`
    },
    overview: {
      title: "This website is operated by Ethical Swag Inc.. Throughout the site, the terms “we”, “us” and “our” refer to Ethical Swag Inc.. Ethical Swag Inc. offers this website, including all information, tools and services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices stated here.<br></br><br></br> By visiting our site and/ or purchasing something from us, you engage in our “Service” and agree to be bound by the following terms and conditions (“Terms of Service”, “Terms”), including those additional terms and conditions and policies referenced herein and/or available by hyperlink. These Terms of Service apply to all users of the site, including without limitation users who are browsers, vendors, customers, merchants, and/ or contributors of content.Please read these Terms of Service carefully before accessing or using our website. By accessing or using any part of the site, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any services. If these Terms of Service are considered an offer, acceptance is expressly limited to these Terms of Service.<br></br><br></br> Any new features or tools which are added to the current store shall also be subject to the Terms of Service. You can review the most current version of the Terms of Service at any time on this page. We reserve the right to update, change or replace any part of these Terms of Service by posting updates and/or changes to our website. It is your responsibility to check this page periodically for changes. Your continued use of or access to the website following the posting of any changes constitutes acceptance of those changes.Our store is hosted on Shopify Inc. They provide us with the online e-commerce platform that allows us to sell our products and services to you."
    },
    sections: [
      {
        topic_no: "Section 1",
        topic: "Online store terms",
        description: "By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site.<br></br><br></br> You may not use our products for any illegal or unauthorized purpose nor may you, in the use of the Service, violate any laws in your jurisdiction (including but not limited to copyright laws).You must not transmit any worms or viruses or any code of a destructive nature.<br></br><br></br> A breach or violation of any of the Terms will result in an immediate termination of your Services."
      },
      {
        topic_no: "Section 2",
        topic: "Online store terms",
        description: "We reserve the right to refuse service to anyone for any reason at any time.<br></br><br></br> You understand that your content (not including credit card information), may be transferred unencrypted and involve (a) transmissions over various networks; and (b) changes to conform and adapt to technical requirements of connecting networks or devices. Credit card information is always encrypted during transfer over networks.<br></br><br></br>You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the Service, use of the Service, or access to the Service or any contact on the website through which the service is provided, without express written permission by us. The headings used in this agreement are included for convenience only and will not limit or otherwise affect these Terms."
      },
      {
        topic_no: "Section 3",
        topic: "Accuracy, completeness & timeliness of information",
        description: "We are not responsible if information made available on this site is not accurate, complete or current. The material on this site is provided for general information only and should not be relied upon or used as the sole basis for making decisions without consulting primary, more accurate, more complete or more timely sources of information. Any reliance on the material on this site is at your own risk.<br></br><br></br>This site may contain certain historical information. Historical information, necessarily, is not current and is provided for your reference only. We reserve the right to modify the contents of this site at any time, but we have no obligation to update any information on our site. You agree that it is your responsibility to monitor changes to our site."
      },
      {
        topic_no: "Section 4",
        topic: "Modifications of service and prices",
        description: "Prices for our products are subject to change without notice.We reserve the right at any time to modify or discontinue the Service (or any part or content thereof) without notice at any time.We shall not be liable to you or to any third-party for any modification, price change, suspension or discontinuance of the Service.`"
      },
      {
        topic_no: "Section 5",
        topic: "Products & services",
        description: "Certain products or services may be available exclusively online through the website. These products or services may have limited quantities and are subject to return or exchange only according to our Return Policy. We have made every effort to display as accurately as possible the colors and images of our products that appear at the store. We cannot guarantee that your computer monitor's display of any color will be accurate. We reserve the right, but are not obligated, to limit the sales of our products or Services to any person, geographic region or jurisdiction. We may exercise this right on a case-by-case basis. We reserve the right to limit the quantities of any products or services that we offer. All descriptions of products or product pricing are subject to change at anytime without notice, at the sole discretion of us. We reserve the right to discontinue any product at any time. Any offer for any product or service made on this site is void where prohibited.<br></br><br></br>We do not warrant that the quality of any products, services, information, or other material purchased or obtained by you will meet your expectations, or that any errors in the Service will be corrected."
      },
      {
        topic_no: "Section 6",
        topic: "Accuracy of billing & account information",
        description: "We reserve the right to refuse any order you place with us. We may, in our sole discretion, limit or cancel quantities purchased per person, per household or per order. These restrictions may include orders placed by or under the same customer account, the same credit card, and/or orders that use the same billing and/or shipping address. In the event that we make a change to or cancel an order, we may attempt to notify you by contacting the e-mail and/or billing address/phone number provided at the time the order was made. We reserve the right to limit or prohibit orders that, in our sole judgment, appear to be placed by dealers, resellers or distributors.<br></br><br></br>You agree to provide current, complete and accurate purchase and account information for all purchases made at our store. You agree to promptly update your account and other information, including your email address and credit card numbers and expiration dates, so that we can complete your transactions and contact you as needed. For more detail, please review our Returns Policy."
      },
      {
        topic_no: "Section 7",
        topic: "Optional tools",
        description: "We may provide you with access to third-party tools over which we neither monitor nor have any control nor input. You acknowledge and agree that we provide access to such tools ”as is” and “as available” without any warranties, representations or conditions of any kind and without any endorsement. We shall have no liability whatsoever arising from or relating to your use of optional third-party tools.<br></br><br></br>Any use by you of optional tools offered through the site is entirely at your own risk and discretion and you should ensure that you are familiar with and approve of the terms on which tools are provided by the relevant third-party provider(s).We may also, in the future, offer new services and/or features through the website (including, the release of new tools and resources). Such new features and/or services shall also be subject to these Terms of Service."
      },
      {
        topic_no: "Section 8",
        topic: "Third party links",
        description: "Certain content, products and services available via our Service may include materials from third-parties. Third-party links on this site may direct you to third-party websites that are not affiliated with us. We are not responsible for examining or evaluating the content or accuracy and we do not warrant and will not have any liability or responsibility for any third-party materials or websites, or for any other materials, products, or services of third-parties.<br></br><br></br>We are not liable for any harm or damages related to the purchase or use of goods, services, resources, content, or any other transactions made in connection with any third-party websites. Please review carefully the third-party's policies and practices and make sure you understand them before you engage in any transaction. Complaints, claims, concerns, or questions regarding third-party products should be directed to the third-party."
      },
      {
        topic_no: "Section 9",
        topic: "User comments, feedback & other submissions",
        description: "If, at our request, you send certain specific submissions (for example contest entries) or without a request from us you send creative ideas, suggestions, proposals, plans, or other materials, whether online, by email, by postal mail, or otherwise (collectively, 'comments'), you agree that we may, at any time, without restriction, edit, copy, publish, distribute, translate and otherwise use in any medium any comments that you forward to us. We are and shall be under no obligation<br></br><br></br>to maintain any comments in confidence;<br></br><br></br>to pay compensation for any comments; or<br></br><br></br>to respond to any comments.We may, but have no obligation to, monitor, edit or remove content that we determine in our sole discretion are unlawful, offensive, threatening, libelous, defamatory, pornographic, obscene or otherwise objectionable or violates any party’s intellectual property or these Terms of Service.You agree that your comments will not violate any right of any third-party, including copyright, trademark, privacy, personality or other personal or proprietary right. You further agree that your comments will not contain libelous or otherwise unlawful, abusive or obscene material, or contain any computer virus or other malware that could in any way affect the operation of the Service or any related website. You may not use a false e-mail address, pretend to be someone other than yourself, or otherwise mislead us or third-parties as to the origin of any comments. You are solely responsible for any comments you make and their accuracy. We take no responsibility and assume no liability for any comments posted by you or any third-party."
      },
      {
        topic_no: "Section 10",
        topic: "Personal information",
        description: "Your submission of personal information through the store is governed by our Privacy Policy. To view our Privacy Policy."
      },
      {
        topic_no: "Section 11",
        topic: "Errors, Inaccuracies & omissions",
        description: "Occasionally there may be information on our site or in the Service that contains typographical errors, inaccuracies or omissions that may relate to product descriptions, pricing, promotions, offers, product shipping charges, transit times and availability. We reserve the right to correct any errors, inaccuracies or omissions, and to change or update information or cancel orders if any information in the Service or on any related website is inaccurate at any time without prior notice (including after you have submitted your order).We undertake no obligation to update, amend or clarify information in the Service or on any related website, including without limitation, pricing information, except as required by law. No specified update or refresh date applied in the Service or on any related website, should be taken to indicate that all information in the Service or on any related website has been modified or updated"
      },
      {
        topic_no: "Section 12",
        topic: "Prohibited uses",
        description: "In addition to other prohibitions as set forth in the Terms of Service, you are prohibited from using the site or its content:(a) for any unlawful purpose; (b) to solicit others to perform or participate in any unlawful acts; (c) to violate any international, federal, provincial or state regulations, rules, laws, or local ordinances; (d) to infringe upon or violate our intellectual property rights or the intellectual property rights of others; (e) to harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate based on gender, sexual orientation, religion, ethnicity, race, age, national origin, or disability; (f) to submit false or misleading information;(g) to upload or transmit viruses or any other type of malicious code that will or may be used in any way that will affect the functionality or operation of the Service or of any related website, other websites, or the Internet; (h) to collect or track the personal information of others; (i) to spam, phish, pharm, pretext, spider, crawl, or scrape; (j) for any obscene or immoral purpose; or (k) to interfere with or circumvent the security features of the Service or any related website, other websites, or the Internet. We reserve the right to terminate your use of the Service or any related website for violating any of the prohibited uses."
      },
      {
        topic_no: "Section 13",
        topic: "Disclaimer of warranties; limitation of liability",
        description: "We do not guarantee, represent or warrant that your use of our service will be uninterrupted, timely, secure or error-free.We do not warrant that the results that may be obtained from the use of the service will be accurate or reliable.You agree that from time to time we may remove the service for indefinite periods of time or cancel the service at any time, without notice to you.You expressly agree that your use of, or inability to use, the service is at your sole risk. The service and all products and services delivered to you through the service are (except as expressly stated by us) provided 'as is' and 'as available' for your use, without any representation, warranties or conditions of any kind, either express or implied, including all implied warranties or conditions of merchantability, merchantable quality, fitness for a particular purpose, durability, title, and non-infringement.In no case shall Ethical Swag Inc., our directors, officers, employees, affiliates, agents, contractors, interns, suppliers, service providers or licensors be liable for any injury, loss, claim, or any direct, indirect, incidental, punitive, special, or consequential damages of any kind, including, without limitation lost profits, lost revenue, lost savings, loss of data, replacement costs, or any similar damages, whether based in contract, tort (including negligence), strict liability or otherwise, arising from your use of any of the service or any products procured using the service, or for any other claim related in any way to your use of the service or any product, including, but not limited to, any errors or omissions in any content, or any loss or damage of any kind incurred as a result of the use of the service or any content (or product) posted, transmitted, or otherwise made available via the service, even if advised of their possibility.Because some states or jurisdictions do not allow the exclusion or the limitation of liability for consequential or incidental damages, in such states or jurisdictions, our liability shall be limited to the maximum extent permitted by law."
      },
      {
        topic_no: "Section 14",
        topic: " Indemnification",
        description: "You agree to indemnify, defend and hold harmless Ethical Swag Inc. and our parent, subsidiaries, affiliates, partners, officers, directors, agents, contractors, licensors, service providers, subcontractors, suppliers, interns and employees, harmless from any claim or demand, including reasonable attorneys’ fees, made by any third-party due to or arising out of your breach of these Terms of Service or the documents they incorporate by reference, or your violation of any law or the rights of a third-party."
      },
      {
        topic_no: "Section 15",
        topic: "Severability",
        description: "In the event that any provision of these Terms of Service is determined to be unlawful, void or unenforceable, such provision shall nonetheless be enforceable to the fullest extent permitted by applicable law, and the unenforceable portion shall be deemed to be severed from these Terms of Service, such determination shall not affect the validity and enforceability of any other remaining provisions."
      },
      {
        topic_no: "Section 16",
        topic: "Termination",
        description: "The obligations and liabilities of the parties incurred prior to the termination date shall survive the termination of this agreement for all purposes.<br></br><br></br>These Terms of Service are effective unless and until terminated by either you or us. You may terminate these Terms of Service at any time by notifying us that you no longer wish to use our Services, or when you cease using our site.If in our sole judgment you fail, or we suspect that you have failed, to comply with any term or provision of these Terms of Service, we also may terminate this agreement at any time without notice and you will remain liable for all amounts due up to and including the date of termination; and/or accordingly may deny you access to our Services (or any part thereof)."
      },
      {
        topic_no: "Section 17",
        topic: "Entire Agreement",
        description: "he failure of us to exercise or enforce any right or provision of these Terms of Service shall not constitute a waiver of such right or provision.<br></br><br></br>These Terms of Service and any policies or operating rules posted by us on this site or in respect to The Service constitutes the entire agreement and understanding between you and us and govern your use of the Service, superseding any prior or contemporaneous agreements, communications and proposals, whether oral or written, between you and us (including, but not limited to, any prior versions of the Terms of Service). Any ambiguities in the interpretation of these Terms of Service shall not be construed against the drafting party."
      },
      {
        topic_no: "Section 18",
        topic: "Governing Law",
        description: "These Terms of Service and any separate agreements whereby we provide you Services shall be governed by and construed in accordance with the laws of 37 Nepean Street, #105, Sydney, NS, B1P 6A7, Canada."
      },
      {
        topic_no: "Section 19",
        topic: "Changes to the terms of the service",
        description: "You can review the most current version of the Terms of Service at any time at this page.<br></br><br></br>We reserve the right, at our sole discretion, to update, change or replace any part of these Terms of Service by posting updates and changes to our website. It is your responsibility to check our website periodically for changes. Your continued use of or access to our website or the Service following the posting of any changes to these Terms of Service constitutes acceptance of those changes."
      },
      {
        topic_no: "Section 20",
        topic: "Contact Information",
        description: "Questions about the Terms of Service should be sent to us at info@ethicalswag.com."
      },

    ],
    topics: [
      {
        topic_no: "Section 1",
        title: "Online store terms"
      },
      {
        topic_no: "Section 2",
        title: "General Conditions"
      },
      {
        topic_no: "Section 3",
        title: "Accuracy completness"
      },
      {
        topic_no: "Section 4",
        title: "Modification of service & price"
      },
      {
        topic_no: "Section 5",
        title: "Products & Services"
      },
      {
        topic_no: "Section 6",
        title: "Accuracy of billing"
      },
      {
        topic_no: "Section 7",
        title: "Optional tools"
      },
      {
        topic_no: "Section 8",
        title: "Third party links"
      },
      {
        topic_no: "Section 9",
        title: "User comments, feedback"
      },
      {
        topic_no: "Section 10",
        title: "Personal Information"
      },
      {
        topic_no: "Section 11",
        title: "Errors, unacuracy"
      },
      {
        topic_no: "Section 12",
        title: "Prohibited uses"
      },
      {
        topic_no: "Section 13",
        title: "Disclaimer of warranties"
      },
      {
        topic_no: "Section 14",
        title: "Indemnification"
      },
      {
        topic_no: "Section 15",
        title: "Severability"
      },
      {
        topic_no: "Section 16",
        title: "Termination"
      },
      {
        topic_no: "Section 17",
        title: "Entire Agreement"
      },
      {
        topic_no: "Section 18",
        title: "Governing Law"
      },
      {
        topic_no: "Section 19",
        title: "Changes to the terms of service"
      },
      {
        topic_no: "Section 20",
        title: "Contact information"
      },

    ]
  }


  const sectionRefs = useRef({});

  const handleScroll = (section) => {
    if (sectionRefs.current[section]) {
      sectionRefs.current[section].scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const [expanded, setExpanded] = useState(false);
  const handleChange = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <PrimaryHeader />
      <SecondaryHeader />
      <InnerBanner data={data?.inner_banner_title}/>


      <section className='container d-none d-lg-block'>
        <div className='row mt-5'>
          <div className="col-lg-4">
            <div className="position_sticky">
              <div className={styles.leftContainer}>
              {data.topics.map((res, index) => (
                  <div className={styles.leftdiv} key={index}>
                    <p>
                      <a href='#' onClick={(e) => { e.preventDefault(); handleScroll(`section${index + 1}`); }}>
                        {res.topic_no} - {res.title}
                      </a>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-8">

            <div className={styles.termsServiccs_content} >
              <h3>Overview</h3>
              <p dangerouslySetInnerHTML={{ __html: data?.overview.title }} />
            </div>
            {data.sections.map((res, index) => (
              <div
                key={index}
                ref={(el) => sectionRefs.current[`section${index + 1}`] = el}
                className={styles.terms_content}
              >
                <h3>{res.topic_no} - {res.topic}</h3>
                <p dangerouslySetInnerHTML={{ __html: res.description }} />
              </div>
            ))}
          
          </div>
        </div>


      </section>

      {/* mobile_tab */}
      <section className='container d-block d-lg-none' >

        <div className={styles.accordion_content}><h3>Section 1 - Online store terms</h3>
          <Accordion className={styles.Accordion_div} expanded={expanded} onChange={handleChange}>
            <AccordionSummary
              expandIcon={expanded ? <LuMinusCircle className={styles.Plus_mins} /> : <FiPlusCircle className={styles.Plus_mins} />
              }
              aria-controls="panel1-content"
              id="panel1-header"
              className={styles.accordion_heading}>
              <Typography>What are the decoration methods available?</Typography>
            </AccordionSummary>
            <AccordionDetails className={styles.accordion_para}>
              <Typography>
                By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site.
                <br></br>
                <br></br>
                You may not use our products for any illegal or unauthorized purpose nor may you, in the use of the Service, violate any laws in your jurisdiction (including but not limited to copyright laws).You must not transmit any worms or viruses or any code of a destructive nature.
                <br></br>
                <br></br>
                By visiting our website and using Ethical Swag services, you provide your consent and agree to the collection of personal data in a lawful and fair manner even if you do not read the entire Ethical Swag Privacy Notice. We ensure that the collection and processing of personal data adhere to applicable privacy laws and regulations. If you have any questions or concerns about the data we collect and how it is used, please reach out to our Data Protection Officer at alison@ethicalswag.com. Even if you do not read the entire Ethical Swag Privacy Notice.
                <br></br>
                <br></br>
                A breach or violation of any of the Terms will result in an immediate termination of your Services.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </section>


      <Footer />
    </div>
  );
}
