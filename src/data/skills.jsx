import { FaTerminal } from "react-icons/fa";
import {
  FaPython, FaJava, FaJs, FaReact, FaAngular, FaNodeJs,
  FaDocker, FaAws, FaMicrosoft, FaGitAlt,
  FaJenkins, FaLinux, FaShieldAlt
} from "react-icons/fa";
import {
  SiTerraform, SiKubernetes, SiAnsible, SiSpring, SiDotnet,
  SiMysql, SiPostgresql, SiOracle, SiGitlab, SiRabbitmq,
  SiArgo, SiVault, SiOpenstack
} from "react-icons/si";

const skills = [
  {
    key: "languages",
    items: [
      { name: "Python", icon: <FaPython className="text-yellow-400" /> },
      { name: "Java", icon: <FaJava className="text-red-500" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-300" /> },
      { name: "TypeScript", icon: <FaJs className="text-blue-400" /> },
      { name: "Bash / PowerShell", icon: <FaTerminal className="text-blue-300" /> },
    ],
  },
  {
    key: "frameworks",
    items: [
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Angular", icon: <FaAngular className="text-red-600" /> },
      { name: "Next.js", icon: <span className="font-bold">Next</span> },
      { name: "Spring Boot", icon: <SiSpring className="text-green-500" /> },
      { name: ".NET", icon: <SiDotnet className="text-purple-400" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    ],
  },
  {
    key: "cloud",
    items: [
      { name: "Azure", icon: <FaMicrosoft className="text-blue-400" /> },
      { name: "AWS", icon: <FaAws className="text-orange-400" /> },
      { name: "OpenStack", icon: <SiOpenstack className="text-red-400" /> },
      { name: "Terraform", icon: <SiTerraform className="text-purple-400" /> },
      { name: "Ansible", icon: <SiAnsible className="text-red-500" /> },
    ],
  },
  {
    key: "containers",
    items: [
      { name: "Docker", icon: <FaDocker className="text-blue-400" /> },
      { name: "Kubernetes", icon: <SiKubernetes className="text-blue-500" /> },
      { name: "Azure Container Apps", icon: <FaMicrosoft className="text-blue-300" /> },
    ],
  },
  {
    key: "cicd",
    items: [
      { name: "GitLab CI/CD", icon: <SiGitlab className="text-orange-500" /> },
      { name: "GitHub Actions", icon: <FaGitAlt className="text-gray-300" /> },
      { name: "Jenkins", icon: <FaJenkins className="text-red-400" /> },
      { name: "Argo CD", icon: <SiArgo className="text-orange-400" /> },
      { name: "HashiCorp Vault", icon: <SiVault className="text-yellow-400" /> },
      { name: "Checkmarx / Trivy / Gitleaks / tfsec", icon: <FaShieldAlt className="text-green-400" /> },
    ],
  },
  {
    key: "databases",
    items: [
      { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-300" /> },
      { name: "Oracle", icon: <SiOracle className="text-red-500" /> },
      { name: "RabbitMQ", icon: <SiRabbitmq className="text-orange-400" /> },
    ],
  },
  {
    key: "tools",
    items: [
      { name: "Linux", icon: <FaLinux className="text-yellow-400" /> },
      { name: "SonarQube", icon: <span>Sonar</span> },
      { name: "Keycloak", icon: <span>Keycloak</span> },
    ],
  },
];

export default skills;
