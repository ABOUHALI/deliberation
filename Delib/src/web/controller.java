package web;

import java.io.IOException;
import java.io.InputStream;
import java.sql.Date;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.security.auth.message.callback.PrivateKeyCallback.Request;
import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.servlet.http.Part;

import dao.InscripEnLigne;
import dao.InscriptionADministrative;
import dao.ProfesseurDao;
import dao.StructureETab;
import metierEntite.Element;
import metierEntite.Etablissement;
import metierEntite.Etudiant;
import metierEntite.Filiere;
import metierEntite.Inscrip_Administartive;
import metierEntite.Module;
import metierEntite.Professeur;
import metierEntite.Semestre;
import metierEntite.User;
import metierEntite.annee_universitaire;

/**
 * Servlet implementation class controller
 */
@WebServlet(name = "cs", urlPatterns = {"/InscriptionEnLigne", "/InscriptionEnLigne.php","/home", "*.do", "/Liste-Etablissement", "/ajouter-filiere", "/get-etab",
		"/inscrireADMS","/administrative.php","/ajouter-Module","/ajouter-element", "/ajouter-professeur","/ajouter-professeur.php","/add-inscriptionEexcel.do","/add-inscriptionEexcel"})
@MultipartConfig(fileSizeThreshold = 1024 * 1024, maxFileSize = 1024 * 1024 * 5, maxRequestSize = 1024 * 1024 * 5 * 5)

