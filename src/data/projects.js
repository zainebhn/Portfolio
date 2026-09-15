const projects = [
  {
    stack: ["Docker", "Kubernetes", "Spring Boot", "MySQL", "SonarQube", "Prometheus", "Grafana", "GitHub Actions"],
    github: "http://github.com/zainebhn/devops",
    en: {
      title: "CI/CD Pipeline & Cloud-Native Orchestration",
      desc: "Wanted to see the full loop end-to-end on something I fully controlled: a Spring Boot + MySQL app that builds, gets scanned by SonarQube, ships as a Docker image, and lands on Minikube, all triggered from a GitHub Actions push. Prometheus and Grafana sit on top so I can actually watch what the pipeline just did instead of guessing.",
    },
    fr: {
      title: "Pipeline CI/CD & orchestration cloud-native",
      desc: "J'avais envie de voir toute la boucle de bout en bout sur quelque chose que je maîtrisais entièrement : une appli Spring Boot + MySQL qui se build, se fait scanner par SonarQube, part en image Docker, et atterrit sur Minikube, tout ça déclenché par un push GitHub Actions. Prometheus et Grafana sont branchés par-dessus pour que je puisse vraiment observer ce que le pipeline vient de faire, plutôt que de deviner.",
    },
  },
  {
    stack: ["OpenStack", "Ansible", "Docker", "Kubernetes", "Angular", "Spring Boot", "SQL", "Prometheus", "Grafana"],
    github: "http://github.com/zainebhn/PhaseDeveloppementPI_ARCTIC",
    en: {
      title: "Cloud-Native SaaS Educational Platform",
      desc: "Before touching the app itself, I built the cloud it would run on: a multi-node OpenStack private cloud provisioned with Ansible. On top of that, a Spring Boot/Angular platform for students (course purchases, messaging, complaint tracking) deployed via Docker and Kubernetes, with Prometheus/Grafana monitoring and an Azure-hosted database for the pieces that needed to live outside the private cloud.",
    },
    fr: {
      title: "Plateforme SaaS éducative cloud-native",
      desc: "Avant de toucher à l'application elle-même, j'ai construit le cloud sur lequel elle allait tourner : un cloud privé OpenStack multi-nœuds provisionné avec Ansible. Par-dessus, une plateforme Spring Boot/Angular pour étudiants (achat de cours, messagerie, suivi des réclamations) déployée via Docker et Kubernetes, avec une supervision Prometheus/Grafana et une base de données hébergée sur Azure pour les éléments qui devaient sortir du cloud privé.",
    },
  },
];

export default projects;
