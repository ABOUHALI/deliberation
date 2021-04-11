package metierEntite;

public class Professeur {
	private int id;
	private String nom;
	private String prenom;
	private String email;
	public Professeur(int id, String nom, String prenom, String email, int etablissement, String role, int filiere) {
		super();
		this.id = id;
		this.nom = nom;
		this.prenom = prenom;
		this.email = email;
		this.etablissement = etablissement;
		this.role = role;
		this.filiere = filiere;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
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
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public int getEtablissement() {
		return etablissement;
	}
	public void setEtablissement(int etablissement) {
		this.etablissement = etablissement;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	public int getFiliere() {
		return filiere;
	}
	public void setFiliere(int filiere) {
		this.filiere = filiere;
	}
	private int etablissement;
	private String role;
	private int filiere;
}
