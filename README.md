# Api Setup

## Feature

- Mysql
- Express
- GraphQl 
- GraphQl Modularization
- GraphQl Documentation Generate

### Installation Setup 
```sh
$ git clone http://jira.communitysystemsfoundation.org:7990/scm/unv/ram_poc.git
$ yarn install
```

### Start the server 
```sh
$ yarn start
```

### GraphQl Document Generation Command 
```sh
$ yarn graphDoc -e [AppUrl] -o [Doc Directory]
For Ex
$ yarn graphdoc -e http://localhost:3000/graphql -o ./public/doc 
```
### App Url are 
- App Access Point: http://localhost:3000/graphql
- App Document Access Point: http://localhost:3000/doc/
