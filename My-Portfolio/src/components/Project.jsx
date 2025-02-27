"use client"

import { useEffect, useRef, useState, useMemo } from "react"
import { Github, X } from "lucide-react"

const FinalSmoothMarquee = () => {
  const marqueeRef = useRef(null)
  const containerRef = useRef(null)
  const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 0)
  const [showAllProjects, setShowAllProjects] = useState(false)

  const projects = useMemo(
    () => [
      {
        id: 1,
        title: "Hospital Managemnet",
        video: "/Recording 2025-02-21 121525.mp4",
        tags: ["Python", "Flask", "Mysql"],
        github: "https://github.com/rutan-mandaviya/Hospital-Management-System",
      },
      {
        id: 2,
        title: "Chrome extension - Color Picker",
        video: "/color picker.mp4",
        tags: ["Javascript", "Manifest.json", "html5/css3"],
        github: "https://github.com/rutan-mandaviya/Color-Picker-Pro",
      },
      {
        id: 3,
        title: "Music Player",
        video: "Music Player.mp4",
        tags: ["Javascript", "HTML5/CSS3", "Templates"],
        github: "https://galaxy-payer-rutan.netlify.app/",
      },
      {
        id: 4,
        title: "Portfolio",
        video: "Portfolio.mp4",
        tags: ["Javascript", "HTML5/CSS3", "Mono"],
        github: "https://galaxy-payer-rutan.netlify.app/",
      },
    ],
    [],
  )

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    const debouncedHandleResize = debounce(handleResize, 250)

    window.addEventListener("resize", debouncedHandleResize)
    return () => window.removeEventListener("resize", debouncedHandleResize)
  }, [])

  useEffect(() => {
    const marqueeElement = marqueeRef.current
    const container = containerRef.current
    if (!marqueeElement || !container) return

    const itemWidth = windowWidth < 768 ? 300 : 500
    const totalWidth = itemWidth * projects.length
    const viewportWidth = container.clientWidth

    const setsNeeded = Math.ceil((viewportWidth * 2) / totalWidth) + 1

    let cloneHTML = ""
    for (let i = 0; i < setsNeeded; i++) {
      projects.forEach((project) => {
        cloneHTML += `
          <div 
            style="
              flex: 0 0 auto;
              width: ${windowWidth < 768 ? "260px" : "460px"};
              border-radius: 16px;
              overflow: hidden;
              background-color: #111;
              transition: transform 0.3s ease, box-shadow 0.3s ease;
              margin-right: ${windowWidth < 768 ? "20px" : "40px"};
              box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
              position: relative;
            "
            class="project-card"
            data-github="${project.github}"
          >
            <div style="
              width: 100%;
              height: ${windowWidth < 768 ? "200px" : "300px"};
              overflow: hidden;
              position: relative;
            ">
              <video
                loading="lazy"
                src="${project.video}" 
                alt="${project.title}"
                style="
                  width: 100%;
                  height: 100%;
                  object-fit: cover;
                  transition: transform 0.5s ease;
                "
                class="project-video"
                loop
                muted
                playsinline
              ></video>
              <div class="github-overlay" style="
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.7);
                display: flex;
                justify-content: center;
                align-items: center;
                opacity: 0;
                transition: opacity 0.3s ease;
              ">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </div>
            </div>
            <div style="padding: ${windowWidth < 768 ? "16px" : "24px"};">
              <div style="
                display: flex;
                gap: 8px;
                margin-bottom: 12px;
                flex-wrap: wrap;
              ">
                ${project.tags
                  .map(
                    (tag) => `
                  <span style="
                    background-color: rgba(255, 255, 255, 0.1);
                    padding: 4px 10px;
                    border-radius: 20px;
                    font-size: ${windowWidth < 768 ? "0.7rem" : "0.9rem"};
                  ">${tag}</span>
                `,
                  )
                  .join("")}
              </div>
              <div style="display:flex;justify-content: space-between;align-items:center">
              <h3 style="
              font-size: ${windowWidth < 768 ? "1.5rem" : "2rem"};
              margin: 0;
              ">${project.title}</h3>
                <a
                  href="${project.github}"
                  target="_blank"
                  rel="noopener noreferrer"
                  style="
                    font-size: ${windowWidth < 768 ? "1rem" : "1.6rem"};
                    color: #fff;
                    text-decoration: none;
                  "
                >
                  <i class="ri-github-line"></i>
                </a>
              </div>
            </div>
          </div>
        `
      })
    }

    marqueeElement.innerHTML = cloneHTML

    const allCards = marqueeElement.querySelectorAll(".project-card")
    allCards.forEach((card) => {
      const video = card.querySelector(".project-video")

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              video.play()
            } else {
              video.pause()
            }
          })
        },
        { threshold: 0.5 },
      )

      observer.observe(card)

      card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-15px)"
        card.style.boxShadow = "0 20px 40px rgba(0, 0, 0, 0.7)"
        card.querySelector(".github-overlay").style.opacity = "1"
      })

      card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)"
        card.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.5)"
        card.querySelector(".github-overlay").style.opacity = "0"
      })

      card.addEventListener("click", (e) => {
        if (e.target.closest(".github-overlay")) {
          window.open(card.dataset.github, "_blank")
        }
      })
    })

    let animationFrame
    let position = 0
    let speed = windowWidth < 768 ? 0.5 : 1.5

    const animate = () => {
      position -= speed

      if (position <= -totalWidth) {
        position += totalWidth
      }

      marqueeElement.style.transform = `translateX(${position}px)`
      animationFrame = requestAnimationFrame(animate)
    }

    animate()

    container.addEventListener("mouseenter", () => {
      speed = windowWidth < 768 ? 0.2 : 0.5
    })

    container.addEventListener("mouseleave", () => {
      speed = windowWidth < 768 ? 0.5 : 1.5
    })

    const handleResize = () => {
      cancelAnimationFrame(animationFrame)
      position = 0
      marqueeElement.style.transform = `translateX(0)`
      animate()
    }

    window.addEventListener("resize", handleResize)

    return () => {
      cancelAnimationFrame(animationFrame)
      window.removeEventListener("resize", handleResize)
    }
  }, [windowWidth, projects])

  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#000",
        color: "#fff",
        padding: windowWidth < 768 ? "40px 0 30px" : "80px 0 60px",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: windowWidth < 768 ? "column" : "row",
          justifyContent: "space-between",
          alignItems: windowWidth < 768 ? "flex-start" : "center",
          margin: "0 auto 40px",
          maxWidth: "1400px",
          padding: "0 20px",
        }}
      >
        <div>
          <span
            style={{
              fontSize: windowWidth < 768 ? "1rem" : "1.4rem",
              opacity: 0.7,
              display: "block",
              marginBottom: "8px",
            }}
          >
            Projects
          </span>
          <h2
            style={{
              fontSize: windowWidth < 768 ? "2.5rem" : "4rem",
              fontWeight: "bold",
              margin: 0,
              marginBottom: windowWidth < 768 ? "20px" : 0,
            }}
          >
            My Latest{" "}
            <span
              style={{
                fontStyle: "italic",
                fontWeight: 300,
                opacity: 0.8,
              }}
            >
              Projects
            </span>
          </h2>
        </div>

        <div
          style={{
            display: "flex",
            gap: "10px",
          }}
        >
          <button
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              color: "white",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              borderRadius: "30px",
              padding: windowWidth < 768 ? "10px 20px" : "14px 28px",
              fontSize: windowWidth < 768 ? "0.9rem" : "1.1rem",
              cursor: "pointer",
              transition: "all 0.3s ease",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.2)"
              e.currentTarget.style.transform = "translateY(-3px)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)"
              e.currentTarget.style.transform = "translateY(0)"
            }}
            onClick={() => setShowAllProjects(true)}
          >
            See All Projects
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M5 12H19M19 12L12 5M19 12L12 19"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <a
            href="https://github.com/rutan-mandaviya?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              color: "white",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              borderRadius: "30px",
              padding: windowWidth < 768 ? "10px" : "14px",
              fontSize: windowWidth < 768 ? "0.9rem" : "1.1rem",
              cursor: "pointer",
              transition: "all 0.3s ease",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.2)"
              e.currentTarget.style.transform = "translateY(-3px)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)"
              e.currentTarget.style.transform = "translateY(0)"
            }}
          >
            <Github size={24} />
          </a>
        </div>
      </div>
      <div
        ref={containerRef}
        style={{
          position: "relative",
          width: "100%",
          overflow: "hidden",
          padding: "10px 0 30px",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            height: "100%",
            width: "200px",
            zIndex: 2,
            background: "linear-gradient(to right, #000, rgba(0,0,0,0.2), transparent)",
            pointerEvents: "none",
          }}
        ></div>

        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            height: "100%",
            width: "200px",
            zIndex: 2,
            background: "linear-gradient(to left, #000, rgba(0,0,0,0.2), transparent)",
            pointerEvents: "none",
          }}
        ></div>

        <div
          ref={marqueeRef}
          style={{
            display: "flex",
            padding: "20px 0",
            transition: "transform 0.01s linear",
          }}
        >
          {/* Content will be populated by JavaScript */}
        </div>
      </div>
      <div className="w-full h-1 rounded-2xl mt-10 bg-gradient-to-r from-black via-zinc-800 to-black"></div>

      {showAllProjects && (
        <AllProjects projects={projects} onClose={() => setShowAllProjects(false)} windowWidth={windowWidth} />
      )}
    </div>
  )
}

