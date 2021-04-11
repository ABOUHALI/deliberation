package metierEntite;

import java.io.InputStream;
import java.util.Date;

public class Etudiant {
	private int IDJEtudiants ;
	private String cne;//
	private String massarEtud; //1
	private String NomFr;//2
	private String NomAr;//3
	private String PrenomFr;//4
	private String PrenomAr;
	private String date_naissance;
	private String lieu_naissance ;
	private String ville ;
	private String province ;
	private String nationality ;
	private String registration_da ;
	private String sexe ;
	public Etudiant(int iDJEtudiants, String cne, String massarEtud, String nomFr, String nomAr, String prenomFr,
			String prenomAr, String date_naissance, String lieu_naissance, String ville, String province,
			String nationality, String registration_da, String sexe) {
		super();
		IDJEtudiants = iDJEtudiants;
		this.cne = cne;
		this.massarEtud = massarEtud;
		NomFr = nomFr;
		NomAr = nomAr;
		PrenomFr = prenomFr;
		PrenomAr = prenomAr;
		this.date_naissance = date_naissance;
		this.lieu_naissance = lieu_naissance;
		this.ville = ville;
		this.province = province;
		this.nationality = nationality;
		this.registration_da = registration_da;
		this.sexe = sexe;
	}
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
	public String getMassarEtud() {
		return massarEtud;
	}
	public void setMassarEtud(String massarEtud) {
		this.massarEtud = massarEtud;
	}
	public String getNomFr() {
		return NomFr;
	}
	public void setNomFr(String nomFr) {
		NomFr = nomFr;
	}
	public String getNomAr() {
		return NomAr;
	}
	public void setNomAr(String nomAr) {
		NomAr = nomAr;
	}
	public String getPrenomFr() {
		return PrenomFr;
	}
	public void setPrenomFr(String prenomFr) {
		PrenomFr = prenomFr;
	}
	public String getPrenomAr() {
		return PrenomAr;
	}
	public void setPrenomAr(String prenomAr) {
		PrenomAr = prenomAr;
	}
	public String getDate_naissance() {
		return date_naissance;
	}
	public void setDate_naissance(String date_naissance) {
		this.date_naissance = date_naissance;
	}
	public String getLieu_naissance() {
		return lieu_naissance;
	}
	public void setLieu_naissance(String lieu_naissance) {
		this.lieu_naissance = lieu_naissance;
	}
	public String getVille() {
		return ville;
	}
	public void setVille(String ville) {
		this.ville = ville;
	}
	public String getProvince() {
		return province;
	}
	public void setProvince(String province) {
		this.province = province;
	}
	public String getNationality() {
		return nationality;
	}
	public void setNationality(String nationality) {
		this.nationality = nationality;
	}
	public String getRegistration_da() {
		return registration_da;
	}
	public void setRegistration_da(String registration_da) {
		this.registration_da = registration_da;
	}
	public String getSexe() {
		return sexe;
	}
	public void setSexe(String sexe) {
		this.sexe = sexe;
	}
}