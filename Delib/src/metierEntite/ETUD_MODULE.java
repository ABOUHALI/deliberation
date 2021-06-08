package metierEntite;

public class ETUD_MODULE extends Etudiant{
	private String CNE;
	private String nom;
	private String prenom ;
	private int id_module;
	private double note;
	public ETUD_MODULE(String cNE, String nom, String prenom, int id_module, double note) {
		super();
		CNE = cNE;
		this.nom = nom;
		this.prenom = prenom;
		this.id_module = id_module;
		this.note = note;
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
	public int getId_module() {
		return id_module;
	}
	public void setId_module(int id_module) {
		this.id_module = id_module;
	}
	public double getNote() {
		return note;
	}
	public void setNote(double note) {
		this.note = note;
	}
	@Override
	public String toString() {
		return "ETUD_MODULE [CNE=" + CNE + ", nom=" + nom + ", prenom=" + prenom + ", id_module=" + id_module
				+ ", note=" + note + "]";
	}
	
}
