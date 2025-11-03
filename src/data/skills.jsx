import {
  FaPython, FaJava, FaJs, FaReact, FaAngular, FaNodeJs,
  FaDocker,  FaAws, FaMicrosoft, FaGitAlt,
  FaJenkins, FaLinux
} from "react-icons/fa";
import { SiTerraform,SiKubernetes, SiAnsible, SiSpring, SiDotnet, SiMysql, SiPostgresql, SiOracle } from "react-icons/si";

const skills = {
  "Programming Languages": [
    { name: "Python", icon: <FaPython className="text-yellow-400" /> },
    { name: "Java", icon: <FaJava className="text-red-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-300" /> },
    { name: "TypeScript", icon: <FaJs className="text-blue-400" /> },
    { name: "C", icon: <span className="text-blue-400 font-bold">C</span> },
  ],
  "Frameworks": [
    { name: "React", icon: <FaReact className="text-cyan-400" /> },
    { name: "Angular", icon: <FaAngular className="text-red-600" /> },
    { name: "Next.js", icon: <span className="text-white">Next</span> },
    { name: "Spring Boot", icon: <SiSpring className="text-green-500" /> },
    { name: ".NET", icon: <SiDotnet className="text-purple-400" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  ],
  "Databases": [
    { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-300" /> },
    { name: "Oracle", icon: <SiOracle className="text-red-500" /> },
  ],
  "DevOps & Cloud": [
    { name: "Docker", icon: <FaDocker className="text-blue-400" /> },
    { name: "Kubernetes", icon: <SiKubernetes className="text-blue-500" /> },
    { name: "AWS", icon: <FaAws className="text-orange-400" /> },
    { name: "Azure", icon: <FaMicrosoft className="text-blue-400" /> },
    { name: "Ansible", icon: <SiAnsible className="text-red-500" /> },
    { name: "GitHub Actions", icon: <FaGitAlt className="text-white" /> },
    { name: "Jenkins", icon: <FaJenkins className="text-red-400" /> },
  ],
  "Tools": [
    { name: "Linux", icon: <FaLinux className="text-yellow-400" /> },
    { name: "SonarQube", icon: <span className="text-blue-400">Sonar</span> },
    { name: "Vault", icon: <span className="text-yellow-400">Vault</span> },
    { name: "Keycloak", icon: <span className="text-blue-400">Keycloak</span> },
  ],
};

export default skills;