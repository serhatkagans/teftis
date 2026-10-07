@echo off
rem baslat.bat ile acilan Teftis sunucusunu durdurur.
setlocal
set PORT=4000
set BULUNDU=0

for /f "tokens=5" %%p in ('netstat -ano ^| findstr /R /C:":%PORT% .*LISTENING"') do (
    taskkill /PID %%p /T /F >nul 2>&1
    set BULUNDU=1
)

if "%BULUNDU%"=="1" (
    echo Sunucu durduruldu.
) else (
    echo Calisan sunucu bulunamadi.
)
ping -n 3 127.0.0.1 >nul
