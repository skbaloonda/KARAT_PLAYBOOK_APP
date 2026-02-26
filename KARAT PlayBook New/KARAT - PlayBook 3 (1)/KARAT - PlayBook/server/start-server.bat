@echo off
echo Compiling and starting KARAT PlayBook Server...
cd /d "%~dp0"
javac KaratPlaybookServer.java
if %errorlevel% neq 0 (
    echo Compilation failed!
    pause
    exit /b 1
)
echo Compilation successful!
java KaratPlaybookServer
pause
