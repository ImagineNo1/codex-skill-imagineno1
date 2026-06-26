$ErrorActionPreference = "Stop"

$repoRoot = Split-Path -Parent $PSScriptRoot
$homeDir = [Environment]::GetFolderPath("UserProfile")
$skillsDir = Join-Path $homeDir ".agents\skills"
$destination = Join-Path $skillsDir "imageno1-skill"

$resolvedRepo = (Resolve-Path $repoRoot).Path.TrimEnd('\')
$resolvedDestination = $null
if (Test-Path $destination) {
  $resolvedDestination = (Resolve-Path $destination).Path.TrimEnd('\')
}

if ($resolvedDestination -and ($resolvedRepo -ieq $resolvedDestination)) {
  Write-Host "Already running from the installed skill path: $destination"
  Write-Host "Nothing to copy."
  exit 0
}

New-Item -ItemType Directory -Force $skillsDir | Out-Null

if (Test-Path $destination) {
  Remove-Item -LiteralPath $destination -Recurse -Force
}

New-Item -ItemType Directory -Force $destination | Out-Null

Get-ChildItem -LiteralPath $repoRoot -Force |
  Where-Object { $_.Name -notin @(".git", "node_modules") } |
  ForEach-Object {
    Copy-Item -LiteralPath $_.FullName -Destination $destination -Recurse -Force
  }

Write-Host "imageno1-skill installed successfully:"
Write-Host $destination
