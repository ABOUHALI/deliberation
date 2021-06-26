package dao;

import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

import metierEntite.EtudFil;
import metierEntite.Etudiant;
import metierEntite.Filiere;
import metierEntite.Inscrip_Administartive;
import metierEntite.annee_universitaire;

public class InscriptionADministrative {
	public int getIDAnneAcad(annee_universitaire au) {
		Connection conn = SingletonConnection.getConnection();
		PreparedStatement ps;
		Date dau = (Date) au.getAnne_acad();
		int idAU = 0;
		try {
			ps = conn.prepareStatement("select id_anne_acad from anneuniversitaire where anne_acad=?");
			ps.setDate(1, dau);
			ResultSet rs = ps.executeQuery();
			while (rs.next()) {
				idAU = rs.getInt("id_anne_acad");
			}
			ps.close();
			conn.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return idAU;
	}

	public int getIdFil(String filiere) {
		Connection conn = SingletonConnection.getConnection();
		PreparedStatement ps;
		int idfil = 0;
		try {
			ps = conn.prepareStatement("select id_filiere from filiere where nom_filier=? ");
			ps.setString(1, filiere);
			ResultSet rs = ps.executeQuery();
			while (rs.next()) {
				idfil = rs.getInt("id_filiere");
			}
			ps.close();
			conn.close();
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return idfil;
	}

	public void addIA(Inscrip_Administartive iad, int idau) {
		Connection conn = SingletonConnection.getConnection();
		
		PreparedStatement ps1,ps2;
		
		try {
			ps1 = conn.prepareStatement(
					"insert into inscripadministrative(fid_anne_acad,acte_naisss,bac,CIN,CNE,date_pre_inscription,date_valid_inscription,AdressPerson,Telephone,AdresseParents,BOURSE,photo,Rel_Note) values(?,?,?,?,?,?,?,?,?,?,?,?,?)");
			ps2=conn.prepareStatement("UPDATE etudiant SET insce = '1' WHERE massarEtud = ?");
			ps1.setInt(1, idau);
			ps1.setBlob(2, iad.getActe_de_naissance());
			ps1.setBlob(3, iad.getBac());
			ps1.setBlob(4, iad.getCin());
			ps1.setString(5, iad.getCne());
			ps1.setDate(6, iad.getDate_pre_inscription());
			ps1.setDate(7, iad.getDate_valid_inscrip());
			ps1.setString(8, iad.getAdressPerson());
			ps1.setInt(9, iad.getTelephone());
			ps1.setString(10, iad.getAdresseParents());
			ps1.setBoolean(11, iad.isBourse());
			ps1.setBlob(12, iad.getPhoto());
			ps1.setBlob(13, iad.getRel_note());
			ps2.setString(1, iad.getCne());
		
			ps1.executeUpdate();
			ps2.executeUpdate();
			ps2.close();
			ps1.close();
			conn.close();
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}

	}
	public void addIA_FIL_ET(int ia , String massar , int idFil ) {
		Connection conn = SingletonConnection.getConnection();
		PreparedStatement ps;
		try {
			ps=conn.prepareStatement("insert into inscadmin_etud_filier(id_etud,id_ia,id_fil) values(?,?,?)");
			ps.setString(1, massar);
			ps.setInt(2, ia);
			ps.setInt(3, idFil);
			ps.executeUpdate();
			ps.close();
			
			} catch (Exception e2) {
			// TODO: handle exception
			e2.printStackTrace();
		}
	}
	public int IDofADMINSITRATIVE(int telephone,String adresse) {
		int id=0;
		Connection conn = SingletonConnection.getConnection();
		PreparedStatement ps;
		try {
			ps=conn.prepareStatement("select id_inscAdm from inscripadministrative where TELEPHONE=? and AdresseParents=?");
			ps.setInt(1, telephone);
			ps.setString(2, adresse);
			ResultSet rs =ps.executeQuery();
			while(rs.next()) {
				id=rs.getInt("id_inscAdm");
			}
			ps.close();
			conn.close();
			
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return id;
				}
	public void addAnneUniversitaire(annee_universitaire au) {
		Connection conn = SingletonConnection.getConnection();
		PreparedStatement ps;
		try {
			ps = conn.prepareStatement("insert into anneuniversitaire(anne_acad,libelle_annuniv) values(?,?)");
			ps.setDate(1, au.getAnne_acad());
			ps.setString(2, au.getLibelle_anuniv());
			ps.executeUpdate();
			ps.close();
			conn.close();
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
	}
	
	
	public List<EtudFil> jointureEtIA() {
		List<EtudFil> etud = new ArrayList<EtudFil>();
		Connection conn = SingletonConnection.getConnection();
		PreparedStatement ps;
		try {
			ps = conn.prepareStatement(
					"Select et.massarEtud, et.NomFr,et.PrenomFr ,f.nom_filier ,au.anne_acad FROM inscadmin_etud_filier ief ,inscripadministrative ia, etudiant et ,filiere f,anneuniversitaire au  where ief.id_fil=f.id_filiere and  ia.id_inscAdm=ief.id_ia and ief.id_etud=et.massarEtud");
			ResultSet rs = ps.executeQuery();
			while (rs.next()) {
				EtudFil etu = new EtudFil(rs.getString("massarEtud"), rs.getString("NomFr"), rs.getString("prenomFr"), rs.getString("nom_filier"),rs.getDate("anne_acad"));
				etud.add(etu);

			}
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return etud;
	}

	public Map<Integer,String> ordreSemFil(String Filiere){
		HashMap<Integer, String> so = new HashMap<Integer, String>();
		Connection conn = SingletonConnection.getConnection();
		PreparedStatement ps;
		try {
			ps=conn.prepareStatement("select s.libelle_semestre,s.ordre from semestre s , etape e , filiere f where f.id_filiere=e.fid_fil and e.id_Etape=s.fid_etap and f.nom_filier=?");
			ps.setString(1, Filiere);
			ResultSet rs=ps.executeQuery();
			while(rs.next()) {
				so.put( rs.getInt("ordre"),rs.getString("libelle_semestre"));
			}
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return so;
	}
	public Date getDATEid(int id) {
		Connection conn = SingletonConnection.getConnection();
		PreparedStatement ps;
		Date d=null;
		try {
			ps=conn.prepareStatement("select anne_acad from anneuniversitaire where id_anne_acad=?");
			ps.setInt(1, id);
			ResultSet rs =ps.executeQuery();
			while(rs.next()) {
				d=rs.getDate("anne_acad");
			}
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return d ;
	}
}
