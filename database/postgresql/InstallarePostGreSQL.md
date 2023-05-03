# 1 Aggioranre i pacchetti
```
sudo apt-get update
```

# 2 Installa il server PostgreSQL con il comando:
```
sudo apt-get install postgresql
```

# 3 Il server PostgreSQL viene automaticamente avviato dopo l'installazione. Puoi verificare lo stato del servizio con il comando:
```
systemctl status postgresql
```

# 4 Verifica la configurazione del file di configurazione di PostgreSQL 
```
vim /etc/postgresql/<versione>/main/postgresql.conf
```

# 5 Se cambia la porta riavviare il servizio
```
systemctl restart postgresql
```

# 6 Aggiungere una eccezione al firewall
```
sudo ufw allow postgresql
```

# 7 Verificare la connessione
```
telnet 127.0.0.1 5432
```

# 8 Accedere alla shell di PostgreSQL
Durante l'installazione, verrà creato un ruolo di amministratore chiamato "postgres".
```
sudo -u postgres psql
```

# 9 Creare il Database
```
CREATE DATABASE mydb;
CREATE USER myuser WITH ENCRYPTED PASSWORD 'mypassword';
GRANT ALL PRIVILEGES ON DATABASE mydb TO myuser;
```

# 10 Verificare il percorso del database
```
SHOW data_directory;
```

# 11 Uscire dalla shell
```
\q
```

# Connettersi al DB
Usare PgAdmin, DBeaver o psql. Per esempio per psql:
```
psql -d mydb -U myuser -h localhost -p 5432
```



