package dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.function.Predicate;

import metierEntite.Element;
import metierEntite.Etudiant;
import metierEntite.Inscrip_pedagogique;

public class InscripPDAO {
	private InscripEnLigne ie = new InscripEnLigne();
	public void addIP(Inscrip_pedagogique ip ) {
		Connection conn =SingletonConnection.getConnection();
		PreparedStatement ps;
		try {
			ps=conn.prepareStatement("insert into inscrip_pedago(fid_etdt,fid_elt,anneAcad) values(?,?,?)");
			ps.setString(1, ip.getIdetud());
			ps.setInt(2, ip.getElt());
			ps.setDate(3, ip.getAnneacad());
			ps.executeUpdate();
			ps.close();
			conn.close();
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
	}
	
	public List<Inscrip_pedagogique> getIP(){
		List<Inscrip_pedagogique> ipd = new ArrayList<Inscrip_pedagogique>();
		Connection conn =SingletonConnection.getConnection();
		PreparedStatement ps;
		try {
			ps=conn.prepareStatement("select anneAcad, fid_etdt,fid_elt from inscrip-pedago");
			ResultSet rs =ps.executeQuery();
			while(rs.next()) {
				Inscrip_pedagogique ip = new Inscrip_pedagogique(rs.getString("fid_etdt"), rs.getInt("fid_elt"), rs.getDate("anneAcad"));
				ipd.add(ip);
			}
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return ipd;
	}

	public List<Element> getElementDANSSemestre(String semestre){
		List<Element> elts = new ArrayList<Element>();
		Connection conn  =SingletonConnection.getConnection();
		PreparedStatement ps;
		try {
			ps=conn.prepareStatement("select id_elt from element e , module m , semestre s where e.fid_module=m.id_module and m.fid_semestre=s.id_semestre and s.libelle_semestre=? ");
			ps.setString(1, semestre);
			ResultSet rs = ps.executeQuery();
			while(rs.next()) {
				Element el = new Element(rs.getInt("id_elt"));
				elts.add(el);
				}
		} catch (Exception e) {
			// TODO: handle exception
		}
		return elts ;
	}

	public HashSet<Etudiant> getListeEtudiantXXXX(List<Element> elts){
		List<Etudiant> et =null;
		HashSet<Etudiant> etudiants =new HashSet<Etudiant>();
		/*recupere les ids a partir des elements*/
		for (int i = 0; i < elts.size(); i++) {
			et =getEtudiantParElement(elts.get(i).getIDElement());
			
			etudiants.addAll(et);
		}	
		/* test */
		return etudiants;
	}

	public List<Etudiant> getEtudiantParElement(int id){
		List<Etudiant> etdts =  new ArrayList<Etudiant>();
		Connection conn = SingletonConnection.getConnection();
		PreparedStatement ps;
		try {
			ps=conn.prepareStatement("select fid_etdt from inscrip_pedago where fid_elt=? ");
			ps.setInt(1, id);
			ResultSet rs= ps.executeQuery();
			while(rs.next()) {
				String massar = rs.getString("fid_etdt")  ;
				Etudiant e = ie.getET3(massar);
				etdts.add(e);
			}
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return etdts;
	}

	public List<Element> getElementDANSModule(String module){
		List<Element> m = new  ArrayList<Element>();
		Connection conn = SingletonConnection.getConnection();
		PreparedStatement ps;
		try {
			ps=conn.prepareStatement("select id_elt from element e ,module m where e.fid_module=m.id_module and m.libelle_module=?");
			ps.setString(1, module);
			ResultSet rs =ps.executeQuery();
			while(rs.next()) {
				Element e = new Element(rs.getInt("id_elt"));
				m.add(e);
			}
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return m ;
	}

	public boolean isEtudiantPEDA(String massarEtud) {
		boolean b = false;
		List<Etudiant> et = EtudiantInscrisPedag();		
		for(Etudiant p:et) {
			b=p.getMassarEtud().equals(massarEtud);
			if(b) {
				break ;
			}
		}
		return b;
		
	}
	
	public List<Etudiant> EtudiantInscrisPedag(){
		List<Etudiant> etud =new ArrayList<Etudiant>();
		Connection conn = SingletonConnection.getConnection();
		PreparedStatement ps;
		try {
			ps=conn.prepareStatement("select distinct fid_etdt from inscrip_pedago ");
			ResultSet rs =ps.executeQuery();
			while (rs.next()) {
				Etudiant e = new Etudiant(rs.getString("fid_etdt"));
				etud.add(e);
			}
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return etud ;
	}


}
