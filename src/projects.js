import{ CSS_LOGO, C_LOGO, HTML_LOGO, JAVA_LOGO, JS_LOGO, PYTHON_LOGO, REACT_LOGO } from '../src/images/stackConstants';
import SLibrary from './images/slibrary-400x400.png';
import WeightLiftingAPI from './images/weightlifting-api-400x400.png';
import RoomMgment from './images/room-management-400x400.png';
import OlyTracking from './images/oly-tracking-400x400.png';
import Airbnb from './images/airbnb-400x400.png';
import IntelliPutt from './images/golf-companion-400x400.png';
import Solar from './images/solar-system-400x400.png';
export const ALL_PROJECTS = [
    {title: "S/Library", desc: "A self led and developed project in which I created a web-app based in React with Firebase Services to allow students to upload second hand textbooks for other students to purchase", tag:['web'], img:SLibrary},
    {title: "Weightlifting API", desc: "This Weightlifting API can be used to retrieve competition lifts from the Olympic Weightlifting during the Olympics in 2012.", tag:["java"], img:WeightLiftingAPI},
    {title: "Room Management", desc:"This project was part of my Computer Science IA for the IB where I aimed to create a Java based application for the Music department in my school. ", tag:['java'], img:RoomMgment},
    {title: "Fitness Tracker", desc:"This fitness tracking app can be used to record a users Olympic Weightlifting lifts. The design is modern and responsive and is primarily a mobile web app.", tag:['web'], img:OlyTracking},
    {title: "Airbnb Data Analsys", desc:"This project was part of my Data science course where I took an Airbnb dataset for Edinburgh and analyzed its contents to discover interesting details about the airbnb market using data analysis", tag:["python"], img:Airbnb},
    {title: "Golf Companion", desc:"This project is part of a large group project aimed to create an assistive robot. This app accompanied that project and will implement a social system and golf statistics", tag:['web'], img:IntelliPutt},
    {title: "Orbit Simulation", desc:"This project was part of an optional elective in University where I had to model the orbits of our planets in our solar system. This was written in Python and MatPlotlib. ", tag:['python'], img:Solar},
    {title: "Automatic login script", desc:"This script automated the login experience when logging into Learn via MyEd from The University of Edinburgh. Users can setup their username and password within the script", tag:["python"]},
    {title: "Portfolio Website", desc:"The website you are currently on! A way to showcase all of my self-guided coding adventures. Utilizes skills I've learnt over the years.", tag:['web']},
    {title: "Drone Delivery System", desc:"Relevant coursework which involved creating a Drone Food delivery system which would connect to a RESTful service to retrieve and categorize orders. It also generated flight path for drone delivery.", tag:["java"]},
    {title: "Events Booking System", desc:"Relevant coursework which involved working in a group to build an Events Booking System built on the Command and Oberserver pattern. Involved heavy JUnit tests.", tag:["java"]},
    {title: "UNO Sense Android App", desc:"Internship experience at Delta electronics where I worked to create a prototype app which connected to their UNO sense device and display air quality information.", tag:["mobile"]},
    {title: "Self-made IoT device", desc:"Inspired from my Internship experience, using Arduino's, I created my own IoT device which could read current air quality information which was retrievable on a mobile application too.", tag:["mobile"]},
    {title: "Multi-Cycle processor", desc:"Relevant coursework where using C, the basic architecture of a Multicycle processor was implemented.", tag:['C']}
]


export const tagToIcon = new Map([
    ['java', [JAVA_LOGO]],
    ['python', [PYTHON_LOGO]],
    ['web', [REACT_LOGO, HTML_LOGO, CSS_LOGO, JS_LOGO]],
    ["mobile", [REACT_LOGO]],
    ["C", [C_LOGO]]
])