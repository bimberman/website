import { ProjectIconType } from "./projectIcons";
import env from "../config/env";

export interface Project {
    title: string;
    description: string;
    technologies: string[];
    image: string;
    subdomain: string;
    githubLink: string;
    icons?: ProjectIconType[];
    previewImages?: string[];
    port: number;
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
        subdomain: "pdf",
        githubLink: "https://github.com/bimberman/pdf-reader",
        icons: ["MOBILE_NOT_SUPPORTED"],
        previewImages: [
            "/images/project-previews/pdf-reader/initial-screen.png",
            "/images/project-previews/pdf-reader/upload-documents.png",
            "/images/project-previews/pdf-reader/preview-documents.png",
        ],
        port: 5253,
    },
];
