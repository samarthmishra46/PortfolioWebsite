import React from 'react';
import {
  Server,
  Infinity,
  Database,
  Code,
  LineChart,
  Layers,
  Cpu,
  GitBranch,
  Cloud,
  BarChart,
  Braces,
  Globe,
  Workflow
} from "lucide-react";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  {
    title: "DevOps Engineer",
    icon: <Infinity size={48} />,
    description: "Implementing CI/CD pipelines, container orchestration, and infrastructure automation to streamline development workflows."
  },
  {
    title: "Full Stack Developer",
    icon: <Code size={48} />,
    description: "Building responsive web applications with modern JavaScript frameworks and libraries, specializing in the MERN stack."
  },
  {
    title: "Data Scientist",
    icon: <LineChart size={48} />,
    description: "Analyzing complex datasets, building machine learning models, and creating data visualizations to derive actionable insights."
  },
  {
    title: "Cloud Architect",
    icon: <Cloud size={48} />,
    description: "Designing scalable, secure, and cost-effective cloud infrastructure solutions on AWS, Azure, and GCP."
  },
];

export const technologies = [
  {
    name: "MongoDB",
    icon: <Database size={48} />,
    category: "Database"
  },
  {
    name: "Express.js",
    icon: <Braces size={48} />,
    category: "Backend"
  },
  {
    name: "React",
    icon: <Layers size={48} />,
    category: "Frontend"
  },
  {
    name: "Node.js",
    icon: <Server size={48} />,
    category: "Backend"
  },
  {
    name: "Docker",
    icon: <Cpu size={48} />,
    category: "DevOps"
  },
  {
    name: "Kubernetes",
    icon: <Workflow size={48} />,
    category: "DevOps"
  },
  {
    name: "Git",
    icon: <GitBranch size={48} />,
    category: "DevOps"
  },
  {
    name: "Python",
    icon: <Code size={48} />,
    category: "Programming"
  },
  {
    name: "TensorFlow",
    icon: <BarChart size={48} />,
    category: "Data Science"
  },
  {
    name: "AWS",
    icon: <Cloud size={48} />,
    category: "Cloud"
  },
  {
    name: "REST API",
    icon: <Globe size={48} />,
    category: "Backend"
  },
  {
    name: "CI/CD",
    icon: <GitBranch size={48} />,
    category: "DevOps"
  },
];

export const experiences = [
  {
    title: "Senior DevOps Engineer",
    company_name: "TechCorp Solutions",
    date: "Jan 2022 - Present",
    points: [
      "Implemented and maintained CI/CD pipelines using Jenkins, GitHub Actions, and GitLab CI",
      "Orchestrated containerized applications with Kubernetes in production environments",
      "Automated infrastructure provisioning with Terraform and Ansible",
      "Reduced deployment time by 70% and improved system reliability by implementing robust monitoring solutions"
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "WebSphere Innovations",
    date: "Mar 2020 - Dec 2021",
    points: [
      "Developed responsive web applications using React, Node.js, Express, and MongoDB",
      "Implemented RESTful APIs and GraphQL endpoints for efficient data retrieval",
      "Collaborated with UX/UI designers to implement pixel-perfect interfaces",
      "Optimized application performance and implemented security best practices"
    ],
  },
  {
    title: "Data Scientist",
    company_name: "DataMinds Analytics",
    date: "Jun 2018 - Feb 2020",
    points: [
      "Built machine learning models for predictive analytics and customer segmentation",
      "Processed and analyzed large datasets using Python, Pandas, and NumPy",
      "Created interactive data visualizations with D3.js and Tableau",
      "Presented insights to stakeholders and translated technical findings into business recommendations"
    ],
  },
  {
    title: "Junior Software Engineer",
    company_name: "CodeCraft Technologies",
    date: "Aug 2016 - May 2018",
    points: [
      "Developed and maintained web applications using JavaScript, HTML, and CSS",
      "Collaborated with cross-functional teams to define, design, and ship new features",
      "Implemented responsive design and ensured cross-browser compatibility",
      "Participated in code reviews and maintained code quality"
    ],
  },
];

export const projects = [
  {
    name: "Cloud Infrastructure Automation",
    description:
      "A comprehensive solution for automating cloud infrastructure provisioning and management across multiple cloud providers using Terraform, Ansible, and custom scripts.",
    tags: [
      {
        name: "terraform",
        color: "blue-text-gradient",
      },
      {
        name: "ansible",
        color: "green-text-gradient",
      },
      {
        name: "aws",
        color: "pink-text-gradient",
      },
    ],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
  },
  {
    name: "E-commerce Platform",
    description:
      "A full-featured e-commerce platform built with the MERN stack, featuring user authentication, product catalog, shopping cart, payment processing, and admin dashboard.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "node.js",
        color: "pink-text-gradient",
      },
    ],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
  },
  {
    name: "Predictive Analytics Dashboard",
    description:
      "An interactive dashboard for visualizing and analyzing business metrics with predictive capabilities using machine learning algorithms to forecast future trends.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "tensorflow",
        color: "green-text-gradient",
      },
      {
        name: "d3.js",
        color: "pink-text-gradient",
      },
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
  },
  {
    name: "Microservices Architecture",
    description:
      "Designed and implemented a scalable microservices architecture for a high-traffic application, including service discovery, API gateway, and containerized deployment.",
    tags: [
      {
        name: "kubernetes",
        color: "blue-text-gradient",
      },
      {
        name: "docker",
        color: "green-text-gradient",
      },
      {
        name: "istio",
        color: "pink-text-gradient",
      },
    ],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
  },
];

export const testimonials = [
  {
    testimonial:
      "Samarth's expertise in DevOps transformed our deployment process. His implementation of CI/CD pipelines reduced our release cycles significantly.",
    name: "Sarah Johnson",
    designation: "CTO",
    company: "TechInnovate",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Working with Samarth on our MERN stack application was a game-changer. His full-stack skills and attention to detail resulted in a robust, scalable solution.",
    name: "Michael Chen",
    designation: "Product Manager",
    company: "WebSolutions Inc.",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "The data insights Samarth provided through his analysis helped us make critical business decisions. His ability to translate complex data into actionable recommendations is remarkable.",
    name: "Emily Rodriguez",
    designation: "Director of Analytics",
    company: "DataDriven Corp",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];