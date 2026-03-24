CREATE DATABASE facturame;
USE facturame;

CREATE TABLE users (ID_USER int not null primary key auto_increment,
					USERNAME varchar(12) unique not null,
                    PASSWORD varchar(255) not null,
                    EMAIL varchar(255) not null,
                    ROLE tinyint not null);

CREATE TABLE accountant (ID_ACCOUNTANT int not null primary key auto_increment,
						ID_USER int not null,
						DESCRIPTION varchar(255),
						PHONE_NUMBER varchar(10),
						FOREIGN KEY (ID_USER) REFERENCES users(ID_USER));
                        
CREATE TABLE client (ID_CLIENT int not null primary key auto_increment,
					ID_ACCOUNTANT int,
					ID_USER int not null,
					CFDI blob,
                    FOREIGN KEY (ID_ACCOUNTANT) REFERENCES accountant(ID_ACCOUNTANT),
					FOREIGN KEY (ID_USER) REFERENCES users(ID_USER));
                    
CREATE TABLE invoices (ID_INVOICES int not null primary key auto_increment,
					ID_ACCOUNTANT int not null,
					ID_CLIENT int not null,
					STATUS tinyint not null,
                    SOCIAL_REASON tinyint not null,
                    ZIP_CODE varchar(5) not null,
                    REGIMEN tinyint not null,
                    AMOUNT decimal(12,2) not null,
                    PAYMENT tinyint not null,
                    DATE date not null,
                    INVOICE blob,
                    FOREIGN KEY (ID_ACCOUNTANT) REFERENCES accountant(ID_ACCOUNTANT),
					FOREIGN KEY (ID_CLIENT) REFERENCES client(ID_CLIENT));