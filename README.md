# Starting the server

- For this project you need node in version 18 or higher

## Steps 

1. Clone the repository
```
  git clone
```

2. Install the packages
```
npm i 
```


3. Add the folder and files for environment variables inside src
- Create the environments folder and the environments files
```
  export const environment = {
    production: boolean,
    wsUrl: 'Socket server url',
  }
```

4. Start the server
```
ng serve
```
