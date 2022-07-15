@echo off
start /min cmd /c "cd api && nodemon server.js"
start /min cmd /c "cd angular-app && ng serve"
echo Awaiting app/api launch...
timeout 10 /nobreak
start "" http://localhost:3000/catto
start "" http://localhost:4200