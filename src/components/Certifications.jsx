import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import "./certification.css"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper";

const data = [
    {
        id: 1,
        image: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~5XT39RTXECNU/CERTIFICATE_LANDING_PAGE~5XT39RTXECNU.jpeg",
        title: "Professional Skills for the Workplace",
        issue_date: "May 2023",
        view: "https://www.coursera.org/account/accomplishments/specialization/certificate/5XT39RTXECNU",
        downloadSpec: "https://github.com/zunpeter/Specialization_Certificate/blob/main/Professional%20Skills%20for%20the%20Workplace.jpeg?raw=true",
    },
    {
        id: 2,
        image: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~A3Q78HDE6QWF/CERTIFICATE_LANDING_PAGE~A3Q78HDE6QWF.jpeg",
        title: "Project Management Principles and Practices",
        issue_date: "October 2022",
        view: "https://www.coursera.org/account/accomplishments/specialization/certificate/A3Q78HDE6QWF",
        downloadSpec: "https://github.com/zunpeter/Specialization_Certificate/blob/main/Project%20Management%20Principles%20and%20Practices.jpeg?raw=true",
    },
    {
        id: 3,
        image: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~ZW2X2WHTS9VJ/CERTIFICATE_LANDING_PAGE~ZW2X2WHTS9VJ.jpeg",
        title: "Google IT Support",
        issue_date: "May 2023",
        view: "https://www.coursera.org/account/accomplishments/specialization/certificate/ZW2X2WHTS9VJ",
        downloadSpec: "https://github.com/zunpeter/Specialization_Certificate/blob/main/Google%20IT%20Support.jpeg?raw=true",
    },
    {
        id: 4,
        image: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~EAL4SSPKVPU9/CERTIFICATE_LANDING_PAGE~EAL4SSPKVPU9.jpeg",
        title: "CertNexus Certified Ethical Emerging Technologist",
        issue_date: "February 2023",
        view: "https://www.coursera.org/account/accomplishments/specialization/certificate/EAL4SSPKVPU9",
        downloadSpec: "https://github.com/zunpeter/Specialization_Certificate/blob/main/CertNexus%20Certified%20Ethical%20Emerging%20Technologist.jpeg?raw=true",
    },
    {
        id: 5,
        image: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~JNHRGWZN5RSW/CERTIFICATE_LANDING_PAGE~JNHRGWZN5RSW.jpeg",
        title: "Meta iOS Develope",
        issue_date: "April 2023",
        view: "https://www.coursera.org/account/accomplishments/specialization/certificate/JNHRGWZN5RSW",
        downloadSpec: "https://github.com/zunpeter/Specialization_Certificate/blob/main/Meta%20iOS%20Developer.jpeg?raw=true",
    },
    {
        id: 6,
        image: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~8ZFKYN9HMBK6/CERTIFICATE_LANDING_PAGE~8ZFKYN9HMBK6.jpeg",
        title: "Meta React Native",
        issue_date: "April 2023",
        view: "https://www.coursera.org/account/accomplishments/specialization/certificate/8ZFKYN9HMBK6",
        downloadSpec: "https://github.com/zunpeter/Specialization_Certificate/blob/main/Meta%20React%20Native.jpeg?raw=true",
    },
    {
        id: 7,
        image: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~N6VGVDBH9APW/CERTIFICATE_LANDING_PAGE~N6VGVDBH9APW.jpeg",
        title: "Meta Front-End Developer",
        issue_date: "May 2023",
        view: "https://www.coursera.org/account/accomplishments/specialization/certificate/N6VGVDBH9APW",
        downloadSpec: "https://github.com/zunpeter/Specialization_Certificate/blob/main/Meta%20Front-End%20Developer.jpeg?raw=true",
    },

    {
        id: 8,
        image: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~W2PRQDPVFUX5/CERTIFICATE_LANDING_PAGE~W2PRQDPVFUX5.jpeg",
        title: "Data Visualization with Tableau",
        issue_date: "February 2023",
        view: "https://www.coursera.org/account/accomplishments/specialization/certificate/W2PRQDPVFUX5",
        downloadSpec: "https://github.com/zunpeter/Specialization_Certificate/blob/main/Data%20Visualization%20with%20Tableau.jpeg?raw=true",
    },
    {
        id: 9,
        image: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~7EFT5PKFT5UL/CERTIFICATE_LANDING_PAGE~7EFT5PKFT5UL.jpeg",
        title: "Computer Communications",
        issue_date: "November 2020",
        view: "https://www.coursera.org/account/accomplishments/specialization/certificate/7EFT5PKFT5UL",
        downloadSpec: "https://github.com/zunpeter/Specialization_Certificate/blob/main/Computer%20Communications.jpeg?raw=true",
    },
    {
        id: 10,
        image: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~3KVGB8DHVV8W/CERTIFICATE_LANDING_PAGE~3KVGB8DHVV8W.jpeg",
        title: "Startup Entrepreneurship",
        issue_date: "August 2020",
        view: "https://www.coursera.org/account/accomplishments/specialization/certificate/H39KSDUGXWVB",
        downloadSpec: "https://github.com/zunpeter/Specialization_Certificate/blob/main/Startup%20Entrepreneurship.jpeg?raw=true",
    },
    {
        id: 11,
        image: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~H39KSDUGXWVB/CERTIFICATE_LANDING_PAGE~H39KSDUGXWVB.jpeg",
        title: "Web Design for Everybody: Basics of Web Development & Coding",
        issue_date: "April 2020",
        view: "https://www.coursera.org/account/accomplishments/specialization/certificate/H39KSDUGXWVB",
        downloadSpec: "https://github.com/zunpeter/Specialization_Certificate/blob/main/Web%20Design%20for%20Everybody%20Basics%20of%20Web%20Development%20%20Coding.jpeg?raw=true",
    },
    {
        id: 12,
        image: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~RTNZSKJ4FDM6/CERTIFICATE_LANDING_PAGE~RTNZSKJ4FDM6.jpeg",
        title: "Google UX Design",
        issue_date: "May 2023",
        view: "https://www.coursera.org/account/accomplishments/specialization/certificate/RTNZSKJ4FDM6",
        downloadSpec: "https://github.com/zunpeter/Specialization_Certificate/blob/main/Google%20IT%20Support.jpeg?raw=true",
    },
]

const Certifications = () => {
    return (
        <section id='certifications'>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} text-center`}>
                    My Specializations
                </p>
                <h2 className={`${styles.sectionHeadText} text-center`}>
                    Certification
                </h2>
            </motion.div>
            <Swiper className='container certifications_container'
                // pagination={{
                //   clickable: true,
                // }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                effect={"cards"}
                grabCursor={true}
                loop={true}
                spaceBetween={40}
                slidesPerView={1}
                modules={[Autoplay, Pagination]}
            >
                {
                    data.map(({ id, image, title, issue_date, view, downloadSpec }) => {
                        return (
                            <SwiperSlide key={id} className='certifications_items'>
                                <div className='certifications_item-image'>
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{title}</h3><h4>{issue_date}</h4>
                                <div className="certifications_item-cta"> <a href={view} className='btn' target='_blank' style={{ color: "#fcd34d", fontWeight: "bold" }}>Download</a>
                                    {/* <a href={downloadSpec} target='_blank' className='btn btn-primary' download >Download</a> */}
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    )
}

export default Certifications