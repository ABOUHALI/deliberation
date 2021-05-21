package dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import metierEntite.Prof_element;
import metierEntite.Professeur;
import metierEntite.User;

public class ProfesseurDao {

public void addProf(Professeur p) {
	Connection conn = SingletonConnection.getConnection();
	PreparedStatement ps ;
	try {
		ps=conn.prepareStatement("insert into professeur(email,nom_professeur, prenom_professeur,ROLE_PROF,grade,id_fil,id_etab) values(?,?,?,?,?,?,?)");
		ps.setString(1, p.getEmail());
		ps.setString(2, p.getNom());
		ps.setString(3, p.getPrenom());
		ps.setString(4, p.getRole());
		ps.setString(5, p.getGrade());
		ps.setInt(6, p.getFiliere());
		ps.setInt(7, p.getEtablissement());
		ps.executeUpdate();
		ps.close();
		conn.close();
	}catch (Exception e) {
		// TODO: handle exception
		e.printStackTrace();
	}
}
public void addUser(User user , Professeur prof) {
	Connection conn = SingletonConnection.getConnection();
	int idprf = getIDProf(prof.getNom(),prof.getPrenom());
	PreparedStatement ps ;
	try {
		ps=conn.prepareStatement(" insert into user(password,roles,username,id_prof) values(?,?,?,?)");
		ps.setString(1, user.getMdp());
		ps.setString(2, "professeur");
		ps.setString(3, user.getLogin());
		ps.setInt(4, idprf);
		ps.executeUpdate();
		ps.close();
		conn.close();
	}catch(Exception e ) {
		e.printStackTrace();
	}
}
public int getIDProf(String nom , String prenom) {
	Connection conn = SingletonConnection.getConnection();
	PreparedStatement ps ;
	int idProf =0;
	try {
		ps = conn.prepareStatement("select id_professeur from professeur where nom_professeur=? and prenom_professeur=?");
		ps.setString(1, nom);
		ps.setString(2, prenom);
		ResultSet rs = ps.executeQuery();
		while(rs.next()) {
			idProf = rs.getInt("id_professeur");
		}
		ps.close();
		conn.close();
	}catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
	return idProf ;
}
public List<Professeur> listProf(){
	List<Professeur> lp=new ArrayList<Professeur>();
	Connection conn = SingletonConnection.getConnection();
	PreparedStatement ps;
	try {
		ps=conn.prepareStatement("select * from professeur");
		ResultSet rs = ps.executeQuery();
		while(rs.next()) {
			Professeur prof = new Professeur(rs.getInt("id_professeur"), rs.getString("nom_professeur"), rs.getString("prenom_professeur"), rs.getString("email"), rs.getInt("id_etab"), rs.getString("role_prof"), rs.getInt("id_fil"), rs.getString("grade"));
			lp.add(prof);
		}
	} catch (Exception e) {
		// TODO: handle exception
		e.printStackTrace();
	}
	return lp;
}
public void addPorf_element(Professeur prof ,int idElement) {
	Connection conn =SingletonConnection.getConnection();
	PreparedStatement ps;
	int idProf =getIDProf(prof.getNom(),prof.getPrenom());
	try {
		ps=conn.prepareStatement("insert into prof_elt(id_prof,id_elts)values(?,?)");
		ps.setInt(1, idProf);
		ps.setInt(2, idElement);
		ps.executeUpdate();
		ps.close();
		conn.close();
		}catch (Exception e) {
		// TODO: handle exception
			e.printStackTrace();
		}
}
public void addProf_module(Professeur prof ,int idModule) {
	Connection conn =SingletonConnection.getConnection();
	PreparedStatement ps;
	int idProf = getIDProf(prof.getNom(),prof.getPrenom());
	try {
		ps=conn.prepareStatement("insert into prof_module(IDMODULE,idProfesseur)values(?,?)");
		ps.setInt(1,idModule);
		ps.setInt(2, idProf);
		ps.executeUpdate();
		ps.close();
		conn.close();
	} catch (Exception e) {
		// TODO: handle exception
		e.printStackTrace();
	}
}
public List<Prof_element> listProf_elt(){
	List<Prof_element> lpe = new ArrayList<Prof_element>();
	Connection conn = SingletonConnection.getConnection();
	PreparedStatement ps;
	try {
		ps=conn.prepareStatement("select * from prof_elt");
		ResultSet rs =ps.executeQuery();
		while(rs.next()) {
			Prof_element pe=new Prof_element(rs.getInt("id_prof"),rs.getInt("id_elts"));
			lpe.add(pe);
		}
	} catch (Exception e) {
		// TODO: handle exception
		e.printStackTrace();
	}
	return lpe ;
}
public void deleteProfById(int id) {
	Connection conn=SingletonConnection.getConnection();
	PreparedStatement ps;
	try {
		ps=conn.prepareStatement("delete from professeur where id_professeur=?");
		ps.setInt(1, id);
		ps.execute();
		ps.close();
		conn.close();
	}catch (Exception e) {
		// TODO: handle exception
		e.printStackTrace();
	}
}
public void modProf(String nom,String prenom,String grade,int IDetablissement,int id) {
	Connection conn =SingletonConnection.getConnection();
	PreparedStatement ps;
	try {
		ps=conn.prepareStatement("UPDATE professeur SET nom_professeur=?,prenom_professeur=?,ROLE_PROF=?,");
		
	}catch (Exception e) {
		// TODO: handle exception
		e.printStackTrace();
	}
}
}
