package metierEntite;

public class Etape {
    private int IDEtape;
   private String LabelleEtape;
   private boolean diplomante;
   private int IDFiliere;

public Etape() {
	
}
public Etape(int iDEtape, String labelleEtape, boolean diplomante, int iDFiliere) {
	super();
	IDEtape = iDEtape;
	LabelleEtape = labelleEtape;
	this.diplomante = diplomante;
	IDFiliere = iDFiliere;
}
public int getIDEtape() {
	return IDEtape;
}
public void setIDEtape(int iDEtape) {
	IDEtape = iDEtape;
}
public String getLabelleEtape() {
	return LabelleEtape;
}
public void setLabelleEtape(String labelleEtape) {
	LabelleEtape = labelleEtape;
}
public boolean isDiplomante() {
	return diplomante;
}
public void setDiplomante(boolean diplomante) {
	this.diplomante = diplomante;
}
public int getIDFiliere() {
	return IDFiliere;
}
public void setIDFiliere(int iDFiliere) {
	IDFiliere = iDFiliere;
}
}
