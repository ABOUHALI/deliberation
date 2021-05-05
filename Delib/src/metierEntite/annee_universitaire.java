package metierEntite;

import java.sql.Date;

public class annee_universitaire {
	private Date anne_acad;
	private String Libelle_anuniv;
	private int id;
	public annee_universitaire(Date anne_acad, String libelle_anuniv, int id) {
		super();
		this.anne_acad = anne_acad;
		Libelle_anuniv = libelle_anuniv;
		this.id = id;
	}
	public Date getAnne_acad() {
		return anne_acad;
	}
	@Override
	public String toString() {
		return "annee_universitaire [anne_acad=" + anne_acad + ", Libelle_anuniv=" + Libelle_anuniv + ", id=" + id
				+ "]";
	}
	public void setAnne_acad(Date anne_acad) {
		this.anne_acad = anne_acad;
	}
	public String getLibelle_anuniv() {
		return Libelle_anuniv;
	}
	public void setLibelle_anuniv(String libelle_anuniv) {
		Libelle_anuniv = libelle_anuniv;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	
}