const AllProjects = ({ projects, onClose, windowWidth }) => {
  useEffect(() => {
    // Add keyboard event listener to close on ESC key
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose()
    }

    document.addEventListener("keydown", handleKeyDown)

    // Prevent scrolling on body when modal is open
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "auto"
    }
  }, [onClose])

  useEffect(() => {
    // Play videos when they're in view
    const videos = document.querySelectorAll(".project-video-grid")

    // Add error handling for each video
    videos.forEach((video) => {
      video.addEventListener("error", (e) => {
        console.error("Video error:", e)
        // Replace with a placeholder if video fails to load
        const parent = video.parentElement
        if (parent) {
          const placeholder = document.createElement("div")
          placeholder.className = "video-placeholder"
          placeholder.style.width = "100%"
          placeholder.style.height = "100%"
          placeholder.style.backgroundColor = "#222"
          placeholder.style.display = "flex"
          placeholder.style.alignItems = "center"
          placeholder.style.justifyContent = "center"
          placeholder.innerHTML = '<span style="color: #666; font-size: 1rem;">Video preview unavailable</span>'
          parent.replaceChild(placeholder, video)
        }
      })
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target
          if (entry.isIntersecting) {
            // Check if the video is ready to play
            if (video.readyState >= 2) {
              video.play().catch((err) => {
                console.warn("Could not play video:", err)
              })
            } else {
              // If not ready, wait for it to be loaded enough to play
              video.addEventListener(
                "loadeddata",
                () => {
                  if (entry.isIntersecting) {
                    video.play().catch((err) => {
                      console.warn("Could not play video after loading:", err)
                    })
                  }
                },
                { once: true },
              )
            }
          } else {
            video.pause()
          }
        })
      },
      { threshold: 0.5 },
    )

    videos.forEach((video) => observer.observe(video))

    return () => {
      videos.forEach((video) => {
        observer.unobserve(video)
        video.removeEventListener("error", () => {})
      })
    }
  }, [])

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.95)",
        zIndex: 100,
        overflowY: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          maxWidth: "1400px",
          padding: "20px",
          marginBottom: "20px",
        }}
      >
        <h2
          style={{
            fontSize: windowWidth < 768 ? "2rem" : "3rem",
            fontWeight: "bold",
            margin: 0,
          }}
        >
          All Projects
        </h2>
        <button
          onClick={onClose}
          style={{
            backgroundColor: "transparent",
            color: "white",
            border: "none",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)"
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent"
          }}
        >
          <X size={24} />
        </button>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: windowWidth < 768 ? "1fr" : "repeat(2, 1fr)",
          gap: "30px",
          width: "100%",
          maxWidth: "1200px",
          padding: "0 20px 40px",
        }}
      >
        {projects.map((project) => (
          <div
            key={project.id}
            style={{
              borderRadius: "16px",
              // border:"2px solid #dadada",
              overflow: "hidden",
              backgroundColor: "#111",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
              position: "relative",
            }}
            className="project-card-grid"
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-15px)"
              e.currentTarget.style.boxShadow = "0 20px 40px rgba(0, 0, 0, 0.7)"
              e.currentTarget.querySelector(".github-overlay-grid").style.opacity = "1"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)"
              e.currentTarget.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.5)"
              e.currentTarget.querySelector(".github-overlay-grid").style.opacity = "0"
            }}
          >
            <div
              style={{
                width: "100%",
                height: windowWidth < 768 ? "200px" : "300px",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <video
                className="project-video-grid"
                src={project.video}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.5s ease",
                }}
                loop
                muted
                playsInline
                preload="metadata"
                onError={(e) => {
                  console.error(`Error loading video for ${project.title}:`, e)
                  // The error handler in useEffect will handle this
                }}
              />
              <div
                className="github-overlay-grid"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.7)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  opacity: 0,
                  transition: "opacity 0.3s ease",
                  cursor: "pointer",
                }}
                onClick={() => window.open(project.github, "_blank")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </div>
            </div>
            <div style={{ padding: windowWidth < 768 ? "16px" : "24px" }}>
              <div
                style={{
                  display: "flex",
                  gap: "8px",
                  marginBottom: "12px",
                  flexWrap: "wrap",
                }}
              >
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      padding: "4px 10px",
                      borderRadius: "20px",
                      fontSize: windowWidth < 768 ? "0.7rem" : "0.9rem",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h3
                  style={{
                    fontSize: windowWidth < 768 ? "1.5rem" : "2rem",
                    margin: 0,
                  }}
                >
                  {project.title}
                </h3>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: windowWidth < 768 ? "1rem" : "1.6rem",
                    color: "#fff",
                    textDecoration: "none",
                  }}
                >
                  <i className="ri-github-line"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

export default FinalSmoothMarquee

