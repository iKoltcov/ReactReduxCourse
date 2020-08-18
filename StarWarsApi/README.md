# STAR WARS API


### How run sql server?
* Install docker
* Run this:
```bash
docker run -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD=Password12345' -e 'MSSQL_PID=Express' -p 1433:1433 -d --name sql-server mcr.microsoft.com/mssql/server:2017-latest-ubuntu
```
* Connect to view log:
```bash
docker logs -f sql-server
```