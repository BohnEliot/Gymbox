CREATE TABLE ertekeles(
    id int,
    ertekeles varchar(75),
    CONSTRAINT pk_ertekelesID PRIMARY KEY(id)
);



INSERT INTO ertekeles VALUES

(1,"Szuper felszerelés, kényelmes edzés bárhol!"),
(2,"Tiszta, modern konténer, igazi mini edzőterem."),
(3,"Jó ötlet, de lehetne kicsit olcsóbb."),
(4,"Profi kialakítás, minden eszköz kéznél."),
(5,"Túl meleg volt bent, nem élveztem az edzést."),
(6,"Gyors bérlés, minden a helyén, ajánlom!"),
(7,"Nagyon kényelmes, hogy otthon tudok edzeni."),
(8,"Zajos volt, de a gépek hibátlanok."),
(9,"Korrekt szolgáltatás, kicsit nehézkes egyeztetés."),
(10,"Meglepően jó élmény, újra bérelni fogok!");

CREATE TABLE kontenerek(
    id int,
    kontenerNev varchar(50),
    sulyKG int,
    belSzelesseg double,
    kulSzelesseg double,
    belMagassag double,
    belHosszusag double,
    kulMagassag double,
    kulHosszusag double,
    negyzetMeter double,
    CONSTRAINT pk_kontenerID PRIMARY KEY(id)
);



INSERT INTO kontenerek VALUES
(1,"20' normál",2300,2.35,2.43,2.39,5.89,2.59,6.09,13.86),
(2,"40' normál",3750,2.35,2.43,2.68,12.03,2.59,12.19,28.27),
(3,"40' magas",3940,2.35,2.43,2.69,12.03,2.89,12.19,28.27),
(4,"45' magas",4820,2.35,2.43,2.69,13.55,2.89,13.71,31.188);


CREATE TABLE felhasznalo(
    id int,
    nev varchar(50),
    email varchar(70),
    ertekeles int,
    kontener int,
    CONSTRAINT pk_felhasznaloID PRIMARY KEY(id),
    CONSTRAINT fk_felhasznaloErtekeles FOREIGN KEY(ertekeles) REFERENCES ertekeles(id),
    CONSTRAINT fk_felhasznaloKontener FOREIGN KEY(kontener) REFERENCES kontenerek(id)
  
);




CREATE TABLE gepek(
    id int,
    nev varchar(50),
    ar int,
    marka varchar(50),
    kategoria varchar(50),
    gepSuly int,
    gepHossz double,
    gepSzelesseg double,
    gepMagassag double,
    CONSTRAINT pk_gepekID PRIMARY KEY(id)
);


