import React from "react";
import { FaReact } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import rubicGameImage from "@/public/2048-game.png";
import breadditImage from "@/public/breaddit.png";
import gameHubImage from "@/public/game-hub.png";
import typingSpeedImage from "@/public/typing-speed.png";

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experiences",
        hash: "#experience",
    },
    // {
    //     name: "Contact",
    //     hash: "#contact",
    // },
] as const;


export const headerLanguageMap = {
    Home: '首页',
    About: '关于我',
    Projects: '我的项目',
    Skills: '我的技能',
    Experiences: '我的经历',
}

export const experiencesData = [
    {
      date: "Feb. 2024 – Apr. 2024",
      title: "Data Science Intern (Hybrid)",
      location: "Yash Technologies, Indore, Madhya Pradesh, India",
      description: `
        Developed a State-of-the-Art Virtual Try-On (SOTA VTON) web application using Streamlit, enabling users to virtually
        try on garments on model images and search for garments from various e-commerce websites.
        Implemented a multi-view diffusion model to generate GIFs showcasing output images from different angles, enhancing
        user experience and visualization. (Novel View Generation)
        Utilized various deep learning techniques including image segmentation (Hugging Face SegFormer model), Stable
        Diffusion inpainting models with ControlNet, and IDM-VTON for accurate and realistic virtual try-on results.
      `,
      icon: React.createElement(FaVuejs),
    },
    {
      date: "Aug. 2023 – Sep. 2023",
      title: "DataCenter Intern (On Site)",
      location: "Bharat Heavy Electricals Limited (BHEL), Hyderabad, Telangana, India",
      description: `
        Collaborated with a cross-functional team to implement a Temperature Monitoring and Control System for data centers.
        Utilized NetBeans, Java, and JavaServer Pages (JSP) to develop a robust system for real-time temperature monitoring.
        Integrated Internet of Things (IoT) sensors and Arduino microcontrollers to collect data and ensure optimal operating
        conditions.
        Maintained and managed Oracle Database for storing temperature data and generating reports.
      `,
      icon: React.createElement(FaReact),
    },
    {
      date: "May. 2023 – Sep. 2023",
      title: "Machine Learning Intern (Remote)",
      location: "MathWorks",
      description: `
        Independently learned and implemented machine learning techniques, particularly using MATLAB for image processing,
        signal processing and deep learning.
        Developed a strong understanding of MATLAB and its applications in the fields of AI and machine learning.
        Worked remotely, demonstrating self-motivation and a dedication to acquiring new skills and knowledge.
      `,
      icon: React.createElement(FaReact),
    },
    {
      date: "2021 – 2025",
      title: "B.Tech in Computer Science Engineering",
      location: "VIT Chennai, Tamil Nadu, India",
      description: `
        Pursuing a Bachelor of Technology in Computer Science Engineering with a specialization in Cyber Physical Systems.
        Developed a solid foundation in computer science principles and practical skills in various areas such as AI, machine learning, and data science.
      `,
      icon: React.createElement(LuGraduationCap),
    },
  ]

export const experiencesDataZn = [
    {
        "title": "计算机与信息技术硕士",
        "location": "英国圣安德鲁斯大学",
        "description": "获得了计算机与信息技术硕士学位，在人机交互、计算机通信系统和信息安全等领域深入学习。培养了计算思维、以用户为中心的设计和数据可视化方面的强大能力，为在科技驱动的环境中有效应用做好了准备。",
        icon: React.createElement(LuGraduationCap),
        "date": "2023年9月 - 2024年8月"
    },
    {
        "title": "前端实习生",
        "location": "蔚来汽车（中国武汉）",
        "description": "使用Vue3、TypeScript和百度地图API开发蔚来第三代换电站列表和详情页。在任务向导页面实施基于角色的访问控制，增强系统安全性。在Jira管理的环境中有效协作，利用Jenkins进行部署流程。",
        "icon": React.createElement(FaVuejs),
        "date": "2022年8月 - 2022年12月"
    },
    {
        "title": "前端开发",
        "location": "武汉大学大数据研究院",
        "description": "使用umi（React框架）和Ant Design Pro开发和维护Finknow，一个金融知识图谱查询和分析平台。利用基于G6的React图分析工具包graphin开发了股权网络穿透图，增强了数据可视化功能。",
        "icon": React.createElement(FaReact),
        "date": "2022年5月 - 2022年7月"
    },
    {
        "title": "数字出版学士",
        "location": "武汉大学",
        "description": "以3.81/4.0的GPA毕业，获得数字出版学士学位，掌握了数字媒体和出版技术的基础知识。",
        "icon": React.createElement(LuGraduationCap),
        "date": "2019年9月 - 2023年6月"
    }
]


