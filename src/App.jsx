import React, { useRef, useState, useEffect } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//swiper

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import slide_image_1 from './assets/img_1.jpg';
import slide_image_2 from './assets/img_2.jpg';
import slide_image_3 from './assets/img_3.jpg';
import slide_image_4 from './assets/img_4.jpg';
import slide_image_5 from './assets/img_5.jpg';


// img
import logo from './assets/logo.png'
import back from './assets/group.png'
import vector1 from './assets/vector.png'
import vector2 from './assets/vector2.png'
import vector3 from './assets/vector3.png'
import vector4 from './assets/vector4.png'
import vector5 from './assets/vector5.png'
import accenture from './assets/accenture.png'
import course1 from './assets/course1.jpeg'
import course2 from './assets/course2.png'
import course3 from './assets/course3.png'
import course4 from './assets/course4.jpeg'
import course5 from './assets/course5.png'
import tools from './assets/tools.jpg'
import contact_img from './assets/contact.png'
import batch1 from './assets/batch1.png'
import batch2 from './assets/batch24.png'
import batch3 from './assets/batch3.png'
import batch4 from './assets/batch4.png'
import assert1 from './assets/assert1.png';
import assert2 from './assets/assert2.png';
import assert3 from './assets/assert3.png';
import assert4 from './assets/assert4.png';
import assert5 from './assets/assert5.png';
import assert6 from './assets/assert6.jpg';
import thumbnail1 from './assets/thumbnail1.jpg'
import thumbnail2 from './assets/thumbnail2.jpg'
import thumbnail3 from './assets/thumbnail3.jpg'
import thumbnail4 from './assets/thumbnail4.jpg'


//student and company

import student1 from './assets/student1.png'
import student2 from './assets/student2.png'
import student3 from './assets/student3.png'
import student4 from './assets/student4.png'
import student5 from './assets/student5.png'
import student6 from './assets/student6.png'
import student7 from './assets/student7.png'
import student8 from './assets/student8.png'
import student9 from './assets/student9.png'
import student10 from './assets/student10.png'
import student11 from './assets/student11.png'
import student12 from './assets/student12.png'
import student13 from './assets/student13.png'
import student14 from './assets/student14.png'
import student15 from './assets/student15.png'
import student16 from './assets/student16.png'
import student17 from './assets/student17.png'
import student18 from './assets/student18.png'
import student19 from './assets/student19.png'
import student20 from './assets/student20.png'
import student21 from './assets/student21.png'
import student22 from './assets/student22.png'
import student23 from './assets/student23.png'

import company1 from './assets/company1.png'
import company2 from './assets/company2.jpg'
import company3 from './assets/company3.png'
import company4 from './assets/company4.jpg'
import company5 from './assets/company5.jpg'
import company6 from './assets/company6.png'
import company7 from './assets/company7.jpg'
import company8 from './assets/company10.jpg'
import company9 from './assets/company11.jpg'
import company10 from './assets/company12.jpg'
import company11 from './assets/company15.png'
import company12 from './assets/company16.jpg'
import company13 from './assets/company17.jpg'
import company14 from './assets/company18.jpg'
import company15 from './assets/company19.jpg'
import company16 from './assets/company20.jpg'
import company17 from './assets/company21.png'
import company18 from './assets/company22.png'
import company19 from './assets/company23.jpg'






