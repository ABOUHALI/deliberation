package metierEntite;

public class Etablissement {
	private int IDEtablissement;
	private String etablissement;
	private String description;
	public int getIDEtablissement() {
		return IDEtablissement;
	}
	public void setIDEtablissement(int iDEtablissement) {
		IDEtablissement = iDEtablissement;
	}
	public String getEtablissement() {
		return etablissement;
	}
	public void setEtablissement(String etablissement) {
		this.etablissement = etablissement;
	}
	public Etablissement(int iDEtablissement, String etablissement, String description) {
		super();
		IDEtablissement = iDEtablissement;
		this.etablissement = etablissement;
		this.description = description;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
}
