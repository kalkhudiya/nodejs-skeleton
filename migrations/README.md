## Add new migration

## Create model command
sequelize model:create --name user --attributes name:string,email:string,password:string,mobile:string,teamId:number

## Create migration command
sequelize migration:create --name userTableAddRole
