const experience = {
  en: [
    {
      title: "Cloud / DevOps Engineer, Final Year Internship",
      company: "Sofrecom Tunisie (Orange Group)",
      date: "Feb 2026 – Aug 2026",
      diagram: true,
      tasks: [
        "Built a library of 11 reusable GitLab CI/CD templates and 13 Terraform modules that provision the infrastructure and deploy the applications on Azure end-to-end, from network to running app, in a single pipeline run.",
        "Automated a complete Azure environment: VNet with isolated subnets, 3 App Services, a PostgreSQL Flexible Server, a Container App Job for nightly batch processing, Key Vault, Service Bus, and observability via Log Analytics and Application Insights.",
        "Added automatic state reconciliation before every plan/apply, importing existing resources into Terraform state and eliminating the recurring \"resource already exists\" failures that used to block re-runs.",
        "Replaced database passwords stored in pipelines and config files with Azure AD managed identity authentication.",
        "Integrated security scans (code, dependencies, secrets, IaC) into the pipeline with blocking thresholds that tighten per environment.",
        "Built a GitHub Copilot skill that, from a plain-language description of an application, automatically generates the right infrastructure to deploy it.",
      ],
    },
    {
      title: "Engineering Internship",
      company: "IMEX – Information Management Expert",
      date: "Jul 2025 – Sep 2025",
      tasks: [
        "Developed and orchestrated a cloud-native CI/CD platform on Kubernetes, with GitHub Actions handling automated build, test, and deployment workflows.",
        "Adopted GitOps practices with Argo CD for continuous delivery and automated environment synchronization.",
        "Strengthened platform reliability, security, and code quality by integrating SonarQube, Vault, Keycloak, and RabbitMQ, covering continuous inspection, secret management, authentication, and messaging.",
      ],
    },
    {
      title: "Summer Internship",
      company: "IMEX – Information Management Expert",
      date: "Jun 2024 – Aug 2024",
      tasks: [
        "Built the account layer for an internal platform tracking REST/SOAP API calls across IMEX's mediation services: self-registration plus admin approval, since new accounts couldn't log in until validated.",
        "Gave admins the ability to approve or reject new accounts and promote a user to admin.",
        "Built a real-time dashboard surfacing daily call volume, success/failure counts, and the most and least used APIs.",
      ],
    },
  ],
  fr: [
    {
      title: "Ingénieure Cloud / DevOps, Stage de fin d'études",
      company: "Sofrecom Tunisie (Groupe Orange)",
      date: "Fév 2026 – Août 2026",
      diagram: true,
      tasks: [
        "Construction d'une bibliothèque de 11 templates GitLab CI/CD et 13 modules Terraform réutilisables qui provisionnent l'infrastructure et déploient les applications sur Azure de bout en bout, du réseau jusqu'à l'application en marche, en un seul run de pipeline.",
        "Automatisation d'un environnement Azure complet : VNet avec subnets isolés, 3 App Services, un serveur PostgreSQL Flexible, un Container App Job pour le traitement batch nocturne, Key Vault, Service Bus, et observabilité via Log Analytics et Application Insights.",
        "Ajout d'une réconciliation automatique de l'état avant chaque plan/apply, important les ressources existantes dans le state Terraform et éliminant les erreurs récurrentes \"resource already exists\" qui bloquaient les relances.",
        "Remplacement des mots de passe de base de données stockés dans les pipelines et fichiers de configuration par une authentification par identité managée Azure AD.",
        "Intégration de scans de sécurité (code, dépendances, secrets, IaC) dans le pipeline avec des seuils bloquants par environnement.",
        "Développement d'une skill GitHub Copilot qui, à partir d'une description humaine de l'application, génère automatiquement l'infrastructure adéquate pour la déployer.",
      ],
    },
    {
      title: "Stage ingénieur",
      company: "IMEX (Information Management Expert)",
      date: "Juil 2025 – Sep 2025",
      tasks: [
        "Développement et orchestration d'une plateforme CI/CD cloud-native sur Kubernetes, avec GitHub Actions pour l'automatisation du build, des tests et du déploiement.",
        "Adoption de pratiques GitOps avec Argo CD pour la livraison continue et la synchronisation automatique des environnements.",
        "Renforcement de la fiabilité, de la sécurité et de la qualité du code via l'intégration de SonarQube, Vault, Keycloak et RabbitMQ, couvrant l'inspection continue, la gestion des secrets, l'authentification et la messagerie.",
      ],
    },
    {
      title: "Stage d'été",
      company: "IMEX (Information Management Expert)",
      date: "Juin 2024 – Août 2024",
      tasks: [
        "Construction du volet comptes pour une plateforme interne de suivi des appels API REST/SOAP à travers les services de médiation d'IMEX : auto-inscription puis validation par un administrateur, les nouveaux comptes ne pouvant pas se connecter avant validation.",
        "Donné aux administrateurs la possibilité d'approuver ou rejeter un nouveau compte et de promouvoir un utilisateur au rôle d'administrateur.",
        "Construction d'un tableau de bord temps réel affichant le volume d'appels quotidien, les taux de succès/échec, et les API les plus et moins utilisées.",
      ],
    },
  ],
};

export default experience;
