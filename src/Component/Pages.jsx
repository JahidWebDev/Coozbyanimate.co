import React from "react";
import logo from "../img/daraz-logo-png_seeklogo-429389.png";
import { MdEmail } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
const Pages = () => {
  // 3D Modeling/Visualization specific Unsplash images
  const backgroundImage = "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3";
  
  const modelingImage =
  "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3";

  return (
    <div className="relative  hide-scroll">
      {/* Navbar Section */}
      <section className="w-full relative bg-gradient-to-b from-red-700 via-[#0b0b0b] to-black overflow-hidden">

        {/* Top glow line */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-red-500 to-transparent shadow-[0_0_12px_rgba(255,0,0,0.6)]" />

        {/* Main Navbar Area */}
        <nav className="relative font-body flex items-center justify-center py-10">

          {/* Background wave */}
          <svg
            viewBox="0 0 1920 200"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-screen h-[180px] pointer-events-none"
            preserveAspectRatio="none"
          >
            {/* Green wave background */}
            <path
              d="M0 100 
                 C320 60, 640 140, 960 100
                 S1600 60, 1920 100"
              fill="none"
              stroke="#22c55e"
              strokeWidth="2.4"
              opacity="0.8"
            />

            {/* Main Yellow wave */}
            <path
              d="M0 95 
                 C300 145, 600 45, 900 95
                 C1200 145, 1500 45, 1800 95
                 S1900 145, 1920 95"
              fill="none"
              stroke="#facc15"
              strokeWidth="2.4"
              opacity="0.9"
              strokeLinecap="round"
            />
            
            {/* Yellow wave glow effect */}
            <path
              d=""
              fill="none"
              stroke="#fef08a"
              strokeWidth="8"
              opacity="0.4"
              strokeLinecap="round"
            />

            {/* Enhanced glow effect */}
            <path
              d=""
              fill="none"
              stroke="#fbbf24"
              strokeWidth="12"
              opacity="0.2"
              strokeLinecap="round"
            />

            {/* Additional wave layer */}
            <path
              d="M0 105 
                 C350 75, 700 125, 1050 105
                 C1400 75, 1750 125, 1920 105"
              fill="none"
              stroke="#f59e0b"
              strokeWidth="1.6"
              opacity="0.7"
            />

            {/* Enhanced Diamond dots with perfect spacing */}
            <g>
              {/* Left cluster - enhanced */}
              <rect x="815" y="90" width="14" height="12" transform="rotate(45 821 96)" fill="#facc15" />
              <rect x="860" y="90" width="14" height="12" transform="rotate(45 866 96)" fill="#fde047" />
              
              {/* Left cluster glow */}
              <rect x="815" y="90" width="12" height="12" transform="rotate(45 821 96)" fill="#fef08a" opacity="0.5" />
              <rect x="860" y="90" width="12" height="12" transform="rotate(45 866 96)" fill="#fef08a" opacity="0.5" />

              {/* Center cluster - enhanced and larger */}
              <rect x="940" y="90" width="14" height="14" transform="rotate(45 947 97)" fill="#fde047" />
              <rect x="980" y="90" width="12" height="12" transform="rotate(45 986 96)" fill="#facc15" />
              <rect x="1020" y="90" width="14" height="14" transform="rotate(45 1027 97)" fill="#fde047" />

              {/* Center cluster glow */}
              <rect x="940" y="90" width="14" height="14" transform="rotate(45 947 97)" fill="#fef08a" opacity="0.6" />
              <rect x="980" y="90" width="12" height="12" transform="rotate(45 986 96)" fill="#fef08a" opacity="0.6" />
              <rect x="1020" y="90" width="14" height="14" transform="rotate(45 1027 97)" fill="#fef08a" opacity="0.6" />

              {/* Right cluster - enhanced */}
              <rect x="1065" y="90" width="12" height="12" transform="rotate(45 1071 96)" fill="#facc15" />
              <rect x="1110" y="90" width="12" height="12" transform="rotate(45 1116 96)" fill="#fde047" />
              
              {/* Right cluster glow */}
              <rect x="1065" y="90" width="12" height="12" transform="rotate(45 1071 96)" fill="#fef08a" opacity="0.5" />
              <rect x="1110" y="90" width="12" height="12" transform="rotate(45 1116 96)" fill="#fef08a" opacity="0.5" />

              {/* Additional decorative dots */}
              <circle cx="890" cy="96" r="3" fill="#fbbf24" opacity="0.8" />
              <circle cx="960" cy="100" r="2.5" fill="#fef08a" opacity="0.7" />
              <circle cx="1000" cy="94" r="2.5" fill="#fef08a" opacity="0.7" />
              <circle cx="1040" cy="100" r="3" fill="#fbbf24" opacity="0.8" />
            </g>

            {/* Enhanced Floating particles - more and better distributed */}
            <g opacity="0.5">
              <circle cx="200" cy="60" r="1.5" fill="#facc15">
                <animate attributeName="cy" values="60;80;60" dur="4s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.3;0.8;0.3" dur="4s" repeatCount="indefinite" />
              </circle>
              
              <circle cx="400" cy="120" r="2" fill="#fde047">
                <animate attributeName="cy" values="120;100;120" dur="3.5s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.4;0.9;0.4" dur="3.5s" repeatCount="indefinite" />
              </circle>
              
              <circle cx="600" cy="70" r="1.8" fill="#fef08a">
                <animate attributeName="cy" values="70;90;70" dur="5s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.3;0.7;0.3" dur="5s" repeatCount="indefinite" />
              </circle>
              
              <circle cx="800" cy="140" r="1.5" fill="#fbbf24">
                <animate attributeName="cy" values="140;120;140" dur="4.5s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.4;0.8;0.4" dur="4.5s" repeatCount="indefinite" />
              </circle>
              
              <circle cx="1120" cy="80" r="2" fill="#facc15">
                <animate attributeName="cy" values="80;60;80" dur="3.8s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.3;0.7;0.3" dur="3.8s" repeatCount="indefinite" />
              </circle>
              
              <circle cx="1320" cy="110" r="1.8" fill="#fde047">
                <animate attributeName="cy" values="110;130;110" dur="4.2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.4;0.9;0.4" dur="4.2s" repeatCount="indefinite" />
              </circle>
              
              <circle cx="1520" cy="65" r="1.5" fill="#fef08a">
                <animate attributeName="cy" values="65;85;65" dur="4.8s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.3;0.6;0.3" dur="4.8s" repeatCount="indefinite" />
              </circle>
              
              <circle cx="1720" cy="130" r="2" fill="#fbbf24">
                <animate attributeName="cy" values="130;110;130" dur="3.6s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3.6s" repeatCount="indefinite" />
              </circle>
            </g>

            {/* Subtle background glow */}
            <defs>
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
          </svg>

          {/* Center logo container */}
          <div className="relative z-20 flex items-center gap-5 bg-[#0a0a0a]/95 px-8 py-4 rounded-md shadow-[0_8px_30px_rgba(0,0,0,0.7)] border border-white/5 backdrop-blur">

            {/* Logo */}
            <img
              src={logo}
              alt="logo"
              className="w-11 h-11 object-contain"
            />

            {/* Divider line */}
            <div className="w-[1px] h-10 bg-white/20" />

            {/* Brand text */}
            <h1 className="text-white text-hero text-xl tracking-[0.25em] font-semibold">
              COOZBYANIMATE
              <span className="text-red-500 ml-1">.CO</span>
            </h1>
          </div>
        </nav>

        {/* Bottom glow line */}
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-red-600 to-transparent shadow-[0_0_12px_rgba(255,0,0,0.6)]" />
      </section>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-b from-black via-[#0a0a0a] to-black overflow-hidden">
        {/* Background Image with Overlay - 3D Modeling Theme */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 transition-all duration-700 hover:opacity-40"
          style={{ 
            backgroundImage: `url(${backgroundImage})`,
            filter: 'contrast(1.1) saturate(1.2)'
          }}
        />
        
        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/90" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black" />
        
        {/* Animated 3D modeling wireframe grid */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#dc2626" strokeWidth="0.5" opacity="0.3"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
       


        {/* Main Content */}
      
{/* Main Content */}
<div className="relative container mx-auto px-4 py-20 min-h-screen">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full flex justify-center z-20">
<div className="relative  ml-[540px] bg-red-600 text-white px-10 py-5  shadow-2xl border-white/30">
  
<nav className="flex font-hero flex-col gap-4  tracking-widest font-semibold text-[16px] md:text-4xl lg:text-2xl">
  <Link to="/character-animation" className="hover:text-black transition-colors duration-300">
    Character Animation
  </Link>

  <Link to="/character-design" className="hover:text-black transition-colors duration-300">
    Character Design
  </Link>

  <Link to="/game-asset" className="hover:text-black transition-colors duration-300">
    Game Asset
  </Link>

  <Link to="/product-visual" className="hover:text-black transition-colors duration-300">
    Product Virtual
  </Link>
</nav>


  {/* Zigzag bottom border */}
 <div className="absolute bottom-0 left-0 w-full h-4 bg-[linear-gradient(-45deg,transparent_12px,#dc2626_0),linear-gradient(45deg,transparent_8px,#dc2626_0)] bg-[length:16px_16px] translate-y-full" />
</div> 

</div>
  {/* LEFT HERO TEXT */}
 {/* LEFT HERO TEXT */}
<div className="absolute left-16 top-32 max-w-xl">

  {/* Small Headline */}
  <h4 className="text-white mb-7 tracking-widest text-4xl md:text-6xl font-light font-hero">
    READY, SET
  </h4>

  {/* Main Hero Title */}
<h1 className="text-black tracking-widest font-bold text-[72px] md:text-[120px] lg:text-[220px] leading-none font-hero text-cdvibe-animate">
  ANIMATE<span className="text-red-500">!</span>
</h1>




  {/* Paragraph */}
  <p className="text-white lg:w-[750px] text-xl mt-3 leading-relaxed font-body">
    We aim to deliver outstanding quality for our clients. Our 3D animation
    services include handkey animation, character rigging, and mocap data
    cleanup & adjustment.
  </p>

  {/* Button */}
  <button className="relative overflow-hidden mt-10 px-8 py-4 border border-white text-white font-body transition-colors duration-300 hover:bg-white hover:text-black rounded-lg">
    <span className="relative z-10">GET A QUOTE</span>
  </button>
</div>


  {/* RIGHT TOP PROFILE CARD */}
  <div className="absolute right-16 top-24 w-[260px] text-end">

    {/* profile image */}
   <img
    src={modelingImage}
    alt="profile"
    className="w-20 h-20 rounded-md object-cover ml-45 shadow-lg border border-white/20"
  />

    {/* name */}
    <h3 className="text-white text-lg font-semibold mt-4">
      I’m Jahid Hossain
    </h3>

    {/* role */}
    <p className="text-red-400 text-sm mb-3">
      3D Character Animator
    </p>

    {/* description */}
    <p className="text-white/70 text-sm leading-relaxed">
      At CoozbyAnimate.co, I create captivating animations that bring stories
      and characters to life. I specialize in game animation, using Maya as my
      main tool.
    </p>
  </div>
{/* Contact & Media Icons */}
<div className="absolute bottom-10  left-1/2 -translate-x-1/2 flex flex-col items-center space-y-4">
  <div className=" mr-300 flex gap-4  space-y-2 text-white">
     <MdEmail className="text-2xl text-red-500" />
    <p className=" text-1xl">jahidbd8114@gmail.com</p>
  </div>

 <div>
     {/* Email */}

  {/* Media Icons */}
  <div className="flex space-x-6 text-white text-xl">
    <FaFacebookF className="hover:text-red-500 " />
    <FaTwitter className="hover:text-red-500 " />
    <FaLinkedinIn className="hover:text-red-500 " />
    <FaInstagram className="hover:text-red-500 " />
  </div>
 </div>

  {/* Copyright Text */}
  <p className="text-white/50 text-xs mt-2">@ 2026 CoozbyAnimate</p>
</div>
</div>

      </section>
    </div>
  );
};

export default Pages;