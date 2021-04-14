package dao;

import java.io.InputStream;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import metierEntite.Etudiant;
import metierEntite.User;

public class InscripEnLigne implements IInscriptionEnligne  {
	private Map<String, String> erreurs = new   HashMap<String, String>();
	@Override
	public void addEt(Etudiant etudiant) {
		// TODO Auto-generated method stub
		Connection conn = SingletonConnection.getConnection();
		PreparedStatement ps;
		
		try {
		       ps = conn.prepareStatement("insert into etudiant values(?, ?, ?, ?, ?, ?,?, ?, ?, ?,?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?)");
		       
		       ps.setString(1,etudiant.getNomFr());
		       ps.setString(2,etudiant.getNomAr());
		       ps.setString(3,etudiant.getPrenomAr());
		       ps.setString(4,etudiant.getPrenomFr());
		       ps.setString(5,etudiant.getAcad());
		       ps.setString(6,etudiant.getAn_Bac());
		       ps.setString(7,etudiant.getCin());
		      
		       
		       ps.setString(8, etudiant.getDate1in());
		       java.sql.Date date_sql = new java.sql.Date(etudiant.getDateN().getTime());
		       ps.setDate(9, date_sql);
		       
		 
		       ps.setString(10,etudiant.getVilleBac());
		       ps.setString(11,etudiant.getLieuN_ar());
		       ps.setString(12,etudiant.getLieuN_fr());
		       ps.setString(13,etudiant.getVilleNaissance());
		       ps.setString(14,etudiant.getLycee());
		       ps.setString(15,etudiant.getMassarEtud());
		       ps.setString(16,etudiant.getMt());
		       ps.setString(17,etudiant.getNationalite());
		       
		       ps.setString(18,etudiant.getProvince());
		       ps.setString(19,etudiant.getsBac());
		       ps.setString(20,etudiant.getSexe());
		       ps.setString(21,etudiant.getRegion());
		       
		      
		       
		       ps.setString(22,etudiant.getEtatPhy());
		       ps.setString(23,etudiant.getGroupSocio());
		       
		       
		       
		       ps.setBlob(24, etudiant.getPhoto());
		      
			      
		      
		      
		       ps.executeUpdate();
		       
		      
		       ps.close();
		      
		       conn.close(); 
		       
		       
				
			}
			
			catch (Exception e) {
			e.printStackTrace();
		}
		}
	@Override
	public List<Etudiant> listEt() {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public boolean deleteEt(String massarEtud) {
		// TODO Auto-generated method stub
		return false;
	}
	@Override
	public Etudiant getEt(String massarEtud) {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public void updateEt(Etudiant etudiant) {
		// TODO Auto-generated method stub
		
	}
	@Override
	public void addEtExcel(InputStream file) {
		// TODO Auto-generated method stub
		
	}
	@Override
	public void addEtUSER(Etudiant etudiant, User user) {
		// TODO Auto-generated method stub
		Connection conn = SingletonConnection.getConnection();
		System.out.println("ttt");
		PreparedStatement ps ;
		String idEtud = getIdEtdu(etudiant);
		try {
			ps=conn.prepareStatement("insert into user(password,username,id_etud) values (?,?,?)");
			ps.setString(2, user.getLogin());
			ps.setString(1, user.getMdp());
			ps.setString(3, idEtud);
			ps.executeUpdate();
			ps.close();
			conn.close();
			System.out.println("user-etudiant");
		}catch(Exception e) {
			e.printStackTrace();
		}
	}
	@Override
	public String getIdEtdu(Etudiant etudiant) {
		// TODO Auto-generated method stub
		Connection conn= SingletonConnection.getConnection();
		PreparedStatement ps ;
		String idEtud=null;
		try {
			ps=conn.prepareStatement("select * from etudiant where cin=? and (PrenomFr=? and NomFr=?)");
			ps.setString(3, etudiant.getNomFr());
			ps.setString(2, etudiant.getPrenomFr());
			ps.setString(1, etudiant.getCin());
			ResultSet rs = ps.executeQuery();
			while(rs.next()) {
			idEtud =rs.getString("massarEtud");
				
			}
			ps.close();
			conn.close();
			
			
		}catch(Exception e ) {
			e.printStackTrace();
		}
		return idEtud;
	}


	

}
