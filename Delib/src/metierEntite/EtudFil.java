package metierEntite;

import java.sql.Date;

public class EtudFil {
	private String cne ;
	private String NomFr ;
	private String PrenomFr;
	public EtudFil(String cne, String nomFr, String prenomFr, String nom_filiere) {
		super();
		this.cne = cne;
		NomFr = nomFr;
		PrenomFr = prenomFr;
		this.nom_filiere = nom_filiere;
	}
	private String nom_filiere;
	private Date anne_acad;
	public Date getAnne_acad() {
		return anne_acad;
	}
	public void setAnne_acad(Date anne_acad) {
		this.anne_acad = anne_acad;
	}
	public EtudFil(String cne, String nom_filiere) {
		super();
		this.cne = cne;
		this.nom_filiere = nom_filiere;
	}
	public String getCne() {
		return cne;
	}
	public void setCne(String cne) {
		this.cne = cne;
	}
	public String getNomFr() {
		return NomFr;
	}
	public void setNomFr(String nomFr) {
		NomFr = nomFr;
	}
	public String getPrenomFr() {
		return PrenomFr;
	}
	public void setPrenomFr(String prenomFr) {
		PrenomFr = prenomFr;
	}
	public String getNom_filiere() {
		return nom_filiere;
	}
	public void setNom_filiere(String nom_filiere) {
		this.nom_filiere = nom_filiere;
	}
	
	public EtudFil(String cne, String nom_filiere, Date anne_acad) {
		super();
		this.cne = cne;
		this.nom_filiere = nom_filiere;
		this.anne_acad = anne_acad;
	}
	public EtudFil(String cne, String nomFr, String prenomFr, String nom_filiere, Date anne_acad) {
		super();
		this.cne = cne;
		NomFr = nomFr;
		PrenomFr = prenomFr;
		this.nom_filiere = nom_filiere;
		this.anne_acad = anne_acad;
	}
	@Override
	public String toString() {
		return "EtudFil [PrenomFr=" + PrenomFr + "]";
	}

	
}
