package metierEntite;

import java.sql.Date;

public class annee_universitaire {
	private Date anne_acad;
	private String Libelle_anuniv;
	public annee_universitaire(Date anne_acad, String libelle_anuniv) {
		super();
		this.anne_acad = anne_acad;
		Libelle_anuniv = libelle_anuniv;
	}
	public Date getAnne_acad() {
		return anne_acad;
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

	
}