INSERT INTO gepek VALUES
(1,"Hektor3 Otthoni Lapsúlyos Kondigép",219000,"HMS","Kondicionális erősítő",82,112,120,207),
(2,"Gladiator Otthoni Multigym",269000,"Elite Fitness ","Kondicionális erősítő",95,106,112,207),
(3,"Atlas X3 Smith keret",249000,"HMS","Kondicionális erősítő",82,207,112,120),
(4,"TFK 650 futópad",369000,"Everfit","Kardiovaszkuláris",62,189,76,137),
(5,"BRX-R65 COMFORT háttámlás szobakerékpár",169000,"Toorx","Kardiovaszkuláris",33,130,63,97),
(6,"ERX-400 elliptikus tréner",369000,"Toorx","Kardiovaszkuláris",64,150,59,179),
(7,"Rower Sea 70 evezőgép",239000,"Toorx","Kardiovaszkuláris",26,186,44,104),
(8,"ERX-400 elliptikus tréner",369000,"Toorx","Kardiovaszkuláris",64,150,59,179),
(9,"RWX Air 5000 evezőgép",549000,"Toorx","Kardiovaszkuláris",52,237,63,113),
(10,"MSX-60 kombinált gép",409900,"Toorx","Kondicionális erősítő",142,113,93,206),
(11,"Platinum V-series melltől / vállból nyomó gép",999900,"Tunturi","Kondicionális erősítő",244,190,127,155),
(12,"Platinum V-series combfeszítő gép",889900,"Tunturi","Kondicionális erősítő",174,130,98,155),
(13,"Platinum V-series tárogató / hátsóváll gép",939900,"Tunturi","Kondicionális erősítő",242,130,117,208),
(14,"MSX-5000 lábtoló",449900,"Toorx","Kondicionális erősítő",101,131,196,107),
(15,"Platinum V-series combfeszítő / combhajlító gép",949900,"Tunturi","Kondicionális erősítő",230,152,82,215),
(16,"Platinum V-series vállból nyomó gép",949900,"Tunturi","Kondicionális erősítő",219,135,135,155),
(17,"MSX-50 kombinált gép",349900,"Toorx","Kondicionális erősítő",134,175,105,202),
(18,"Platinum V-series csípőemelő farizom gép",959900,"Tunturi","Kondicionális erősítő",226,195,123,155),
(19,"Platinum V-series combközelítő / combtávolító gép",899900,"Tunturi","Kondicionális erősítő",234,152,61,155),
(20,"Platinum V-series hasprés / mélyhát gép",919900,"Tunturi","Kondicionális erősítő",223,164,100,155),
(21,"HG60 többfunkciós lapsúlyos otthoni kondigép",499900,"Tunturi","Kondicionális erősítő",160,168,114,212),
(22,"SM80 többfunciós Smith erőkeret",399900,"Tunturi","Kondicionális erősítő",124,190,184,209),
(23,"Tytan 17 Otthoni Lapsúlyos Kondigép",539000,"HMS","Kondicionális erősítő",214,200,215,210),
(24,"kombinált edzőkeret",699000,"Cyklop","Kondicionális erősítő",139,199,150,220),
(25,"G2B kombinált edzőgép",619000,"Body-Solid","Kondicionális erősítő",204,191,206,212),
(26,"Tytan12 Multifunkciós kondigép",229900,"HMS","Kondicionális erősítő",142,160,225,212),
(27,"Tytan10R Otthoni Multifunkciós kondigép",274900,"HMS","Kondicionális erősítő",179,274,162,203),
(28,"Crossover 500 Otthoni Keresztcsiga",299000,"Elite Fitness ","Kondicionális erősítő",204,255,62,212),
(29,"WT80 otthoni többfunkciós kondigép",299000,"Tunturi","Kondicionális erősítő",54,165,115,182),
(30,"kombinált edzőgép",349000,"Master Poseidon","Kondicionális erősítő",154,168,172,203);


CREATE TABLE gepcsomag (
    id INT AUTO_INCREMENT,
    gepId1 INT,
    gepId2 INT,
    gepId3 INT,
    gepId4 INT,
    gepId5 INT,
    CONSTRAINT pk_gepcsomagId PRIMARY KEY (id),
    CONSTRAINT fk_gepid1 FOREIGN KEY (gepId1) REFERENCES gepek(id),
    CONSTRAINT fk_gepid2 FOREIGN KEY (gepId2) REFERENCES gepek(id),
    CONSTRAINT fk_gepid3 FOREIGN KEY (gepId3) REFERENCES gepek(id),
    CONSTRAINT fk_gepid4 FOREIGN KEY (gepId4) REFERENCES gepek(id),
    CONSTRAINT fk_gepid5 FOREIGN KEY (gepId5) REFERENCES gepek(id)
);

INSERT INTO gepcsomag VALUES
(1,1,2,3,4,5),
(2,4,5,6,7,8),
(3,10,11,12,14,9),
(4,20,19,18,15,6),
(5,16,13,11,17,3),
(6,30,28,29,27,26),
(7,21,22,23,24,25);

CREATE TABLE csomagok(
    id int,
    kontenerMeretId int,
    gepcsomagId int,
    ertekelesId int,
    CONSTRAINT pk_csomagokId PRIMARY KEY (id),
    CONSTRAINT fk_kontenerMeretId FOREIGN KEY (kontenerMeretId) REFERENCES kontenerek(id),
    CONSTRAINT fk_gepcsomagid FOREIGN KEY (gepcsomagId) REFERENCES gepcsomag(id),
    CONSTRAINT fk_ertekelesId FOREIGN KEY (ertekelesId) REFERENCES ertekeles(id)
);

INSERT INTO csomagok VALUES
(1,2,1,3), 
(2,1,2,4),
(3,3,3,6),
(4,3,4,4),
(5,4,5,6);

CREATE TABLE berles(
    id int,
    csomagId int,
    berlesiIdo int,
    ar int,
    CONSTRAINT pk_berlesId PRIMARY KEY (id),
    CONSTRAINT fk_csomagId FOREIGN KEY (csomagId) REFERENCES csomagok(id)
);






