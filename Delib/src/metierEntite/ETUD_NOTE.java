package metierEntite;

public class ETUD_NOTE extends Etudiant{
private String CNE;
private String nom;
private String prenom;
private double NOTE;
private String etat;
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
	return "ETUD_NOTE [CNE=" + CNE + ", nom=" + nom + ", prenom=" + prenom + ", NOTE=" + NOTE + ", etat=" + etat + "]";
}
public String getEtat() {
	return etat;
}
public void setEtat(String etat) {
	this.etat = etat;
}
 
}
