package dao;

import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

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
			ps = conn.prepareStatement("select id_annee_acad from anneuniversitaire where anne_acad=?");
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

	public void addAdmini(Inscrip_Administartive iad, Filiere f, Etudiant etud,annee_universitaire au) {
		Connection conn = SingletonConnection.getConnection();
		InscripEnLigne ie = new InscripEnLigne();
		PreparedStatement ps;
		int idFiliere = getIdFil(f.getFiliere());
		int idAU = getIDAnneAcad(au);
		String massarETud = ie.getIdEtdu(etud);
		Date date_pre_inscription = (Date) iad.getDate_pre_inscription();
		Date date_valid = (Date) iad.getDate_valid_inscrip();
		try {
			ps = conn.prepareStatement("insert into inscripadministrative(fid_anne_acad,acte_naissance,bac,CIN,CNE,date_pre_inscription,date_valid_inscription,AdressPerson,Ville,Telephone,AdreseParents,BOURSE) values(?,?,?,?,?,?,?,?,?,?,?,?)");
			ps.setInt(1, idAU);
			ps.setBlob(2,iad.getActe_de_naissance());
			ps.setBlob(3, iad.getBac());
			ps.setBlob(4,iad.getCin());
			ps.setString(5, massarETud);
			ps.setDate(6, date_pre_inscription);
			ps.setDate(7, date_valid);
			ps.setDate(8,date_valid);
			ps.setString(9, iad.getAdressPerson());
			ps.setString(10, iad.getVille());
			ps.setInt(11, iad.getTelephone());
			
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
	}
}
