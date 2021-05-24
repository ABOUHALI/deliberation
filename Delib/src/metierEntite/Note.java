package metierEntite;

public class Note {
private int id_note ;
private String id_etud ;
private int id_elt ;
private int coeff ;
private int note ;
private int note_examO;
private int note_examR;
private String Etat ;
@Override
public String toString() {
	return "Note [id_note=" + id_note + ", id_etud=" + id_etud + ", id_elt=" + id_elt + ", coeff=" + coeff + ", note="
			+ note + ", note_examO=" + note_examO + ", note_examR=" + note_examR + ", Etat=" + Etat + "]";
}
public Note(int id_note, String id_etud, int id_elt, int coeff, int note, int note_examO, int note_examR, String etat) {
	super();
	this.id_note = id_note;
	this.id_etud = id_etud;
	this.id_elt = id_elt;
	this.coeff = coeff;
	this.note = note;
	this.note_examO = note_examO;
	this.note_examR = note_examR;
	Etat = etat;
}
public int getId_note() {
	return id_note;
}
public void setId_note(int id_note) {
	this.id_note = id_note;
}
public String getId_etud() {
	return id_etud;
}
public void setId_etud(String id_etud) {
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
public int getNote() {
	return note;
}
public void setNote(int note) {
	this.note = note;
}
public int getNote_examO() {
	return note_examO;
}
public void setNote_examO(int note_examO) {
	this.note_examO = note_examO;
}
public int getNote_examR() {
	return note_examR;
}
public void setNote_examR(int note_examR) {
	this.note_examR = note_examR;
}
public String getEtat() {
	return Etat;
}
public void setEtat(String etat) {
	Etat = etat;
}

}
