package dao;

import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

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
		InscripEnLigne ie = new InscripEnLigne();
		PreparedStatement ps;
		
		Date date_pre_inscription = iad.getDate_pre_inscription();
		Date date_valid = iad.getDate_valid_inscrip();
		try {
			ps = conn.prepareStatement(
					"insert into inscripadministrative(fid_anne_acad,acte_naisss,bac,CIN,CNE,date_pre_inscription,date_valid_inscription,AdressPerson,Telephone,AdresseParents,BOURSE,photo,Rel_Note) values(?,?,?,?,?,?,?,?,?,?,?,?,?)");
			ps.setInt(1, idau);
			ps.setBlob(2, iad.getActe_de_naissance());
			ps.setBlob(3, iad.getBac());
			ps.setBlob(4, iad.getCin());
			ps.setBlob(5, iad.getCne());
			ps.setDate(6, date_pre_inscription);
			ps.setDate(7, date_valid);
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
	public void addIA_FIL_ET(Inscrip_Administartive ia , String massar , int idFil ) {
		Connection conn = SingletonConnection.getConnection();
		PreparedStatement ps;
		try {
			ps=conn.prepareStatement("insert into inscadmin_etud_filier(id_etud,id_ia,id_fil) values(?,?,?)");
			ps.setString(1, massar);
			ps.setInt(2, ia.getId_inscrAdm());
			ps.setInt(3, idFil);
			ps.executeUpdate();
			ps.close();
			
			} catch (Exception e2) {
			// TODO: handle exception
			e2.printStackTrace();
		}
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
	
	
	
	
	public List<Etudiant> jointureEtIA() {
		List<Etudiant> etud = new ArrayList<Etudiant>();
		Connection conn = SingletonConnection.getConnection();
		PreparedStatement ps;
		try {
			ps = conn.prepareStatement(
					"Select ia.cne, et.NomFr,et.PrenomFr FROM inscripadministrative ia, etudiant et where ia.cne=et.massarEtud");
			ResultSet rs = ps.executeQuery();
			while (rs.next()) {
				Etudiant etu = new Etudiant(rs.getString("cne"), rs.getString("NomFr"), rs.getString("PrenomFr"));
				etud.add(etu);

			}
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return etud;
	}
}
