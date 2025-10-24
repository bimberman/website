import MobileNotSupported from "../assets/icons/MobileNotSupported";
import DockerIcon from "../assets/icons/DockerIcon";
import CiCdIcon from "../assets/icons/CiCdIcon";
import NoPreviewIcon from "../assets/icons/NoPreviewIcon";
import NoGithubIcon from "../assets/icons/NoGithubIcon";

export interface ProjectIcon {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    description: string;
}

export const ProjectIcons = {
    MOBILE_NOT_SUPPORTED: {
        icon: MobileNotSupported,
        description: "Not optimized for mobile devices",
    },
    DOCKER: {
        icon: DockerIcon,
        description: "Containerized with Docker",
    },
    CI_CD: {
        icon: CiCdIcon,
        description: "CI/CD pipeline implemented",
    },
    NO_PREVIEW: {
        icon: NoPreviewIcon,
        description: "Preview not available - requires full page",
    },
    NO_GITHUB: {
        icon: NoGithubIcon,
        description: "Source code not available on GitHub",
    },
} as const;

export type ProjectIconType = keyof typeof ProjectIcons;
