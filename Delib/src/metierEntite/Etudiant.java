package metierEntite;

import java.io.InputStream;
import java.util.Date;

public class Etudiant {
	private String massarEtud; //1
	private String NomFr;//2
	private String NomAr;//3
	private String PrenomFr;//4
	private String PrenomAr;//5
	private String acad;//6
	private String an_Bac;//7
	private String cin;//8
	private String date1in;//9
	private Date dateN;//10
	//private String et;//11
	private String villeBac;//12
	public Etudiant(String massarEtud, String nomFr, String prenomFr) {
		super();
		this.massarEtud = massarEtud;
		NomFr = nomFr;
		PrenomFr = prenomFr;
	}
	public Etudiant(String massarEtud) {
		super();
		this.massarEtud = massarEtud;
	}
	private String lieuN_ar;//13
	private String lieuN_fr;//14
	private String villeNaissance;
	private String lycee;//15
	private String mt;//16
	private String nationalite;//17
	private String province;//18
	private String sBac;//19
	private String sexe;//20
	private String region;//21
	//private FileInputStream photo;//22
	private String etatPhy;//23
	public Etudiant() {
		super();
	}
	private String GroupSocio;//24
	private InputStream photo;
	public Etudiant(String massarEtud, String nomFr, String nomAr, String prenomFr, String prenomAr, String acad,
			String an_Bac, String cin, String date1in, Date dateN, String villeBac, String lieuN_ar, String lieuN_fr,
			String villeNaissance, String lycee, String mt, String nationalite, String province, String sBac,
			String sexe, String region, String etatPhy, String groupSocio, InputStream photo) {
		super();
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
	
	@Override
	public String toString() {
		return "Etudiant [massarEtud=" + massarEtud + ", NomFr=" + NomFr + ", PrenomFr=" + PrenomFr + "]";
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((massarEtud == null) ? 0 : massarEtud.hashCode());
		return result;
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Etudiant other = (Etudiant) obj;
		if (massarEtud == null) {
			if (other.massarEtud != null)
				return false;
		} else if (!massarEtud.equals(other.massarEtud))
			return false;
		return true;
	}
	
}