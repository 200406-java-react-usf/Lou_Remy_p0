--drop table "trans_header"
--drop table "Bikes"
--drop table "Transactions" 
--drop table "Customers" 


create TABLE "Customers"
(
    "id" INT,
    "firstname" VARCHAR(160) NOT NULL,
    "lastname" VARCHAR(160) NOT NULL,
    "email" VARCHAR unique NOT NULL,
    PRIMARY KEY ("id")
    
); 

--alter table "Customers" 
	--add column "firstname" varchar(160),
	--add column "lastname" varchar(160)
	
--alter table "Customers" 
	--drop column "Email",
	--add column "email" varchar(160)

create TABLE "Transactions"
(
    "TransactionId" INT not null,
    "Cost" numeric NOT NULL,
    "Type" varchar(160) NOT NULL,
    "CustomerId" int not null,
    PRIMARY KEY  ("TransactionId", "CustomerId"),
    foreign key ("CustomerId") references "Customers"(id)
    
);

create table "Bikes"
(
	"SerialNumber" int unique not null , 
	"Brand" VARCHAR not null, 
	"Model" VARCHAR not null,	
	"Price" numeric not null,
	PRIMARY KEY  ("SerialNumber")
	
);

create table "trans_header"
( 
	--"tid" int,
	--"cid" int,
	"bid" varchar, 
	primary key ("tid"),
	foreign key ("cid") references "Customers"(id),
	foreign key ("bid") references "Bikes"("SerialNumber")
);

insert into "Customers" (id, firstname, lastname, email) values

(1,'Alice', 'Anderson', 'aanderson@gmail.com'),
(2,'Bob', 'Biker', 'bikerbob@gmail.com'),
(3,'Chuck', 'Cycle', 'cylclinchuck@gmail.com'),
(4,'Dan', 'Downhill', 'downhilldan@gmail.com')

insert into "Transactions" ("TransactionId", "Cost","Type", "CustomerId") values
(1,199.99, 'purchase',1),
(2,299.99, 'purchase',1),
(3,15.55, 'repair',1),
(4,499.99, 'purchase',2),
(5,599.99, 'purchase',4),
(6,66.66, 'repair', 3)

insert into "Bikes" ("SerialNumber","Brand","Model","Price") values
(1,'Aero','Ace',199.99),
(2,'Boulder','Ascend',299.99),
(3,'Cannon','Alpine',399.99),
(4,'Aero','Bluebird',499.99),
(5,'Boulder','Brick_Breaker',599.99),
(6,'Cannon','Bad_Boy',699.99),
(7,'Aero','Cruiser',799.99)