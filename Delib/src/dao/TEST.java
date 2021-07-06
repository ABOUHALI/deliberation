package dao;

import java.sql.Connection;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import metierEntite.Module;


public class TEST {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Connection conn = SingletonConnection.getConnection();
		StructureETab se = new StructureETab();
		InscriptionADministrative iad = new InscriptionADministrative();
		InscripPDAO ip = new InscripPDAO();
		InscripEnLigne ie = new InscripEnLigne();
		ProfesseurDao pd = new ProfesseurDao();
		java.sql.Date date_sql = new java.sql.Date(4/13/2021);
		/*Etudiant e = new Etudiant("test1", "mm", "mm", "mm", "mm", "mm", "mm", "mm", "mm",date_sql , "mm", "mm", "mm", "mm", "mm", "mm", "mm", "mm", "mm", "mm", "mm", "mm", "mm", null);
		InscripEnLigne il = new InscripEnLigne();
		il.addEt(e);
		User useet = new User(0, "ayman", "ayman", null, 0, null);
		il.addEtUSER(e, useet);*/
		/*Etablissement etab = new Etablissement(0, "BACHELOR", "DIE BESTE");
		se.addEtab(etab);
		
		se.addFiliere(f, etab);	*/
		/*List<Etablissement > le = se.listETab();
		for (int i = 0; i < le.size(); i++) {
		System.out.println(	le.get(i).getIDEtablissement());
		}
		se.deleteEtabById(1);*/
		/*Etudiant e = new Etudiant("AYMan", "mm", "mm", "mm", "mm", "mm", "mm", "mm", "mm",date_sql , "mm", "mm", "mm", "mm", "mm", "mm", "mm", "mm", "mm", "mm", "mm", "mm", "mm", null);
		Filiere f = new Filiere(0, "linfo", 0);
		java.sql.Date a = new java.sql.Date(2021, 4, 25);
		annee_universitaire au = new annee_universitaire(a , "1");
		iad.addAnneUniversitaire(au);
		Inscrip_Administartive ia = new Inscrip_Administartive(1, 0, null, null, null, a, a, "kamilia", "meknes", 0600000000, "meknes", true, null);
		iad.addAdmini(ia, f, e, au);*/
		/*InscriptionADministrative iad =  new InscriptionADministrative();
		List<Etudiant> lista = iad.jointureEtIA();
		for (int i = 0; i < lista.size(); i++) {
			System.out.println(lista.get(i).getNomFr());
		}*/
		/*InscripEnLigne il = new InscripEnLigne();
		List<Etudiant> test = il.listEt();
		for (int i = 0; i < test.size(); i++) {
			System.out.println(test.get(i).getMassarEtud());
		}
		se.addEtape(new  Etape(0,"2018-2018",false ,1));*/
		/*List<annee_universitaire> au=se.List_ann();
		for (int i = 0; i < au.size(); i++) {
			System.out.println(au.get(i).getAnne_acad());
		}*/
		/*InscriptionADministrative  dao = new InscriptionADministrative();
		Inscrip_Administartive iad = new Inscrip_Administartive(0, 1, null, null, null, new java.sql.Date(552021), new java.sql.Date(552021), "kamilia", 151515, "kamilooa", true, null, null, null);
		dao.addIA(iad, 1);
		dao.addIA_FIL_ET(iad, "test1", 1);
		System.out.println(1);*/
		/*InscriptionADministrative ia = new InscriptionADministrative();
		String anacd = "3921-05-25";
		
		java.sql.Date d = java.sql.Date.valueOf(anacd);
		System.out.println(d);
		int id_anacad = se.IDanneUniv(d);
		Inscrip_Administartive iad = new Inscrip_Administartive(id_anacad,16,null,null,null,null,null,"test",777777,"kamilia",true,null,null,null);
		ia.addIA(iad,id_anacad);
		int ID=0;
		System.out.println(iad.getId_inscrAdm());
		ia.addIA_FIL_ET(ID, "test1", 2);*/
		/*InscriptionADministrative ia = new InscriptionADministrative();
		List<EtudFil> etd = ia.jointureEtIA();
		for (int i = 0; i < etd.size(); i++) {
			System.out.println(etd.get(i));
		}*/
		/*InscripPDAO ipd = new InscripPDAO();
		List<Element> elts = new ArrayList<Element>();
		int id = se.getIDElement("java 2");
		*/
		//***teeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeest*//
		/*InscripPDAO ipd = new InscripPDAO();
		System.out.println(ipd.isEtudiantPEDA("M133462726"));*/
		/*List<EtudFil> etud =iad.jointureEtIA();
		System.out.println(etud);*/
		/*for (int i = 0; i < elts.size(); i++) {
			System.out.println(elts.get(i).getIDElement());
		}*/
		/*List<Etudiant> etds = ip.getEtudiantParElement(1);
		
		List<ETUD_NOTE> etd = ip.EtudiantNoteV(etds, "java 1");
		
		List<ETUD_NOTE> nn = new ArrayList<ETUD_NOTE>();
		for (int i = 0; i < etd.size(); i++) {
			Etudiant e = ip.info_etudiant(etd.get(i).getCNE());
			ETUD_NOTE en = new ETUD_NOTE(e.getMassarEtud(), e.getNomFr(), e.getPrenomFr(), se.getNoteElement(e.getMassarEtud(), "java 1"));
			nn.add(en);
		}
		System.out.println(nn);*/
		
