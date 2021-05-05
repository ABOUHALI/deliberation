package dao;

import java.sql.Connection;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;



import metierEntite.Etablissement;
import metierEntite.Etape;
import metierEntite.Etudiant;
import metierEntite.Filiere;
import metierEntite.Inscrip_Administartive;
import metierEntite.Semestre;
import metierEntite.User;
import metierEntite.annee_universitaire;

public class TEST {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Connection conn = SingletonConnection.getConnection();
		StructureETab se = new StructureETab();
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
		}
	public String heute() {
		final Date date = new Date();
		return new SimpleDateFormat("dd-MM-yyyy").format(date);
	}
}
