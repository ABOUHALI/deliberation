package metierEntite;

import java.io.InputStream;
import java.util.Date;

public class Inscription_en_ligne {
	private int id_inscrip_ligne;
	public Inscription_en_ligne(int id_inscrip_ligne, String massarEtud, String nomFr, String nomAr, String prenomFr,
			String prenomAr, String acad, String an_Bac, String cin, String date1in, Date dateN, String villeBac,
			String lieuN_ar, String lieuN_fr, String villeNaissance, String lycee, String mt, String nationalite,
			String province, String sBac, String sexe, String region, String etatPhy, String groupSocio,
			InputStream photo) {
		super();
		this.id_inscrip_ligne = id_inscrip_ligne;
		this.massarEtud = massarEtud;
		NomFr = nomFr;
		NomAr = nomAr;
		PrenomFr = prenomFr;
		PrenomAr = prenomAr;
		this.acad = acad;
		this.an_Bac = an_Bac;
		this.cin = cin;
		this.date1in = date1in;
		this.dateN = dateN;
		this.villeBac = villeBac;
		this.lieuN_ar = lieuN_ar;
		this.lieuN_fr = lieuN_fr;
		this.villeNaissance = villeNaissance;
		this.lycee = lycee;
		this.mt = mt;
		this.nationalite = nationalite;
		this.province = province;
		this.sBac = sBac;
		this.sexe = sexe;
		this.region = region;
		this.etatPhy = etatPhy;
		GroupSocio = groupSocio;
		this.photo = photo;
	}
	public int getId_inscrip_ligne() {
		return id_inscrip_ligne;
	}
	public void setId_inscrip_ligne(int id_inscrip_ligne) {
		this.id_inscrip_ligne = id_inscrip_ligne;
	}
	private String massarEtud; 
	private String NomFr;
	private String NomAr;
	private String PrenomFr;
	private String PrenomAr;
	private String acad;
	private String an_Bac;
	private String cin;
	private String date1in;
	private Date dateN;
	private String villeBac;
	private String lieuN_ar;
	private String lieuN_fr;
	private String villeNaissance;
	private String lycee;
	private String mt;
	private String nationalite;
	private String province;
	private String sBac;
	private String sexe;
	private String region;
	private String etatPhy;
	private String GroupSocio;
	private InputStream photo;
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
	public String getAcad() {
		return acad;
	}
	public void setAcad(String acad) {
		this.acad = acad;
	}
	public String getAn_Bac() {
		return an_Bac;
	}
	public void setAn_Bac(String an_Bac) {
		this.an_Bac = an_Bac;
	}
	public String getCin() {
		return cin;
	}
	public void setCin(String cin) {
		this.cin = cin;
	}
	public String getDate1in() {
		return date1in;
	}
	public void setDate1in(String date1in) {
		this.date1in = date1in;
	}
	public Date getDateN() {
		return dateN;
	}
	public void setDateN(Date dateN) {
		this.dateN = dateN;
	}
	public String getVilleBac() {
		return villeBac;
	}
	public void setVilleBac(String villeBac) {
		this.villeBac = villeBac;
	}
	public String getLieuN_ar() {
		return lieuN_ar;
	}
	public void setLieuN_ar(String lieuN_ar) {
		this.lieuN_ar = lieuN_ar;
	}
	public String getLieuN_fr() {
		return lieuN_fr;
	}
	public void setLieuN_fr(String lieuN_fr) {
		this.lieuN_fr = lieuN_fr;
	}
	public String getVilleNaissance() {
		return villeNaissance;
	}
	public void setVilleNaissance(String villeNaissance) {
		this.villeNaissance = villeNaissance;
	}
	public String getLycee() {
		return lycee;
	}
	public void setLycee(String lycee) {
		this.lycee = lycee;
	}
	public String getMt() {
		return mt;
	}
	public void setMt(String mt) {
		this.mt = mt;
	}
	public String getNationalite() {
		return nationalite;
	}
	public void setNationalite(String nationalite) {
		this.nationalite = nationalite;
	}
	public String getProvince() {
		return province;
	}
	public void setProvince(String province) {
		this.province = province;
	}
	public String getsBac() {
		return sBac;
	}
	public void setsBac(String sBac) {
		this.sBac = sBac;
	}
	public String getSexe() {
		return sexe;
	}
	public void setSexe(String sexe) {
		this.sexe = sexe;
	}
	public String getRegion() {
		return region;
	}
	public void setRegion(String region) {
		this.region = region;
	}
	public String getEtatPhy() {
		return etatPhy;
	}
	public void setEtatPhy(String etatPhy) {
		this.etatPhy = etatPhy;
	}
	public String getGroupSocio() {
		return GroupSocio;
	}
	public void setGroupSocio(String groupSocio) {
		GroupSocio = groupSocio;
	}
	public InputStream getPhoto() {
		return photo;
	}
	public void setPhoto(InputStream photo) {
		this.photo = photo;
	}
}
