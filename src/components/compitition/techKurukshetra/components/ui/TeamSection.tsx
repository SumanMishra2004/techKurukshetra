import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../facultySlider.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import {
  Autoplay,
  EffectCards,
  EffectCoverflow,
  Pagination,
} from "swiper/modules";
import { Fade } from "react-awesome-reveal";
import Loader from "./Loader";

interface TeamMember {
  position: string;
  name: string;
  designation: string;
  image: string;
  LinkedLnId?: string;
  InstaId?:string;
}

interface TeamSectionProps {
  type?: string;
}

const TeamSection: React.FC<TeamSectionProps> = ({ type }) => {
  const teamData: TeamMember[] = [
    {
      position: "core",
      name: "Chiranjit Singha",
      designation: "Management Lead",
      image:
        "https://res.cloudinary.com/dvky83edw/image/upload/v1725479251/tech%20kurukshetra%20team/xiqjhwaw3ton1ttfl4la.jpg",
      LinkedLnId: "https://www.linkedin.com/in/chiranjit-singha-971273291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      InstaId:"https://www.instagram.com/_celestial.voyager?igsh=MTRpMWZwaWhpNG5kaw=="

    },
    {
      position: "core",
      name: "Arya Jana",
      designation: "Management Lead",
      image:
        "https://res.cloudinary.com/dvky83edw/image/upload/v1725479250/tech%20kurukshetra%20team/hchmjt0cujtkhx8iixsp.jpg",
      LinkedLnId: "https://www.linkedin.com/in/arya-jana-69106128a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      InstaId:"https://www.instagram.com/_.roger_._5288?igsh=MXV4YjZ4OG9yazh4Mg=="
    },

    {
      position: "core",
      name: "Iffat Jahan",
      designation: "Social Lead",
      image:
        "https://res.cloudinary.com/dvky83edw/image/upload/v1727025653/tech%20kurukshetra%20team/miwtwi4kopdlqdg1d5i6.jpg",
      LinkedLnId: "https://www.linkedin.com/in/iffat-jahan-098286261",
      InstaId:"https://www.instagram.com/__.iffat._?igsh=MTZ3d2Q2djE5cXVjdg=="
    },
    {
      position: "core",
      name: "Amitabh Daripa",
      designation: "Social Lead",
      image:
        "https://res.cloudinary.com/dvky83edw/image/upload/v1725479249/tech%20kurukshetra%20team/rtqdgfrembwo4btw0nh7.jpg",
      LinkedLnId: "https://www.linkedin.com/in/amitabh-daripa-1635a3257/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      InstaId:"https://www.instagram.com/myself_amitabh?igsh=MXBoa2VxdGRieWF4dQ%3D%3D&utm_source=qr"
    },

    {
      position: "core",
      name: "Suman Mishra",
      designation: "Web Developer",
      image:
        "https://res.cloudinary.com/dvky83edw/image/upload/v1724981039/tech%20kurukshetra%20team/myimage_cfrpdi.jpg",
      LinkedLnId: "https://www.linkedin.com/in/suman-mishra420",
      InstaId:""
    },
    {
      position: "core",
      name: "Adarsh Giri",
      designation: "Tech Lead",
      image:
        "https://res.cloudinary.com/dvky83edw/image/upload/v1725479249/tech%20kurukshetra%20team/ividvd2ttwdtibdh7fkp.webp",
      LinkedLnId: "https://www.linkedin.com/in/adarsh-giri-63a89022a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      InstaId:"https://www.instagram.com/iamadarshgiri?igsh=MXVuanV2dWt5cnQxbg=="
    },
    {
      position: "member",
      name: "Sankalpa Dutta",
      designation: "Tech Member",
      image:
        "https://res.cloudinary.com/dvky83edw/image/upload/v1725479249/tech%20kurukshetra%20team/q8onvfoeleph1vf0qw10.jpg",
      LinkedLnId:"http://www.linkedin.com/in/sankalpa-dutta-09187525b",
      InstaId:"https://www.instagram.com/dutta_sankalpa?igsh=aHh0MGt0dmpndDM5"
    },
    {
      position: "member",
      name: "Yash Kumar Giri",
      designation: "Tech Member",
      image:
        "https://res.cloudinary.com/dvky83edw/image/upload/v1725479251/tech%20kurukshetra%20team/lk20qo02djwyqctdb8kt.jpg",
      LinkedLnId: "https://www.linkedin.com/in/yash-kumar-giri-68a92324a",
      InstaId:"https://www.instagram.com/_duh_its_yash_?igsh=MWxsYjY1MDBoYXF0aQ=="
    },
    {
      position: "member",
      name: "Shubhranshu Ghosh",
      designation: "PR Member",
      image:
        "https://res.cloudinary.com/dvky83edw/image/upload/v1725480655/tech%20kurukshetra%20team/bz1ldswbmobv5dxsijja.jpg",
      LinkedLnId: "",
      InstaId:"https://www.instagram.com/ghosh.shubhranshu?igsh=MXFwdmFwaGhtZzNzcQ%3D%3D&utm_source=qr"
    },
    {
      position: "member",
      name: "Anirban Bhandari",
      designation: "PR Member",
      image:
        "https://res.cloudinary.com/dvky83edw/image/upload/v1727025672/tech%20kurukshetra%20team/me7ull3wdixet9minxcb.jpg",
      LinkedLnId: "",
      InstaId:"https://www.instagram.com/anirban_http404?igsh=MTgyczBtZzY3MDBsaw=="
    },
    {
      position: "member",
      name: "Akash Mondal",
      designation: "Tech Member",
      image:
        "https://res.cloudinary.com/dvky83edw/image/upload/v1725480238/tech%20kurukshetra%20team/ilaii7wiqdvcmoe5zw6s.jpg",
      LinkedLnId: "https://www.linkedin.com/in/akash-mondal-518641267",
      InstaId:"https://www.instagram.com/aakash_mondal18?igsh=MW92MGZpazg1bXl3Mw=="
    },
    {
      position: "member",
      name: "Abeer lal Nandi",
      designation: "PR & Social Member",
      image:
        "https://res.cloudinary.com/dvky83edw/image/upload/v1727025652/tech%20kurukshetra%20team/xz3upg1s9omyhfak0kvb.jpg",
      LinkedLnId: "https://www.linkedin.com/in/abeerlal-nandi-23286b325",
      InstaId:"https://www.instagram.com/abeerlal?igsh=bnV3cHVqdWxwODFj&utm_source=qr"
    },
    {
      position: "member",
      name: "Aritrik Ghosh",
      designation:"Designer",
      image:
        "https://res.cloudinary.com/dvky83edw/image/upload/v1727071719/tech%20kurukshetra%20team/bgtof9av1uskngraqzz2.jpg",
      LinkedLnId: "https://www.linkedin.com/in/aritrik-ghosh-72022a27a",
      InstaId:"https://www.linkedin.com/in/aritrik-ghosh-72022a27a"
    },
    {
      position: "member",
      name: "Anjali Singh",
      designation:"Designer",
      image:
        "https://res.cloudinary.com/dvky83edw/image/upload/v1727070811/tech%20kurukshetra%20team/wcako5xc53pqn8rklpe1.jpg",
      LinkedLnId: "https://www.linkedin.com/in/anjali-singh-94687b28b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      InstaId:"https://www.instagram.com/asr__writes2?utm_source=qr&igsh=aDRhOTJwcTVsM21l"
    },
    {
      position: "member",
      name: "SUBHRADWIP DAS",
      designation:"Designer",
      image:
        "https://res.cloudinary.com/dvky83edw/image/upload/v1727027235/tech%20kurukshetra%20team/of2mrgdm7wwnq1rruurc.jpg",
      LinkedLnId: "https://www.linkedin.com/in/anjali-singh-94687b28b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      InstaId:"https://www.instagram.com/asr__writes2?utm_source=qr&igsh=aDRhOTJwcTVsM21l"
    },
   
    
    // {
    //   position: "mentor",
    //   name: "suman mishra",
    //   designation: "Something Lead",
    //   image: "/somthing.png",
    //   LinkedLnId: "amazing peoples csisvivhdfvi dfahfsfdv nv vdhdon dkvxndidoh",
    // },
    
    {
      position: "volunteer",
      name: "Subhradip Mondal",
      designation: "Volunteer",
      image: "https://res.cloudinary.com/dvky83edw/image/upload/v1727070812/tech%20kurukshetra%20team/l4tqyvemqpa1qqi2ro95.jpg",
    },
    {
      position: "volunteer",
      name: "Ankur Saha",
      designation: "Volunteer",
      image: "https://res.cloudinary.com/dvky83edw/image/upload/v1727070812/tech%20kurukshetra%20team/jzvgddiiivzw81kfnbe2.jpg",
      
    },
    {
      position: "volunteer",
      name: "Dipchandri Ghosh",
      designation: "Volunteer",
      image: "https://res.cloudinary.com/dvky83edw/image/upload/v1727070811/tech%20kurukshetra%20team/ydechhegxrfdbaugh7vm.jpg",
    },
    {
      position: "volunteer",
      name: "SOUMYADIP BOSE",
      designation: "Volunteer",
      image: "https://res.cloudinary.com/dvky83edw/image/upload/v1727071305/tech%20kurukshetra%20team/hluubnjtbpjhndhtqnkh.jpg",
    },
    {
      position: "volunteer",
      name: "Shubham Sadhak",
      designation: "Volunteer",
      image: "https://res.cloudinary.com/dvky83edw/image/upload/v1727071302/tech%20kurukshetra%20team/a9li3a2oa64zqhaodr9y.jpg",
    },
    {
      position: "volunteer",
      name: "DIPTADIP CHOUDHURY",
      designation: "Volunteer",
      image: "https://res.cloudinary.com/dvky83edw/image/upload/v1727074711/tech%20kurukshetra%20team/plbz2ldhv4xvvrfb8dwe.jpg",
    },
    {
      position: "volunteer",
      name: "Sourja Goswamy",
      designation: "Volunteer",
      image: "https://res.cloudinary.com/dvky83edw/image/upload/v1727107605/tech%20kurukshetra%20team/ph74jy7avdind5pgfwye.jpg",
    },
    
    {
      position: "volunteer",
      name: " Indrani Paul",
      designation: "Volunteer",
      image: "https://res.cloudinary.com/dvky83edw/image/upload/v1727107605/tech%20kurukshetra%20team/ovvqd7jrpe1eoowoxquy.jpg",
    },
    {
      position: "volunteer",
      name: "Biyas Ray Chaudhuri",
      designation: "Volunteer",
      image: "https://res.cloudinary.com/dvky83edw/image/upload/v1727107604/tech%20kurukshetra%20team/hhewdulitti2pqnl4aoj.jpg",
    },
    {
      position: "volunteer",
      name: "Divyanshi Srivastava",
      designation: "Volunteer",
      image: "https://res.cloudinary.com/dvky83edw/image/upload/v1727107604/tech%20kurukshetra%20team/yhjtokyrsx8wwuszdyux.jpg",
    },
    {
      position: "volunteer",
      name: "Subhojit kar",
      designation: "Volunteer",
      image: "https://res.cloudinary.com/dvky83edw/image/upload/v1727108730/tech%20kurukshetra%20team/f1tlvzqxg90eongcypc5.jpg",
    },
  ];
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      pagination={{ clickable: true }}
      coverflowEffect={{
        rotate: 10,
        stretch: 0,
        depth: 600,
        modifier: 1,
        slideShadows: true,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[EffectCoverflow, Pagination, Autoplay]}
      className="mySwiper swipermain md:mt-7 mt-0 bg-none"
    >
      {teamData
        .filter((member) => !type || member.position === type)
        .map((value, index) => (
          <SwiperSlide
            key={index}
            className="swiperslideFaculty shadow-2xl imagecard bg-black cursor-grab"
          >
            <Fade
              direction="down"
              triggerOnce
              delay={index * 200}
              className="w-full h-full upper-slide"
            >
              <img
                src={value.image}
                alt="Faculty Image"
                className="w-full h-full undercardImage rounded-2xl"
              ></img>
            </Fade>
            <Fade
              direction="up"
              triggerOnce
              delay={index * 300}
              className="absolute left-0 bottom-0 h-[30%] w-full bg-slate-600/70 shadow-2xl flex justify-center items-center shadow-green-900"
            >
              <div className=" h-full w-fit">
                <Fade direction="right" triggerOnce duration={700}>
                  <div className="NameArea text-2xl text-white font-bold italic text-center">
                    {value.name}
                  </div>
                  <div className="linkBox flex justify-center gap-7 h-fit w-full">
                    <a
                      href={value.LinkedLnId}
                      className="LinkedLnProfileLink w-fit h-fit text-center text-white decoration-slate-400 text-7xl"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                        fill="currentColor"
                        className="bi bi-linkedin"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                      </svg>
                    </a>
                    <a
                      href={value.InstaId}
                      className="LinkedLnProfileLink w-fit h-fit text-center text-white decoration-slate-400 text-7xl"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                        fill="currentColor"
                        className="bi bi-instagram"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                      </svg>
                    </a>
                  </div>
                  
                </Fade>
              </div>
            </Fade>
        

              {/* <div className=" w-[10rem] left-20 bg-slate-600/70 rounded-b-xl h-8 text-center text-white text-base  absolute top-0 ">{value.designation}</div> */}
          
            
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default TeamSection;