public class controller extends HttpServlet {
	private static final long serialVersionUID = 1L;
	InputStream inputStream,inputStreambac,inputStreamcnef,inputStreamadn  = null;
	InscripEnLigne insc = new InscripEnLigne();
	InscriptionADministrative ia = new InscriptionADministrative();
	StructureETab se = new StructureETab();
	List<Etablissement> listEtab = se.listETab();
	List<Etudiant> listEtu = insc.listEt();
	int nombre  ;
	ProfesseurDao pd = new ProfesseurDao();
	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public controller() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doPost(request, response);
	}

	@SuppressWarnings("deprecation")
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		String path = request.getServletPath();
		HttpSession session = request.getSession();
		if (path.equals("/InscriptionEnLigne.php")) {
			String massarEtud = request.getParameter("massarEtud");// System.out.println(massarEtud); String
			String NomFr = request.getParameter("NomFr");// System.out.println(NomFr); String
			String NomAr = request.getParameter("NomAr");// String PrenomFr =
			String PrenomFr=request.getParameter("PrenomFr");// String PrenomAr =
			String PrenomAr =request.getParameter("PrenomAr");// String acad =
			String acad=request.getParameter("acad");
			String an_Bac = request.getParameter("an_Bac");
			String cin = request.getParameter("cin");
			String date = request.getParameter("dateN");
			System.out.print(date);
			System.out.print(massarEtud);
		

			String villeBac = request.getParameter("villeBac");
			String lieuN_ar = request.getParameter("lieuN_ar");//// String lieuN_fr =
			String lieuN_fr=request.getParameter("lieuN_fr");// String lycee =
			String lycee=request.getParameter("lycee");
			String villeNaissance = request.getParameter("villeNaissance");
			String mt = request.getParameter("mt");
			String nationalite = request.getParameter("nationalite");
			String province = request.getParameter("province");
			String sBac = request.getParameter("sBac");//
			String sexe = request.getParameter("sexe");
			String region = request.getParameter("region");

			Part filePart = request.getPart("photo");

			if (filePart != null) {

				System.out.println(filePart.getName());
				System.out.println(filePart.getSize());
				System.out.println(filePart.getContentType());

				inputStream = filePart.getInputStream();
			}
			
			String etatPhy = request.getParameter("etatPhy");
			String GroupSocio = request.getParameter("GroupSocio");
			java.util.Date dateIns = new java.util.Date();
			java.sql.Date date_n = convert(dateIns);
			java.util.Date uD = new java.util.Date(date);
			java.sql.Date date_sql = convert(uD);
			Etudiant etudiant = new Etudiant(massarEtud, NomFr, NomAr, PrenomFr, PrenomAr, acad, an_Bac, cin,
					date_n + "", date_sql, villeBac, lieuN_ar, lieuN_fr, villeNaissance, lycee, mt, nationalite,
					province, sBac, sexe, region, etatPhy, GroupSocio, inputStream);
			System.out.println(etudiant);
			insc.addEt(etudiant);
			String login = request.getParameter("login");
			String mdp = request.getParameter("password");
			User user = new User(0, login, mdp, null, 0, null);
			insc.addEtUSER(etudiant, user);
		}

		else if (path.equals("/InscriptionEnLigne"))

		{
			this.getServletContext().getRequestDispatcher("/InscripELetud.jsp").forward(request, response);

		}

		if (path.equals("/home")) {
			this.getServletContext().getRequestDispatcher("/index.html").forward(request, response);

		} else if (path.equals("/Ajout.do")) {
			System.out.println("ajot etab");
			String nometab = request.getParameter("etablissement");
			String desc = request.getParameter("desc_etab");
			Etablissement etab = new Etablissement(0, nometab, desc);
			se.addEtab(etab);
			System.out.println(nometab);
			this.getServletContext().getRequestDispatcher("/Liste-Etablissement").forward(request, response);

		} else if (path.equals("/Liste-Etablissement")) {
			System.out.println("liste etab");
			request.setAttribute("etablissement", listEtab);

			this.getServletContext().getRequestDispatcher("/ListeEtab.jsp").forward(request, response);

		}else if(path.equals("/ajouter-Module")) {
			List<Semestre> semestrat = se.listSem();
			List<Module> mod = se.listModule();
			request.setAttribute("semestre", semestrat);
			request.setAttribute("module", mod);
			this.getServletContext().getRequestDispatcher("/ListeModule.jsp").forward(request, response);

		} else if (path.equals("/ajouter-module.do")) {
			String module = request.getParameter("module");
			int note_val = Integer.parseInt(request.getParameter("note"));
			int coeff = Integer.parseInt(request.getParameter("coeff"));
			int nbr_elt =Integer.parseInt(request.getParameter("n-elt"));
			nombre =nbr_elt;
			String semestre = request.getParameter("semestre");
			int id_semestre =se.getIDSemestre(semestre);
			Module m = new Module(0, module, id_semestre, coeff, note_val, nbr_elt);
			se.addModule(m);
			this.getServletContext().getRequestDispatcher("/ajouter-Module").forward(request, response);

		}
		else if (path.equals("/ajouter-filiere")) {

			request.setAttribute("etablissements", listEtab);
			List<Filiere> lisf = se.listFiliere();
			request.setAttribute("filiere", lisf);
			this.getServletContext().getRequestDispatcher("/ListeFiliere.jsp").forward(request, response);
			return;

		} else if (path.equals("/ajouter-filiere.do")) {
			String etablissement = request.getParameter("etablissement");
			String filiere = request.getParameter("filiere");
			Etablissement etab = new Etablissement(0, etablissement, null);
			Filiere f = new Filiere(0, filiere, 0);
			se.addFiliere(f, etab);

			this.getServletContext().getRequestDispatcher("/ajouter-filiere").forward(request, response);
		} else if(path.equals("/ajouter-element")) {
			int nbr_et = Integer.parseInt(request.getParameter("id"));
			int idm =Integer.parseInt(request.getParameter("idm"));
			Integer[]tab= {nbr_et};
			List<Module> m = se.listModule();
			Map<Integer, String> ss = new HashMap<Integer, String>();
			for (int i = 0; i < nbr_et; i++) {
				ss.put(i, "name"+i);
				System.out.println(ss.get(i));
			}
			int nbr=ss.size();
			session.setAttribute("nbr", nbr);
			session.setAttribute("idm", idm);
			request.setAttribute("list", ss);
			request.setAttribute("nbr_elt",nombre);
			this.getServletContext().getRequestDispatcher("/AjoutELT.jsp").forward(request, response);
			
		}else if(path.equals("/ajouter-element.do")) {
				System.out.println(session.getAttribute("nbr"));
				int nbr =(int) session.getAttribute("nbr");
				System.out.println(nbr);
				int idm=(int)session.getAttribute("idm");
				System.out.println(nbr);
				for (int i = 0; i < nbr; i++) {
					String name=String.format("%d", i+1);
					System.out.println(name);
					String elt=request.getParameter(name);
					System.out.println(elt);
					int coeff =Integer.parseInt(request.getParameter("coefficient"));
					/*System.out.println(coeff);*/
					Element e = new Element(0, elt, idm, coeff, 10);
					se.addElement(e);
					}
		}	
		else if (path.equals("/get-etab")) {
			int id = Integer.parseInt(request.getParameter("id"));
			Etablissement res = se.getEtablissement(id);
			request.setAttribute("etab", res);
			System.out.println(res.toString());
			this.getServletContext().getRequestDispatcher("/ProfilEtab.jsp").forward(request, response);

		} else if (path.equals("/inscrireADMS")) {
			request.setAttribute("etudiants", listEtu);
			this.getServletContext().getRequestDispatcher("/InscrireADMS.jsp").forward(request, response);

		} else if (path.equals("/administrative.php")) {
			String masssarEtud = request.getParameter("massarEtud");
			List<annee_universitaire> au = se.List_ann();
			System.out.println(masssarEtud);
			Etudiant etudiant = insc.getEt(masssarEtud);
			request.setAttribute("e", etudiant);
			request.setAttribute("etab", listEtab);
			request.setAttribute("fil", se.listFiliere());
			request.setAttribute("an_acad",au);
			this.getServletContext().getRequestDispatcher("/addInscADM.jsp").forward(request, response);
			
		} else if (path.equals("/inscriptionAd.do")) {
			String adresse = request.getParameter("adresse");
			
			String nm = request.getParameter("test");
			String[] nomcmplt = nm.split("--");
			String nomFr = nomcmplt[0];
			String PrenomFr = nomcmplt[1];
			String massar = insc.getetudBYNP(nomFr, PrenomFr);
			
			int tel = Integer.parseInt(request.getParameter("tel"));
			int fil = Integer.parseInt(request.getParameter("filiere"));
			
			String bourse = request.getParameter("bourse");
			boolean b =false;
			if(bourse!=null) {
				b=true;
			}
			String anacd = request.getParameter("acad");
			String[]acad = anacd.split("-");
			int year = Integer.parseInt(acad[0]);
			int day = Integer.parseInt(acad[1]);
			int month = Integer.parseInt(acad[2]);
			
			java.sql.Date d = new java.sql.Date(year, month, day);
			int id_anacad = se.IDanneUniv(d);
			System.out.println("id anne "+id_anacad);
			Part filePart = request.getPart("photo");
			InputStream photo=null;
			if (filePart != null) {

				System.out.println(filePart.getName());
				System.out.println(filePart.getSize());
				System.out.println(filePart.getContentType());

				photo = filePart.getInputStream();
			}
			Part filePartcne = request.getPart("cne");
			InputStream cne =null;
			if (filePart != null) {

				System.out.println(filePart.getName());
				System.out.println(filePart.getSize());
				System.out.println(filePart.getContentType());

				cne = filePartcne.getInputStream();
			}
			Part filePartbac = request.getPart("bac");
			InputStream bac =null;
			if (filePart != null) {

				System.out.println(filePart.getName());
				System.out.println(filePart.getSize());
				System.out.println(filePart.getContentType());

				bac = filePartbac.getInputStream();
			}
			Part filePartrn = request.getPart("rn");
			InputStream rn =null;
			if (filePart != null) {

				System.out.println(filePart.getName());
				System.out.println(filePart.getSize());
				System.out.println(filePart.getContentType());

				rn = filePartrn.getInputStream();
			}
			Part filePartacn = request.getPart("an");
			InputStream an =null;
			if (filePart != null) {

				System.out.println(filePart.getName());
				System.out.println(filePart.getSize());
				System.out.println(filePart.getContentType());

				an = filePartacn.getInputStream();
			}
			Part filePartCin = request.getPart("cin");
			InputStream cin =null;
			if (filePart != null) {

				System.out.println(filePart.getName());
				System.out.println(filePart.getSize());
				System.out.println(filePart.getContentType());

				cin = filePartCin.getInputStream();
			}
			Inscrip_Administartive iad = new Inscrip_Administartive(0,id_anacad,bac,cin,cne,new Date(542021),new Date(542021),adresse,tel,adresse,b,an,photo,rn);
			ia.addIA(iad,id_anacad);
			ia.addIA_FIL_ET(iad, massar, fil);
			
		}else if (path.equals("/ajouter-professeur")) {
			List<Etablissement> etab =se.listETab();
			List<Filiere> f =se.listFiliere();
			List<Module> m = se.listModule();
			List<Element> e= se.listElement();
			request.setAttribute("etablissements", etab);
			request.setAttribute("filieres", f);
			request.setAttribute("modules", m);
			request.setAttribute("Leselements", e);
			this.getServletContext().getRequestDispatcher("/ajouter-Prof.jsp").forward(request, response);
			return;
		} else if (path.equals("/ajouter-professeur.php")) {

			String nom = request.getParameter("nom");
			String email = request.getParameter("email");
			String prenom = request.getParameter("prenom");
			String etablissement = request.getParameter("etablissement");
			String grade = request.getParameter("grade");
			String login = request.getParameter("login");
			String mdp = request.getParameter("mdp");
			String role = request.getParameter("role");
			String module = request.getParameter("module");
			String filiere = request.getParameter("filiere");
			String element = request.getParameter("element");
			int idEtablissement =se.getIDETbalissement(etablissement);
			int idFiliere =se.getIDFiliere(filiere);
			int idElement = se.getIDElement(element);
			int idModule = se.getIDModule(module);
			Professeur prof = new Professeur(0, nom, prenom, email, idEtablissement, role, idFiliere, grade);
			pd.addProf(prof);
			int idprof = pd.getIDProf(prof);
			User user = new User(0, login, mdp, null, idprof, role);
			pd.addUser(user, prof);
			if(idElement!=0) {
				pd.addPorf_element(prof, idElement);
			}
			if(idModule!=0) {
				pd.addProf_module(prof, idModule);
			}
		}if (path.equals("/add-inscriptionEexcel")) {
			this.getServletContext().getRequestDispatcher("/inscriptionEnligneEXCEL.jsp").forward(request, response);
		}
		else if(path.equals("/add-inscriptionEexcel.do")) {
			Part filePart = request.getPart("fichier");

			if (filePart != null) {

				System.out.println(filePart.getName());
				System.out.println(filePart.getSize());
				System.out.println(filePart.getContentType());

				inputStream = filePart.getInputStream();
			}

			insc.addEtExcel(inputStream);
		}
		}
	  private static java.sql.Date convert(java.util.Date uDate) {
	        java.sql.Date sDate = new java.sql.Date(uDate.getTime());
	        return sDate;
	    }

}