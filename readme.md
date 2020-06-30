*** to create a project from scratch

1. run npm rm --global gulp (if installed previously)
2. run npm install gulp-cli -g (as admin)
3. run npm init
4. run npm install --save-dev gulp gulp-sass browser-sync
5. run npm install --save bootstrap jquery popper.js font-awesome
6. run gulp (or check scripts in package.json for custom scripts)

*** after cloning the git repo

1. run git remote remove origin (it will remove current origin)
2. then go to github and create your own repository
3. then add your origin and push (it will push the template to your repository, so that you can modify it and save changes with ease)
4. then run npm install (it will download node_modules)
5. then run gulp (or check scripts in package.json for custom scripts)
