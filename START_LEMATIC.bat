@echo off
TITLE LeMatic Videoproduction - Website Starter
SETLOCAL EnableDelayedExpansion

echo ==================================================
echo   LeMatic Videoproduction - Website Starter
echo ==================================================
echo.

:: 1. Prüfen ob Node.js installiert ist
node -v >nul 2>&1
if %errorlevel% neq 0 (
    echo [INFO] Software (Node.js) wurde nicht gefunden.
    echo [AKTION] Ich versuche jetzt, die notwendige Software automatisch zu installieren...
    echo [HINWEIS] Bitte bestatige das folgende Fenster mit "Ja" oder "Y", falls du gefragt wirst.
    echo.
    
    :: Versuch der Installation via winget (Standard in Windows 10/11)
    winget install -e --id OpenJS.NodeJS
    
    if %errorlevel% neq 0 (
        echo.
        echo [FEHLER] Die automatische Installation ist fehlgeschlagen.
        echo bitte gehe auf https://nodejs.org und lade die "LTS" Version herunter.
        pause
        exit
    )
    echo.
    echo [ERFOLG] Software installiert! Bitte starte dieses Skript jetzt noch einmal neu.
    pause
    exit
)

:: 2. Prüfen ob node_modules existieren (Installation der Website-Bausteine)
if not exist "node_modules\" (
    echo [INFO] Die Website wird zum ersten Mal vorbereitet. Das kann 1-2 Minuten dauern...
    call npm install
)

:: 3. Den Browser im Hintergrund vorbereiten
echo [INFO] Die Website wird gestartet...
echo [WICHTIG] Dieses Fenster muss offen bleiben, solange du die Website ansiehst!
echo.

:: 4. Website starten und Browser öffnen
start http://localhost:3000
npm run dev

pause
