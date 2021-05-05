package dao;

import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import metierEntite.Element;
import metierEntite.Etablissement;
import metierEntite.Etape;
import metierEntite.Filiere;
import metierEntite.Module;
import metierEntite.Semestre;
import metierEntite.annee_universitaire;

public class StructureETab implements IStructureEtab {
	
	public int getIDSemestre(String semestre) {
		int sem =0;
		Connection conn = SingletonConnection.getConnection();
		PreparedStatement ps ;
		try {
			ps=conn.prepareStatement("select id_semestre from semestre where libelle_semestre=? ");
			ps.setString(1, semestre);
			ResultSet rs =ps.executeQuery();
			while(rs.next()) {
				sem=rs.getInt("id_semestre");
			}
		} catch (Exception e) {
			// TODO: handle exception
		}
		return sem ;
	}
	
	public Etablissement getEtablissement(int id) {
		Etablissement res = new Etablissement();
		Connection conn = SingletonConnection.getConnection();
		PreparedStatement ps;
		try {
			ps = conn.prepareStatement("select * from etablissement where id_etab=?");
			ps.setInt(1, id);
			ResultSet rs = ps.executeQuery();
			while (rs.next()) {
				res.setIDEtablissement(id);
				res.setEtablissement(rs.getString("nom_etab"));
				res.setDescription(rs.getString("description_etab"));
			}
			ps.close();
			conn.close();
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return res;
	}

	public void deleteEtabById(int id) {
		Connection cnn = SingletonConnection.getConnection();
		PreparedStatement ps;
		try {
			ps = cnn.prepareStatement("delete from etablissement where id_etab =?");
			ps.setInt(1, id);
			ps.execute();
			ps.close();
			cnn.close();

		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
	}

	public void addEtab(Etablissement e) {
		Connection conn = SingletonConnection.getConnection();
		PreparedStatement ps;
		try {
			ps = conn.prepareStatement("insert into etablissement(nom_etab,description_etab) values(?,?)");
			ps.setString(1, e.getEtablissement());
			ps.setString(2, e.getDescription());

			ps.executeUpdate();
			ps.close();
			conn.close();
		} catch (Exception x) {
			x.printStackTrace();
		}
	}

	public List<Etablissement> listETab() {
		List<Etablissement> letab = new ArrayList<Etablissement>();
		Connection conn = SingletonConnection.getConnection();
		PreparedStatement ps;
		try {
			ps = conn.prepareStatement("select * from etablissement");
			ResultSet rs = ps.executeQuery();
			while (rs.next()) {
				Etablissement etab = new Etablissement(rs.getInt("id_etab"), rs.getString("nom_etab"),
						rs.getString("description_etab"));
				letab.add(etab);
			}
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return letab;
	}

	public List<annee_universitaire> List_ann(){
		List<annee_universitaire> au = new ArrayList<annee_universitaire>();
		Connection conn = SingletonConnection.getConnection();
		PreparedStatement ps;
		try {
			ps=conn.prepareStatement("select * from anneuniversitaire");
			ResultSet rs = ps.executeQuery();
			while (rs.next()) {
				annee_universitaire a = new annee_universitaire(rs.getDate("anne_acad"), rs.getString("libelle_annuniv"),rs.getInt("id_anne_acad"));
				au.add(a);
			}
			
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return au;
	}
	
	public void addFiliere(Filiere f, Etablissement e) {
		Connection conn = SingletonConnection.getConnection();
		PreparedStatement ps;
		int idetab = getIdEtab(e);
		try {
			ps = conn.prepareStatement("insert into filiere(nom_filier,fid_etab)values(?,?)");
			ps.setString(1, f.getFiliere());
			ps.setInt(2, idetab);
			ps.executeUpdate();
			ps.close();
			conn.close();
		} catch (Exception x) {
			x.printStackTrace();
		}
	}

	public int getIdEtab(Etablissement etab) {
		Connection conn = SingletonConnection.getConnection();
		PreparedStatement ps;
		int idetab = 0;
		try {
			ps = conn.prepareStatement("select * from etablissement where nom_etab=?");
			ps.setString(1, etab.getEtablissement());
			ResultSet rs = ps.executeQuery();
			while (rs.next()) {
				idetab = rs.getInt("id_etab");
			}
			ps.close();
			conn.close();
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return idetab;
	}

	public void addEtape(Etape et) {
		Connection conn = SingletonConnection.getConnection();
		PreparedStatement ps;
		try {
			ps = conn.prepareStatement("insert into etape(libelle_etape,diplomante,fid_fil)  values(?,?,?)");
			ps.setString(1, et.getLabelleEtape());
			if (et.isDiplomante() == true) {
				ps.setInt(2, 1);

			} else {
				ps.setInt(2, 0);
			}
			ps.setInt(3, et.getIDFiliere());
			ps.executeUpdate();
			ps.close();
			conn.close();
			System.out.println("etape ");
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
	}

	public void addSemestre(Semestre p) {
		Connection conn = SingletonConnection.getConnection();
		PreparedStatement ps;
		try {
			ps = conn.prepareStatement("insert into semestre(libelle_semestre,fid_etap) values(?,?)");
			ps.setString(1, p.getLabelleSemestre());
			ps.setInt(2, p.getIDEtape());
			ps.executeUpdate();
			ps.close();
			conn.close();
			System.out.println("semestre ");
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
	}

	public void addModule(Module m) {
		Connection conn = SingletonConnection.getConnection();
		PreparedStatement ps;
		try {
			ps = conn.prepareStatement(
					"insert into module(coefficient,libelle_module,note_valid,nbr_elt,fid_semestre) values(?,?,?,?,?)");
			ps.setInt(1, m.getCoeff());
			ps.setString(2, m.getLabelleMod());
			ps.setInt(3, m.getNote_valid());
			ps.setInt(4, m.getNbr_elt());
			ps.setInt(5, m.getIDSemestre());
			ps.executeUpdate();
			ps.close();
			conn.close();
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
	}

	public void addElement(Element e ) {
		Connection conn =SingletonConnection.getConnection();
		PreparedStatement ps;
		try {
			ps=conn.prepareStatement("insert into element(coefficient,libelle_elt,Note_Validation,fid_module) values(?,?,?,?)");
			ps.setInt(1, e.getCoeff());
			ps.setString(2, e.getLabelleElement());
			ps.setInt(3,e.getNote_validation());
			ps.setInt(4, e.getIDModule());
			ps.executeUpdate();
			ps.close();
			conn.close();
		} catch (Exception e2) {
			// TODO: handle exception
			e2.printStackTrace();
		}
	}
	
	public List<Element> listElement(){
		List<Element > el = new ArrayList<Element>();
		Connection conn = SingletonConnection.getConnection();
		PreparedStatement ps;
		try {
			ps=conn.prepareStatement("select * from element");
			ResultSet rs =ps.executeQuery();
			while(rs.next()) {
				Element elt = new Element(rs.getInt("id_elt"),rs.getString("libelle_elt"), rs.getInt("fid_module"), rs.getInt("coeff"), rs.getInt("Note_Validation"));
				el.add(elt);
			}
		} catch (Exception e2) {
			// TODO: handle exception
			e2.printStackTrace();
		}
		return el;
	}
	
	public List<Filiere> listFiliere() {
		List<Filiere> filiere = new ArrayList<Filiere>();
		Connection conn = SingletonConnection.getConnection();
		PreparedStatement ps;
		try {
			ps = conn.prepareStatement("select * from filiere");
			ResultSet rs = ps.executeQuery();
			while (rs.next()) {
				Filiere fil = new Filiere(rs.getInt("id_filiere"), rs.getString("nom_filier"), rs.getInt("fid_etab"));
				filiere.add(fil);
			}
		} catch (Exception e) {

			e.printStackTrace();
		}
		return filiere;
	}

	@Override
	public List<Etape> listEtape() {
		// TODO Auto-generated method stub
		List<Etape> etap = new ArrayList<Etape>();
		Connection conn = SingletonConnection.getConnection();
		PreparedStatement ps;

		try {
			ps = conn.prepareStatement("select * from etape");
			ResultSet rs = ps.executeQuery();
			while (rs.next()) {
				Etape e = new Etape(rs.getInt("id_Etape"), rs.getString("libelle_etape"), rs.getBoolean("diplomante"),
						rs.getInt("fid_fil"));
				etap.add(e);
			}

		} catch (Exception e) {
			e.printStackTrace();
		}
		return etap;

	}

	public List<Module> listModule() {
		List<Module> module = new ArrayList<Module>();
		Connection conn = SingletonConnection.getConnection();
		PreparedStatement ps;

		try {
			ps = conn.prepareStatement("select * from module");
			ResultSet rs = ps.executeQuery();
			while (rs.next()) {
				Module e = new Module(rs.getInt("id_module"), rs.getString("libelle_module"), rs.getInt("fid_semestre"),
						rs.getInt("coefficient"), rs.getInt("note_valid"), rs.getInt("nbr_elt"));
				module.add(e);
			}

		} catch (Exception e) {
			e.printStackTrace();
		}
		return module;
	}

	public List<Semestre> listSem() {
		List<Semestre> ss = new ArrayList<Semestre>();
		Connection conn = SingletonConnection.getConnection();
		PreparedStatement ps;
		try {
			ps = conn.prepareStatement("select * from semestre");
			ResultSet rs = ps.executeQuery();
			while (rs.next()) {
				Semestre s = new Semestre(rs.getInt("id_semestre"), rs.getString("libelle_semestre"),
						rs.getInt("fid_etap"));
				ss.add(s);
			}
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return ss;
	}

	public List<Module> Listmodule(){
		List<Module> m = new ArrayList<Module>();
		Connection conn = SingletonConnection.getConnection();
		PreparedStatement ps;
		try {
			ps=conn.prepareStatement("select * from module");
			ResultSet rs =ps.executeQuery();
			while(rs.next()) {
				Module mod = new Module(rs.getInt("id_module"), rs.getString("libelle_module"), rs.getInt("fid_semestre"), rs.getInt("coefficient"), rs.getInt("note_valid"), rs.getInt("nbr_elt"));
				m.add(mod);
			}
			
		} catch (Exception e) {
			// TODO: handle exception
		}
		return m;
	}
	
	public int getIDETbalissement(String etab) {
		int idetab =0;
		Connection conn = SingletonConnection.getConnection();
		PreparedStatement ps;
		try {
			ps = conn.prepareStatement("select id_etab from etablissement where nom_etab=?");
			ps.setString(1, etab);
			ResultSet rs = ps.executeQuery();
			while (rs.next()) {
				idetab = rs.getInt("id_etab");
			}
			ps.close();
			conn.close();
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return idetab;
	}

	public int getIDFiliere(String filiere) {
		int idetab =0;
		Connection conn = SingletonConnection.getConnection();
		PreparedStatement ps;
		try {
			ps = conn.prepareStatement("select id_filiere from filiere where nom_filier=?");
			ps.setString(1, filiere);
			ResultSet rs = ps.executeQuery();
			while (rs.next()) {
				idetab = rs.getInt("id_filiere");
			}
			ps.close();
			conn.close();
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return idetab;
	}
	
	public int getIDModule(String module) {
		int idm =0;
		Connection conn = SingletonConnection.getConnection();
		PreparedStatement ps;
		try {
			ps = conn.prepareStatement("select id_module from module where libelle_module=?");
			ps.setString(1, module);
			ResultSet rs = ps.executeQuery();
			while (rs.next()) {
				idm = rs.getInt("id_module");
			}
			ps.close();
			conn.close();
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return idm;
	
	}
	
	public int getIDElement(String elt) {

	int idelt =0;
	Connection conn = SingletonConnection.getConnection();
	PreparedStatement ps;
	try {
		ps = conn.prepareStatement("select id_elt from element where libelle_elt=?");
		ps.setString(1, elt);
		ResultSet rs = ps.executeQuery();
		while (rs.next()) {
			idelt = rs.getInt("id_elt");
		}
		ps.close();
		conn.close();
	} catch (Exception e) {
		// TODO: handle exception
		e.printStackTrace();
	}
	return idelt;
}
	public int IDanneUniv(Date y ) {
		Connection conn = SingletonConnection.getConnection();
		PreparedStatement ps;
		int id=0;
		try {
			ps=conn.prepareStatement("select id_anne_acad from anneuniversitaire where anne_acad=?");
			ps.setDate(1, y);
			ResultSet rs =ps.executeQuery();
			while(rs.next()) {
				id=rs.getInt("id_anne_acad");
			}
			ps.close();
			conn.close();
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return id;
				
	}
}