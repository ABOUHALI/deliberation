package metierEntite;

import java.io.InputStream;
import java.util.Date;

public class ETUD_NOTE extends Etudiant{
private String CNE;
private String nom;
private String prenom;
private double NOTE;
private String etat;
private String element;
private int id_anneAcad ;
private double tp;
private double cc;
public double getTp() {
	return tp;
}
public void setTp(double tp) {
	this.tp = tp;
}
public double getCc() {
	return cc;
}
public void setCc(double cc) {
	this.cc = cc;
}
public double getEo() {
	return eo;
}
public void setEo(double eo) {
	this.eo = eo;
}
private double eo ;
public ETUD_NOTE(String massarEtud, String nomFr, String nomAr, String prenomFr, String prenomAr, String acad,
		String an_Bac, String cin, String date1in, Date dateN, String villeBac, String email, String lieuN_ar,
		String lieuN_fr, String villeNaissance, String lycee, String mt, String nationalite, String province,
		String sBac, String sexe, String region, String etatPhy, String groupSocio, InputStream photo, String cNE,
		String nom, String prenom, double nOTE, String etat, String element, int id_anneAcad) {
	super(massarEtud, nomFr, nomAr, prenomFr, prenomAr, acad, an_Bac, cin, date1in, dateN, villeBac, email, lieuN_ar,
			lieuN_fr, villeNaissance, lycee, mt, nationalite, province, sBac, sexe, region, etatPhy, groupSocio, photo);
	CNE = cNE;
	this.nom = nom;
	this.prenom = prenom;
	NOTE = nOTE;
	this.etat = etat;
	this.element = element;
	this.id_anneAcad = id_anneAcad;
}
public int getId_anneAcad() {
	return id_anneAcad;
}
public void setId_anneAcad(int id_anneAcad) {
	this.id_anneAcad = id_anneAcad;
}
public String getElement() {
	return element;
}
public void setElement(String element) {
	this.element = element;
}
public ETUD_NOTE(String massarEtud, String nomFr, String prenomFr, String cNE, String nom, String prenom, double nOTE,
		String etat, String element) {
	super(massarEtud, nomFr, prenomFr);
	CNE = cNE;
	this.nom = nom;
	this.prenom = prenom;
	NOTE = nOTE;
	this.etat = etat;
	this.element = element;
}
public ETUD_NOTE(String CNE,String nom , String prenom , double NOTE,String etat) {
	this.CNE=CNE;
	this.nom=nom;
	this.prenom=prenom;
	this.NOTE=NOTE;
	this.etat=etat;
																				}
public ETUD_NOTE(String cNE) {
	super();
	CNE = cNE;
}
public ETUD_NOTE(String cNE, double nOTE) {
	super();
	CNE = cNE;
	NOTE = nOTE;
}
public ETUD_NOTE(String cNE, String nom) {
	super();
	CNE = cNE;
	this.nom = nom;
}
public String getCNE() {
	return CNE;
}
public void setCNE(String cNE) {
	CNE = cNE;
}
public String getNom() {
	return nom;
}
public void setNom(String nom) {
	this.nom = nom;
}
public String getPrenom() {
	return prenom;
}
public void setPrenom(String prenom) {
	this.prenom = prenom;
}
public double getNOTE() {
	return NOTE;
}
public void setNOTE(double d) {
	NOTE = d;
}
public ETUD_NOTE(String cNE, String nom, String prenom, double nOTE) {
	super();
	CNE = cNE;
	this.nom = nom;
	this.prenom = prenom;
	NOTE = nOTE;
}
public ETUD_NOTE(String cNE, String nom, String prenom) {
	super();
	CNE = cNE;
	this.nom = nom;
	this.prenom = prenom;
}
public ETUD_NOTE() {
	super();
}


@Override
public String toString() {
	return "ETUD_NOTE [CNE=" + CNE + ", nom=" + nom + ", prenom=" + prenom + ", NOTE=" + NOTE + ", etat=" + etat
			+ ", element=" + element + "]";
}
public String getEtat() {
	return etat;
}
public void setEtat(String etat) {
	this.etat = etat;
}
 
}
