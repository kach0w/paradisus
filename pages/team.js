import React from 'react'
import Navbar from '../components/Navbar'
import Link from 'next/link';
import logo from '../assets/favicon.ico'
import Image from 'next/image'
import scss from '../styles/Home.module.css'
import shickywicky from '../assets/shicky.png'

const about = () => {
  return (
    <div className='text-center'>
      <Navbar />
        <h1 className='font-bold text-[1.5rem]'>
            Check out our team:
            
        </h1>
        <div className='grid grid-cols-3 grid-rows-2 w-[70vw] mx-auto mt-20'>
            <div class="flex-col text-center content-center">
                <a href="#" className="mx-auto">
                    <Image width={100}  height={100} className="w-[231px] mx-auto"
                        src={shickywicky    }></Image>
                </a>
                <div class="text-center mt-6">
                    <h1 class="text-gray-900 text-xl font-bold mb-1">
                    Shikhar Sisodia
                    </h1>
                    <div class="text-gray-700 font-light mb-2 w-[20rem] mx-auto">
                    Hi! My name is Shikhar Sisodia. I am an incoming Junior at Dougherty Valley High School. I am beyond excited to be part of Rate My APs. I am the current Founder, Marketer, and Social Media Manager for this App as I strive for this app to assist high schoolers throughout their journey in high school picking their majors and future classes they take. In my free time, I like to play video games and basketball. I also like to meet new people and develop new friendships. I look forward to this idea to very successful in the near future.
                    </div>
                </div>
            </div>
            <div class="flex-col text-center content-center">
                <a href="#" className="mx-auto">
                    <Image width={100}  height={100} className="w-[15rem] mx-auto"
                        src=""></Image>
                </a>
                <div class="text-center mt-6">
                    <h1 class="text-gray-900 text-xl font-bold mb-1">
                    Aadi Patwardhan
                    </h1>
                    <div class="text-gray-700 font-light mb-2 w-[20rem] mx-auto">
                    Hello, my name is Aadi Patwardhan and I am an incoming junior at Dublin High School. I am honored to be a co- founder, a part of the marketing, designing, and social media managing team for this app. As a member of these roles, it is my responsibility to ensure an easy and fun way for our users to navigate the app and strive to draw attention to it. In my free time, I like to swim, play badminton, and videogames, and spend time with my family.
                    </div>
                </div>
            </div>
            <div class="flex-col text-center content-center">
                <a href="#" className="mx-auto">
                    <Image width={100}  height={100} className="w-[15rem] mx-auto"
                        src=""></Image>
                </a>
                <div class="text-center mt-6">
                    <h1 class="text-gray-900 text-xl font-bold mb-1">
                    Karthik Sabhanayakam
                    </h1>
                    <div class="text-gray-700 font-light mb-2 w-[20rem] mx-auto">
                    I'm a rising junior at BASIS Independent Silicon Valley. My role in Rate My AP's is the primary web developer. I helped make the website as well as the web application. In this role I hope to help more students learn more about the AP's they intend to take so that they are more informed about information like difficulty or course content. In my free time, I enjoy watching old films and playing basketball.
                    </div>
                </div>
            </div>
            <div class="flex-col text-center content-center">
                <a href="#" className="mx-auto">
                    <Image width={100}  height={100} className="w-[15rem] mx-auto"
                        src=""></Image>
                </a>
                <div class="text-center mt-6">
                    <h1 class="text-gray-900 text-xl font-bold mb-1">
                    Prajwal Dacharla
                    </h1>
                    <div class="text-gray-700 font-light mb-2 w-[20rem] mx-auto">
                    Hi! I'm Prajwal Dacharla, a 15 year old incoming junior at Dublin High School. I serve as the UI Designer for this application and I am proud to put my creativity and designing skills to work. As this project is meant to aid highschoolers through their process of picking courses for the school year, it is essential our user interface is properly navigable and functional. When I'm not working, I enjoy boxing, playing video games, listening to music, and hanging out with my friends and family.
                    </div>
                </div>
            </div>
            <div class="flex-col text-center content-center">
                <a href="#" className="mx-auto">
                    <Image width={100}  height={100} className="w-[15rem] mx-auto"
                        src=""></Image>
                </a>
                <div class="text-center mt-6">
                    <h1 class="text-gray-900 text-xl font-bold mb-1">
                    Anil Sarvabatla
                    </h1>
                    <div class="text-gray-700 font-light mb-2 w-[20rem] mx-auto">
                    My name is Anil Sarvabatla. I am an incoming junior at Dublin High School, and I am a member of the development team for this app. I am a co-founder of this app. Many high school students don't know what APs to take, and we are trying to fix this problem. I have 6 years of experience in JavaScript and Python and have 2 years of experience in Java and 2 months of experience in C# In my free time, I like to play video games, make websites, and play basketball. 
                    </div>
                </div>
            </div>
            <div class="flex-col text-center content-center">
                <a href="#" className="mx-auto">
                    <Image width={100}  height={100} className="w-[15rem] mx-auto"
                        src=""></Image>
                </a>
                <div class="text-center mt-6">
                    <h1 class="text-gray-900 text-xl font-bold mb-1">
                    Koushik Chandolu
                    </h1>
                    <div class="text-gray-700 font-light mb-2 w-[20rem] mx-auto">
                    My name is Kaushik and I am an upcoming sophomore at Dublin High School and I am going to major in computer science. I have some experience coding and designing websites and I hope to use that knowledge to help make this project a reality. 
                    </div>
                </div>
            </div>
        </div>
      </div>
    // </div>
  )
}

export default about