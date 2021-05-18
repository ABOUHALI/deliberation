package metierEntite;

import java.io.InputStream;
import java.sql.Date;



public class Inscrip_Administartive {
 private	int id_anUniv ;
 private int id_inscrAdm ;
private InputStream bac ;
 private InputStream cin ;
 private String cne ;
 private  Date date_pre_inscription ;
 private Date date_valid_inscrip  ;
 private String AdressPerson ;
 private int Telephone ;
 private String AdresseParents ;
 private boolean bourse ;
 private InputStream acte_de_naissance;
 private InputStream photo;
 private InputStream rel_note ;
public int getId_anUniv() {
	return id_anUniv;
}
public void setId_anUniv(int id_anUniv) {
	this.id_anUniv = id_anUniv;
}
public int getId_inscrAdm() {
	return id_inscrAdm;
}
public void setId_inscrAdm(int id_inscrAdm) {
	this.id_inscrAdm = id_inscrAdm;
}
public InputStream getBac() {
	return bac;
}
public void setBac(InputStream bac) {
	this.bac = bac;
}
public InputStream getCin() {
	return cin;
}
public void setCin(InputStream cin) {
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
public InputStream getActe_de_naissance() {
	return acte_de_naissance;
}
public void setActe_de_naissance(InputStream acte_de_naissance) {
	this.acte_de_naissance = acte_de_naissance;
}
public InputStream getPhoto() {
	return photo;
}
public void setPhoto(InputStream photo) {
	this.photo = photo;
}
public InputStream getRel_note() {
	return rel_note;
}
public void setRel_note(InputStream rel_note) {
	this.rel_note = rel_note;
}
public Inscrip_Administartive(int id_anUniv, int id_inscrAdm, InputStream bac, InputStream cin, String cne,
		Date date_pre_inscription, Date date_valid_inscrip, String adressPerson, int telephone, String adresseParents,
		boolean bourse, InputStream acte_de_naissance, InputStream photo, InputStream rel_note) {
	super();
	this.id_anUniv = id_anUniv;
	this.id_inscrAdm = id_inscrAdm;
	this.bac = bac;
	this.cin = cin;
	this.cne = cne;
	this.date_pre_inscription = date_pre_inscription;
	this.date_valid_inscrip = date_valid_inscrip;
	AdressPerson = adressPerson;
	Telephone = telephone;
	AdresseParents = adresseParents;
	this.bourse = bourse;
	this.acte_de_naissance = acte_de_naissance;
	this.photo = photo;
	this.rel_note = rel_note;
}

 
}
