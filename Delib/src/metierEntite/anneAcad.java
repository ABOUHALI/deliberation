package metierEntite;

public class anneAcad {
private int id_anneAcad;
private int anneacad;
public int getId_anneAcad() {
	return id_anneAcad;
}
public void setId_anneAcad(int id_anneAcad) {
	this.id_anneAcad = id_anneAcad;
}
public int getAnneacad() {
	return anneacad;
}
public void setAnneacad(int anneacad) {
	this.anneacad = anneacad;
}
public anneAcad(int id_anneAcad, int anneacad) {
	super();
	this.id_anneAcad = id_anneAcad;
	this.anneacad = anneacad;
}
public String toString() {
	return anneacad+"/"+(anneacad+1);
}}
