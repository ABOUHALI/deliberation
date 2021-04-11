package metierEntite;

public class Prof_module {
	private int idProfesseur;
	private int IDModule;
	public Prof_module(int idProfesseur, int iDModule) {
		super();
		this.idProfesseur = idProfesseur;
		IDModule = iDModule;
	}
	public int getIdProfesseur() {
		return idProfesseur;
	}
	public void setIdProfesseur(int idProfesseur) {
		this.idProfesseur = idProfesseur;
	}
	public int getIDModule() {
		return IDModule;
	}
	public void setIDModule(int iDModule) {
		IDModule = iDModule;
	}
}
