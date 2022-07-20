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
  account_output decimal(19, 2),
  date DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  FOREIGN KEY (customer_id) REFERENCES StockMarketDB.Customer (id) ON DELETE CASCADE
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
  FOREIGN KEY (asset_id) REFERENCES StockMarketDB.Market_Assets (id) ON DELETE CASCADE
)ENGINE=InnoDB;

CREATE TABLE StockMarketDB.Companies (
  id int AUTO_INCREMENT NOT NULL,
  asset_id int NOT NULL,
  company varchar(250) NOT NULL,
  sector varchar(100) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (asset_id) REFERENCES StockMarketDB.Market_Assets (id) ON DELETE CASCADE
)ENGINE=InnoDB;

CREATE TABLE StockMarketDB.Customer_Investments (
  id int AUTO_INCREMENT NOT NULL,
  customer_id int NOT NULL,
  asset_id int NOT NULL,
  amount_asset_take int,
  amount_asset_sell int,
  date DATETIME DEFAULT CURRENT_TIMESTAMP, 
  PRIMARY KEY (id),
  FOREIGN KEY (customer_id) REFERENCES StockMarketDB.Customer (id) ON DELETE CASCADE,
  FOREIGN KEY (asset_id) REFERENCES StockMarketDB.Market_Assets (id) ON DELETE CASCADE
)ENGINE=InnoDB;

CREATE TABLE StockMarketDB.Customer_Custody (
	customer_id int NOT NULL,
    asset_id int NOT NULL,
	amount_asset int NOT NULL,
    sector varchar(100) NOT NULL
)ENGINE=InnoDB;
SET SQL_SAFE_UPDATES = 0;

INSERT INTO
  StockMarketDB.Customer (full_name, password, investor_profile, account_balance)
VALUES
  ("Kerli Schroeder", "214563", "Arrojado", 5000),
  ("Mauricio Gerahrdt", "258796", "Arrojado", 4500),
  ("Joao Silva", "235461", "Arrojado", 5500),
  ("Marco Antonio", "879546", "Moderado", 3500),
  ("Maria Julia", "564897", "Conservador", 7500);
  
INSERT INTO
  StockMarketDB.Account_Statement (customer_id, account_input, account_output, date)
VALUES
  (1, 500, 100, NOW()),
  (1, 200, 100, NOW()),
  (1, 300, 400, NOW()),
  (2, 1000, 0, NOW()),
  (2, 0, 100, NOW()),
  (2, 0, 200, NOW()),
  (3, 200, 500, NOW()),
  (3, 200, 0, NOW());

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
  StockMarketDB.Customer_Investments (customer_id, asset_id, amount_asset_take, amount_asset_sell, date)
VALUES
  (1, 1, 100, 10, NOW()),
  (1, 2, 200, 10, NOW()),
  (1, 3, 500, 10, NOW()),
  (1, 4, 400, 10, NOW()),
  (2, 2, 150, 10, NOW()),
  (2, 3, 100, 10, NOW()),
  (2, 4, 100, 10, NOW()),
  (3, 1, 500, 10, NOW()),
  (3, 3, 500, 10, NOW()),
  (3, 4, 400, 10, NOW());