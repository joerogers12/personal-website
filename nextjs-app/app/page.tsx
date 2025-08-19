"use client";

import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const sidebarSections = ["About Me", "Projects", "Skills", "Certificates", "Resume", "Transcript", "Contact", "Blog", "Personal Interests"];

function Home() {
  const [artists, setArtists] = useState<{ name: string, image?: string }[]>([]);

  useEffect(() => {
    setArtists([
      { name: "Taylor Swift", image: "/images/taylor.jpg" },
      { name: "Kendrick Lamar", image: "/images/kendrick.jpg" }
    ]);
  }, []);

  return (
    <>
      <Head>
        <title>Joe Rogers</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css" rel="stylesheet" />
        <link href="/style.css" rel="stylesheet" />
      </Head>

      {/* Full Page */}
      <div className="full-page">

        {/* Sidebar */}
        <aside>
          <div id="sidebar-header">
            <a href="/" id="name-text" className="link-body-emphasis">
              Joe Rogers
            </a>
            <svg id="collapse-sidebar" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-left-square" viewBox="0 0 16 16">
              <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
              <path d="M10.205 12.456A.5.5 0 0 0 10.5 12V4a.5.5 0 0 0-.832-.374l-4.5 4a.5.5 0 0 0 0 .748l4.5 4a.5.5 0 0 0 .537.082"/>
            </svg>
          </div>

          <ul id="sidebar" className="nav nav-pills">
            {sidebarSections.map((section) => {
              const id = section.toLowerCase().replace(/\s+/g, '-');
              return (
                <li key={id} className="nav-item">
                  <a href={`#${id}`} className="nav-link link-body-emphasis" aria-current="page">{section}</a>
                </li>
              );
            })}
          </ul>
        </aside>

        {/* Main Content */}
        <main>

          {/* About Me */}
          <section className="about-me" id="about-me">
            <svg id="expand-sidebar" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-left-square" viewBox="0 0 16 16">
              <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
              <path d="M10.205 12.456A.5.5 0 0 0 10.5 12V4a.5.5 0 0 0-.832-.374l-4.5 4a.5.5 0 0 0 0 .748l4.5 4a.5.5 0 0 0 .537.082"/>
            </svg>
            <h1 id="intro-header">Welcome to Meeting Me</h1>
            <div id="full-bio-block">
              <div id="intro-block">
                <div id="intro">
                  Hi, I’m Joe — a former farmer and current Software Engineer in training with a passion for building scalable tools and impactful tech
                  Currently working on:
                  An application built for farmers to easily manage their crops and records
                  A web app for ICS students to compare courses & professors and build their schedules accordingly
                </div>
                <div id="education">
                  <h2>Education</h2>
                  Studying Software Engineering @ UC Irvine (B.S.)
                  Previously earned a B.S. in Mechanical Engineering @ UC Irvine
                </div>
              </div>
              <div id="tech-stack">
                <h2>Tech Stack</h2>
                Building in Java, Python, C++, and JavaScript — and always learning more
                Goal: Contribute to teams solving real-world problems through thoughtful design, customer focus, and ingenuity
                Open to internships and software roles where I can grow, learn, and make meaningful contributions
              </div>
            </div>
          </section>

          {/* Projects */}
          <section className="projects" id="projects">
            <h2>
              Projects
            </h2>
            <h3 className="project-name">
              ZotScope
            </h3>
            <div className="project row">
              <p className="description col">
                Overview: 
              </p>
              <Image 
                src="/images/zotscopeHome.png" 
                alt="Zotscope's home page" 
                width={600} 
                height={400} 
                className="project-image"
              />
            </div>
          </section>

          {/* Skills */}
          <section className="skills" id="skills">
            <h2>
              Skills
            </h2>

          </section>

          {/* Certificates */}
          <section className="certificates" id="certificates">
            <h2>
              Certificates
            </h2>
            <Image 
              src="/images/fullStackCert.jpg"
              alt="Joe Rogers's Full Stack Bootcamp Certification" 
              width={600} 
              height={400} 
              className="cert-image"
            />       
          </section>

          {/* Resume */}
          <section className="resume" id="resume">
            <h2>
              Resume
            </h2>
            
          </section>

          {/* Transcript */}
          <section className="transcript" id="transcript">
            <h2>
              Transcript
            </h2>
            
          </section>

          {/* Contact */}
          <section className="contact" id="contact">
            <h2>
              Contact
            </h2>
            
          </section>

          {/* Blog */}
          <section className="blog" id="blog">
            <h2>
              Blog
            </h2>
            
          </section>

          {/* Personal Interests */}
          <section className="personal-interests" id="personal-interests">
            <h2>
              Personal Interests
            </h2>
            <h3>
              My Top Spotify Artists
            </h3>
            <div className="top-artist-list">
              {/* {artists.length > 0 ? (
                artists.map((artist, idx) => (
                  <div key = {idx} className="artist-card">
                    {artist.image && (
                      <Image src={artist.image} alt={artist.name} className="artist-image" />
                    )}
                    <h5 className="artist-title">{artist.name}</h5>
                  </div>
                ))
              ) : (
                <p>No artists found.</p>
              )} */}
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default Home;

{/* <!DOCTYPE html>
<html lang="en" data-bs-theme="dark">

  
  <script src="/sidebarHighlight.js"></script>
  <script src="/sidebarCollapse.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js" integrity="sha384-ndDqU0Gzau9qJ1lfW4pNLlhNTkCfHzAVBReH9diLvGRem5+R9g2FzA8ZGN954O5Q" crossorigin="anonymous"></script>

</body>
</html> */}