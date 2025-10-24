import { ProjectIconType } from "./projectIcons";

export interface Project {
    title: string;
    description: string;
    technologies: string[];
    image: string;
    url: string;
    githubLink?: string;
    icons?: ProjectIconType[];
    previewImages?: string[];
    featured?: boolean;
    featuredOrder?: number;
    order?: number;
    dateAdded?: string; // ISO date string
}

export const projects: Project[] = [
    {
        title: "PDF Reader",
        description:
            "A web application that allows users to upload and read PDF files. Features include file upload, PDF rendering, and basic navigation controls.",
        technologies: [
            "React",
            "TypeScript",
            "Vite",
            "Tailwind CSS",
            "Docker",
            "CI/CD",
            "AWS",
            "GitHub Actions",
        ],
        image: "/images/project-previews/pdf-reader/initial-screen.png",
        githubLink: "https://github.com/bimberman/pdf-reader",
        icons: ["MOBILE_NOT_SUPPORTED"],
        previewImages: [
            "/images/project-previews/pdf-reader/initial-screen.png",
            "/images/project-previews/pdf-reader/upload-documents.png",
            "/images/project-previews/pdf-reader/preview-documents.png",
        ],
        url: "http://localhost:5253",
        featured: true,
        featuredOrder: 1,
        order: 1,
        dateAdded: "2024-01-15",
    },
    {
        title: "Larry's USA Adventure",
        description:
            "A personal travel blog documenting a cross-country road trip adventure across the United States in 2019. Features daily posts, photos, and stories from various destinations including national parks, landmarks, and scenic routes.",
        technologies: [
            "Wix",
            "Blog Platform",
            "Content Management",
            "Photo Gallery",
            "Responsive Design",
        ],
        image: "/images/project-previews/travel-blog/homepage.png",
        icons: ["NO_PREVIEW","NO_GITHUB"],
        previewImages: [
            "/images/project-previews/travel-blog/homepage.png",
            "/images/project-previews/travel-blog/blog-posts.png",
        ],
        url: "https://bimberman.wixsite.com/larrysblog",
        featured: false,
        order: 1,
        dateAdded: "2019-06-01",
    },
    {
        title: "Employee Management",
        description:
            "A full-stack Employee Management System built with JS, Node, and PostgreSQL. Deployed on an AWS EC2 instance featuring secure CRUD operations and a responsive, user-friendly interface.",
        technologies: [
            "JavaScript",
            "HTML",
            "CSS",
            "PostgreSQL",
            "Node.js",
            "AWS",
            "Nginx",
        ],
        image: "/images/project-previews/employee-management/main-screen.png",
        githubLink: "https://github.com/bimberman/employee-management",
        previewImages: [
            "/images/project-previews/employee-management/main-screen.png",
        ],
        url: "https://employee-management.bimberman.com",
        featured: true,
        featuredOrder: 2,
        order: 1,
        dateAdded: "2023-11-20",
    },
];