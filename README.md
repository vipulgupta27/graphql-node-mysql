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

### Sources
- GraphQL - React Integration —  https://www.tutorialspoint.com/graphql/graphql_react_integration.htm
- GraphQL Modularize — https://blog.apollographql.com/modularizing-your-graphql-schema-code-d7f71d5ed5f2
- GraphQL - Environment Setup —  https://www.tutorialspoint.com/graphql/graphql_environment_setup.htm
- GraphQL — Node — Mysql — Express — https://medium.com/infocentric/setup-a-graphql-api-with-apollo-2-0-sequelize-and-express-js-608d1365d776
- https://nordicapis.com/10-awesome-tools-and-extensions-for-graphql-apis/
