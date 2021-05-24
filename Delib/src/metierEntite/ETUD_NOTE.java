package metierEntite;

public class ETUD_NOTE {
 private String CNE;
 private String nom;
 private String prenom;
 private int NOTE;
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
public int getNOTE() {
	return NOTE;
}
public void setNOTE(int nOTE) {
	NOTE = nOTE;
}
public ETUD_NOTE(String cNE, String nom, String prenom, int nOTE) {
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
 
}
