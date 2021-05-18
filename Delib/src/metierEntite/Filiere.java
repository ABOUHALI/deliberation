package metierEntite;

public class Filiere {
	private int IDFiliere;
	private String filiere;
	private int IDetab ;
	public int getIDFiliere() {
		return IDFiliere;
	}
	public void setIDFiliere(int iDFiliere) {
		IDFiliere = iDFiliere;
	}
	public String getFiliere() {
		return filiere;
	}
	public void setFiliere(String filiere) {
		this.filiere = filiere;
	}
	public int getIDetab() {
		return IDetab;
	}
	public Filiere(int iDFiliere, String filiere, int iDetab) {
		super();
		IDFiliere = iDFiliere;
		this.filiere = filiere;
		IDetab = iDetab;
	}
	public void setIDetab(int iDetab) {
		IDetab = iDetab;
	}
	public Filiere() {
		super();
	}
}
