# ==========================
# DevSecOps Notes Project Setup
# ==========================

$projectName = "devsecops-notes"

# Create root directory
New-Item -ItemType Directory -Path $projectName -Force | Out-Null
Set-Location $projectName

# Root folders
$folders = @(
    "frontend",
    "backend",
    "backend/config",
    "backend/controllers",
    "backend/middleware",
    "backend/models",
    "backend/routes",
    "backend/services",
    "backend/utils",
    "backend/tests",
    "backend/uploads",

    "docker",
    "docker/frontend",
    "docker/backend",
    "docker/mongodb",

    "kubernetes",
    "kubernetes/base",
    "kubernetes/dev",
    "kubernetes/stage",
    "kubernetes/prod",

    "helm/devsecops-notes",

    "terraform",
    "terraform/modules",
    "terraform/modules/resource-group",
    "terraform/modules/network",
    "terraform/modules/aks",
    "terraform/modules/acr",
    "terraform/modules/keyvault",
    "terraform/modules/monitoring",
    "terraform/dev",
    "terraform/stage",
    "terraform/prod",

    "monitoring/prometheus",
    "monitoring/grafana",
    "monitoring/loki",
    "monitoring/alertmanager",

    "security/trivy",
    "security/sonarqube",
    "security/gitleaks",
    "security/falco",
    "security/kyverno",
    "security/zap",

    "scripts",

    "docs",
    "docs/architecture",
    "docs/runbooks",
    "docs/diagrams",

    ".github/workflows"
)

foreach ($folder in $folders) {
    New-Item -ItemType Directory -Path $folder -Force | Out-Null
}

# Create root files
New-Item README.md -ItemType File -Force | Out-Null
New-Item LICENSE -ItemType File -Force | Out-Null
New-Item .gitignore -ItemType File -Force | Out-Null

# Backend files
New-Item backend/server.js -ItemType File -Force | Out-Null
New-Item backend/app.js -ItemType File -Force | Out-Null
New-Item backend/.env.example -ItemType File -Force | Out-Null

Write-Host ""
Write-Host "========================================="
Write-Host " DevSecOps Notes Project Created!"
Write-Host "========================================="
Write-Host ""
Write-Host "Project Location:"
Write-Host (Get-Location).Path
Write-Host ""