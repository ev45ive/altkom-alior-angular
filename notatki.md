
# Instalacje
Visual Studio Code
Help -> About -> 1.74.2
https://code.visualstudio.com/
Ctrl + ` // View - Terminal

https://nodejs.org/en/
node -v 
v18.12.0

npm -v
8.12.0

~/.npmrc
https_proxy=internet.proxy.sbs.alior.corp:8080
http_proxy=internet.proxy.sbs.alior.corp:8080
no_proxy=artifactorycache.alior.pl,artifactory.alior.pl,bitbucket.alior.pl,localhost,127.0.0.1,*.alior.pl,alior.pl,*.alior.corp,alior.corp
strict-ssl=false

https://gitforwindows.org/
git -v
git version 2.39.0.windows.1

## Angular CLI
npm i -g @angular/cli@15.1.1
npm i -g @angular/cli@latest

npm i -g @angular/cli

ng version

ng --help
ng new --help

ng new alior  --directory "." 
ng new alior  --routing --strict --style scss 

? Would you like to add Angular routing? Yes
? Which stylesheet format would you like to use? SCSS   [ https://sass-lang.com/documentation/syntax#scss ]

## GIT
git -c http.sslVerify=false clone https://bitbucket.org/ev45ive/altkom-alior-angular.git altkom-alior-angular

git clone https://bitbucket.org/ev45ive/altkom-alior-angular.git altkom-alior-angular
cd altkom-alior-angular
npm i 
npm start  // lub // ng serve -o 

## Git update
git stash -u
git pull -f

## Extensions

https://angular.io/guide/devtools
Angular is a platform for building mobile and desktop web applications.
    Join the community of millions of developers who build compelling user interfaces with Angular.


https://chrome.google.com/webstore/detail/angular-devtools/ienfalfjdbdpebioblfackkekamfmbnh
Angular DevTools
Angular DevTools extends Chrome DevTools adding Angular specific debugging and profiling capabilities.


https://marketplace.visualstudio.com/items?itemName=Angular.ng-template
Angular Language Service - Visual Studio Marketplace
Extension for Visual Studio Code - Editor services for Angular templates


https://marketplace.visualstudio.com/items?itemName=Mikael.Angular-BeastCode
Angular 10 Snippets - TypeScript, Html, Angular Material, ngRx, RxJS & Flex Layout - Visual Studio Marketplace
Extension for Visual Studio Code - 242 Angular Snippets (TypeScript, Html, Angular Material, Flex Layout, ngRx, RxJS, PWA & Testing)


https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
Prettier - Code formatter - Visual Studio Marketplace
Extension for Visual Studio Code - Code formatter using prettier
 
https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme
Material Icon Theme - Visual Studio Marketplace
Extension for Visual Studio Code - Material Design Icons for Visual Studio Code


