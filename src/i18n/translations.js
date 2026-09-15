export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, I'm",
      role: "Cloud & DevOps Engineer",
      bio: "ESPRIT graduate, specialized in infrastructure automation and CI/CD industrialization. Experienced deploying on Azure and OpenStack, and orchestrating containers with Kubernetes. Actively looking for a Junior Cloud Engineer / DevOps Engineer role, open to learning and growing.",
      contact: "Contact",
      cvEn: "CV (EN)",
      cvFr: "CV (FR)",
    },
    about: {
      heading: "About Me",
      p1: "Two years of physics and chemistry prep classes at IPEIT taught me how to think: structured logic, and how to break a hard problem down before touching it. That habit followed me to ESPRIT, where I found the field I actually wanted to keep doing: IT architecture and cloud computing.",
      p2: "At Sofrecom, that meant Terraform and CI/CD industrialization; at IMEX, Kubernetes, Argo CD and RabbitMQ for a GitOps deployment platform. Outside work, I've built things on my own too: an academic project deploying a Spring Boot/Angular platform on an OpenStack private cloud I provisioned myself, and an end-to-end CI/CD pipeline for a Spring Boot app on Kubernetes.",
      p3: "I'm early in my career, still learning, and looking for a Cloud or DevOps Engineer role, in Tunisia or remote, where I can keep building that instinct alongside people more experienced than me.",
      certsLabel: "Certifications",
    },
    skills: {
      heading: "Skills",
      categories: {
        languages: "Programming Languages",
        frameworks: "Frameworks",
        cloud: "Cloud & Infrastructure as Code",
        containers: "Containers & Orchestration",
        cicd: "CI/CD & DevSecOps",
        databases: "Databases & Messaging",
        tools: "Tools",
      },
    },
    experience: {
      heading: "Professional Experience",
      flow: {
        note: "The modules and templates the skill draws from were built during this internship.",
        steps: [
          {
            title: "Describe",
            desc: "A colleague describes the application they need in plain language (e.g. \"a Spring Boot API with a Postgres database and a nightly batch job\").",
          },
          {
            title: "Match",
            desc: "The Copilot skill matches that description against my library of 13 Terraform modules and 11 GitLab CI/CD templates.",
          },
          {
            title: "Provision",
            desc: "Terraform builds the matching Azure infrastructure: network, database, App Service, and whatever else the description calls for.",
          },
          {
            title: "Deploy",
            desc: "The GitLab pipeline deploys the application onto that infrastructure automatically.",
          },
        ],
      },
      arch: {
        azure: "Azure",
        vnet: "VNet",
        appService: "App Service",
        containerJob: "Container App Job",
        database: "PostgreSQL",
        keyVault: "Key Vault",
        serviceBus: "Service Bus",
        acr: "ACR",
        storage: "Storage",
      },
    },
    projects: {
      heading: "Projects",
      privateBadge: "Private",
      privateTitle: "Private repository (access required)",
      codeTitle: "View code",
      codeLabel: "Code",
      repoPrivateLabel: "Repo (private)",
      liveLabel: "Live",
    },
    contact: {
      heading: "Let's connect",
      text: "Open to Cloud / DevOps Engineer opportunities. Let's talk.",
      copied: "Copied!",
    },
  },

  fr: {
    nav: {
      home: "Accueil",
      about: "À propos",
      skills: "Compétences",
      experience: "Expérience",
      projects: "Projets",
      contact: "Contact",
    },
    hero: {
      greeting: "Bonjour, je suis",
      role: "Ingénieure Cloud & DevOps",
      bio: "Diplômée de l'ESPRIT, spécialisée dans l'automatisation d'infrastructure et l'industrialisation des chaînes CI/CD. Expérience en déploiement cloud sur Azure et OpenStack, et en orchestration de conteneurs avec Kubernetes. À la recherche active d'un poste d'Ingénieure Cloud / DevOps junior, ouverte à l'apprentissage et à la montée en compétences.",
      contact: "Contact",
      cvEn: "CV (EN)",
      cvFr: "CV (FR)",
    },
    about: {
      heading: "À propos de moi",
      p1: "Deux ans de prépa physique-chimie à l'IPEIT m'ont appris à réfléchir : une logique structurée, et l'habitude de décomposer un problème difficile avant de s'y attaquer. Ce réflexe m'a suivie jusqu'à l'ESPRIT, où j'ai trouvé le domaine que je voulais vraiment continuer à faire : l'architecture IT et le cloud computing.",
      p2: "Chez Sofrecom, ça a voulu dire Terraform et l'industrialisation CI/CD ; chez IMEX, Kubernetes, Argo CD et RabbitMQ pour une plateforme de déploiement GitOps. En dehors du travail, j'ai aussi construit des choses de mon côté : un projet académique de déploiement d'une plateforme Spring Boot/Angular sur un cloud privé OpenStack que j'ai moi-même provisionné, et un pipeline CI/CD de bout en bout pour une application Spring Boot sur Kubernetes.",
      p3: "Je suis encore en début de carrière, toujours en apprentissage, et je cherche un poste d'Ingénieure Cloud ou DevOps, en Tunisie ou à distance, où je peux continuer à développer ce réflexe aux côtés de personnes plus expérimentées que moi.",
      certsLabel: "Certifications",
    },
    skills: {
      heading: "Compétences",
      categories: {
        languages: "Langages de programmation",
        frameworks: "Frameworks",
        cloud: "Cloud & Infrastructure as Code",
        containers: "Conteneurs & Orchestration",
        cicd: "CI/CD & DevSecOps",
        databases: "Bases de données & Messagerie",
        tools: "Outils",
      },
    },
    experience: {
      heading: "Expérience professionnelle",
      flow: {
        note: "Les modules et templates utilisés par la skill ont été développés durant ce stage.",
        steps: [
          {
            title: "Décrire",
            desc: "Un·e collègue décrit l'application dont il/elle a besoin en langage naturel (ex : « une API Spring Boot avec une base Postgres et un job batch nocturne »).",
          },
          {
            title: "Sélectionner",
            desc: "La skill Copilot identifie, dans ma bibliothèque de 13 modules Terraform et 11 templates GitLab CI/CD, les briques correspondantes.",
          },
          {
            title: "Provisionner",
            desc: "Terraform construit l'infrastructure Azure correspondante : réseau, base de données, App Service, et tout ce que la description nécessite.",
          },
          {
            title: "Déployer",
            desc: "Le pipeline GitLab déploie automatiquement l'application sur cette infrastructure.",
          },
        ],
      },
      arch: {
        azure: "Azure",
        vnet: "VNet",
        appService: "App Service",
        containerJob: "Container App Job",
        database: "PostgreSQL",
        keyVault: "Key Vault",
        serviceBus: "Service Bus",
        acr: "ACR",
        storage: "Storage",
      },
    },
    projects: {
      heading: "Projets",
      privateBadge: "Privé",
      privateTitle: "Dépôt privé (accès restreint)",
      codeTitle: "Voir le code",
      codeLabel: "Code",
      repoPrivateLabel: "Dépôt (privé)",
      liveLabel: "Live",
    },
    contact: {
      heading: "Discutons",
      text: "Ouverte aux opportunités Cloud / DevOps Engineer. Parlons-en.",
      copied: "Copié !",
    },
  },
};
