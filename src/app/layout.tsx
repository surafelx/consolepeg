"use client";

import { useEffect, useRef, useState } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const playVideo = () => {
    console.log("Playing video");
    if (!isPlaying) {
      videoRef.current?.play();
      setIsPlaying(true);
    }
    resetTimeout();
  };

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      videoRef.current?.pause();
      setIsPlaying(false);
    }, 3000); // Pause after 3s of inactivity
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);
  return (
    <html lang="en">
      <body
        onMouseMove={playVideo}
        onClick={playVideo}
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-hidden `}
      >
        <div className="absolute inset-0 w-full h-full overflow-hidden z-[-1]">
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover opacity-90 "
            src="./video/trippy.mp4" // Place your video in /public
            loop
            muted
            playsInline
          />
          <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        </div>
        <div className="">{children}</div>
      </body>
    </html>
  );
}
