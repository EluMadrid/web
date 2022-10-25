Primer dia con Git/Github
Lista de comandos de git.

Para ver la version de Git

git --version
Comando para configurar el correo

git config --global user.email "email"
Comando para configurar el username

git config --global user.name "username"
Comando para empezar a usar Git (control de versiones) en nuestra carpeta.

Este comando solo se usa una vez.
git init
Para ver es estado de nuestros cambios.

git status
Agrega los archivos a la memoria de la PC(stage)

git add
Crea el registro de los cambios realizados.

git commit -m "comentario"
[x]Git log retorna un id con este id vamos a poder ver el detalle de los cambios que se hiciero en ese commit.

Comando para poder ver el historial de commits

git log
Para poder ver el detalle del commit usamos

git show id-del-commit
Para ver la rama actual

git brach
Cambiar a la rama main

git brach -M main
Para enviar al origin del remote (conectar con el repositorio de github).

git remote add origin link-del-repositorio
Muestra las url del proyecto.

git remote -v
Enviar la version commiteada al repositorio.

git push origin nombre-de-la-rama# Codigo
