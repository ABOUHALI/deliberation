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

import com.itextpdf.text.log.SysoCounter;

import metierEntite.ETUD_NOTE;
import metierEntite.Element;
import metierEntite.Etudiant;
import metierEntite.Inscrip_pedagogique;
import metierEntite.Module;

public class InscripPDAO {
	private InscripEnLigne ie = new InscripEnLigne();
	public StructureETab se = new StructureETab();

	public void addIP(Inscrip_pedagogique ip) {
		Connection conn = SingletonConnection.getConnection();
		PreparedStatement ps;
		try {
			ps = conn.prepareStatement("insert into inscrip_pedago(fid_etdt,fid_elt,fid_ac) values(?,?,?)");
			ps.setString(1, ip.getIdetud());
			ps.setInt(2, ip.getElt());
			ps.setInt(3, ip.getId_anneacad());
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
			ps = conn.prepareStatement("select fid_ac, fid_etdt,fid_elt from inscrip-pedago");
			ResultSet rs = ps.executeQuery();
			while (rs.next()) {
				Inscrip_pedagogique ip = new Inscrip_pedagogique(rs.getString("fid_etdt"), rs.getInt("fid_elt"),
						rs.getInt("fid_ac"));
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

	public HashSet<Etudiant> getListeEtudiantXXXX(List<Element> elts,int id_aa) {
		List<Etudiant> et = null;
		HashSet<Etudiant> etudiants = new HashSet<Etudiant>();
		/* recupere les ids a partir des elements */
		for (int i = 0; i < elts.size(); i++) {
			et = getEtudiantParElement(elts.get(i).getIDElement(),id_aa);

			etudiants.addAll(et);
		}
		/* test */
		return etudiants;
	}
	
	
	
	public List<Etudiant> getEtudiantParElement(int id,int id_aa) {
		List<Etudiant> etdts = new ArrayList<Etudiant>();
		Connection conn = SingletonConnection.getConnection();
		PreparedStatement ps;
		try {
			ps = conn.prepareStatement("select fid_etdt from inscrip_pedago where fid_elt=? and fid_ac=?  ");
			ps.setInt(1, id);
			ps.setInt(2, id_aa);
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
			Row headerRow =rows.next();
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

	public List<ETUD_NOTE> recupererLISTE_Note(InputStream file,String elt,int id_anne) {
		ArrayList<ETUD_NOTE> etudiants = new ArrayList<ETUD_NOTE>();
		ArrayList<String> values = new ArrayList<String>();
		try {
			HSSFWorkbook wb = new HSSFWorkbook(file);
			HSSFSheet sheet = wb.getSheetAt(0);
			Iterator<Row> rows = sheet.rowIterator();
			Row headerRow =rows.next();
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
						values.add(Double.toString((double) (cell.getNumericCellValue())));

					}

				}
				ETUD_NOTE e = new ETUD_NOTE();
				e.setCNE(values.get(0));
				e.setNom(values.get(1));
				e.setPrenom(values.get(2));
				double tp = Double.parseDouble(values.get(3));
				double cc = Double.parseDouble(values.get(4));
				double o =Double.parseDouble(values.get(5));
				se.saveNOTE_ELT(values.get(0), elt, tp, o, cc,id_anne);
				e.setNOTE(se.recuperer_note(values.get(0), elt,id_anne));
				etudiants.add(e);
			}
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return etudiants;
	}	

	public List<ETUD_NOTE> recupererLISTE_Ratt(InputStream file,String elt,int id_anne) {
		List<ETUD_NOTE> en = new ArrayList<ETUD_NOTE>();
		ArrayList<String> values = new ArrayList<String>();
		try {
			HSSFWorkbook wb = new HSSFWorkbook(file);
			HSSFSheet sheet = wb.getSheetAt(0);
			Iterator<Row> rows = sheet.rowIterator();
			Row headerRow =rows.next();
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
						values.add(Double.toString((double) (cell.getNumericCellValue())));

					}

				}
				ETUD_NOTE e = new ETUD_NOTE();
				e.setCNE(values.get(0));
				e.setNom(values.get(1));
				e.setPrenom(values.get(2));
				double nr = Double.parseDouble(values.get(3));
				se.calcule_Ratt(values.get(0), elt,nr,id_anne);
				e.setNOTE(se.recuperer_note(values.get(0), elt,id_anne));
				e.setEtat(se.getETAT_NOTE(values.get(0), elt));
				en.add(e);
			}
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return en;
		
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
		
	
	public double calculerSEM(String massarEtud,String semestre,int id_anne) {
		List<Element> elt = getElementDANSSemestre(semestre);
		double d =0,res=0;
		if(is_etud_sem(massarEtud, semestre)) {
		for (int i = 0; i < elt.size(); i++) {
			String element =se.getElement(elt.get(i).getIDElement());
				double e = se.recuperer_note(massarEtud, element,id_anne);
				d+=e;
				
		}}
		res=d/elt.size();
		return res;
	}
	
	public String getEtatSEM(String massarEtud ,String semestre,int id_anne) {
		String etat="";
		double ms =calculerSEM(massarEtud, semestre,id_anne);
		List<Module> m = moduleDANSsemestre(semestre);
		boolean hh1=true;
		boolean hh2 =true;
		for (int i = 0; i < m.size(); i++) {
			double nm=se.NotedsModule(m.get(i).getLabelleMod(), massarEtud,id_anne);
			hh1 = hh1 && nm >= 10;
			hh2 = hh2 && nm <= 10 && nm>=5;
			
		}
		if(hh1 && ms >= 10) { etat="Valide";}
		else if(!hh2 && ms >= 10) {
			etat="Valide par Compensation";
		}else {
			etat="Non Valide";}
		
			
	return etat;
	}
	
	public boolean is_etud_elt(String massarEtud , String elt) {
		int id_elt = se.getIDElement(elt);
		boolean b =false ;
		Connection conn = SingletonConnection.getConnection();
		PreparedStatement ps;
		try {
			ps=conn.prepareStatement("select id_etudiantt from note_elt where id_etudiantt=? and id_eltt=?");
			ps.setString(1, massarEtud);
			ps.setInt(2, id_elt);
			ResultSet rs=ps.executeQuery();
			b=rs.next();
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return b ;
	}
	public boolean etud_mod(String module,String massarEtud) {
		boolean b =true ;
		int id_module = se.getIDModule(module);
		List<Element> elts = se.getElementByMODULE(id_module);
		for (int i = 0; i < elts.size(); i++) {
			if(!is_etud_elt(massarEtud, elts.get(i).getLabelleElement())) {
				b=false;
				break;
			}
		}
		
		
		return b ;
				
	}
	public boolean is_etud_sem(String massarEtud ,String semestre) {
		List<Element> elt =getElementDANSSemestre(semestre);
		List<Element> e = new ArrayList<Element>();
		boolean b = true ;
		for (int i = 0; i < elt.size(); i++) {
			e.add(new Element(se.getElement(elt.get(i).getIDElement())));
		}
		for (int i = 0; i < e.size(); i++) {
			b=is_etud_elt(massarEtud,e.get(i).getLabelleElement());
			if(!b) break;
		}
		return b;
		
	}
	public List<Module> moduleDANSsemestre(String semestre){
		Connection conn = SingletonConnection.getConnection();
		PreparedStatement ps;
		List<Module> m = new ArrayList<Module>();
		try {
			ps=conn.prepareStatement("select m.* from module m , semestre s where m.fid_semestre =s.id_semestre and s.libelle_semestre=?");
			ps.setString(1, semestre);
			ResultSet rs =ps.executeQuery();
			while(rs.next()) {
				m.add(new Module(rs.getInt("id_module"),rs.getString("libelle_module"), rs.getInt("fid_semestre"),rs.getInt("coefficient"), rs.getInt("note_valid"), rs.getInt("nbr_elt")));
			}
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return m;
	}

	public List<ETUD_NOTE> Releve_Note(String massarEtudiant) {
		Connection conn = SingletonConnection.getConnection();
		PreparedStatement ps;
		List<ETUD_NOTE> e =new ArrayList<ETUD_NOTE>();
		try {
			ps=conn.prepareStatement("select e.massarEtud ,e.NomFr , e.PrenomFr,et.libelle_elt,ne.NOTE,ne.Etat from etudiant e , element et , note_elt ne  where e.massarEtud=ne.id_etudiantt and ne.id_eltt=et.id_elt and e.massarEtud=?");
			ps.setString(1, massarEtudiant);
			ResultSet rs =ps.executeQuery();
			while(rs.next()) {
				ETUD_NOTE en = new ETUD_NOTE();
				en.setCNE(rs.getString("massarEtud"));
				en.setNom(rs.getString("NomFr"));
				en.setPrenom(rs.getString("PrenomFr"));
				en.setElement(rs.getString("libelle_elt"));
				en.setNOTE(rs.getDouble("NOTE"));
				en.setEtat(rs.getString("Etat"));
				e.add(en);
			}
		} catch (Exception ex) {
			// TODO: handle exception
			ex.printStackTrace();
		}
		return e ;
	}

	
}
