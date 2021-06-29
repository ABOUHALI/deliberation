package dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import org.apache.commons.math3.analysis.function.Sin;

import com.mysql.cj.x.protobuf.MysqlxPrepare.Prepare;

import metierEntite.Etablissement;
import metierEntite.Prof_element;
import metierEntite.Professeur;
import metierEntite.Semestre;
import metierEntite.User;

public class ProfesseurDao {
private StructureETab se = new StructureETab();
public void addProf(Professeur p) {
	Connection conn = SingletonConnection.getConnection();
	PreparedStatement ps ;
	try {
		ps=conn.prepareStatement("insert into professeur(email,nom_professeur, prenom_professeur,ROLE_PROF,grade,id_etab,id_fil) values(?,?,?,?,?,?,?)");
		ps.setString(1, p.getEmail());
		ps.setString(2, p.getNom());
		ps.setString(3, p.getPrenom());
		ps.setString(4, p.getRole());
		ps.setString(5, p.getGrade());
		
		ps.setInt(6, p.getEtablissement());
		ps.setInt(7, 19);
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

public String ElEMENTfromProf(int id_prof) {
	Connection conn = SingletonConnection.getConnection();
	PreparedStatement ps;
	String elt = null;
	int id_elt =0;
	try {
		ps=conn.prepareStatement("select id_elts from prof_elt where id_prof=?");
		ps.setInt(1, id_prof);
		ResultSet rs = ps.executeQuery();
		while(rs.next()) {
			id_elt = rs.getInt("id_elts");
			elt = se.getNOMELT(id_elt);
		}
	} catch (Exception e) {
		// TODO: handle exception
		e.printStackTrace();
		}
	return elt ;
}
public void addRESP_FIL(Professeur p, int id_fil) {
	Connection conn = SingletonConnection.getConnection();
	PreparedStatement ps;
	int idProf =getIDProf(p.getNom(),p.getPrenom());

	try {
		ps=conn.prepareStatement("insert into filier_respfiliere(id_profeRESP,id_Filier) values(?,?)");
		ps.setInt(1, idProf);
		ps.setInt(2, id_fil);
		ps.executeUpdate();
		ps.close();
		conn.close();
	} catch (Exception e) {
		// TODO: handle exception
		e.printStackTrace();
	}
}
public String getRoleProf(int id_prof) {
	Connection conn = SingletonConnection.getConnection();
	PreparedStatement ps ;
	String role =null;
	try {
		ps=conn.prepareStatement("select ROLE_PROF from professeur where id_professeur=?");
		ps.setInt(1, id_prof);
		ResultSet rs =ps.executeQuery();
		while(rs.next()) {
			role=rs.getString("ROLE_PROF");
		}
		ps.close();
		conn.close();
	} catch (Exception e) {
		// TODO: handle exception
		e.printStackTrace();
	}
	return role ;
}

public String ModulefromRM(int id_prof) {
	Connection conn = SingletonConnection.getConnection();
	PreparedStatement ps;
	String module =null;
	int id_module =0;
	try {
		ps=conn.prepareStatement("select IDMODULE from prof_module where idProfesseur=?");
		ps.setInt(1, id_prof);
		ResultSet rs =ps.executeQuery();
		while(rs.next()) {
			id_module=rs.getInt("IDMODULE");
			module=se.getModule(id_module);
		}
	} catch (Exception e) {
		// TODO: handle exception
		e.printStackTrace();
	}
	return module ;
}

public void addNoteSemestre(int note,int idfiliere) {
	Connection conn = SingletonConnection.getConnection();
	PreparedStatement ps;
	List<Semestre> sem = semsFROM_fil(idfiliere);
	try {
		for (int i = 0; i < sem.size(); i++) {
			ps=conn.prepareStatement("UPDATE `delib`.`semestre` SET `note_validation` = ? WHERE (`id_semestre` = ?); ");
			ps.setInt(2, sem.get(i).getIDSemestre());
			ps.setInt(1, note);
			ps.executeUpdate();
			
		}
	} catch (Exception e) {
		// TODO: handle exception
		e.printStackTrace();
	}
	
}
public List<Semestre> semsFROM_fil(int id_fil){
	Connection conn = SingletonConnection.getConnection();
	PreparedStatement ps;
	List<Semestre> sem = new ArrayList<Semestre>();
	try {
		ps=conn.prepareStatement("select id_semestre from semestre s , etape e , filiere f where f.id_filiere=e.fid_fil and s.fid_etap=e.id_Etape and f.id_filiere=?");
		ps.setInt(1, id_fil);
		ResultSet rs =ps.executeQuery();
		while(rs.next()) {
			Semestre s = se.getSemestre(rs.getInt("id_semestre"));
			sem.add(s);
		}
		
	} catch (Exception e) {
		// TODO: handle exception
		e.printStackTrace();
	}
	return sem;
}
 
public String FiliereFROMRF(int id_prof) {
	Connection conn = SingletonConnection.getConnection();
	PreparedStatement ps;
	String Filiere =null;
	int id_filiere =0;
	try {
		ps=conn.prepareStatement("select id_Filier from filier_respfiliere where id_profeRESP=?");
		ps.setInt(1, id_prof);
		ResultSet rs =ps.executeQuery();
		while(rs.next()) {
			id_filiere=rs.getInt("id_Filier");
			Filiere=se.getIDFil(id_filiere).getFiliere();
		}
	} catch (Exception e) {
		// TODO: handle exception
		e.printStackTrace();
	}
	return Filiere ;
}


public List<Professeur> getCollege(String etab){
	int id=se.getIDETablissement(etab);
	Connection conn = SingletonConnection.getConnection();
	PreparedStatement ps;
	List<Professeur> listp= new ArrayList<Professeur>();
	try {
		ps=conn.prepareStatement("select p.*, e.libelle_elt from professeur p ,prof_elt pe ,element e,etablissement etab where p.id_etab=etab.id_etab and etab.nom_etab=? and e.id_elt=pe.id_elts and pe.id_prof=p.id_professeur;");
		ps.setString(1, etab);
		ResultSet rs =ps.executeQuery();
		while(rs.next()) {
			Professeur p = new Professeur(rs.getInt("id_professeur"),rs.getString("nom_professeur"),rs.getString("prenom_professeur"),rs.getString("email"),rs.getInt("id_etab"),rs.getString("ROLE_PROF"),rs.getInt("id_fil"),rs.getString("grade"),rs.getString("libelle_elt"));
			listp.add(p);
		}
	} catch (Exception e) {
		// TODO: handle exception
		e.printStackTrace();
	}
	return listp;
}

public String etabFROMprof(int id_prof) {
	Connection conn = SingletonConnection.getConnection();
	PreparedStatement ps;
	Etablissement etab=null;
	String ne ;
	int id_etab=0;
	try {
		ps=conn.prepareStatement("select id_etab from professeur where id_professeur=?");
		ps.setInt(1, id_prof);
		ResultSet rs =ps.executeQuery();
		while(rs.next()) {
			id_etab=rs.getInt("id_etab");
			etab=se.getEtablissement(id_etab);
			
		}
	} catch (Exception e) {
		// TODO: handle exception
		e.printStackTrace();
	}
	return etab.getEtablissement();
}
}
