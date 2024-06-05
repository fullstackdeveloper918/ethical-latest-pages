import * as React from 'react';
import PrimaryHeader from '../../components/primary-header/PrimaryHeader'
import SecondaryHeader from '../../components/secondary-header/SecondaryHeader'
import Footer from '../../components/footer/Footer'
import styles from './thankyou.module.css'
import images from '../../constants/images';
import Image from 'next/image';

export default function Thankyou() {

  return (
    <div>
      <PrimaryHeader />
      <SecondaryHeader />
<section className={styles.thankyou_banner}>
    <div className='container d-flex gap-5 text-lg-start text-center flex-direction' >
        <div className='col-lg-6'>
            <div className={styles.thanksImg}><Image src={images.ThankyouImg} alt='ThankyouImg' /></div>
        </div>
        <div className='col-lg-6'>
            <h1>Thank you, we're on it !</h1>
            <p className={styles.subheading}>What Happens Next?</p>
            <p className={styles.banner_text}>We’ve received your order. Our team will get right to it - verifying inventory, checking your artwork and more.
                <br></br>
                <br></br>
We’ll notify you when we have an update for you. You can expect to hear from us within 1 business day.
<br></br>
<br></br>
Please check your email to verify your account and login to your dashboard.</p>
        </div>
        
    </div>


</section>

<section className='container'>
    
<div className={styles.gettoKnow}>
        <h2 className='mb-4 mb-lg-5 text-center'>Get to know <b>Ethical Swag</b></h2>

        <div className={styles.thankyou_div}>

        <div className={styles.Img_content}>
            <div className={styles.Icon_thankyou}>
                <Image src={images.ServiceImg} alt='ServiceImg' />
            
            </div>
            <h3>White glove service</h3>
            <p>Dedicated success and sales teams to tailor Swag orders to meet your project needs.</p>
        </div>

        <div className={styles.Img_content}>
            <div className={styles.Icon_thankyou}>
                <Image src={images.ManagementImg} alt='ServiceImg' />
            
            </div>
            <h3>Project management  </h3>
            <p>Manage your Swag project from item selection through design mockups to their doorstep.</p>
        </div>

        <div className={styles.Img_content}>
            <div className={styles.Icon_thankyou}>
                <Image src={images.ShippingThnakImg} alt='ServiceImg' />
            
            </div>
            <h3>Shipping</h3>
            <p>Due to the current global challenges, freight costs are fluctuating daily and we are able to quote your shipping for estimate purposes only.</p>
        </div>

        </div>
    </div>
</section>

      <Footer />
    </div>
  );
}
