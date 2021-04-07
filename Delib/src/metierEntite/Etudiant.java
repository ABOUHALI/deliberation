package metierEntite;

import java.io.InputStream;
import java.util.Date;

public class Etudiant {
	private int IDJEtudiants ;
	private String cne;//
	private String dip;//
	private String adressePerso;//
	private String adresseParent;//
	private String ville;//
	private String tele;//
	private String mail;//

	private String bourse;//

	public int getIDJEtudiants() {
		return IDJEtudiants;
	}

	public void setIDJEtudiants(int iDJEtudiants) {
		IDJEtudiants = iDJEtudiants;
	}

	public String getCne() {
		return cne;
	}

	public void setCne(String cne) {
		this.cne = cne;
	}

	public String getDip() {
		return dip;
	}

	public void setDip(String dip) {
		this.dip = dip;
	}

	public String getAdressePerso() {
		return adressePerso;
	}

	public void setAdressePerso(String adressePerso) {
		this.adressePerso = adressePerso;
	}

	public String getAdresseParent() {
		return adresseParent;
	}

	public void setAdresseParent(String adresseParent) {
		this.adresseParent = adresseParent;
	}

	public String getVille() {
		return ville;
	}

	public void setVille(String ville) {
		this.ville = ville;
	}

	public String getTele() {
		return tele;
	}

	public void setTele(String tele) {
		this.tele = tele;
	}

	public String getMail() {
		return mail;
	}

	public void setMail(String mail) {
		this.mail = mail;
	}

	public String getBourse() {
		return bourse;
	}

	public void setBourse(String bourse) {
		this.bourse = bourse;
	}
}
