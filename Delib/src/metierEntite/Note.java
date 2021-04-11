package metierEntite;

public class Note {
private int id_note ;
private int id_etud ;
private int id_elt ;
private int coeff ;
public int note ;
public Note(int id_note, int id_etud, int id_elt, int coeff, int note) {
	super();
	this.id_note = id_note;
	this.id_etud = id_etud;
	this.id_elt = id_elt;
	this.coeff = coeff;
	this.note = note;
}
public int getNote() {
	return note;
}
public void setNote(int note) {
	this.note = note;
}
public int getId_note() {
	return id_note;
}
public void setId_note(int id_note) {
	this.id_note = id_note;
}
public int getId_etud() {
	return id_etud;
}
public void setId_etud(int id_etud) {
	this.id_etud = id_etud;
}
public int getId_elt() {
	return id_elt;
}
public void setId_elt(int id_elt) {
	this.id_elt = id_elt;
}
public int getCoeff() {
	return coeff;
}
public void setCoeff(int coeff) {
	this.coeff = coeff;
}
}
