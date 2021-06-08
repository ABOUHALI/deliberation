package dao;

import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.ListIterator;

import org.apache.commons.math3.analysis.function.Sin;

import metierEntite.ETUD_NOTE;
import metierEntite.Element;
import metierEntite.Etablissement;
import metierEntite.Etape;
import metierEntite.Etudiant;
import metierEntite.Filiere;
import metierEntite.Module;
import metierEntite.Note;
import metierEntite.Semestre;
import metierEntite.annee_universitaire;

public class StructureETab  {
	InscripEnLigne ie = new InscripEnLigne();
	public int getIDSemestre(String semestre) {
		int sem = 0;
		Connection conn = SingletonConnection.getConnection();
		PreparedStatement ps;
		try {
			ps = conn.prepareStatement("select id_semestre from semestre where libelle_semestre=? ");
			ps.setString(1, semestre);
			ResultSet rs = ps.executeQuery();
			while (rs.next()) {
				sem = rs.getInt("id_semestre");
			}
		} catch (Exception e) {
			// TODO: handle exception
		}
		return sem;
	}
	
	public String getNOMELT(int id) {
		Connection conn = SingletonConnection.getConnection();
		PreparedStatement ps;
		String elt=null ;
		try {
			ps=conn.prepareStatement("select libelle_elt from element where id_elt =? ");
			ps.setInt(1, id);
			ResultSet rs =ps.executeQuery();
			while(rs.next()) {
				elt=rs.getString("libelle_elt");
			}
			ps.close();
			conn.close();
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return elt ;
	}

	public Element INFO_ELEMENT(String nom) {
		Element e = new Element();
		Connection conn = SingletonConnection.getConnection();
		PreparedStatement ps;
		try {
			ps = conn.prepareStatement("select * from element where libelle_elt=?");
			ps.setString(1, nom);
			ResultSet rs = ps.executeQuery();
			while (rs.next()) {
				e.setIDModule(rs.getInt("fid_module"));
				e.setIDElement(rs.getInt("id_elt"));
				e.setCoeff(rs.getInt("coefficient"));
				e.setLabelleElement(rs.getString("libelle_elt"));
				e.setNote_validation(rs.getInt("Note_Validation"));
			}
			ps.close();
			conn.close();
		} catch (Exception e2) {
			// TODO: handle exception
			e2.printStackTrace();
		}
		return e;
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

	public List<annee_universitaire> List_ann() {
		List<annee_universitaire> au = new ArrayList<annee_universitaire>();
		Connection conn = SingletonConnection.getConnection();
		PreparedStatement ps;
		try {
			ps = conn.prepareStatement("select * from anneuniversitaire");
			ResultSet rs = ps.executeQuery();
			while (rs.next()) {
				annee_universitaire a = new annee_universitaire(rs.getDate("anne_acad"),
						rs.getString("libelle_annuniv"), rs.getInt("id_anne_acad"));
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

	public void addElement(Element e) {
		Connection conn = SingletonConnection.getConnection();
		PreparedStatement ps;
		try {
			ps = conn.prepareStatement(
					"insert into element(coefficient,libelle_elt,Note_Validation,fid_module) values(?,?,?,?)");
			ps.setInt(1, e.getCoeff());
			ps.setString(2, e.getLabelleElement());
			ps.setInt(3, e.getNote_validation());
			ps.setInt(4, e.getIDModule());
			ps.executeUpdate();
			ps.close();
			conn.close();
		} catch (Exception e2) {
			// TODO: handle exception
			e2.printStackTrace();
		}
	}

	public List<Element> listElement() {
		List<Element> el = new ArrayList<Element>();
		Connection conn = SingletonConnection.getConnection();
		PreparedStatement ps;
		try {
			ps = conn.prepareStatement("select * from element");
			ResultSet rs = ps.executeQuery();
			while (rs.next()) {
				Element elt = new Element(rs.getInt("id_elt"), rs.getString("libelle_elt"), rs.getInt("fid_module"),
						rs.getInt("coefficient"), rs.getInt("Note_Validation"));
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

	public List<Module> Listmodule() {
		List<Module> m = new ArrayList<Module>();
		Connection conn = SingletonConnection.getConnection();
		PreparedStatement ps;
		try {
			ps = conn.prepareStatement("select * from module");
			ResultSet rs = ps.executeQuery();
			while (rs.next()) {
				Module mod = new Module(rs.getInt("id_module"), rs.getString("libelle_module"),
						rs.getInt("fid_semestre"), rs.getInt("coefficient"), rs.getInt("note_valid"),
						rs.getInt("nbr_elt"));
				m.add(mod);
			}

		} catch (Exception e) {
			// TODO: handle exception
		}
		return m;
	}

	public int getIDETablissement(String etab) {
		int idetab = 0;
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
		int idetab = 0;
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
		int idm = 0;
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

		int idelt = 0;
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

	public int IDanneUniv(Date y) {
		Connection conn = SingletonConnection.getConnection();
		PreparedStatement ps;
		int id = 0;
		try {
			ps = conn.prepareStatement("select id_anne_acad from anneuniversitaire where anne_acad=?");
			ps.setDate(1, y);
			ResultSet rs = ps.executeQuery();
			while (rs.next()) {
				id = rs.getInt("id_anne_acad");
			}
			ps.close();
			conn.close();
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return id;

	}

	public String getFilierByCNE(String cne) {
		String filiere = null;
		int id_fil;
		Connection conn = SingletonConnection.getConnection();
		PreparedStatement ps;
		try {
			ps = conn.prepareStatement("select id_fil from inscadmin_etud_filier where id_etud=?");
			ps.setString(1, cne);
			ResultSet rs = ps.executeQuery();
			while (rs.next()) {
				id_fil = rs.getInt("id_fil");
				filiere = getfiliereBEIIDF(id_fil);
			}

		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return filiere;
	}

	public String getfiliereBEIIDF(int id) {
		String fil = null;
		Connection conn = SingletonConnection.getConnection();
		PreparedStatement ps;
		try {
			ps = conn.prepareStatement("select nom_filier from filiere where id_filiere=?");
			ps.setInt(1, id);
			ResultSet rs = ps.executeQuery();
			while (rs.next()) {
				fil = rs.getString("nom_filier");
			}
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return fil;
	}

	public int getIDEtape(String etape) {
		int id_etape = 0;
		Connection conn = SingletonConnection.getConnection();
		PreparedStatement ps;
		try {
			ps = conn.prepareStatement("select id_Etape from  etape where libelle_etape=?");
			ps.setString(1, etape);
			ResultSet rs = ps.executeQuery();
			while (rs.next()) {
				id_etape = rs.getInt("id_Etape");
			}
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return id_etape;
	}

	public List<Semestre> getSemestreByEtape(int idetape) {
		List<Semestre> sem = new ArrayList<Semestre>();
		Connection conn = SingletonConnection.getConnection();
		PreparedStatement ps;
		try {
			ps = conn.prepareStatement(
					"select libelle_semestre from semestre s , etape e where s.fid_etap=e.id_Etape and e.id_Etape=? ");
			ps.setInt(1, idetape);
			ResultSet rs = ps.executeQuery();
			while (rs.next()) {
				Semestre s = new Semestre(rs.getString("libelle_semestre"));
				sem.add(s);
			}
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return sem;
	}

	public List<Module> getModuleBySemestre(int id_semestre) {
		List<Module> mod = new ArrayList<Module>();
		Connection conn = SingletonConnection.getConnection();
		PreparedStatement ps;
		try {
			ps = conn.prepareStatement(
					"select libelle_module from module m , semestre s where m.fid_semestre=s.id_semestre and s.id_semestre=?");
			ps.setInt(1, id_semestre);
			ResultSet rs = ps.executeQuery();
			while (rs.next()) {
				Module m = new Module(rs.getString("libelle_module"));
				mod.add(m);
			}
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return mod;
	}

	public List<Element> getElementByMODULE(int id_module) {
		List<Element> elt = new ArrayList<Element>();
		Connection conn = SingletonConnection.getConnection();
		PreparedStatement ps;
		try {
			ps = conn.prepareStatement(
					"select libelle_elt from   element e , module m where e.fid_module=m.id_module and m.id_module=?");
			ps.setInt(1, id_module);
			ResultSet rs = ps.executeQuery();
			while (rs.next()) {
				Element e = new Element(rs.getString("libelle_elt"));
				elt.add(e);
			}
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return elt;
	}

	public List<String> nomSemestre() {
		List<String> noms = new ArrayList<String>();
		Connection conn = SingletonConnection.getConnection();
		PreparedStatement ps;
		try {
			ps = conn.prepareStatement("select libelle_semestre from semestre ");
			ResultSet rs = ps.executeQuery();
			while (rs.next()) {
				String nom = rs.getString("libelle_semestre");
				noms.add(nom);
			}
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return noms;
	}

	public List<String> nomModule() {
		List<String> nomm = new ArrayList<String>();
		Connection conn = SingletonConnection.getConnection();
		PreparedStatement ps;
		try {
			ps = conn.prepareStatement("select libelle_module from module");
			ResultSet rs = ps.executeQuery();
			while (rs.next()) {
				String nm = rs.getString("libelle_module");
				nomm.add(nm);
			}
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return nomm;
	}

	public List<String> nomElement() {
		List<String> nome = new ArrayList<String>();
		Connection conn = SingletonConnection.getConnection();
		PreparedStatement ps;
		try {
			ps = conn.prepareStatement("select libelle_elt from element");
			ResultSet rs = ps.executeQuery();
			while (rs.next()) {
				String ne = rs.getString("libelle_elt");
				nome.add(ne);
			}
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return nome;
	}

	public int getIdFiliere(Filiere f) {
		Connection conn = SingletonConnection.getConnection();
		PreparedStatement ps;
		int idfiliere = 0;
		try {
			ps = conn.prepareStatement("select * from filiere where nom_filier=?");
			ps.setString(1, f.getFiliere());
			ResultSet rs = ps.executeQuery();
			while (rs.next()) {
				idfiliere = rs.getInt("id_filiere");
			}
			ps.close();
			conn.close();
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return idfiliere;

	}

	public Filiere getIDFil(int id) {
		Connection conn = SingletonConnection.getConnection();
		PreparedStatement ps;
		Filiere f = new Filiere();
		try {
			ps = conn.prepareStatement("select * from filiere where id_filiere=?");
			ps.setInt(1, id);
			ResultSet rs = ps.executeQuery();
			while (rs.next()) {
				f.setIDFiliere(rs.getInt("id_filiere"));
				f.setIDetab(rs.getInt("fid_etab"));
				f.setFiliere(rs.getString("nom_filier"));
			}
			ps.close();
			conn.close();
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return f;

	}

	public void UpdateEtab(Etablissement etablissement) {
		Connection conn = SingletonConnection.getConnection();
		PreparedStatement ps;

		try {
			ps = conn.prepareStatement("update etablissement set nom_etab=?,description_etab=? where id_etab=?");
			ps.setString(1, etablissement.getEtablissement());
			ps.setString(2, etablissement.getDescription());
			ps.setInt(3, etablissement.getIDEtablissement());
			ps.executeUpdate();

		} catch (Exception e) {
			e.printStackTrace();
		}

	}

	public Etape getIdEtape(int id) {
		Connection conn = SingletonConnection.getConnection();
		PreparedStatement ps;
		Etape p = new Etape();
		try {
			ps = conn.prepareStatement("select * from etape where id_Etape=?");
			ps.setInt(1, id);
			ResultSet rs = ps.executeQuery();
			while (rs.next()) {
				p.setIDEtape(rs.getInt("id_Etape"));
				p.setLabelleEtape(rs.getString("libelle_etape"));
				p.setDiplomante(rs.getBoolean("diplomante"));
				p.setIDFiliere(rs.getInt("fid_fil"));
			}
			ps.close();
			conn.close();
		} catch (Exception e) {
			e.printStackTrace();

		}
		return p;
	}

	public double getNoteElement(String massarEtud, String elt) {
		double moyenne=0,somme=0 ;
		String etat ;
		Connection conn = SingletonConnection.getConnection();
		PreparedStatement ps;
		try {
		HashMap<String, Double> sselts = Souselts_Note(massarEtud, elt);
		List<Double> result = new ArrayList<Double>(sselts.values());
		for(int i=0;i<3;i++) {
			somme+=result.get(i);
		}
		moyenne=somme/3;
		if(moyenne>=10) {
			etat ="Valide";
		}else {
			etat="Rattrapage";
		}
		ps=conn.prepareStatement("update note_elt set NOTE=? ,Etat=? where id_etudiantt=? and id_eltt=? ");
		ps.setDouble(1, moyenne);
		ps.setString(2,etat);
		ps.setString(3, massarEtud);
		ps.setInt(4, getIDElement(elt));
		ps.executeUpdate();
		ps.close();
		conn.close();
		}catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		
		return moyenne;
	}

	public HashMap<String, Double> Souselts_Note(String massarEtud,String elt){
		Connection conn = SingletonConnection.getConnection();
		PreparedStatement ps;
		int id_elt = getIDElement(elt);
		HashMap<String,Double> sselts = new HashMap<String, Double>();
		try {
			ps=conn.prepareStatement("Select Note_tp , Note_ExamO, Note_CC from note_elt where id_eltt=? and id_etudiantt=?");
			ps.setInt(1, id_elt);
			ps.setString(2, massarEtud);
			ResultSet rs = ps.executeQuery();
			String[] se= {"TP","Ordinaire","CC"};
			String[] nt = {"Note_tp","Note_ExamO","Note_CC"};
			while(rs.next()) {
				for (int i = 0; i < nt.length; i++) {
					sselts.put(se[i], rs.getDouble(nt[i]));
				}
			}
			ps.close();
			conn.close();
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return sselts ;
	}

	@SuppressWarnings("null")
	public double NotedsModule(String module,String massarEtud ) {
		int id_module = getIDModule(module);
		double moyenne=0,somme=0,sc=0;
		List<Element> elts = getElementByMODULE(id_module);
		int c[]=new int[elts.size()];
		double tab[] = new double[elts.size()];
		
		for (int i = 0; i < elts.size(); i++) {
			Element e =INFO_ELEMENT(elts.get(i).getLabelleElement());
			double m = getNoteElement(massarEtud, e.getLabelleElement());
			tab[i]=m;
			c[i]=e.getCoeff();
			sc +=c[i];
		}
		for (int i = 0; i < tab.length; i++) {
			moyenne+=tab[i]*c[i];
		}
		somme=moyenne/sc;
		double s = Math.round(somme*100.0)/100.0;
		return s ;
	}
	
	public String get_Etat_M(String module,String massarEtud) {
		String etat =null;
		double d = NotedsModule(module, massarEtud);
		etat=d>=10?"Valide":"Rattrapage";
		return etat;
	}
	
	public void saveNOTE_ELT(String massarEtud , String element ,int TP,int ORD,int CC) {
		Connection conn = SingletonConnection.getConnection();
		PreparedStatement ps;
		int id_elt = getIDElement(element);
		try {
			ps =conn.prepareStatement("insert into note_elt(id_etudiantt,id_eltt,Note_tp,Note_ExamO,Note_CC) values(?,?,?,?,?) ");
			ps.setString(1, massarEtud);
			ps.setInt(2, id_elt);
			ps.setInt(3, TP);
			ps.setInt(4, ORD);
			ps.setInt(5, CC);
			ps.executeUpdate();
			getNoteElement(massarEtud, element);
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
				
	
	}
	
	public String getETAT_NOTE(String massarEtud,String elt) {
		int id_elt = getIDElement(elt);
		String etat=null;
		Connection conn = SingletonConnection.getConnection();
		PreparedStatement ps;
		try {
			ps=conn.prepareStatement("select Etat from note_elt where id_etudiantt=? and id_eltt=? ");
			ps.setString(1, massarEtud);
			ps.setInt(2, id_elt);
			ps.executeQuery();
			ResultSet rs =ps.executeQuery();
			while(rs.next()) {
				etat = rs.getString("Etat");
				
			}
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return etat;
	}
	
	public ETUD_NOTE switch_to_etudN(Etudiant e,String elt) {
		ETUD_NOTE en = new ETUD_NOTE(e.getMassarEtud(), e.getNomFr(), e.getPrenomFr());
		int id_elt = getIDElement(elt);
		Connection conn = SingletonConnection.getConnection();
		PreparedStatement ps;
		try {
			ps=conn.prepareStatement("select  NOTE from note_elt where id_etudiantt=? and id_eltt=?");
			ps.setString(1, e.getMassarEtud());
			ps.setInt(2, id_elt);
			ResultSet rs =ps.executeQuery();
			while(rs.next()) {
				en.setNOTE(rs.getInt("NOTE"));
			}
			
		} catch (Exception e2) {
			// TODO: handle exception
			e2.printStackTrace();
		}
		return en ;
	}
	public double recuperer_note(String massarEtud,String element) {
		Connection conn = SingletonConnection.getConnection();
		PreparedStatement ps;
		int id_elt = getIDElement(element);
		double note =0;
		try {
			ps=conn.prepareStatement("select  NOTE from note_elt where id_etudiantt=? and id_eltt=?");
			ps.setString(1, massarEtud);
			ps.setInt(2, id_elt);
			ResultSet rs =ps.executeQuery();
			while(rs.next()) {
				note=rs.getInt("NOTE");
			}
			ps.close();
			conn.close();
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return note;
	}
	
	public void Update_element(Element e ) {
		Connection conn = SingletonConnection.getConnection();
		PreparedStatement ps;
		try {
			ps=conn.prepareStatement("update element set libelle_elt=?,Note_Validation=?,coefficient=? where id_elt=? ");
			ps.setString(1, e.getLabelleElement());
			ps.setInt(2, e.getNote_validation());
			ps.setInt(3, e.getCoeff());
			ps.setInt(4, e.getIDElement());
			ps.executeUpdate();
			ps.close();
			conn.close();
		} catch (Exception e2) {
			// TODO: handle exception
			e2.printStackTrace();
		}
	}
	
	public String getModule(int id_module) {
		Connection conn = SingletonConnection.getConnection();
		PreparedStatement ps;
		String module=null;
		try {
			ps=conn.prepareStatement("select libelle_module from module where id_module=? ");
			ps.setInt(1, id_module);
			ResultSet rs =ps.executeQuery();
			while(rs.next()) {
				module=rs.getString("libelle_module");
			}
			ps.close();
			conn.close();
			} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return module ;
	}

	public List<ETUD_NOTE> getRattrapage(String element){
		List<ETUD_NOTE> en = new ArrayList<ETUD_NOTE>();
		Connection conn = SingletonConnection.getConnection();
		int id_elt = getIDElement(element);
		PreparedStatement ps;
		try {
			ps=conn.prepareStatement("select id_etudiantt from note_elt where id_eltt=? and Etat='Rattrapage'");
			ps.setInt(1, id_elt);
			ResultSet rs =ps.executeQuery();
			while(rs.next()) {
				ETUD_NOTE e = new ETUD_NOTE(rs.getString("id_etudiantt"));
				e.setEtat("Rattrapage");
				Etudiant et = ie.getET3(rs.getString("id_etudiantt"));
				e.setNom(et.getNomFr());
				e.setPrenom(et.getPrenomFr());
				en.add(e);
			}
			ps.close();
			conn.close();
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return en;
	}

	public List<ETUD_NOTE> getListeNote(String element){
		List<ETUD_NOTE> en = new ArrayList<ETUD_NOTE>();
		Connection conn = SingletonConnection.getConnection();
		int id_elt = getIDElement(element);
		PreparedStatement ps;
		try {
			ps=conn.prepareStatement("select id_etudiantt , NOTE,Etat from note_elt where id_eltt=? ");
			ps.setInt(1, id_elt);
			ResultSet rs =ps.executeQuery();
			while(rs.next()) {
				ETUD_NOTE e = new ETUD_NOTE(rs.getString("id_etudiantt"),rs.getDouble("NOTE"));
				Etudiant et = ie.getET3(rs.getString("id_etudiantt"));
				e.setNom(et.getNomFr());
				e.setPrenom(et.getPrenomFr());
				e.setEtat(getETAT_NOTE(rs.getString("id_etudiantt"), element));
				en.add(e);
			}
			ps.close();
			conn.close();
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return en;
	}
	
}