package dao;

import java.io.InputStream;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import metierEntite.Etudiant;
import metierEntite.User;

public class InscripEnLigne implements IInscriptionEnligne  {
	private Map<String, String> erreurs = new   HashMap<String, String>();
	
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
	
	public List<Etudiant> listEt() {
		List<Etudiant>list=new ArrayList<Etudiant>();
		Connection conn = SingletonConnection.getConnection();
		PreparedStatement ps;
		
		try {
			ps=conn.prepareStatement("select *from etudiant");
			ResultSet rs=ps.executeQuery();
			while(rs.next())
			{
				Etudiant e=new Etudiant();
				   e.setNomFr(rs.getString("NomFr"));
			       e.setNomAr(rs.getString("NomAr"));
			       e.setPrenomFr(rs.getString("PrenonFr"));
			       e.setPrenomAr(rs.getString("PrenonAr"));
			       e.setAcad(rs.getString("acad"));
			       e.setAn_Bac(rs.getString("an_bac"));
			       e.setCin(rs.getString("cin"));
			      
			       
			       e.setDate1in("date1in");
			       //java.sql.Date date_sql = new java.sql.Date(etudiant.getDateN().getTime());
			      //ps.setDate(9, date_sql);
			       
			 
			       e.setVilleBac(rs.getString("villeBac"));
			       e.setLieuN_ar(rs.getString("lieuN_ar"));
			       e.setLieuN_fr(rs.getString("LieuN_fr"));
			       e.setVilleNaissance(rs.getString("villeNaissance"));
			       e.setLycee(rs.getString("lycee"));
			       e.setMassarEtud(rs.getString("massarEtud"));
			       e.setMt(rs.getString("mt"));
			       e.setNationalite(rs.getString("nationalite"));
			       
			       e.setProvince(rs.getString("province"));
			       e.setsBac(rs.getString("sBac"));
			       e.setSexe(rs.getString("sexe"));
			       e.setRegion(rs.getString("region"));
			       
			      
			       
			       e.setEtatPhy(rs.getString("etatPhy"));
			       e.setGroupSocio(rs.getString("GroupSocio"));
			       
			       
			       
			       //e.setPhoto(rs.getInputStream(""));
			       list.add(e);
			}
			
		} catch (Exception e) {
			
		}
		
		return list;
	}
	
	public boolean deleteEt(String massarEtud) {
		Connection conn=SingletonConnection.getConnection();
		PreparedStatement ps;
		try {
			ps=conn.prepareStatement("delete from etudiant where massarEtud=?");
			ps.setString(1, massarEtud);
			ps.executeUpdate();
		} catch (Exception e) {
			e.printStackTrace();
		
		}
		return false;
	}
	
	public Etudiant getEt(String massarEtud) {
		Connection conn = SingletonConnection.getConnection();
		PreparedStatement ps;
		try {
			ps=conn.prepareStatement("select from etudiant where massarEtud=?");
			ps.setString(1, massarEtud);
			ps.executeUpdate();
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}
	
	public void updateEt(Etudiant etudiant) {
		Connection conn = SingletonConnection.getConnection();
		PreparedStatement ps;
		try {
			  ps = conn.prepareStatement("update etudiant set Nomfr=?,NomAr=?,PrenomFr=?,PrenomAr=?,acad=?,an_Bac=?,cin=?,date1in=?,villeBac=?,lieuN_ar=?,lieuN_fr=?,villeNaissance=?,lycee=?,mt=?,nationalite=?,province=?,sBac=?,sexe=?,region=?,etatPhy=?,GroupSocio=?,photo=? ");
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
		       
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}
	
	public void addEtExcel(InputStream file) {
		// TODO Auto-generated method stub
		
	}
	
	public void addEtUSER(Etudiant etudiant, User user) {
		// TODO Auto-generated method stub
		Connection conn = SingletonConnection.getConnection();
		System.out.println("ttt");
		PreparedStatement ps ;
		String idEtud = getIdEtdu(etudiant);
		try {
			ps=conn.prepareStatement("insert into user(password,username,id_etud,roles) values (?,?,?,?)");
			ps.setString(2, user.getLogin());
			ps.setString(1, user.getMdp());
			ps.setString(3, idEtud);
			ps.setString(4, "etudiant");
			ps.executeUpdate();
			ps.close();
			conn.close();
			System.out.println("user-etudiant");
		}catch(Exception e) {
			e.printStackTrace();
		}
	}
	
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
