package metierEntite;

import java.util.Date;

public class Inscrip_Administartive {
 private	annee_universitaire anUniv ;
 private int id_inscrAdm ;
 private byte[] bac ;
 private String cin ;
 private String cne ;
 private  Date date_pre_inscription ;
 private Date date_valid_inscrip  ;
 private String AdressPerson ;
 private String ville ;
 private int Telephone ;
 private String AdresseParents ;
 private boolean bourse ;
public annee_universitaire getAnUniv() {
	return anUniv;
}
public void setAnUniv(annee_universitaire anUniv) {
	this.anUniv = anUniv;
}
public int getId_inscrAdm() {
	return id_inscrAdm;
}
public void setId_inscrAdm(int id_inscrAdm) {
	this.id_inscrAdm = id_inscrAdm;
}
public byte[] getBac() {
	return bac;
}
public void setBac(byte[] bac) {
	this.bac = bac;
}
public String getCin() {
	return cin;
}
public void setCin(String cin) {
	this.cin = cin;
}
public String getCne() {
	return cne;
}
public void setCne(String cne) {
	this.cne = cne;
}
public Date getDate_pre_inscription() {
	return date_pre_inscription;
}
public void setDate_pre_inscription(Date date_pre_inscription) {
	this.date_pre_inscription = date_pre_inscription;
}
public Date getDate_valid_inscrip() {
	return date_valid_inscrip;
}
public void setDate_valid_inscrip(Date date_valid_inscrip) {
	this.date_valid_inscrip = date_valid_inscrip;
}
public String getAdressPerson() {
	return AdressPerson;
}
public void setAdressPerson(String adressPerson) {
	AdressPerson = adressPerson;
}
public String getVille() {
	return ville;
}
public void setVille(String ville) {
	this.ville = ville;
}
public int getTelephone() {
	return Telephone;
}
public void setTelephone(int telephone) {
	Telephone = telephone;
}
public String getAdresseParents() {
	return AdresseParents;
}
public void setAdresseParents(String adresseParents) {
	AdresseParents = adresseParents;
}
public boolean isBourse() {
	return bourse;
}
public void setBourse(boolean bourse) {
	this.bourse = bourse;
}
 
}