export type ProjectTags = typeof projectsData[number]["tags"];

export const projectsData = [
    {
        title: "StellarFrames",
        title_zh: '超个性化广告使用GenAI',
        description:
            "Led the development of 'StellarFrames,' an innovative project focused on creating hyper-personalized advertisements using Generative AI. Winner of a National Level Hackathon.",
        desc_zh: "开发了“StellarFrames”，这是一个创新项目，旨在利用生成AI创建超个性化广告。",
        tags: ["Generative AI", "Advertising", "Hackathon"],
        imageUrl: typingSpeedImage, // Add your image URL here
        projectUrl: 'https://stellarframe-git-master-akash-mondal.vercel.app/', // Keep empty for now
        demoUrl: 'https://colab.research.google.com/github/akash-mondal/StellarFramesDemos/blob/main/StellarFramesDemo.ipynb', // Keep empty for now
    },
    {
        title: "Project Dark",
        title_zh: '电子商务网站中黑暗模式的可扩展生态系统',
        description: "Developed a scalable ecosystem aimed at identifying and mitigating dark patterns in eCommerce websites using AI and generative AI techniques.",
        desc_zh: "开发了一个可扩展的生态系统，旨在使用AI和生成AI技术识别和减轻电子商务网站中的黑暗模式。",
        tags: ["AI", "Generative AI", "Ecommerce"],
        imageUrl: gameHubImage, // Add your image URL here
        projectUrl: 'https://github.com/Project-Dark', // Keep empty for now
        demoUrl: 'https://www.youtube.com/watch?v=tz5xMQA26OM', // Keep empty for now
    },
    {
        title: "SHRESHTH",
        title_zh: '双语多模式语音激活助手',
        description:
            "Created a voice-activated assistant for Indian Space Research Organization (ISRO) that uses Retrieval Augmented Generation for performing Q&A on provided documents.",
        desc_zh: "为印度空间研究组织（ISRO）创建了一个使用文档检索增强生成技术进行问答的语音激活助手。",
        tags: ["Voice Recognition", "AI", "ISRO"],
        imageUrl: rubicGameImage, // Add your image URL here
        projectUrl: 'https://huggingface.co/spaces/AkashMnd/SHRESHTH/tree/main', // Keep empty for now
        demoUrl: 'https://www.youtube.com/watch?v=lHS247B0yIQ', // Keep empty for now
    },
    {
        title: "Seamless AI",
        title_zh: "多模态AI套件用于多样化用户交互",
        description:
            "Developed Seamless AI, a suite combining NLP, computer vision, and multimodal capabilities to support interactions in 11 Indian languages.",
        desc_zh: "开发了Seamless AI，这是一个结合了NLP、计算机视觉和多模态能力的套件，支持使用11种印度语言进行交互。",
        tags: ["NLP", "Computer Vision", "Multimodal AI"],
        imageUrl: breadditImage, // Add your image URL here
        projectUrl: 'https://github.com/akash-mondal/Seamless-AI', // Keep empty for now
        demoUrl: '', // Keep empty for now
    }
];


export const skillsData = [
  "Python",
  "R",
  "MATLAB",
  "Java",
  "JavaScript",
  "Node.js",
  "Express.js",
  "Git",
  "GitHub",
  "Streamlit",
  "Oracle Database",
  "MongoDB",
  "PostgreSQL",
  "PyTorch",
  "Tensorflow",
  "Machine Learning",
  "Deep Learning",
  "Natural Language Processing (NLP)",
  "Automatic Speech Recognition (ASR)",
  "Text To Speech (TTS)",
  "Internet of Things (IoT)"
];

