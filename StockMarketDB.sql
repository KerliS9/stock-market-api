DROP SCHEMA IF EXISTS StockMarketDB;
CREATE SCHEMA IF NOT EXISTS StockMarketDB;

CREATE TABLE StockMarketDB.Customer (
  id int AUTO_INCREMENT NOT NULL,
  full_name varchar(100) NOT NULL,
  password varchar(12) NOT NULL,
  investor_profile varchar(50) NOT NULL,
  account_balance decimal(19, 2) NOT NULL,
  PRIMARY KEY (id) 
)ENGINE=InnoDB;

CREATE TABLE StockMarketDB.Account_Statement (
  id int AUTO_INCREMENT NOT NULL,
  customer_id int NOT NULL,
  account_input decimal(19, 2),
  account_out decimal(19, 2),
  PRIMARY KEY (id),
  FOREIGN KEY (customer_id) REFERENCES StockMarketDB.Customer (id)
)ENGINE=InnoDB;
 
CREATE TABLE StockMarketDB.Market_Assets (
  id int AUTO_INCREMENT NOT NULL,
  asset varchar(6) NOT NULL,
  price decimal(19, 2) NOT NULL,
  PRIMARY KEY (id)
)ENGINE=InnoDB;

CREATE TABLE StockMarketDB.Brokerage_Firms (
  id int AUTO_INCREMENT NOT NULL,
  broker varchar(100) NOT NULL,
  asset_id int NOT NULL,
  amount_asset int NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (asset_id) REFERENCES StockMarketDB.Market_Assets (id)
)ENGINE=InnoDB;

CREATE TABLE StockMarketDB.Companies (
  id int AUTO_INCREMENT NOT NULL,
  asset_id int NOT NULL,
  company varchar(250) NOT NULL,
  sector varchar(100) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (asset_id) REFERENCES StockMarketDB.Market_Assets (id)
)ENGINE=InnoDB;

CREATE TABLE StockMarketDB.Customer_Investiments (
  id int AUTO_INCREMENT NOT NULL,
  customer_id int NOT NULL,
  asset_id int NOT NULL,
  amount_asset int NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (customer_id) REFERENCES StockMarketDB.Customer (id),
  FOREIGN KEY (asset_id) REFERENCES StockMarketDB.Market_Assets (id)
)ENGINE=InnoDB;

INSERT INTO
  StockMarketDB.Customer (full_name, password, investor_profile, account_balance)
VALUES
  ("Kerli Schroeder", "214563", "Arrojado", 5000),
  ("Mauricio Gerahrdt", "258796", "Arrojado", 4500),
  ("Joao Silva", "235461", "Arrojado", 5500),
  ("Marco Antonio", "879546", "Moderado", 3500),
  ("Maria Julia", "564897", "Conservador", 7500);
  
INSERT INTO
  StockMarketDB.Account_Statement (customer_id, account_input, account_out)
VALUES
  (1, 500, 100),
  (2, 1000, 0),
  (3, 200, 500);

INSERT INTO
  StockMarketDB.Market_Assets (asset, price)
VALUES
  ("ABEV3", 14.59),
  ("BBDC4", 16.44),
  ("EGIE3", 41.80),
  ("PETR4", 27.96);
  
INSERT INTO
  StockMarketDB.Brokerage_Firms (broker, asset_id, amount_asset)
VALUES
  ("Rico", 1, 500),
  ("Rico", 2, 1000),
  ("Rico", 3, 2400),
  ("Rico", 4, 20000),
  ("XP Investimentos", 1, 5500),
  ("XP Investimentos", 2, 5000),
  ("XP Investimentos", 3, 4400),
  ("XP Investimentos", 4, 50000);
  
INSERT INTO
  StockMarketDB.Companies (asset_id, company, sector)
VALUES
  (1, "AMBEV S.A.", "Consumo"),
  (2, "BCO BRADESCO S.A.", "Financeiro"),
  (3, "ENGIE BRASIL ENERGIA S.A.", "Energia Elétrica"),
  (4, "PETROLEO BRASILEIRO S.A. PETROBRAS", "Petróleo");
  
INSERT INTO
  StockMarketDB.Customer_Investiments (customer_id, asset_id, amount_asset)
VALUES
  (1, 1, 100),
  (1, 2, 200),
  (1, 3, 500),
  (1, 4, 400),
  (2, 2, 150),
  (2, 3, 100),
  (2, 4, 100),
  (3, 1, 500),
  (3, 3, 500),
  (3, 4, 400);