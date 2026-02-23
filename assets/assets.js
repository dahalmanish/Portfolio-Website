import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile_img.jpg';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark
};

export const workData = [
    {
        title: 'GrowUp Pet Shop',
        description: 'Odoo-based eCommerce & ERP System',
        bgImage: '/work-1.png',
        tags: ['Odoo', 'Python', 'eCommerce', 'ERP'],
        link: 'https://growuppetshop.com.np/',
        caseStudy: {
            problem: 'The business struggled with manual inventory tracking and disconnected sales channels between the brick-and-mortar store and their online presence.',
            tech: 'Implemented Odoo ERP as the backend source of truth, custom-coding modules for automated stock sync and integrating XML-RPC for the frontend.',
            impact: 'Reduced stock discrepancies by 90% and allowed the business to handle 3x more orders per day without increasing staff.'
        }
    },
    {
        title: 'Multi-Vendor E-commerce',
        description: 'Next.js & Django Platform',
        bgImage: '/work-3.png',
        tags: ['Next.js', 'Django', 'Tailwind CSS', 'PostgreSQL'],
        caseStudy: {
            problem: 'Existing platforms were too rigid to handle complex merchant commissions and localized payment gateways in Nepal.',
            tech: 'Built a highly scalable Django Rest Framework backend with a Next.js 14 frontend, utilizing PostgreSQL JSONB fields for flexible product attributes.',
            impact: 'Successfully onboarded 15+ vendors and processed 500+ transactions in the first month of beta testing.'
        }
    },
    {
        title: 'Manish Portfolio',
        description: 'Modern Portfolio Website',
        bgImage: '/work-4.png',
        tags: ['React.js', 'Next.js', 'Framer Motion', 'Tailwind CSS'],
        caseStudy: {
            problem: 'Needed a way to showcase complex ERP expertise in a visually engaging way that stands out from generic developer portfolios.',
            tech: 'Leveraged Framer Motion for premium animations and optimized Next.js for high performance and SEO.',
            impact: 'Achieved 95+ score on Lighthouse Performance and received job inquiries within 48 hours of launch.'
        }
    },
]

export const socialData = [
    { name: 'LinkedIn', icon: assets.code_icon, link: 'https://www.linkedin.com/in/manish-dahal45/' },
    { name: 'WhatsApp', icon: assets.mobile_icon, link: 'https://wa.me/9811203533' },
    { name: 'GitHub', icon: assets.git, link: 'https://github.com/dahalmanish' },
];

export const serviceData = [
    { icon: assets.web_icon, title: 'Web Development', description: 'Building responsive, performant web apps using React.js, Next.js, and Tailwind CSS with clean, maintainable code.', link: '' },
    { icon: assets.ui_icon, title: 'ERP Solutions', description: 'Configuring and customizing Odoo ERP modules for eCommerce, sales, inventory management and business process automation.', link: '' },
    { icon: assets.graphics_icon, title: 'API Integration', description: 'Integrating REST APIs and handling frontend–backend communication efficiently for seamless data flow.', link: '' },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Tech Stack', description: 'HTML, CSS, JavaScript, React.js, Next.js, Django, Odoo ERP' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'B.Sc. CSIT (77%) | FYP: Plant Disease Detection' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Location', description: 'Narayantar, Jorpati, Kathmandu, Nepal' }
];

export const experienceData = [
    {
        role: 'ERP Assistant',
        company: 'Nepa Works',
        period: 'Jan 2026 – Present',
        description: [
            'Assisting in the implementation and configuration of ERP systems for business operations.',
            'Supporting workflow automation and data management across departments.',
            'Collaborating with teams to optimize processes using ERP tools.',
        ],
    },
    {
        role: 'Full Stack Developer',
        company: 'Techylads Solution',
        period: '2024 – 2025',
        description: [
            'Designed and developed responsive web applications using React.js and Tailwind CSS.',
            'Integrated REST APIs and handled frontend–backend communication efficiently.',
            'Customized and configured Odoo ERP modules for eCommerce, sales, and inventory management.',
            'Collaborated with cross-functional teams to deliver projects on time.',
        ],
    },
];

export const educationData = [
    {
        college: 'Tribhuvan University',
        period: '2020 – 2025',
        degree: 'Bachelor of Science in Computer Science / IT',
        details: 'Percentage: 77% | Final year Project: Plant Disease Detection System'
    },
    {
        college: 'Kantipur College',
        period: '2019 – 2020',
        degree: 'Science (Computer Science)',
        details: 'GPA: 3.5'
    }
];

export const certificateData = [
    {
        title: 'Frontend Development',
        year: '2021',
        org: 'School of Information Technology'
    },
    {
        title: 'AWS Associate Solution Architect',
        year: '2025',
        org: 'Adex International'
    }
];

export const toolsData = [
    assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git
];