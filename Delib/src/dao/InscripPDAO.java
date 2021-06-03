package dao;

import java.io.InputStream;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;

import org.apache.poi.hssf.usermodel.HSSFCell;
import org.apache.poi.hssf.usermodel.HSSFRow;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellType;
import org.apache.poi.ss.usermodel.Row;

import metierEntite.ETUD_NOTE;
import metierEntite.Element;
import metierEntite.Etudiant;
import metierEntite.Inscrip_pedagogique;

public class InscripPDAO {
	private InscripEnLigne ie = new InscripEnLigne();
	public StructureETab se = new StructureETab();

	public void addIP(Inscrip_pedagogique ip) {
		Connection conn = SingletonConnection.getConnection();
		PreparedStatement ps;
		try {
			ps = conn.prepareStatement("insert into inscrip_pedago(fid_etdt,fid_elt,anneAcad) values(?,?,?)");
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

	public List<Inscrip_pedagogique> getIP() {
		List<Inscrip_pedagogique> ipd = new ArrayList<Inscrip_pedagogique>();
		Connection conn = SingletonConnection.getConnection();
		PreparedStatement ps;
		try {
			ps = conn.prepareStatement("select anneAcad, fid_etdt,fid_elt from inscrip-pedago");
			ResultSet rs = ps.executeQuery();
			while (rs.next()) {
				Inscrip_pedagogique ip = new Inscrip_pedagogique(rs.getString("fid_etdt"), rs.getInt("fid_elt"),
						rs.getDate("anneAcad"));
				ipd.add(ip);
			}
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return ipd;
	}

	public List<Element> getElementDANSSemestre(String semestre) {
		List<Element> elts = new ArrayList<Element>();
		Connection conn = SingletonConnection.getConnection();
		PreparedStatement ps;
		try {
			ps = conn.prepareStatement(
					"select id_elt from element e , module m , semestre s where e.fid_module=m.id_module and m.fid_semestre=s.id_semestre and s.libelle_semestre=? ");
			ps.setString(1, semestre);
			ResultSet rs = ps.executeQuery();
			while (rs.next()) {
				Element el = new Element(rs.getInt("id_elt"));
				elts.add(el);
			}
		} catch (Exception e) {
			// TODO: handle exception
		}
		return elts;
	}

	public HashSet<Etudiant> getListeEtudiantXXXX(List<Element> elts) {
		List<Etudiant> et = null;
		HashSet<Etudiant> etudiants = new HashSet<Etudiant>();
		/* recupere les ids a partir des elements */
		for (int i = 0; i < elts.size(); i++) {
			et = getEtudiantParElement(elts.get(i).getIDElement());

			etudiants.addAll(et);
		}
		/* test */
		return etudiants;
	}

	public List<Etudiant> getEtudiantParElement(int id) {
		List<Etudiant> etdts = new ArrayList<Etudiant>();
		Connection conn = SingletonConnection.getConnection();
		PreparedStatement ps;
		try {
			ps = conn.prepareStatement("select fid_etdt from inscrip_pedago where fid_elt=? ");
			ps.setInt(1, id);
			ResultSet rs = ps.executeQuery();
			while (rs.next()) {
				String massar = rs.getString("fid_etdt");
				Etudiant e = ie.getET3(massar);
				etdts.add(e);
			}
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return etdts;
	}

	public List<Element> getElementDANSModule(String module) {
		List<Element> m = new ArrayList<Element>();
		Connection conn = SingletonConnection.getConnection();
		PreparedStatement ps;
		try {
			ps = conn.prepareStatement(
					"select id_elt from element e ,module m where e.fid_module=m.id_module and m.libelle_module=?");
			ps.setString(1, module);
			ResultSet rs = ps.executeQuery();
			while (rs.next()) {
				Element e = new Element(rs.getInt("id_elt"));
				m.add(e);
			}
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return m;
	}

	public boolean isEtudiantPEDA(String massarEtud) {
		boolean b = false;
		List<Etudiant> et = EtudiantInscrisPedag();
		for (Etudiant p : et) {
			b = p.getMassarEtud().equals(massarEtud);
			if (b) {
				break;
			}
		}
		return b;

	}
	public boolean isEtudiantPElt(String massarEtud ,String elt) {
		boolean b = false ;
		int id_elt = se.getIDElement(elt);
		Connection conn = SingletonConnection.getConnection();
		PreparedStatement ps;
		try {
			ps=conn.prepareStatement("select fid_etdt from inscrip_pedago where fid_elt=? and fid_etdt=?");
			ps.setInt(1, id_elt);
			ps.setString(2, massarEtud);
			ResultSet rs =ps.executeQuery();
			b =rs.next();
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return b ;
		
	}

	public List<Etudiant> EtudiantInscrisPedag() {
		List<Etudiant> etud = new ArrayList<Etudiant>();
		Connection conn = SingletonConnection.getConnection();
		PreparedStatement ps;
		try {
			ps = conn.prepareStatement("select distinct fid_etdt from inscrip_pedago ");
			ResultSet rs = ps.executeQuery();
			while (rs.next()) {
				Etudiant e = new Etudiant(rs.getString("fid_etdt"));
				etud.add(e);
			}
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return etud;
	}

	
	
	
	@SuppressWarnings("resource")
	public List<ETUD_NOTE> recupererLISTE(InputStream file) {
		ArrayList<ETUD_NOTE> etudiants = new ArrayList<ETUD_NOTE>();
		ArrayList<String> values = new ArrayList<String>();
		try {
			HSSFWorkbook wb = new HSSFWorkbook(file);
			HSSFSheet sheet = wb.getSheetAt(0);
			Iterator<Row> rows = sheet.rowIterator();
			while (rows.hasNext()) {
				System.out.println("  in  ");
				values.clear();
				HSSFRow row = (HSSFRow) rows.next();
				Iterator<Cell> cells = row.cellIterator();

				while (cells.hasNext()) {

					HSSFCell cell = (HSSFCell) cells.next();

					if (cell.getCellType() == CellType.STRING)
						values.add(cell.getStringCellValue());
					else if (cell.getCellType() == CellType.NUMERIC) {
						values.add(Integer.toString((int) (cell.getNumericCellValue())));

					}

				}
				ETUD_NOTE e = new ETUD_NOTE();
				e.setCNE(values.get(0));
				e.setNom(values.get(1));
				e.setPrenom(values.get(2));
				etudiants.add(e);

			}
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return etudiants;
	}

	public List<ETUD_NOTE> EtudiantNoteV(List<Etudiant> e, String elt) {
		List<ETUD_NOTE> en = new ArrayList<ETUD_NOTE>();
		int id_elt = se.getIDElement(elt);
		Connection conn = SingletonConnection.getConnection();
		PreparedStatement ps;
		try {
			for (int i = 0; i < e.size(); i++) {
				ps = conn.prepareStatement(
						"select id_etudiantt from note_elt where id_etudiantt=? and NOTE IS NOT NULL and id_eltt=?");
				ps.setString(1, e.get(i).getMassarEtud());
				ps.setInt(2, id_elt);
				ResultSet rs = ps.executeQuery();
				while (rs.next()) {
					en.add(new ETUD_NOTE(rs.getString("id_etudiantt")));
				}
			}
		} catch (Exception e2) {
			// TODO: handle exception
			e2.printStackTrace();
		}
		return en;
	}

	public Etudiant info_etudiant(String massar) {
		Connection conn = SingletonConnection.getConnection();
		PreparedStatement ps;
		Etudiant e = null;
		try {
			ps = conn.prepareStatement("select massarEtud , NomFr , PrenomFr from etudiant where massarEtud=? ");
			ps.setString(1, massar);
			ResultSet rs = ps.executeQuery();
			while (rs.next()) {
				e = new Etudiant(rs.getString("massarEtud"), rs.getString("NomFr"), rs.getString("PrenomFr"));
			}

		} catch (Exception ex) {
			// TODO: handle exception
			ex.printStackTrace();
		}
		return e;
	}

	public List<Etudiant> etudiant_Dnote(List<Etudiant> e,String elt) {
		List<Etudiant> nv = new ArrayList<Etudiant>();
		int id_elt = se.getIDElement(elt);
		Connection conn = SingletonConnection.getConnection();
		PreparedStatement ps;
		try {
			
				ps = conn.prepareStatement("select fid_etdt from inscrip_pedago where fid_elt=? ");
				ps.setInt(1, id_elt);
				ResultSet rs = ps.executeQuery();
				while(rs.next()) {
					Etudiant et = new Etudiant(rs.getString("fid_etdt"));
					nv.add(et);
					
				}
			
		} catch (Exception e2) {
			// TODO: handle exception
			e2.printStackTrace();
		}
		return nv ;
	}

	public boolean is_note_elt(String massarEtud , String element) {
		boolean b =false ;
		int id_elt = se.getIDElement(element);
		Etudiant e = new Etudiant(massarEtud);
		List<Etudiant> es = new ArrayList<Etudiant>();
		es.add(e);
		List<ETUD_NOTE> lise = EtudiantNoteV(es, element);
		b=lise.isEmpty();
		return !b;
	}

	public List<ETUD_NOTE> recupererLISTE_Note(InputStream file,String elt) {
		ArrayList<ETUD_NOTE> etudiants = new ArrayList<ETUD_NOTE>();
		ArrayList<String> values = new ArrayList<String>();
		try {
			HSSFWorkbook wb = new HSSFWorkbook(file);
			HSSFSheet sheet = wb.getSheetAt(0);
			Iterator<Row> rows = sheet.rowIterator();
			while (rows.hasNext()) {
				System.out.println("  in  ");
				values.clear();
				HSSFRow row = (HSSFRow) rows.next();
				Iterator<Cell> cells = row.cellIterator();

				while (cells.hasNext()) {

					HSSFCell cell = (HSSFCell) cells.next();

					if (cell.getCellType() == CellType.STRING)
						values.add(cell.getStringCellValue());
					else if (cell.getCellType() == CellType.NUMERIC) {
						values.add(Integer.toString((int) (cell.getNumericCellValue())));

					}

				}
				ETUD_NOTE e = new ETUD_NOTE();
				e.setCNE(values.get(0));
				e.setNom(values.get(1));
				e.setPrenom(values.get(2));
				int tp = Integer.parseInt(values.get(3));
				int cc = Integer.parseInt(values.get(4));
				int o =Integer.parseInt(values.get(5));
				se.saveNOTE_ELT(values.get(0), elt, tp, o, cc);
				e.setNOTE(se.recuperer_note(values.get(0), elt));
				etudiants.add(e);
			}
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return etudiants;
	}	

	public List<ETUD_NOTE> getListeEtudiant(String elt ){
		Connection conn = SingletonConnection.getConnection();
		PreparedStatement ps;
		List<ETUD_NOTE> en = new ArrayList<ETUD_NOTE>();
		int id_elt = se.getIDElement(elt);
		try {
			ps=conn.prepareStatement("select id_etudiantt, NOTE  from note_elt where id_eltt=?");
			ps.setInt(1, id_elt);
			ResultSet rs =ps.executeQuery();
			while(rs.next()) {
				String massarEtu=rs.getString("id_etudiantt");
				Etudiant e = info_etudiant(massarEtu);
				ETUD_NOTE ee = new ETUD_NOTE(e.getMassarEtud(), e.getNomFr(), e.getPrenomFr(), rs.getInt("NOTE"));
				en.add(ee);
			}
			ps.close();
			conn.close();
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return en ;
	}
}
