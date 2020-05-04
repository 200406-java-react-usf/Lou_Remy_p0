
create TABLE "Customers"
(
    "id" INT,
    "Name" VARCHAR(160) NOT NULL,
    "Email" VARCHAR unique NOT NULL,
    PRIMARY KEY ("id")
    
); alter table "Customers" 
	add column "firstname" varchar(160),
	add column "lastname" varchar(160)

create TABLE "Transactions"
(
    "TransactionId" INT not null,
    "Cost" VARCHAR(160) NOT NULL,
    "Type" INT NOT NULL,
    "CustomerId" int,
    PRIMARY KEY  ("TransactionId", "CustomerId"),
    foreign key ("CustomerId") references "Customers"(id)
    
);

create table "Bikes"
(
	"SerialNumber" VARCHAR not null, 
	"Brand" VARCHAR not null, 
	"Model" VARCHAR not null,	
	"Price" VARCHAR not null,
	PRIMARY KEY  ("SerialNumber")
	
);

create table "trans_header"
( 
	"tid" int,
	"cid" int,
	"bid" varchar, 
	primary key ("tid"),
	foreign key ("cid") references "Customers"(id),
	foreign key ("bid") references "Bikes"("SerialNumber")
);

insert into "Customers" (id, firstname, lastname, "Email") values

(1,'Alice', 'Anderson', 'aanderson@gmail.com'),
(2,'Bob', 'Biker', 'bikerbob@gmail.com'),
(3,'Chuck', 'Cycle', 'cylclinchuck@gmail.com'),
(4,'Dan', 'Downhill', 'downhilldan@gmail.com')