// icon
import { CiMenuFries } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { BiColor, BiLogoInstagramAlt } from "react-icons/bi";
import { GrYoutube } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { IoMailSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";
import { MdArrowRight } from "react-icons/md";
import { MdArrowLeft } from "react-icons/md";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

//bootstrap

import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import { CgSpaceBetween } from 'react-icons/cg';



function App() {
  const [count, setCount] = useState(0)


  const students = [
    {
      student_img: student1,
      name: "Shenbaga Devi .C",
      role: "Google Ads Specialist",
      company: company1,
      ar: ""
    },
    {
      student_img: student2,
      name: "Monika .G",
      role: "Digital marketing Executive",
      company: company2,
      ar: ""
    },
    {
      student_img: student3,
      name: "Joel Alan .J",
      role: "Digital marketing executive",
      company: company3,
      ar: ""
    },
    {
      student_img: student4,
      name: "Mohammed Farook Imran .T.N",
      role: "Software developer role",
      company: company4,
      ar: ""
    },
    {
      student_img: student5,
      name: "Moorthy Sivabalan .B",
      role: "Associate Software Engineer",
      company: company5,
      ar: ""
    },
    {
      student_img: student6,
      name: "Mathan Karthik A ",
      role: "ads manager",
      company: company6,
      ar: ""
    },
    {
      student_img: student7,
      name: "Arivarasu .T",
      role: "python developer",
      company: company7,
      ar: ""
    },
    {
      student_img: student8,
      name: "Mohamed Inamul Haq",
      role: "Junior Software Developer",
      company: company8,
      ar: ""
    },
    {
      student_img: student9,
      name: "Bhahirathan M",
      role: "Junior Software Developer",
      company: company4,
      ar: ""
    },
    {
      student_img: student10,
      name: "Prabakaran .S",
      role: "Web Developer",
      company: company4,
      ar: ""
    },
    {
      student_img: student11,
      name: "Sneka .M",
      role: "Software Developer",
      company: company9,
      ar: ""
    },
    {
      student_img: student12,
      name: "Geetha .S",
      role: "Front-End developer",
      company: company10,
      ar: ""
    },
    {
      student_img: student13,
      name: "Tharun .S",
      role: "marketing analyst",
      company: logo,
      ar: ""
    },
    {
      student_img: student14,
      name: "Sriram .S",
      role: "UI/UX design",
      company: logo,
      ar: ""
    },
    {
      student_img: student15,
      name: "Hariharan .S",
      role: "Full stack developer",
      company: company11,
      ar: ""
    },
    {
      student_img: student16,
      name: "Ramji .R",
      role: "Customer Care Executive",
      company: company12,
      ar: ""
    },
    {
      student_img: student17,
      name: "Gowtham .R",
      role: "full stack web developer",
      company: company13,
      ar: ""
    },
    {
      student_img: student18,
      name: "ASIYA RYHANA .A",
      role: "Digital Marketing Executive",
      company: company14,
      ar: ""
    },
    {
      student_img: student23,
      name: "Faaik .A.K",
      role: "Arabic process associate",
      company: company15,
      ar: ""
    },
    {
      student_img: student19,
      name: "Ashwini M",
      role: "full stack Python",
      company: company16,
      ar: ""
    },
    {
      student_img: student20,
      name: "Balaji .M",
      role: "Software Trainee",
      company: company17,
      ar: ""
    },
    {
      student_img: student21,
      name: "Mohamed Sheik Abdul Khader A",
      role: "google ads",
      company: company18,
      ar: ""
    },
    {
      student_img: student22,
      name: "Harish Ragavendira .M",
      role: "web Development Trainee",
      company: company19,
      ar: ""
    },
  ]



  
  

  const [videoss, setVideo] = useState("")
  const stu = (data) => {
    setVideo(data)
  }


  useEffect(() => {
    let student_count = 0
    setInterval(() => {
      if(student_count != students.length){
        setVideo(students[student_count].student_img)
        scroll(120)
      }
      else{
        student_count = 0
        scroll(-3000)
      }
      student_count = student_count + 1;
    }, 2500)
  }, [])

  const scrollRef = useRef(null);

  const scroll = (scrollOffset) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: scrollOffset,
        behavior: 'smooth', 
      });
    }
  }





  const courses = [
    {
      course_img: course1,
      course_name: "Full Stack Java",
      disc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia, quaerat?",
    },
    {
      course_img: course2,
      course_name: "Full Stack Python",
      disc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia, quaerat?",
    },
    {
      course_img: course3,
      course_name: "Web Developer",
      disc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia, quaerat?",
    },
    {
      course_img: course4,
      course_name: "Degital Marketing",
      disc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia, quaerat?",
    },
    {
      course_img: course5,
      course_name: "UI/UX Designer",
      disc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia, quaerat?",
    }
  ]

 


  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [height, setHeight] = useState(0);

  useEffect(() => {
    const onScroll = () => setHeight(window.scrollY);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const text = document.querySelector(".text");
    if (height > 7000) {
      text?.classList.add("animate");
    }
    // else {
    //   text?.classList.remove("animate"); 
    // }
  }, [height]);


  //form Validation

  const [validation, setvalidation] = useState(null)
  useEffect(()=>{
    const form = document.querySelector(".c_form");
    const inp1 = document.querySelector(".inp1");
    const inp2 = document.querySelector(".inp2");
    const inp3 = document.querySelector(".inp3")

    form.addEventListener("submit",(e)=>{
      e.preventDefault();

      if(inp1.value == "" || inp2.value == "" || inp3.value == ""){
        setvalidation(false)
      }
      else{
        setvalidation(true)
      }
    })
  },[])






  const [menu, setMenus] = useState(false)

  return (
    <>
      <nav>
        <div className='logo'>
          <img src={logo} alt="" />
          <div className='title'>
            <h1>Code99</h1>
            <p>IT ACADEMY</p>
          </div>
        </div>

        <div className='links'>
          <div>
            <img src={vector1} alt="" />
            <p>Why Us</p>
          </div>
          <div>
            <img src={vector2} alt="" />
            <p>Courses</p>
          </div>
          <div>
            <img src={vector3} alt="" />
            <p>Reviews</p>
          </div>
          <div>
            <img src={vector4} alt="" />
            <p>Contact Us</p>
          </div>
          <div>
            <img src={vector5} alt="" />
            <p>Placement</p>
          </div>
        </div>

        <div className='submit'>
          <button className='submit_btn1'>Submit Now</button>
          <button className='submit_btn2'><MdArrowOutward /></button>
        </div>


        <div className='menu' onClick={() => setMenus(!menu)}>
          <CiMenuFries />

          {menu ? <div className='menu_show'>
            <div>
              <img src={vector1} alt="" />
              <p>Why Us</p>
            </div>

            <div>
              <img src={vector2} alt="" />
              <p>Courses</p>
            </div>

            <div>
              <img src={vector3} alt="" />
              <p>Reviews</p>
            </div>

            <div>
              <img src={vector4} alt="" />
              <p>Contact Us</p>
            </div>

            <div>
              <img src={vector5} alt="" />
              <p>Placement</p>
            </div>

          </div> : null}
        </div>
      </nav>

      <section className='home'>



        <Carousel>
          <Carousel.Item>

            <div className='home_cons'>
              <p className='p1'>India's 1st Institute to Provide <br /> Free Training</p>
              <p className='p2'>Placed Status</p>
            </div>
            <img src={back} alt="" />


          </Carousel.Item>
          <Carousel.Item>

            <div className='home_cons'>
              <p className='p1'>India's 1st Institute to Provide <br /> Free Training</p>
              <p className='p2'>Batch1 Students</p>
            </div>
            <img src={batch1} alt="" />


          </Carousel.Item>
          <Carousel.Item>
            <div className='home_cons'>
              <p className='p1'>India's 1st Institute to Provide <br /> Free Training</p>
              <p className='p2'>Batch2 Students</p>
            </div>

            <img src={batch2} alt="" />


          </Carousel.Item>
          <Carousel.Item>

            <div className='home_cons'>
              <p className='p1'>India's 1st Institute to Provide <br /> Free Training</p>
              <p className='p2'>Batch3 Students</p>
            </div>
            <img src={batch3} alt="" />


          </Carousel.Item>
          <Carousel.Item>

            <div className='home_cons'>
              <p className='p1'>India's 1st Institute to Provide <br /> Free Training</p>
              <p className='p2'>Batch4 Students</p>
            </div>
            <img src={batch4} alt="" />


          </Carousel.Item>
        </Carousel>
      </section>



      <div className="main_card">
  <h1 className="student_head">Our Placed Students</h1>
  <div className="marquee">
    <div className="track">
      {[...students, ...students].map((item, index) => (
        <div className="student-slide" key={index}>
          <div className="Student_Card">
            <div className="company_img">
              <img src={item.company} alt="Company Logo" />
            </div>
            <div className="student_img">
              <img src={item.student_img} alt="Student" />
            </div>
            <div className="student_details">
              <h1>{item.name}</h1>
              <p>Role : {item.role}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

      <section className='story'>
        <h1>Student Success Stories</h1>
        <div className='student_content'>
          <div className='student_video'>
            <a href={videoss.ar}>{videoss ? <img src={videoss} alt="" /> : <img src={student1} alt="" />}</a>
            <GrYoutube className='youtube' />
          </div>

          <div className='story_c'>
            <p>Real Storie, Real Success</p>

            <div className='student_cards' ref={scrollRef}>
              {
                students.map((item) => (
                  <div className='s_img' onClick={() => stu(item.student_img)}>
                    <img src={item.student_img} alt="" />
                  </div>
                ))
              }
            </div>
            <div className='randl'>
            <MdArrowBackIosNew className='r'  onClick={() => scroll(-300)} />
            <MdArrowForwardIos className='l'  onClick={() => scroll(300)} />
            </div>
           
            
          </div>
        </div>
      </section>

      <section className='slider'>
        <div className='wrapper'>
          <div className="item item1">
            <img src={company1} alt="" />
          </div>
          <div className="item item2">
            <img src={company2} alt="" />
          </div>
          <div className="item item3">
            <img src={company3} alt="" />
          </div>
          <div className="item item4">
            <img src={company4} alt="" />
          </div>
          <div className="item item5">
            <img src={company5} alt="" />
          </div>
          <div className="item item6">
            <img src={company6} alt="" />
          </div>
          <div className="item item7">
            <img src={company7} alt="" />
          </div>
        </div>
        <div className='wrappers'>
          <div className="items items1">
            <img src={company8} alt="" />
          </div>
          <div className="items items2">
            <img src={company9} alt="" />
          </div>
          <div className="items items3">
            <img src={company10} alt="" />
          </div>
          <div className="items items4">
            <img src={company11} alt="" />
          </div>
          <div className="items items5">
            <img src={company12} alt="" />
          </div>
          <div className="items items6">
            <img src={company13} alt="" />
          </div>
          <div className="items items7">
            <img src={company14} alt="" />
          </div>
        </div>
      </section>

      <div className="container">
           <h1 className="heading">What Our Student Says</h1>

           {width>750 ? <div>
            <Swiper
  effect="coverflow"
  grabCursor={true}
  centeredSlides={true}
  loop={true}
  slidesPerView={3} 
  spaceBetween={20}
  coverflowEffect={{
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 4,
    slideShadows: false,
  }}
  pagination={{ el: '.swiper-pagination', clickable: true }}
  navigation={{
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    clickable: true,
  }}
  modules={[EffectCoverflow, Pagination, Navigation]}
  className="swiper_container"
>
          <SwiperSlide >
               <div className='student_says'>
                <div><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, doloribus.</p>
                <h3>Sree Ram</h3>
               </div>
             </SwiperSlide>
             <SwiperSlide>
               <div className='student_says'>
                <div><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, tempora.</p>
                <h3>Akash</h3>
               </div>
             </SwiperSlide>
             <SwiperSlide>
             <div className='student_says'>
                <div><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, tempora.</p>
                <h3>Sheik</h3>
               </div>
             </SwiperSlide>
             <SwiperSlide>
             <div className='student_says'>
                <div><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, tempora.</p>
                <h3>Saadh</h3>
               </div>
             </SwiperSlide>
             <SwiperSlide>
             <div className='student_says'>
                <div><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, tempora.</p>
                <h3>Priya</h3>
               </div>
             </SwiperSlide>
      
            
     
             <div className="slider-controler">
               <div className="swiper-button-prev slider-arrow">
                 <div><MdArrowLeft style={{fontSize:"35px"}}/><p style={{color:"white",fontSize:"20px",fontWeight:"600"}}>Prev</p></div>
               </div>
               <div className="swiper-button-next slider-arrow">
                 <div><p style={{color:"white",fontSize:"20px",fontWeight:"600"}}>Next</p><MdArrowRight style={{fontSize:"35px"}}/></div>
               </div>
               <div className="swiper-pagination"></div>
             </div>
           </Swiper>
           </div> : <div>
           <Swiper
  effect="coverflow"
  grabCursor={true}
  centeredSlides={true}
  loop={true}
  slidesPerView={'auto'}
  spaceBetween={20}
  coverflowEffect={{
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 4,
    slideShadows: false,
  }}
  pagination={{ el: '.swiper-pagination', clickable: true }}
  navigation={{
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    clickable: true,
  }}
  modules={[EffectCoverflow, Pagination, Navigation]}
  className="swiper_container"
>
          <SwiperSlide >
               <div className='student_says'>
                <div><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, doloribus.</p>
                <h3>Sree Ram</h3>
               </div>
             </SwiperSlide>
             <SwiperSlide>
               <div className='student_says'>
                <div><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, tempora.</p>
                <h3>Akash</h3>
               </div>
             </SwiperSlide>
             <SwiperSlide>
             <div className='student_says'>
                <div><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, tempora.</p>
                <h3>Sheik</h3>
               </div>
             </SwiperSlide>
            
      
            
     
             <div className="slider-controler">
               <div className="swiper-button-prev slider-arrow">
                 <div><MdArrowLeft style={{fontSize:"35px"}}/><p style={{color:"white",fontSize:"20px",fontWeight:"600"}}>Prev</p></div>
               </div>
               <div className="swiper-button-next slider-arrow">
                 <div><p style={{color:"white",fontSize:"20px",fontWeight:"600"}}>Next</p><MdArrowRight style={{fontSize:"35px"}}/></div>
               </div>
               <div className="swiper-pagination"></div>
             </div>
           </Swiper>
            </div>}
          
         </div>


         
      <section className="sufil-box">
                <h1 className='title'> Why Choose Us </h1>

                <div className="six-box">

                    <div className="content-one">
                        <div className="box-1">
                            <div>
                                <h2>Free Breakfast</h2>
                                <p>Early Morning Session <br /> (4:30 - 6:30 AM)</p>
                            </div>

                            <img src={assert1} alt="" />
                        </div>
                        <div className="box-1">
                            <div><h2>Portfolio Building to Showcase Your Skills</h2></div>
                        </div>
                    </div>

                    <div className="content-two">
                        <div className="box-1">
                            <div>
                                <h2>Daily Biometric</h2>
                                <p>Attendance for Discipline </p>
                            </div>

                            <img src={assert5} alt="" />
                        </div>
                        <div className="box-1">
                            <div>
                                <h2>Mock <br /> Interview</h2>
                                <p>To boost confidence </p>
                            </div>

                            <img className='mork' src={assert2} alt="" />
                        </div>
                    </div>

                    <div className="content-three">
                        <div className="box-1">
                            <div><h2>ID Cards for  Professional Touch</h2></div>
                              <img className='mork' src={assert3} alt="" />
                        </div>

                        <div className="box-1">
                            <div>
                                <h2>Placement Support</h2>
                                <p>To boost confidence</p>
                            </div>

                            <img className='mork' src={assert4} alt="" />
                        </div>
                    </div>

                </div>
          </section>

      <section className='video_section'>
        <p>Video</p>
        <div className='thumbnail_imgs'>
          <div>
            <img src={thumbnail1} alt="" />
          </div>
          <div>
            <img src={thumbnail2} alt="" />
          </div>
          <div>
            <img src={thumbnail3} alt="" />
          </div>
          <div>
            <img src={thumbnail4} alt="" />
          </div>
        </div>
      </section>


      <section className='course'>
        <p className='course_p'>Our Courses</p>

        <div className='course_Main'>
          {
            courses.map((item) => (
              <div className='course_card'>
                <img src={item.course_img} alt="" />
                <p>{item.course_name}</p>
                <p>{item.disc}</p>
                <button className='courser_btn'>Join Now</button>
              </div>
            ))
          }
        </div>
      </section>

      <section className='tools'>
        <img src={tools} alt="" />
      </section>

      <section className='contact'>
        <div className='contact_img'>
          <img src={contact_img} alt="" />
        </div>

        <div className='contact_form'>
          <p>Ready To Launch Your Tech Career</p>
          <div className='con_style'>
            <form action="" className='c_form'>
              <div className='c_inp'>
                <input type="text" name="" id="" className='c_inp1 inp1' />
                {validation == false ? <span style={{color:"red",fontSize:"12px"}}>Username cannot be blank</span> :null}
                <label htmlFor="" className='label1'>Your Full Name*</label>
              </div>

              <div className='c_inp'>
                <input type="number" name="" id="" className='c_inp1 inp2' />
                {validation == false ? <span style={{color:"red",fontSize:"12px"}}>Mobile Number cannot be blank</span> :null}
                <label htmlFor="" className='label1'>Your Mobile Number*</label>
              </div>

              <div className='c_inp'>

                <select name="" id="">
                  <option value=""></option>
                  <option value="">Full Stack Java</option>
                  <option value="">Full Stack Python</option>
                  <option value="">Web Developer</option>
                  <option value="">UI/UX Designer</option>
                </select>
                <label htmlFor="">Select Course*</label>
              </div>

              <div className='c_inp inp3'>
                <label htmlFor="">Message*</label>
                <textarea type="text" name="" id="" />
                {validation == false ? <span style={{color:"red",fontSize:"12px"}}>Message cannot be blank</span> :null}
              </div>

              <div>
                <button className='submit_btn1'>Submit Now</button>
                <button className='submit_btn2'><MdArrowOutward /></button>
              </div>
            </form>
          </div>
        </div>

        {validation ?  <div className='valid'><p>Thankyou your application submitted successfully</p> </div>: null}
      
      </section>


      <footer className='footer'>
        <div className='footer_main1'>

          <div className='footer_Content'>
            <h1>Our Course</h1>

            <div>
              <p>UI/UX Design</p>
              <p>Full Stack Java</p>
              <p>Full Stact Python</p>
              <p>FUll Stack Web Developer</p>
              <p>Digital Marketing</p>
            </div>
          </div>

          <div className='footer_Content'>
            <h1>Navigation</h1>

            <div>
              <p>Home</p>
              <p>About</p>
              <p>Courses</p>
              <p>Blog</p>
              <p>Contact</p>
            </div>
          </div>

          <div className='footer_Content'>

            <h1>Social</h1>

            <div>
              <p><FaFacebook />Facebook</p>
              <p><BiLogoInstagramAlt />Instagram</p>
              <p><GrYoutube />Youtube</p>
              <p><FaLinkedin />LinkedIn</p>
              <p><FaTwitter />Twitter</p>

            </div>
          </div>

          <div className='footer_Content'>
            <h1>Social</h1>
            <div>

              <p><MdLocationPin style={{ fontSize: "25px" }} /> No 16, 1st floor, Sarathy Nagar, Opp To Vijaya Nagar, Velachery, Chennai - 600 042.</p>
              <p><IoMailSharp />code99itacademy@gmail.com</p>
              <p><FaPhone />63 74 51 07 54</p>
            </div>
          </div>

          <div className='footer_Content'>
            <h1>Reach Us</h1>
            <div>

              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.936579516869!2d80.21896167484148!3d12.975908187339847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d70050d495f%3A0xe1b0d7791146206d!2sCode99%20IT%20Academy!5e0!3m2!1sen!2sin!4v1745127748151!5m2!1sen!2sin" frameborder="0"></iframe>
            </div>
          </div>

        </div>


        <div className='footer_main2'>
          <div className='footer_main2_div'>
            <div className="code">
              <p className="text">CODE99 IT ACADEMY</p>
            </div>
            <div className='line'></div>
            <p style={{ color: "white" }}>Copyright <FaRegCopyright /> 2025 Code99itAcademy  |  All rights reserved</p>
          </div>
        </div>
      </footer>

    </>
  )
}

export default App
