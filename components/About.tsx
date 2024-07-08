"use client"

import React from "react"
import { motion } from "framer-motion"
import SectionHeading from "./SectionHeading"
import { useSectionInView } from "@/lib/hooks"
import { useLocale, useTranslations } from "next-intl"

export default function About() {
  const { ref } = useSectionInView("About")
  const t = useTranslations("AboutSection")
  const sectionLan = useTranslations("SectionName")
  const activeLocale = useLocale()

  return (
    <motion.section
      ref={ref}
      className="mb-50 max-w-[45rem] text-start leading-8 sm:mb-40 scroll-mt-28 mb-28 "
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>{sectionLan("about")}</SectionHeading>
      {activeLocale == "en" && (
        <>
          <p className="mb-3">
            My journey into programming kicked off during my undergrad in
            <span className="font-medium italic"> Computer Science Engineering</span> at{" "}
            <span className="italic underline">
              <a
                href="https://chennai.vit.ac.in/"
                target="_blank"
              >
                VIT Chennai.
              </a>
            </span>{" "}
            As a student, I got my feet wet with the basics of computer
            science, databases, and Python. But what truly sparked my passion
            was a course on AI and Machine Learning—there, I used various programming languages and tools to create impactful projects.{" "}
            <a
              href="https://github.com/akash-mondal"
              target="_blank"
              className="italic underline"
            >
              Check out my GitHub here.{" "}
            </a>
            This experience opened my eyes to the charm of solving real-world problems with code—
            <span className="font-medium italic">
              literally, you can build anything you envision with code.
            </span>
          </p>

          <p className="mb-3">
            I sharpened my skills through internships at
            Yash Technologies, Bharat Heavy Electricals Limited (BHEL), and{" "}
            <span className="italic underline">
              <a href="https://www.mathworks.com/company/jobs" target="_blank">
                MathWorks.
              </a>
            </span>{" "}
            Working closely with developers, designers, testers, and product
            managers, I loved the buzz of a team pulling together to make our
            product better. And there’s nothing quite like the thrill of seeing
            my own code being used by thousands—it’s what solidified my decision
            to pursue a career in AI and Machine Learning.
          </p>

          <p className="mb-3">
            I’m now in my final year of B.Tech in
            <span className="font-medium italic"> Computer Science Engineering</span> at{" "}
            <span className="italic underline">
              <a href="https://vit.ac.in/chennai" target="_blank">
                VIT Chennai.
              </a>
            </span>
            I thrive on programming challenges and enjoy working with teams to
            solve complex problems. I specialize in technologies such as
            <span className="font-medium italic"> AI, NLP, and deep learning</span>,
            and have a solid understanding of{" "}
            <span className="font-medium italic">
              MATLAB, Python, and various other programming languages
            </span>
            .{" "}
          </p>

          <p>
            In my spare time, I enjoy exploring new technologies and building
            interesting projects. I also run my GitHub account where I share my projects and contributions. And when I’m not at the computer, you’ll find me
            <span className="font-medium italic">
              {" "}
              cooking up a storm, catching a movie, or keeping fit with regular
              workouts.
            </span>
          </p>
        </>
      )}
    </motion.section>
  )
}
