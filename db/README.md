## Provider-admin-db

### Tables:

- games (games available to play);
- builds (downloaded builds from repo);
- ges (game engines);
- casinos;

### Services depends on this database:

- provider
- provider-admin

### Set env variables at .env

DB_HOST=  
DB_PORT=  
DB_USER=postgres  
DB_PASSWORD=  
DB_NAME=

### Run

sudo docker compose up -d