		/*HashSet<Etudiant> etdts  = ipd.getListeEtudiantXXXX(elts);
		System.out.println("RF"+etdts);*/
		/*System.out.println(etdts);
		/*System.out.println(etdts.toString());*/
		/*HashSet<Etudiant> et = ipd.getListeEtudiantXXXX(elts);
		System.out.println(et);*/
		/*InscriptionADministrative ia = new InscriptionADministrative();
		List<EtudFil> ef = ia.jointureEtIA();
		System.out.println(ef);*/
		/*List<metierEntite.Module> m =  se.listModule();
		System.out.println(m);*/
		/*for (int i = 0; i < e.size(); i++) {
			System.out.println(e.get(i).getMassarEtud());
		}*/
		/*int id_module = se.getIDModule("java");
		System.out.println(id_module);
		List<Element> elts = ip.getElementDANSModule("java");
		System.out.println(elts);
		System.out.println(ip.getListeEtudiantXXXX(elts));*/
		/*System.out.println(ip.isEtudiantPElt("Z789456","algo 2"));*/
		/*int id_module =se.getIDModule("java");
		List<Element> e = se.getElementByMODULE(id_module);
		List<Element> elts = new ArrayList<Element>();
			
		for (int i = 0; i < e.size(); i++) {
			elts.add(se.INFO_ELEMENT(e.get(i).getLabelleElement()));
		}
		List<Etudiant> et1 = ip.getEtudiantParElement(elts.get(0).getIDElement());
		List<Etudiant> et2 = ip.getEtudiantParElement(elts.get(1).getIDElement());
		//pour et1///
		List<ETUD_NOTE> nn1= ip.EtudiantNoteV(et1, elts.get(0).getLabelleElement());//gha massarETUD li kyn fhad ETUD_NOTE
		List<ETUD_NOTE> en1 =new ArrayList<ETUD_NOTE>();
		for (int i = 0; i < nn1.size(); i++) {
			en1.add(se.switch_to_etudN(ie.getET3(nn1.get(i).getCNE()), elts.get(0).getLabelleElement()));
		}
		System.out.println(en1);
		//pour et2//
		List<ETUD_NOTE > en2 = new ArrayList<ETUD_NOTE>();
		for (int i = 0; i < et2.size(); i++) {
			en2.add(se.switch_to_etudN(et2.get(i), elts.get(1).getLabelleElement()));
		}*/
		/*List<Element> elts = se.getElementByMODULE(se.getIDModule("java"));
		List<Element> nv = new ArrayList<Element>();
		for (int i = 0; i < elts.size(); i++) {
			nv.add(se.INFO_ELEMENT(elts.get(i).getLabelleElement()));
		}
		HashSet<Etudiant> hs =ip.getListeEtudiantXXXX(nv);
		System.out.println(hs);*/
		/*System.out.println(pd.ModulefromRM(7));
		/*List<Etudiant> ee =new ArrayList<Etudiant>(hs);
		System.out.println(ee);
		System.out.println(hs);


		System.out.println(ip.etud_mod("java","M133462726"));*/
		/*int id_filiere =se.getIDFiliere("Informatique");
		List<Semestre> sem =pd.semsFROM_fil(id_filiere);
		List<Element> totals = new ArrayList<Element>();
		for (int i = 0; i < sem.size(); i++) {
			List<Element> le = ip.getElementDANSSemestre(sem.get(i).getLabelleSemestre());
			totals.addAll(le);
		}
		HashSet<Etudiant> hs = ip.getListeEtudiantXXXX(totals);
		System.out.println(hs);*/
		
		System.out.println(se.getIDElement("POO c++"));
		/*System.out.println(se.NotedsModule("java","H444444"));
		///////////////EXCEL LISTE/////////////
		/*controller c = new  controller();
		List<Etudiant> l = ip.getEtudiantParElement(2);
		String excelFilePath ="etudiant.xls";
		try {
			c.writeExcel(l, excelFilePath);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}*/
				
		/*int id = se.getIDModule("analyse");
		List<Element> elts =se.getElementByMODULE(id);
		Element e = se.INFO_ELEMENT(elts.get(0).getLabelleElement());
		System.out.println(e);*/
		//////////////////////////////////////////////////////
		/*System.out.println(se.getIDElement("java 2"));
		System.out.println(se.getNoteElement("M133462726", "java 2"));*/
	}
	public String heute() {
		final Date date = new Date();
		return new SimpleDateFormat("dd-MM-yyyy").format(date);
	}
}
