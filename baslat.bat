@echo off
rem Teftis sunucusunu arka planda baslatir ve tarayicida acar.
rem Durdurmak icin durdur.bat dosyasini calistirin.
setlocal
cd /d "%~dp0"
set PORT=4000

where node >nul 2>&1
if errorlevel 1 (
    echo Node.js bulunamadi. https://nodejs.org adresinden kurun.
    pause
    exit /b 1
)

netstat -ano | findstr /R /C:":%PORT% .*LISTENING" >nul
if not errorlevel 1 (
    echo Sunucu zaten calisiyor: http://localhost:%PORT%
    start "" http://localhost:%PORT%
    exit /b 0
)

if not exist "server\node_modules" (
    echo Bagimliliklar kuruluyor...
    pushd server
    call npm install --omit=dev
    popd
)

echo Sunucu baslatiliyor...
start "Teftis Sunucusu" /min cmd /c "node server\index.js >> server\sunucu.log 2>&1"

rem Sunucu dinlemeye baslayana kadar en fazla 15 saniye bekle
for /L %%i in (1,1,15) do (
    ping -n 2 127.0.0.1 >nul
    netstat -ano | findstr /R /C:":%PORT% .*LISTENING" >nul && goto :hazir
)
echo Sunucu baslatilamadi. Ayrintilar: server\sunucu.log
pause
exit /b 1

:hazir
echo Sunucu calisiyor: http://localhost:%PORT%
start "" http://localhost:%PORT%
exit /b 0
