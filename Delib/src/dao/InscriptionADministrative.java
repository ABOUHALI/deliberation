package dao;

import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

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
		
		PreparedStatement ps;
		
		try {
			ps = conn.prepareStatement(
					"insert into inscripadministrative(fid_anne_acad,acte_naisss,bac,CIN,CNE,date_pre_inscription,date_valid_inscription,AdressPerson,Telephone,AdresseParents,BOURSE,photo,Rel_Note) values(?,?,?,?,?,?,?,?,?,?,?,?,?)");
			ps.setInt(1, idau);
			ps.setBlob(2, iad.getActe_de_naissance());
			ps.setBlob(3, iad.getBac());
			ps.setBlob(4, iad.getCin());
			ps.setString(5, iad.getCne());
			ps.setDate(6, iad.getDate_pre_inscription());
			ps.setDate(7, iad.getDate_valid_inscrip());
			ps.setString(8, iad.getAdressPerson());
			ps.setInt(9, iad.getTelephone());
			ps.setString(10, iad.getAdresseParents());
			ps.setBoolean(11, iad.isBourse());
			ps.setBlob(12, iad.getPhoto());
			ps.setBlob(13, iad.getRel_note());
			ps.executeUpdate();
			ps.close();
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

}
