package web;

import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.sql.Date;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Properties;
import java.util.Random;

import javax.mail.Message;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.servlet.http.Part;

import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;

import dao.InscripEnLigne;
import dao.InscripPDAO;
import dao.InscriptionADministrative;
import dao.LoginDAO;
import dao.ProfesseurDao;
import dao.StructureETab;
import metierEntite.ETUD_NOTE;
import metierEntite.Element;
import metierEntite.Etablissement;
import metierEntite.Etape;
import metierEntite.EtudFil;
import metierEntite.Etudiant;
import metierEntite.EtudiantExcelExport;
import metierEntite.Filiere;
import metierEntite.Inscrip_Administartive;
import metierEntite.Inscrip_pedagogique;
import metierEntite.Module;
import metierEntite.Professeur;
import metierEntite.Semestre;
import metierEntite.User;
import metierEntite.UserPdf;
import metierEntite.annee_universitaire;

/**
 * Servlet implementation class controller
 */
@WebServlet(name = "cs", urlPatterns = { "/home", "/InscriptionEnLigne", "/InscriptionEnLigne.php", "*.do",
		"/Liste-Etablissement", "/ajouter-filiere", "/get-etab", "/ListeEnLigne", "/administrative.php",
		"/ajouter-Module", "/ajouter-element", "/ajouter-professeur", "/ajouter-professeur.php", "/logout",
		"/add-inscriptionEexcel.do", "/add-inscriptionEexcel", "/Liste-IAdministrative", "/pedagogique.php",
		"/ListePedagogique", "/choix-listp", "/modifier-etab", "/Ajout-Etape", "/get-filiere", "/Mdp-oublie",
		"/verifier-code", "/Renetialiser-Mdp", "/list-element", "/ajouter-Semestre", "/get-etap", "/note-element-excel",
		"/note-element-excel.php", "/saveNOTE.php", "/note-element", "/choix-listp-note", "/choix-listp-note-semestre",
		"/choix-listp-note-element", "/choix-listp-note-module", "/deliberer", "/Liste-A-Deliberer",
		"/Liste-A-Deliberer-Element", "/Liste-A-Deliberer-Module", "/Liste-A-Deliberer-Semestre","/etudiant-element",
		"/recuperer-Liste-Elt","/etudiant_module","/recuperer-Liste-EltR","/Liste-Prof","/etudiant_semestre","/modifier-semestre","/annuler_Inscription" })
@MultipartConfig(fileSizeThreshold = 1024 * 1024, maxFileSize = 1024 * 1024 * 5, maxRequestSize = 1024 * 1024 * 5 * 5)

public class controller extends HttpServlet {
	private static final long serialVersionUID = 1L;
	InputStream inputStream, inputStreambac, inputStreamcnef, inputStreamadn = null;
	InscripEnLigne insc = new InscripEnLigne();
	InscriptionADministrative ia = new InscriptionADministrative();
	StructureETab se = new StructureETab();
	List<Etablissement> listEtab = se.listETab();
	List<Etudiant> listEtu = insc.listEt();
	int nombre;
	ProfesseurDao pd = new ProfesseurDao();
	InscripPDAO ipd = new InscripPDAO();
	List<Filiere> listFil = se.listFiliere();
	List<Etape> listEtape = se.listEtape();
	int randomCode;

	LoginDAO d = new LoginDAO();

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
		HttpSession s = request.getSession();
		String path = request.getServletPath();
		if (path.equals("/logout")) {
			
			System.out.println("new + ");
			s.invalidate();
			this.getServletContext().getRequestDispatcher("/index.html").forward(request, response);
		}else {
			doPost(request, response);
		}
	}

	@SuppressWarnings("deprecation")
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		String path = request.getServletPath();
		HttpSession session = request.getSession();
		if (path.equals("/home")) {
			this.getServletContext().getRequestDispatcher("/index.html").forward(request, response);

		} if (path.equals("/InscriptionEnLigne.php")) {
			String massarEtud = request.getParameter("massarEtud");// System.out.println(massarEtud); String
			String NomFr = request.getParameter("NomFr");// System.out.println(NomFr); String
			String NomAr = request.getParameter("NomAr");// String PrenomFr =
			String PrenomFr = request.getParameter("PrenomFr");// String PrenomAr =
			String PrenomAr = request.getParameter("PrenomAr");// String acad =
			String acad = request.getParameter("acad");
			String an_Bac = request.getParameter("an_Bac");
			String cin = request.getParameter("cin");
			java.sql.Date date = java.sql.Date.valueOf(request.getParameter("dateN"));
			System.out.print(date);
			System.out.print(massarEtud);

			String villeBac = request.getParameter("villeBac");
			String lieuN_ar = request.getParameter("lieuN_ar");//// String lieuN_fr =
			String lieuN_fr = request.getParameter("lieuN_fr");// String lycee =
			String lycee = request.getParameter("lycee");
			String villeNaissance = request.getParameter("villeNaissance");
			String mt = request.getParameter("mt");
			String nationalite = request.getParameter("nationalite");
			String province = request.getParameter("province");
			String sBac = request.getParameter("sBac");//
			String sexe = request.getParameter("sexe");
			String region = request.getParameter("region");
			String email=request.getParameter("email");

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
			// java.util.Date uD = new java.util.Date(date);
			// java.sql.Date date_sql = convert(uD);
			Etudiant etudiant = new Etudiant(massarEtud, NomFr, NomAr, PrenomFr, PrenomAr, acad, an_Bac, cin,
					date_n + "", date, villeBac,email, lieuN_ar, lieuN_fr, villeNaissance, lycee, mt, nationalite, province,
					sBac, sexe, region, etatPhy, GroupSocio, inputStream);
			insc.addEt(etudiant);
			
			this.getServletContext().getRequestDispatcher("/index.html").forward(request, response);

		} else if (path.equals("/modifier-etab")) {
			int id = Integer.parseInt(request.getParameter("id"));
			String etab = request.getParameter("etab");
			String desc = request.getParameter("description");
			Etablissement etablissement = new Etablissement(id, etab, desc);
			se.UpdateEtab(etablissement);
			System.out.println("update");
			this.getServletContext().getRequestDispatcher("/Liste-Etablissement").forward(request, response);

		}

		else if (path.equals("/InscriptionEnLigne"))

		{
			this.getServletContext().getRequestDispatcher("/InscripELetud.jsp").forward(request, response);

		}

		else if (path.equals("/Ajout-Etape")) {
			listEtape = se.listEtape();
			request.setAttribute("etape", listEtape);
			request.setAttribute("filieres", listFil);
			System.out.println("ajout etape");
			this.getServletContext().getRequestDispatcher("/ListeEtape.jsp").forward(request, response);

		}

		else if (path.equals("/Ajout.do")) {
			System.out.println("ajot etab");
			String nometab = request.getParameter("etablissement");
			String desc = request.getParameter("desc_etab");
			Etablissement etab = new Etablissement(0, nometab, desc);
			se.addEtab(etab);
			System.out.println(nometab);
			this.getServletContext().getRequestDispatcher("/Liste-Etablissement").forward(request, response);

		} else if (path.equals("/Liste-Etablissement")) {
			System.out.println("liste etab");
			listEtab = se.listETab();
			request.setAttribute("etablissement", listEtab);

			this.getServletContext().getRequestDispatcher("/ListeEtab.jsp").forward(request, response);

		} else if (path.equals("/ajouter-Module")) {
			List<Semestre> semestrat = se.listSem();
			List<Module> mod = se.listModule();
			request.setAttribute("semestre", semestrat);
			request.setAttribute("module", mod);
			this.getServletContext().getRequestDispatcher("/ListeModule.jsp").forward(request, response);

		} else if (path.equals("/get-filiere")) {
			int id = Integer.parseInt(request.getParameter("id"));
			Filiere fil = se.getIDFil(id);
			System.out.println(fil);
			request.setAttribute("f", fil);
			this.getServletContext().getRequestDispatcher("/ProfilFiliere.jsp").forward(request, response);
		}else if (path.equals("/AjoutEtape.do")) {

			int id = Integer.parseInt(request.getParameter("id_etape"));
			String libelle = request.getParameter("libelle");
			String diplomante = request.getParameter("diplomante");
			String filiere = request.getParameter("filieres");
			int id_filiere = se.getIDFiliere(filiere);
			boolean d = diplomante.equals("OUI");
			Etape etape = new Etape(id, libelle, d, id_filiere);
			se.addEtape(etape);
			this.getServletContext().getRequestDispatcher("/Ajout-Etape").forward(request, response);

		}

		else if (path.equals("/ajouter-module.do")) {
			String module = request.getParameter("module");
			int note_val = Integer.parseInt(request.getParameter("note"));
			int coeff = Integer.parseInt(request.getParameter("coeff"));
			int nbr_elt = Integer.parseInt(request.getParameter("n-elt"));
			nombre = nbr_elt;
			String semestre = request.getParameter("semestre");
			int id_semestre = se.getIDSemestre(semestre);
			Module m = new Module(0, module, id_semestre, coeff, note_val, nbr_elt);
			se.addModule(m);
			this.getServletContext().getRequestDispatcher("/ajouter-Module").forward(request, response);

		} else if (path.equals("/ajouter-filiere")) {
			listEtab = se.listETab();
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

		}else if (path.equals("/ajouter-semestre.do")) {
			int id = Integer.parseInt(request.getParameter("id-semestre"));
			String semestre = request.getParameter("semestre");
			String etape = request.getParameter("etape");
			int  note=Integer.parseInt(request.getParameter("note"));
			int id_etape = se.getIDEtape(etape);
			Semestre seme = new Semestre(id, semestre, id_etape,note);
			se.addSemestre(seme);
			this.getServletContext().getRequestDispatcher("/ajouter-Semestre").forward(request, response);}
		else if (path.equals("/ajouter-element")) {
			int nbr_et = Integer.parseInt(request.getParameter("id"));
			int idm = Integer.parseInt(request.getParameter("idm"));
			Integer[] tab = { nbr_et };
			List<Module> m = se.listModule();
			Map<Integer, String> ss = new HashMap<Integer, String>();
			for (int i = 0; i < nbr_et; i++) {
				ss.put(i, "name" + i);
				System.out.println(ss.get(i));
			}
			int nbr = ss.size();
			session.setAttribute("nbr", nbr);
			session.setAttribute("idm", idm);
			request.setAttribute("list", ss);
			request.setAttribute("nbr_elt", nombre);
			this.getServletContext().getRequestDispatcher("/AjoutELT.jsp").forward(request, response);

		} else if (path.equals("/ajouter-element.do")) {
			System.out.println(session.getAttribute("nbr"));
			int nbr = (int) session.getAttribute("nbr");
			System.out.println(nbr);
			int idm = (int) session.getAttribute("idm");
			System.out.println(nbr);
			for (int i = 0; i < nbr; i++) {
				String name = String.format("%d", i + 1);
				System.out.println(name);
				String elt = request.getParameter(name);
				System.out.println(elt);
				int coeff = Integer.parseInt(request.getParameter("coefficient"));
				/* System.out.println(coeff); */
				Element e = new Element(0, elt, idm, coeff, 10);
				se.addElement(e);
			}
			this.getServletContext().getRequestDispatcher("/ajouter-Module").forward(request, response);

		} else if (path.equals("/get-etab")) {
			int id = Integer.parseInt(request.getParameter("id"));
			Etablissement res = se.getEtablissement(id);
			request.setAttribute("etab", res);
			System.out.println(res.toString());
			this.getServletContext().getRequestDispatcher("/ProfilEtab.jsp").forward(request, response);

		} else if (path.equals("/ListeEnLigne")) {
			listEtu = insc.listEt();
			request.setAttribute("etudiants", listEtu);
			this.getServletContext().getRequestDispatcher("/ListeEnLigne.jsp").forward(request, response);

		}else if(path.equals("/pdfEnLigne.do")) {
			
		}
		
		
		else if (path.equals("/administrative.php")) {
			String masssarEtud = request.getParameter("massarEtud");
			List<annee_universitaire> au = se.List_ann();
			Etudiant etudiant = insc.getEt(masssarEtud);
			request.setAttribute("e", etudiant);
			request.setAttribute("massar", masssarEtud);
			request.setAttribute("etab", listEtab);
			request.setAttribute("fil", se.listFiliere());
			request.setAttribute("an_acad", au);
			this.getServletContext().getRequestDispatcher("/addInscADM.jsp").forward(request, response);

		}else if(path.equals("/get-module")) {
			int id = Integer.parseInt(request.getParameter("id"));
			Module m=se.getIdModule(id);
			request.setAttribute("m", m);
			
			this.getServletContext().getRequestDispatcher("/ProfilModule.jsp").forward(request, response);} 
		else if (path.equals("/inscriptionAd.do")) {
			String adresse = request.getParameter("adresse");

			String nm = request.getParameter("test");
			String[] nomcmplt = nm.split("--");
			String nomFr = nomcmplt[0];
			String PrenomFr = nomcmplt[1];
			String massar =request.getParameter("cne");
			int tel = Integer.parseInt(request.getParameter("tel"));
			int fil = Integer.parseInt(request.getParameter("filiere"));

			String bourse = request.getParameter("bourse");
			boolean b = false;
			if (bourse != null) {
				b = true;
			}
			String anacd = request.getParameter("acad");
			String[] acad = anacd.split("-");
			int year = Integer.parseInt(acad[0]);
			int day = Integer.parseInt(acad[1]);
			int month = Integer.parseInt(acad[2]);
			
			java.sql.Date d = java.sql.Date.valueOf(anacd);
			int id_anacad = se.IDanneUniv(d);
			System.out.println("id anne " + id_anacad);
			Part filePart = request.getPart("photo");
			InputStream photo = null;
			if (filePart != null) {

				System.out.println(filePart.getName());
				System.out.println(filePart.getSize());
				System.out.println(filePart.getContentType());

				photo = filePart.getInputStream();
			}
			String cne = request.getParameter("cne");
			Part filePartbac = request.getPart("bac");
			InputStream bac = null;
			if (filePart != null) {

				System.out.println(filePart.getName());
				System.out.println(filePart.getSize());
				System.out.println(filePart.getContentType());

				bac = filePartbac.getInputStream();
			}
			Part filePartrn = request.getPart("rn");
			InputStream rn = null;
			if (filePart != null) {

				System.out.println(filePart.getName());
				System.out.println(filePart.getSize());
				System.out.println(filePart.getContentType());

				rn = filePartrn.getInputStream();
			}
			Part filePartacn = request.getPart("an");
			InputStream an = null;
			if (filePart != null) {

				System.out.println(filePart.getName());
				System.out.println(filePart.getSize());
				System.out.println(filePart.getContentType());

				an = filePartacn.getInputStream();
			}
			Part filePartCin = request.getPart("cin");
			InputStream cin = null;
			if (filePart != null) {

				System.out.println(filePart.getName());
				System.out.println(filePart.getSize());
				System.out.println(filePart.getContentType());

				cin = filePartCin.getInputStream();
			}
			Inscrip_Administartive iad = new Inscrip_Administartive(0, id_anacad, bac, cin, cne, new Date(year, month, day),
					new Date(year,month,day), adresse, tel, adresse, b, an, photo, rn);
			ia.addIA(iad, id_anacad);
			int ID = ia.IDofADMINSITRATIVE(iad.getTelephone(), iad.getAdressPerson());
			ia.addIA_FIL_ET(ID, massar, fil);
			 Date da = ia.getDATEid(id_anacad);
			 String Filiere = se.getIDFil(fil).getFiliere();
			 System.out.println(Filiere);
			 Map<Integer, String> oh = ia.ordreSemFil(Filiere);
			for (int i = 0; i < 2; i++) {
			 List<Element> elts = ipd.getElementDANSSemestre(oh.get(i+1));
			 for (int j = 0; j < elts.size(); j++) {
				int id_elt = elts.get(j).getIDElement();
				
				Inscrip_pedagogique ip = new Inscrip_pedagogique(cne, id_elt, da);
				ipd.addIP(ip);
			 }
				}
			User user1=new User(0,nomFr , PrenomFr, null, 0, null);
			insc.addEtUSER(massar, user1);
			System.out.println("le code massarest "+massar);
			try {
				
				String host = "smtp.gmail.com";
				String user = "amineyassir2001@gmail.com";
				String pass = "Amineyassir20";
				String to = insc.getEmail(massar);
				String subject = "Inscription";
				String message  = "\r\n"
						+ "<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\">\r\n"
						+ "<title>Welcome to One Touch</title>\r\n"
						+ "<style type=\"text/css\">\r\n"
						+ "#emailWrapperTable table {\r\n"
						+ "	font: 13px Arial, Verdana, Helvetica, sans-serif;\r\n"
						+ "	color: #292929;\r\n"
						+ "}\r\n"
						+ "\r\n"
						+ "#emailWrapperTable h1, #emailWrapperTable h2 {\r\n"
						+ "	font-family: Arial, Verdana, Helvetica, sans-serif;\r\n"
						+ "	margin-bottom: 2px;\r\n"
						+ "	font-size: 15px;\r\n"
						+ "}\r\n"
						+ "\r\n"
						+ "#emailWrapperTable h3 {\r\n"
						+ "	font-size: 13px;\r\n"
						+ "}\r\n"
						+ "\r\n"
						+ "#emailWrapperTable h4 {\r\n"
						+ "	font-size: 11px;\r\n"
						+ "}\r\n"
						+ "\r\n"
						+ "a {\r\n"
						+ "	color: #084482;\r\n"
						+ "	text-decoration: underline;\r\n"
						+ "}\r\n"
						+ "\r\n"
						+ "a.actionLink {\r\n"
						+ "	color: #000;\r\n"
						+ "	text-decoration: none;\r\n"
						+ "}\r\n"
						+ "\r\n"
						+ "hr {\r\n"
						+ "	display: none;\r\n"
						+ "}\r\n"
						+ "\r\n"
						+ ".small {\r\n"
						+ "	font-size: 10px;\r\n"
						+ "}\r\n"
						+ "\r\n"
						+ ".ppid {\r\n"
						+ "	color: #757575;\r\n"
						+ "}\r\n"
						+ "\r\n"
						+ "p {\r\n"
						+ "	margin: 11px 0;\r\n"
						+ "	padding: 0;\r\n"
						+ "}\r\n"
						+ "\r\n"
						+ ".headline {\r\n"
						+ "	font-family: Helvetica Neue Light, Helvetica;\r\n"
						+ "	font-weight: 300;\r\n"
						+ "	font-size: 28px;\r\n"
						+ "	color: #0079C1;\r\n"
						+ "}\r\n"
						+ "\r\n"
						+ "sup {\r\n"
						+ "	font-size: 7px !important;\r\n"
						+ "}\r\n"
						+ "\r\n"
						+ "sup {\r\n"
						+ "	font-size: 7px !important;\r\n"
						+ "}\r\n"
						+ "\r\n"
						+ "sup {\r\n"
						+ "	font-size: 7px !important;\r\n"
						+ "}\r\n"
						+ "\r\n"
						+ "sup {\r\n"
						+ "	font-size: 7px !important;\r\n"
						+ "}\r\n"
						+ "\r\n"
						+ "sup {\r\n"
						+ "	font-size: 7px !important;\r\n"
						+ "}\r\n"
						+ "\r\n"
						+ "sup {\r\n"
						+ "	font-size: 7px !important;\r\n"
						+ "}\r\n"
						+ "\r\n"
						+ "sup {\r\n"
						+ "	font-size: 7px !important;\r\n"
						+ "}\r\n"
						+ "\r\n"
						+ "sup {\r\n"
						+ "	font-size: 7px !important;\r\n"
						+ "}\r\n"
						+ "\r\n"
						+ "sup {\r\n"
						+ "	font-size: 7px !important;\r\n"
						+ "}\r\n"
						+ "\r\n"
						+ ".footerlink {\r\n"
						+ "	font: 13px Arial, Verdana, Helvetica, sans-serif !important;\r\n"
						+ "	color: #292929 !important;\r\n"
						+ "	font-weight: bold;\r\n"
						+ "	line-height: auto;\r\n"
						+ "	width: 530px;\r\n"
						+ "}\r\n"
						+ "\r\n"
						+ "a.footerlink:link {\r\n"
						+ "	color: #084482;\r\n"
						+ "	text-decoration: underline;\r\n"
						+ "}\r\n"
						+ "\r\n"
						+ "a.footerlink:visited {\r\n"
						+ "	color: #820844;\r\n"
						+ "	text-decoration: none;\r\n"
						+ "}\r\n"
						+ "div.button{\r\n"
						+ "	padding: 19px;\r\n"
						+ "	border: 2px solid #007FA4;\r\n"
						+ "	color:#007FA4;\r\n"
						+ "	background-color: white;\r\n"
						+ "	font-size:18px;\r\n"
						+ "	text-decoration: none;\r\n"
						+ "}\r\n"
						+ "div.button a{\r\n"
						+ "	margin-left: 200px;\r\n"
						+ "}\r\n"
						+ "</style>\r\n"
						+ "\r\n"
						+ "<div style=\"display: none; color: #fff; font-size: 1pt;\"></div>\r\n"
						+ "<table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" id=\"emailWrapperTable\"\r\n"
						+ "	width=\"580\">\r\n"
						+ "	<tbody>\r\n"
						+ "		<tr valign=\"top\">\r\n"
						+ "			<td colspan=\"3\">\r\n"
						+ "				<table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\">\r\n"
						+ "					<tbody>\r\n"
						+ "						<tr valign=\"top\">\r\n"
						+ "							<td width=\"130px;\"><br></td>\r\n"
						+ "						</tr>\r\n"
						+ "						<tr>\r\n"
						+ "							<td><img alt=\"\" border=\"0\" height=\"10\"\r\n"
						+ "								src=\"http://www.paypalobjects.com/en_US/i/scr/pixel.gif\"\r\n"
						+ "								width=\"1\"><img src=\"http://www.umi.ac.ma/wp-content/themes/umi/images/logo.png\"><br>\r\n"
						+ "							<br></td>\r\n"
						+ "						</tr>\r\n"
						+ "					</tbody>\r\n"
						+ "				</table>\r\n"
						+ "			</td>\r\n"
						+ "		</tr>\r\n"
						+ "		<tr>\r\n"
						+ "			<td colspan=\"3\"><img height=\"13\"\r\n"
						+ "				src=\"https://www.paypalobjects.com/en_US/i/scr/scr_emailTopCorners_580wx13h.gif\"\r\n"
						+ "				border=\"0\" style=\"vertical-align: bottom\" alt=\"\"></td>\r\n"
						+ "		</tr>\r\n"
						+ "		<tr>\r\n"
						+ "			<td width=\"12\"\r\n"
						+ "				style=\"background: url(/i/scr/scr_emailLeftBorder_13wx1h.gif) left repeat-y; border-left: 1px solid #ddd;\">\r\n"
						+ "				<img src=\"https://www.paypalobjects.com/en_US/i/scr/pixel.gif\"\r\n"
						+ "				border=\"0\" alt=\"\">\r\n"
						+ "			</td>\r\n"
						+ "\r\n"
						+ "			<td class=\"contentArea\"\r\n"
						+ "				style=\"width: 530px; word-wrap: break-word; padding: 12px; margin: 0\"\r\n"
						+ "				width=\"530\">\r\n"
						+ "				<table width=\"100%\">\r\n"
						+ "					<tbody>\r\n"
						+ "						<tr>\r\n"
						+ "							<td><span class=\"headline\"\r\n"
						+ "								style=\"font-family: Helvetica Neue Light, Helvetica; font-weight: 300; font-size: 28px; color: #0079C1;\">\r\n"
						+ "									<p style=\"font-size: 80%; color: #007FA4;\">IP</p>\r\n"
						+ "							</span>\r\n"
						+ "                         <p> votre inscription aux bachelors a été reussit</p>\r\n"						
						+ "							<p>Votre login est : "+nomFr+",</p>\r\n"
						+ "							<p>Votre mot de passe :"+PrenomFr+"</p>\r\n"
						+ "						</tr>\r\n"
						+ "					</tbody>\r\n"
						+ "				</table>\r\n"
						+ "			</td>\r\n"
						+ "			<td width=\"12\"\r\n"
						+ "				style=\"background: url(/i/scr/scr_emailRightBorder_13wx1h.gif) left repeat-y; border-right: 1px solid #ddd;\">\r\n"
						+ "				<img src=\"https://www.paypalobjects.com/en_US/i/scr/pixel.gif\"\r\n"
						+ "				border=\"0\" alt=\"\">\r\n"
						+ "			</td>\r\n"
						+ "\r\n"
						+ "		</tr>\r\n"
						+ "		<tr>\r\n"
						+ "			<td colspan=\"3\"><img height=\"13\"\r\n"
						+ "				src=\"https://www.paypalobjects.com/en_US/i/scr/scr_emailBottomCorners_580wx13h.gif\"\r\n"
						+ "				border=\"0\" alt=\"\"></td>\r\n"
						+ "		</tr>\r\n"
						+ "	</tbody>\r\n"
						+ "</table>";
				boolean sessionDebug = false;
				Properties pros = System.getProperties();
				pros.put("mail.smtp.user", "username");
				pros.put("mail.smtp.host", "smtp.gmail.com");
				pros.put("mail.smtp.port", "25");
				pros.put("mail.debug", "true");
				pros.put("mail.smtp.auth", "true");
				pros.put("mail.smtp.starttls.enable", "true");
				pros.put("mail.smtp.EnableSSL.enable", "true");

				pros.setProperty("mail.smtp.socketFactory.class", "javax.net.ssl.SSLSocketFactory");
				pros.setProperty("mail.smtp.socketFactory.fallback", "false");
				pros.setProperty("mail.smtp.port", "465");
				pros.setProperty("mail.smtp.socketFactory.port", "465");
				java.security.Security.addProvider(new com.sun.net.ssl.internal.ssl.Provider());
				Session mailSession = Session.getDefaultInstance(pros, null);
				mailSession.setDebug(sessionDebug);
				MimeMessage msg = new MimeMessage(mailSession);
				msg.setFrom(new InternetAddress(user));
				InternetAddress[] address = { new InternetAddress(to) };
				msg.setRecipients(Message.RecipientType.TO, address);
				msg.setSubject(subject);
				msg.setContent(message,"text/html");

				Transport transport = mailSession.getTransport("smtp");
				transport.connect(host, user, pass);
				transport.sendMessage(msg, msg.getAllRecipients());
				transport.close();
				
			} catch (Exception e) {
				e.printStackTrace();
			}
			this.getServletContext().getRequestDispatcher("/ListeEnLigne").forward(request, response);
			

		} else if (path.equals("/ajouter-professeur")) {
			List<Etablissement> etab = se.listETab();
			List<Filiere> f = se.listFiliere();
			List<Module> m = se.listModule();
			List<Element> e = se.listElement();
			request.setAttribute("etablissements", etab);
			request.setAttribute("filieres", f);
			request.setAttribute("modules", m);
			request.setAttribute("Leselements", e);
			this.getServletContext().getRequestDispatcher("/ajouter-Prof.jsp").forward(request, response);
			return;
		}else if (path.equals("/modifier-filiere.do")) {
			int id = Integer.parseInt(request.getParameter("id"));
			Filiere fil = se.getIDFil(id);
			request.setAttribute("f", fil);
			this.getServletContext().getRequestDispatcher("/Modifier-filiere.jsp").forward(request, response);
			
			

		}else if(path.equals("/modifier-etape.do")) {
			int id=Integer.parseInt(request.getParameter("id"));
			Etape  etape=se.getIdEtape(id);
			request.setAttribute("et", etape);
			System.out.println("etapehhhhhhhhh");
			this.getServletContext().getRequestDispatcher("/Modifier-etape.jsp").forward(request, response);
			
			
		
		}else if(path.equals("/modifier-etape")) {
			int id = Integer.parseInt(request.getParameter("id"));//jhvbgvvgghcgfcgfyfyccgf
			String labelle=request.getParameter("labelle");
			boolean dip=request.getParameter("diplomante") != null ;
			int filiere=Integer.parseInt(request.getParameter("filiere"));
			Etape p=new Etape(id,labelle,dip,filiere);
			se.UpdateEtape(p);
			this.getServletContext().getRequestDispatcher("/Ajout-Etape").forward(request, response);
			 
			
			
		}
		else if (path.equals("/modifier-filiere")) {
			int id = Integer.parseInt(request.getParameter("id"));
			String fil = request.getParameter("nom");
			String etab = request.getParameter("etab");
			int etablissement = Integer.parseInt(etab);
			System.out.println(etablissement);
			Filiere filiere = new Filiere(id, fil, etablissement);
			se.UpdateFiliere(filiere);
			this.getServletContext().getRequestDispatcher("/ajouter-filiere").forward(request, response);
			
			
			
		}else if(path.equals("/modifier-semestre.do")) {
			int id=Integer.parseInt(request.getParameter("id"));
			Semestre s=se.getIdSemestre(id);
			request.setAttribute("s", s);
			System.out.println(id);
			this.getServletContext().getRequestDispatcher("/Modifier-semestre.jsp").forward(request, response);
			
			
			
		}else if(path.equals("/modifier-semestre")) {
			int id=Integer.parseInt(request.getParameter("id"));
			String semestre=request.getParameter("semestre");
			int etape=Integer.parseInt(request.getParameter("etape"));
			int note=Integer.parseInt(request.getParameter("note"));
			Semestre s=new Semestre(id,semestre,etape,note);
			System.out.println(s.toString());
			se.UpdateSemestre(s);
			this.getServletContext().getRequestDispatcher("/ajouter-Semestre").forward(request, response);}
		
		
		else if (path.equals("/ajouter-professeur.php")) {

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
			String nv= request.getParameter("nvs");
			int nvs =0;
			if(!nv.equals("")) {
				nvs= Integer.parseInt(nv);
			}
			int idEtablissement = se.getIDETablissement(etablissement);
			int idFiliere = se.getIDFiliere(filiere);
			int idElement = se.getIDElement(element);
			int idModule = se.getIDModule(module);
			Professeur prof = new Professeur(0, nom, prenom, email, idEtablissement, role, idFiliere, grade);
			pd.addProf(prof);
			int idprof = pd.getIDProf(nom, prenom);
			User user = new User(0, login, mdp, null, idprof, role);
			pd.addUser(user, prof);
			if (idElement != 0) {
				pd.addPorf_element(prof, idElement);
			}
			if (idModule != 0) {
				pd.addProf_module(prof, idModule);
			}if(idFiliere!=0) {
				pd.addRESP_FIL(prof, idFiliere);
				pd.addNoteSemestre(nvs, idFiliere);
			}
			this.getServletContext().getRequestDispatcher("/Liste-Prof").forward(request, response);
		}
		if (path.equals("/add-inscriptionEexcel")) {
			this.getServletContext().getRequestDispatcher("/inscriptionEnligneEXCEL.jsp").forward(request, response);
			
		} else if (path.equals("/add-inscriptionEexcel.do")) {
			Part filePart = request.getPart("fichier");

			if (filePart != null) {
				inputStream = filePart.getInputStream();
			}

			insc.addEtExcel(inputStream);
			this.getServletContext().getRequestDispatcher("/ListeEnLigne").forward(request, response);

		} else if (path.equals("/Liste-IAdministrative")) {
			List<EtudFil> ef = ia.jointureEtIA();
			request.setAttribute("etudiants", ef);
			this.getServletContext().getRequestDispatcher("/ListeIAdministrative.jsp").forward(request, response);

		} else if (path.equals("/pedagogique.php")) {
			String cne = request.getParameter("massarEtud");
			Date au = Date.valueOf(request.getParameter("au"));
			String filiere = se.getFilierByCNE(cne);
			List<Etape> etapes = se.listEtape();
			EtudFil ef = new EtudFil(cne, filiere, au);
			request.setAttribute("etudiant", ef);
			request.setAttribute("etapes", etapes);
			this.getServletContext().getRequestDispatcher("/FormPedagogique.jsp").forward(request, response);

		} else if (path.equals("/pedagogique1.do")) {
			String cne = request.getParameter("cne");
			String filiere = request.getParameter("nom_filiere");
			String etape = request.getParameter("etape");
			Date au = Date.valueOf(request.getParameter("au"));
			int id = se.getIDEtape(etape);
			List<Semestre> sm = se.getSemestreByEtape(id);
			EtudFil ef = new EtudFil(cne, filiere, au);
			request.setAttribute("etudiant", ef);
			request.setAttribute("semestres", sm);
			request.setAttribute("etape", etape);

			this.getServletContext().getRequestDispatcher("/FormPedagogique1.jsp").forward(request, response);
		} else if (path.equals("/pedagogique2.do")) {
			String cne = request.getParameter("cne");
			String filiere = request.getParameter("nom_filiere");
			String etape = request.getParameter("etape");
			String semestre = request.getParameter("semestre");
			int id_semestre = se.getIDSemestre(semestre);
			List<Module> m = se.getModuleBySemestre(id_semestre);
			Date au = Date.valueOf(request.getParameter("au"));
			EtudFil ef = new EtudFil(cne, filiere, au);
			request.setAttribute("etudiant", ef);
			request.setAttribute("semestre", semestre);
			request.setAttribute("etape", etape);
			request.setAttribute("modules", m);
			this.getServletContext().getRequestDispatcher("/FormPedagogique2.jsp").forward(request, response);

		} else if (path.equals("/pedagogique3.do")) {
			String cne = request.getParameter("cne");
			String filiere = request.getParameter("nom_filiere");
			String etape = request.getParameter("etape");
			String semestre = request.getParameter("semestre");
			String module = request.getParameter("module");
			int id_module = se.getIDModule(module);
			List<Element> elt = se.getElementByMODULE(id_module);
			Date au = Date.valueOf(request.getParameter("au"));
			EtudFil ef = new EtudFil(cne, filiere, au);
			request.setAttribute("etudiant", ef);
			request.setAttribute("semestre", semestre);
			request.setAttribute("etape", etape);
			request.setAttribute("module", module);
			request.setAttribute("elements", elt);
			this.getServletContext().getRequestDispatcher("/FormPedagogique3.jsp").forward(request, response);

		} else if (path.equals("/pedagogique4.do")) {
			String cne = request.getParameter("cne");
			String filiere = request.getParameter("nom_filiere");
			String etape = request.getParameter("etape");
			String semestre = request.getParameter("semestre");
			String module = request.getParameter("module");
			String[] elts = request.getParameterValues("element");
					
			Date au = Date.valueOf(request.getParameter("au"));
			for (int i = 0; i < elts.length; i++) {
				int id_elt = se.getIDElement(elts[i]);
				Inscrip_pedagogique ip = new Inscrip_pedagogique(cne, id_elt, au);
				ipd.addIP(ip);
			}
			
			this.getServletContext().getRequestDispatcher("/choix-listp.do").forward(request, response);
			
		} else if (path.equals("/choix-listp.do")) {
			this.getServletContext().getRequestDispatcher("/ChoixPedag.jsp").forward(request, response);
		} else if (path.equals("/choix-listp")) {

			String choix = request.getParameter("choix");
			String libelle = request.getParameter("Libelle");
			if (choix.equals("semestre")) {
				List<String> nms = se.nomSemestre();
				request.setAttribute("semestres", nms);
				this.getServletContext().getRequestDispatcher("/ChoixPedagSems.jsp").forward(request, response);
			} else if (choix.equals("module")) {
				List<String> nmm = se.nomModule();
				request.setAttribute("modules", nmm);
				this.getServletContext().getRequestDispatcher("/ChoixPedagModule.jsp").forward(request, response);
			} else {
				List<String> nme = se.nomElement();
				request.setAttribute("elements", nme);
				this.getServletContext().getRequestDispatcher("/ChoixPedagELT.jsp").forward(request, response);

			}
		} else if (path.equals("/choix-listSemestre.do")) {
			String semestre = request.getParameter("semestres");
			List<Element> elts = ipd.getElementDANSSemestre(semestre);
			HashSet<Etudiant> etudiants = ipd.getListeEtudiantXXXX(elts);
			request.setAttribute("semestres", semestre);
			request.setAttribute("etudiants", etudiants);
			this.getServletContext().getRequestDispatcher("/ChoixPedagSems.jsp").forward(request, response);

		} else if (path.equals("/choix-listModule.do")) {
			String modules = request.getParameter("module");
			List<Element> elts = ipd.getElementDANSModule(modules);
			HashSet<Etudiant> etudiants = ipd.getListeEtudiantXXXX(elts);
			request.setAttribute("modules", modules);
			request.setAttribute("etudiants", etudiants);
			this.getServletContext().getRequestDispatcher("/ChoixPedagModule.jsp").forward(request, response);
		} else if (path.equals("/choix-listElt.do")) {
			String elements = request.getParameter("element");
			List<Element> elts = new ArrayList<Element>();
			int id = se.getIDElement(elements);
			System.out.println(elements);
			elts.add(new Element(id));
			HashSet<Etudiant> etudiants = ipd.getListeEtudiantXXXX(elts);
			request.setAttribute("etudiants", etudiants);
			request.setAttribute("elements", elements);
			session.setAttribute("element-excel",elements);
			this.getServletContext().getRequestDispatcher("/ChoixPedagELT.jsp").forward(request, response);

		}
		if (path.equals("/Mdp-oublie")) {
			try {
				Random rand = new Random();
				randomCode = rand.nextInt(999999);
				String host = "smtp.gmail.com";
				String user = "amineyassir2001@gmail.com";
				String pass = "Amineyassir20";
				String to = request.getParameter("email");
				String subject = "Reseting Code";
				String message = "Your reset code is " + randomCode;
				boolean sessionDebug = false;
				Properties pros = System.getProperties();
				pros.put("mail.smtp.user", "username");
				pros.put("mail.smtp.host", "smtp.gmail.com");
				pros.put("mail.smtp.port", "25");
				pros.put("mail.debug", "true");
				pros.put("mail.smtp.auth", "true");
				pros.put("mail.smtp.starttls.enable", "true");
				pros.put("mail.smtp.EnableSSL.enable", "true");

				pros.setProperty("mail.smtp.socketFactory.class", "javax.net.ssl.SSLSocketFactory");
				pros.setProperty("mail.smtp.socketFactory.fallback", "false");
				pros.setProperty("mail.smtp.port", "465");
				pros.setProperty("mail.smtp.socketFactory.port", "465");
				java.security.Security.addProvider(new com.sun.net.ssl.internal.ssl.Provider());
				Session mailSession = Session.getDefaultInstance(pros, null);
				mailSession.setDebug(sessionDebug);
				Message msg = new MimeMessage(mailSession);
				msg.setFrom(new InternetAddress(user));
				InternetAddress[] address = { new InternetAddress(to) };
				msg.setRecipients(Message.RecipientType.TO, address);
				msg.setSubject(subject);
				msg.setContent(message,"text/html");

				Transport transport = mailSession.getTransport("smtp");
				transport.connect(host, user, pass);
				transport.sendMessage(msg, msg.getAllRecipients());
				transport.close();

				this.getServletContext().getRequestDispatcher("/VerificationMdp.jsp").forward(request, response);

			} catch (Exception e) {
				e.printStackTrace();
			}
		} else if (path.equals("/verifier-code")) {
			int msg = Integer.parseInt(request.getParameter("text"));
			if (msg == randomCode) {
				this.getServletContext().getRequestDispatcher("/RenetialisationMdp.jsp").forward(request, response);
			} else
				this.getServletContext().getRequestDispatcher("/loginAD.jsp").forward(request, response);

		} else if (path.equals("/Renetialiser-Mdp")) {
			String username = request.getParameter("username");
			String pass = request.getParameter("nouveauMDP");
			d.UpdateUser(username, pass);
			this.getServletContext().getRequestDispatcher("/index.html").forward(request, response);
		}  else if (path.equals("/list-element")) {
			List<Element> listElement = se.listElement();
			request.setAttribute("elements", listElement);
			this.getServletContext().getRequestDispatcher("/ListeElement.jsp").forward(request, response);
		}

		else if (path.equals("/ajouter-Semestre")) {
			List<Semestre> lstSemestre = se.listSem();
			List<Etape>lstEtape=se.listEtape();
			request.setAttribute("etape", lstEtape);
			request.setAttribute("semestre", lstSemestre);
			System.out.println("ajout semestre");
			this.getServletContext().getRequestDispatcher("/ListeSemestre.jsp").forward(request, response);

		} else if (path.equals("/get-etap")) { // get IdEtape maison :
			int id = Integer.parseInt(request.getParameter("id"));
			Etape p = se.getIdEtape(id);
			request.setAttribute("s", p);
			this.getServletContext().getRequestDispatcher("/ProfilEtape.jsp").forward(request, response);
		}
		else if (path.equals("/Liste-Prof")) {
			List<Professeur> lstProf = pd.listProf();
			request.setAttribute("professeur", lstProf);
			this.getServletContext().getRequestDispatcher("/ListeProfesseur.jsp").forward(request, response);}
		/////////////////////// DELIBERATION:
		else if (path.equals("/note-element-excel")) {
			List<Element> elts = se.listElement();
			request.setAttribute("elements", elts);
			this.getServletContext().getRequestDispatcher("/NOTE-EXCEL.jsp").forward(request, response);
		} else if (path.equals("/note-element-excel.do")) {
			String elt = request.getParameter("element");
			Part filePart = request.getPart("fichier");
			if (filePart != null) {
				inputStream = filePart.getInputStream();
			}
			List<ETUD_NOTE> etn = new ArrayList<ETUD_NOTE>();
			List<ETUD_NOTE> en = ipd.recupererLISTE(inputStream);
			String msg ="";
			for (int i = 0; i < en.size(); i++) {
				if(ipd.isEtudiantPElt(en.get(i).getCNE(), elt)) {
					etn.add(en.get(i));
				}else {
					msg="DANS VOTRE LISTE ,IL EXISTE DES ETUDIANTS NON INSCRITS A L'ELEMENT CHOISI ";
					request.setAttribute("message", msg);
					this.getServletContext().getRequestDispatcher("/note-element-excel").forward(request, response);
					break;
				}
			}
			System.out.println(en);
			request.setAttribute("etudiants", etn);
			session.setAttribute("etudiants", etn);
			request.setAttribute("element", elt);
			this.getServletContext().getRequestDispatcher("/editable-table.jsp").forward(request, response);

		} else if (path.equals("/saveNOTE.do")) {
			String cne = request.getParameter("id");
			String element = request.getParameter("element");
			ETUD_NOTE e = new ETUD_NOTE(cne, element);
			request.setAttribute("etudiant", e);

			this.getServletContext().getRequestDispatcher("/AjoutNote.jsp").forward(request, response);
		} else if (path.equals("/saveNOTE.php")) {
			String cne = request.getParameter("cne");
			String element = request.getParameter("element");
			session.setAttribute("element", element);
			System.out.println("Elt saveNote.php "+element);
			double TP = Double.parseDouble(request.getParameter("TP"));
			double CC = Double.parseDouble(request.getParameter("CC"));
			double OR = Double.parseDouble(request.getParameter("ORDINAIRE"));
			se.saveNOTE_ELT(cne, element, TP, OR, CC);
			request.setAttribute("etapes", se.listEtape());
			@SuppressWarnings("unchecked")
			List<ETUD_NOTE> etds = (List<ETUD_NOTE>) session.getAttribute("etudiants");
			for(int i=0;i<etds.size();i++) {
				if(etds.get(i).getCNE().equals(cne)) {
					etds.get(i).setNOTE(se.recuperer_note(cne, element));
				}
			}
			System.out.println("Elt saveNote.php"+etds);
			request.setAttribute("etudiants", etds);
			this.getServletContext().getRequestDispatcher("/editable-table.jsp").forward(request, response);
		} else if (path.equals("/choix-listp-note.do")) {
			request.setAttribute("etapes", se.listEtape());
			this.getServletContext().getRequestDispatcher("/Note.jsp").forward(request, response);
		} else if (path.equals("/choix-listp-note")) {
			int id = se.getIDEtape(request.getParameter("etape"));
			List<Semestre> sm = se.getSemestreByEtape(id);
			request.setAttribute("etape", request.getParameter("etape"));
			request.setAttribute("semestres", sm);
			this.getServletContext().getRequestDispatcher("/NoteSEM.jsp").forward(request, response);
		} else if (path.equals("/choix-listp-note-semestre")) {
			int id_semestre = se.getIDSemestre(request.getParameter("semestre"));
			List<Module> m = se.getModuleBySemestre(id_semestre);
			request.setAttribute("etape", request.getParameter("etape"));
			request.setAttribute("semestre", request.getParameter("semestre"));
			request.setAttribute("module", m);
			this.getServletContext().getRequestDispatcher("/NoteModule.jsp").forward(request, response);
		} else if (path.equals("/choix-listp-note-module")) {
			String module = request.getParameter("module");
			int id_module = se.getIDModule(module);
			List<Element> elt = se.getElementByMODULE(id_module);
			request.setAttribute("module", module);
			request.setAttribute("etape", request.getParameter("etape"));
			request.setAttribute("semestre", request.getParameter("semestre"));
			request.setAttribute("element", elt);
			this.getServletContext().getRequestDispatcher("/NoteElt.jsp").forward(request, response);

		} else if (path.equals("/choix-listp-note-element")) {
			System.out.println("/choix-listp-note-element");
			int id_elt = se.getIDElement(request.getParameter("element"));
			List<Etudiant> etds = ipd.getEtudiantParElement(id_elt);
			List<ETUD_NOTE> etd = ipd.EtudiantNoteV(etds, request.getParameter("element"));
			System.out.println(etd);
			List<ETUD_NOTE> nn = new ArrayList<ETUD_NOTE>();
			for (int i = 0; i < etd.size(); i++) {
				Etudiant e = ipd.info_etudiant(etd.get(i).getCNE());
				ETUD_NOTE en = new ETUD_NOTE(e.getMassarEtud(), e.getNomFr(), e.getPrenomFr(),
						se.getNoteElement(e.getMassarEtud(), request.getParameter("element")));
				nn.add(en);
			}
			request.setAttribute("etudiants", nn);
			session.setAttribute("etudiants", nn);
			request.setAttribute("module", request.getParameter("module"));
			request.setAttribute("etape", request.getParameter("etape"));
			request.setAttribute("semestre", request.getParameter("semestre"));
			request.setAttribute("element", request.getParameter("element"));
			session.setAttribute("element", request.getParameter("element"));
			this.getServletContext().getRequestDispatcher("/editable-table.jsp").forward(request, response);


		} else if (path.equals("/deliberer")) {
			System.out.println("/DELIBERER");
			String[] etawat = new String[99];
			@SuppressWarnings("unchecked")
			List<ETUD_NOTE> en = (List<ETUD_NOTE>) session.getAttribute("etudiants");
			
			List<ETUD_NOTE> ee = new ArrayList<ETUD_NOTE>();
			String element = (String) session.getAttribute("element");
			System.out.println(element);
			for (int i = 0; i < en.size(); i++) {
				etawat[i] = se.getETAT_NOTE(en.get(i).getCNE(), element);

				ee.add(new ETUD_NOTE(en.get(i).getCNE(), en.get(i).getNom(), en.get(i).getPrenom(), se.recuperer_note(en.get(i).getCNE(), element),
						etawat[i]));
			}
			request.setAttribute("element", request.getParameter("element"));
			request.setAttribute("etape", request.getParameter("etape"));
			request.setAttribute("semestre", request.getAttribute("semestre"));
			request.setAttribute("etudiants", ee);
			System.out.println(ee);
			this.getServletContext().getRequestDispatcher("/ListeEtudiantElementETAT.jsp").forward(request, response);

		}///////////////////////////////////DELIBERER LES LISTES INSCRIS PEDAGOGIQUEMENT AL7M9
		/////3ks dkchii li kndiru lfuq knchdu ghir li 3ndu note deja mdkhulaa  
		else if (path.equals("/Liste-A-Deliberer.do")) {
			request.setAttribute("etapes", se.listEtape());
			this.getServletContext().getRequestDispatcher("/Entrer_Note.jsp").forward(request, response);

		} else if (path.equals("/Liste-A-Deliberer")) {
			int id = se.getIDEtape(request.getParameter("etape"));
			List<Semestre> sm = se.getSemestreByEtape(id);
			request.setAttribute("etape", request.getParameter("etape"));
			request.setAttribute("semestres", sm);
			this.getServletContext().getRequestDispatcher("/Entrer_NoteSEM.jsp").forward(request, response);

		} else if (path.equals("/Liste-A-Deliberer-Semestre")) {
			int id_semestre = se.getIDSemestre(request.getParameter("semestre"));
			List<Module> m = se.getModuleBySemestre(id_semestre);
			request.setAttribute("etape", request.getParameter("etape"));
			request.setAttribute("semestre", request.getParameter("semestre"));
			request.setAttribute("module", m);
			this.getServletContext().getRequestDispatcher("/Entrer_NoteModule.jsp").forward(request, response);

		} else if (path.equals("/Liste-A-Deliberer-Module")) {
			String module = request.getParameter("module");
			int id_module = se.getIDModule(module);
			List<Element> elt = se.getElementByMODULE(id_module);
			request.setAttribute("module", module);
			request.setAttribute("etape", request.getParameter("etape"));
			request.setAttribute("semestre", request.getParameter("semestre"));
			request.setAttribute("element", elt);
			this.getServletContext().getRequestDispatcher("/Entrer_NoteElt.jsp").forward(request, response);

		} else if (path.equals("/Liste-A-Deliberer-Element")) {
			int id_elt = se.getIDElement(request.getParameter("element"));
			String elt=request.getParameter("element");

			List<Etudiant> etds = ipd.getEtudiantParElement(id_elt);
			System.out.println(etds);
			List<ETUD_NOTE> en = new ArrayList<ETUD_NOTE>();
			for (int i = 0; i < etds.size(); i++) {
				Etudiant e = new Etudiant(etds.get(i).getMassarEtud(), etds.get(i).getNomFr(),
						etds.get(i).getPrenomFr());
				en.add(se.switch_to_etudN(e, request.getParameter("element")));
			}
			request.setAttribute("module", request.getParameter("module"));
			request.setAttribute("etape", request.getParameter("etape"));
			request.setAttribute("semestre", request.getParameter("semestre"));
			request.setAttribute("element", request.getParameter("element"));
			session.setAttribute("element", request.getParameter("element"));
			request.setAttribute("etudiants", en);
			session.setAttribute("etudiants", en);
			this.getServletContext().getRequestDispatcher("/editable-table.jsp").forward(request, response);
		}else if(path.equals("/EXCEL.do")) {

			String element = request.getParameter("element");
			try {
				response.setContentType("application/octet-stream");
				String headerKey="Content-Disposition";
				String headerValue="attachement;filename=Serhani.xls";

				response.setHeader(headerKey, headerValue);
				List<Etudiant> e = ipd.getEtudiantParElement(1);

				EtudiantExcelExport excel=new EtudiantExcelExport(e);
				excel.exporter(e,response);

			} catch (Exception e) {
				e.printStackTrace();
			}}else if(path.equals("/excelELEMENT.do")){
				
				
				String element = (String) session.getAttribute("element-excel");
				try {
					response.setContentType("application/octet-stream");
					String headerKey="Content-Disposition";
					String headerValue="attachement;filename=liste_Excel_"+element+".xls";

					response.setHeader(headerKey, headerValue);
					int id_elt= se.getIDElement(element);
					List<Etudiant> e = ipd.getEtudiantParElement(id_elt);

					EtudiantExcelExport excel=new EtudiantExcelExport(e);
					excel.exporterLISTEs(e,response);

				} catch (Exception e) {
					e.printStackTrace();
				}
			/////////////////////prof element
		}else if(path.equals("/etudiant-element")) {
			String element = (String) session.getAttribute("element-prof");
			int id_elt = se.getIDElement(element);
			List<Etudiant> e = ipd.getEtudiantParElement(id_elt);
			request.setAttribute("etudiants", e);
			request.setAttribute("element", element);
			this.getServletContext().getRequestDispatcher("/Liste_Etud_Elt.jsp").forward(request, response);
			// affiche la liste fhwd tableau 
			// bouton thta bch n2impoorte lliste
		}else if(path.equals("/excel-elt.do")) {
			String element = request.getParameter("elt");
			int id_elt = se.getIDElement(element);
			try {
				response.setContentType("application/octet-stream");
				String headerKey="Content-Disposition";
				String headerValue="attachement;filename=EXCEL.xls";

				response.setHeader(headerKey, headerValue);
				List<Etudiant> e = ipd.getEtudiantParElement(id_elt);

				EtudiantExcelExport excel=new EtudiantExcelExport(e);
				excel.exporter(e,response);

			} catch (Exception e) {
				e.printStackTrace();
			}
		}else if(path.equals("/recuperer-Liste-Elt.do")) {
			String element =(String)session.getAttribute("element-prof");
			request.setAttribute("element", element);
			this.getServletContext().getRequestDispatcher("/ImporterNote.jsp").forward(request, response);

		}else if(path.equals("/recuperer-Liste-Elt")) {
			String elt = (String)session.getAttribute("element-prof");
			Part filePart = request.getPart("fichier");
			if (filePart != null) {
				inputStream = filePart.getInputStream();
			}
			List<ETUD_NOTE> en = ipd.recupererLISTE_Note(inputStream, elt);
			System.out.println(en);
			request.setAttribute("etudiants", en);
			request.setAttribute("element", elt);
			this.getServletContext().getRequestDispatcher("/Liste_Etud_Elt_Note.jsp").forward(request, response);

		}else if(path.equals("/mon_element.do")) {
			String element=(String)session.getAttribute("element-prof");
			Element e = se.INFO_ELEMENT(element);
			request.setAttribute("element", e);
			this.getServletContext().getRequestDispatcher("/mon-element.jsp").forward(request, response);

		}else if(path.equals("/update_mon_element.do")){
			int id_element=Integer.parseInt(request.getParameter("idelement"));
			String libelle = request.getParameter("libelle");
			int note = Integer.parseInt(request.getParameter("note"));
			int id_mod = Integer.parseInt(request.getParameter("idmo"));
			int coeff = Integer.parseInt(request.getParameter("coeff"));
			Element e = new Element(id_element, libelle, id_mod, coeff, note);
			se.Update_element(e);
			String message = "Votre Update a ete bien sauvegarde !";
			request.setAttribute("message", message);
			request.setAttribute("element", e);
			this.getServletContext().getRequestDispatcher("/mon-element.jsp").forward(request, response);
		}else if(path.equals("/etudiant_module")) {
			String module=(String)session.getAttribute("module-resp");
			int id_module =se.getIDModule(module);
			List<Element> e = se.getElementByMODULE(id_module);
			List<Element> elts = new ArrayList<Element>();
			for (int i = 0; i < e.size(); i++) {
				elts.add(se.INFO_ELEMENT(e.get(i).getLabelleElement()));
			}
			HashSet<Etudiant> en = ipd.getListeEtudiantXXXX(elts);
			request.setAttribute("etudiants", en);
			request.setAttribute("module", module);
			this.getServletContext().getRequestDispatcher("/Liste_Etud_Module.jsp").forward(request, response);

		}else if(path.equals("/recuperer-Liste-module.do")) {
			int id_module =se.getIDModule((String)session.getAttribute("module-resp"));
			List<Element> e = se.getElementByMODULE(id_module);
			List<Element> elts = new ArrayList<Element>();

			for (int i = 0; i < e.size(); i++) {
				elts.add(se.INFO_ELEMENT(e.get(i).getLabelleElement()));
			}
			List<Etudiant> et1 = ipd.getEtudiantParElement(elts.get(0).getIDElement());
			List<Etudiant> et2 = ipd.getEtudiantParElement(elts.get(1).getIDElement());
			//////////////////////1-ghir li mdkhl note|2-khs ntester khs ikun f les deux elts
			//pour et1=>elts1///

			List<ETUD_NOTE> nn1= ipd.EtudiantNoteV(et1, elts.get(0).getLabelleElement());//gha massarETUD li kyn fhad ETUD_NOTE
			List<ETUD_NOTE> en1 =new ArrayList<ETUD_NOTE>();
			for (int i = 0; i < nn1.size(); i++) {
				en1.add(se.switch_to_etudN(insc.getET3(nn1.get(i).getCNE()), elts.get(0).getLabelleElement()));
			}
			//pour et2=>elts2//

			List<ETUD_NOTE> nn2= ipd.EtudiantNoteV(et2, elts.get(0).getLabelleElement());//gha massarETUD li kyn fhad ETUD_NOTE
			List<ETUD_NOTE > en2 = new ArrayList<ETUD_NOTE>();
			for (int i = 0; i < nn2.size(); i++) {
				en2.add(se.switch_to_etudN(insc.getET3(nn2.get(i).getCNE()), elts.get(1).getLabelleElement()));
			}

			request.setAttribute("etudiants1", en1);
			session.setAttribute("etudiants1", en1);

			request.setAttribute("element1",  elts.get(0).getLabelleElement());
			session.setAttribute("element1",  elts.get(0).getLabelleElement());

			request.setAttribute("etudiants2", en2);
			session.setAttribute("etudiants2", en2);

			request.setAttribute("element2",  elts.get(1).getLabelleElement());
			session.setAttribute("element2",  elts.get(1).getLabelleElement());

			request.setAttribute("elements", elts);
			session.setAttribute("elements", elts);

			this.getServletContext().getRequestDispatcher("/List_ETUD_M.jsp").forward(request, response);

		}else if(path.equals("/deliberer-module.do")) {
			/*List<ETUD_NOTE> en1 = ((List<ETUD_NOTE>) session.getAttribute("etudiants1"));
			String elts1 = (String) session.getAttribute("element1");

			List<ETUD_NOTE> en2 = ((List<ETUD_NOTE>) session.getAttribute("etudiants2"));
			String elts2 = (String) session.getAttribute("element2");

			List<Element> ets = new ArrayList<Element>();
			ets.add(new Element(elts1));
			ets.add(new Element(elts2));*/

			String module=(String)session.getAttribute("module-resp");
			System.out.println(module);
			List<Element> elts = se.getElementByMODULE(se.getIDModule(module));
			List<Element> nv = new ArrayList<Element>();
			for (int i = 0; i < elts.size(); i++) {
				nv.add(se.INFO_ELEMENT(elts.get(i).getLabelleElement()));
			}
			HashSet<Etudiant> hs = ipd.getListeEtudiantXXXX(nv);
			List<Etudiant> ee =new ArrayList<Etudiant>(hs);
			List<ETUD_NOTE> nn = new ArrayList<ETUD_NOTE>();
			for (int i = 0; i < ee.size(); i++) {
				if(ipd.etud_mod(module, ee.get(i).getMassarEtud())){
					ETUD_NOTE en = new ETUD_NOTE(ee.get(i).getMassarEtud(), se.NotedsModule(module, ee.get(i).getMassarEtud()));
					en.setNom(ee.get(i).getNomFr());
					en.setPrenom(ee.get(i).getPrenomFr());
					en.setEtat(se.get_Etat_M(module, ee.get(i).getMassarEtud()));
					nn.add(en);	
				}}
			request.setAttribute("etudiants", nn);
			session.setAttribute("etudiants", nn);
			request.setAttribute("module", module);
			this.getServletContext().getRequestDispatcher("/List_ETUD_M_NOTE.jsp").forward(request, response);

		}else if(path.equals("/rattrapage.do")) {
			String element = request.getParameter("element");
			System.out.println(element);
			List<ETUD_NOTE> ratt =se.getRattrapage(element);
			request.setAttribute("etudiants", ratt);
			request.setAttribute("element", element);
			this.getServletContext().getRequestDispatcher("/Liste_Etud_EltR.jsp").forward(request, response);

		}else if(path.equals("/lnote-element.do")) {
			String element = (String) session.getAttribute("element-prof");
			List<ETUD_NOTE> en = se.getListeNote(element);
			request.setAttribute("etudiants", en);
			request.setAttribute("element", element);
			this.getServletContext().getRequestDispatcher("/liste_note.jsp").forward(request, response);

		}else if(path.equals("/excel-eltR.do")) {
			String element = request.getParameter("elt");
			try {
				response.setContentType("application/octet-stream");
				String headerKey="Content-Disposition";
				String headerValue="attachement;filename=EXCEL.xls";

				response.setHeader(headerKey, headerValue);
				List<ETUD_NOTE> ratt =se.getRattrapage(element);
				List<Etudiant> e = new ArrayList<Etudiant>();
				for (int i = 0; i < ratt.size(); i++) {
					Etudiant etud =new Etudiant(ratt.get(i).getCNE(), ratt.get(i).getNom(),ratt.get(i).getPrenom());
					System.out.println(etud);
					e.add(etud);
					}
				EtudiantExcelExport excel=new EtudiantExcelExport(e);
				excel.exporterRatt(e,response);

			} catch (Exception e) {
				e.printStackTrace();
			}
		}else if(path.equals("/pdf-element.do")) {
				String element=(String) session.getAttribute("element-prof");
			try {
				response.setContentType("application/pdf");
				DateFormat date = new SimpleDateFormat("yyy-MM-dd_HH:mm:ss");
				String dateCourante = date.format(new java.util.Date());

				String headerkey = "Content-Disposition";
				String headerValue = "attachement;filename=Element_" + dateCourante+ ".pdf";
				response.setHeader(headerkey, headerValue);
				List<ETUD_NOTE> listEtud = new ArrayList<ETUD_NOTE>();
				UserPdf exporter = new UserPdf(listEtud, request,element);
				exporter.exporte(response,element);

			} catch (Exception e) {
				e.printStackTrace();
			}
		}else if(path.equals("/pdf-elementR.do")) {
			String element =(String)session.getAttribute("element-prof");
			try {
				response.setContentType("application/pdf");
				DateFormat date = new SimpleDateFormat("yyy-MM-dd_HH:mm:ss");
				String dateCourante = date.format(new java.util.Date());

				String headerkey = "Content-Disposition";
				String headerValue = "attachement;filename=ElementT_"+element+ dateCourante+ ".pdf";
				response.setHeader(headerkey, headerValue);
				List<ETUD_NOTE> listEtud = new ArrayList<ETUD_NOTE>();
				UserPdf exporter = new UserPdf(element);
				exporter.exporteTOT(response,element);

			} catch (Exception e) {
				e.printStackTrace();
			}
			
			
		}else if(path.equals("/recuperer-Liste-EltR.do")) {
			String element =(String)session.getAttribute("element-prof");
			request.setAttribute("element", element);
			this.getServletContext().getRequestDispatcher("/ImporterNoteRatt.jsp").forward(request, response);
		}else if(path.equals("/recuperer-Liste-EltR")) {
			String elt = (String)session.getAttribute("element-prof");
			Part filePart = request.getPart("fichier");//RECUPER FICHIER
			if (filePart != null) {
				inputStream = filePart.getInputStream();//INPUT STREAM
			}
			List<ETUD_NOTE> en =ipd.recupererLISTE_Ratt(inputStream, elt);//ktchd dk resultat (ss forme input stream) u ktzidlu 
			request.setAttribute("element", elt);
			
			request.setAttribute("etudiants", en);
			this.getServletContext().getRequestDispatcher("/ResultatRatt.jsp").forward(request, response);

		}else if(path.equals("/pdf-module.do")) {
			String module=(String)session.getAttribute("module-resp");
			List<ETUD_NOTE> en =(List<ETUD_NOTE>) session.getAttribute("etudiants");
			try {
				response.setContentType("application/pdf");
				DateFormat date = new SimpleDateFormat("yyy-MM-dd_HH:mm:ss");
				String dateCourante = date.format(new java.util.Date());

				String headerkey = "Content-Disposition";
				String headerValue = "attachement;filename=MODULE_"+module + dateCourante+ ".pdf";
				response.setHeader(headerkey, headerValue);
				
				UserPdf exporter = new UserPdf(en);
				exporter.exporterModule(response,module);

			} catch (Exception e) {
				e.printStackTrace();
			}
		
		}
		////deliberation par semestre
		else if(path.equals("/etudiant_semestre")) {
			String Filiere=(String)session.getAttribute("filiere-resp");
			int id_filiere=se.getIDFiliere(Filiere);
			List<Semestre> sem = pd.semsFROM_fil(id_filiere);
			List<Element> totals = new ArrayList<Element>();
			for (int i = 0; i < sem.size(); i++) {
				List<Element> le = ipd.getElementDANSSemestre(sem.get(i).getLabelleSemestre());
				totals.addAll(le);
			}
			HashSet<Etudiant> hs = ipd.getListeEtudiantXXXX(totals);
			System.out.println(hs);
			request.setAttribute("etudiants", hs);
			request.setAttribute("filiere", Filiere);
			session.setAttribute("semestres", sem);
			this.getServletContext().getRequestDispatcher("/Liste_Etud_SEM.jsp").forward(request, response);
		}else if(path.equals("/recuperer-Liste-semestre.do")) {
			List<Semestre> sem = (List<Semestre>) session.getAttribute("semestres");
			request.setAttribute("semestres", sem);
			this.getServletContext().getRequestDispatcher("/liste_delib_sem.jsp").forward(request, response);

		}else if(path.equals("/note-listSemestre.do")) {
			String semestre = request.getParameter("semestres");
			List<Element> elts =ipd.getElementDANSSemestre(semestre);
			HashSet<Etudiant> hs = ipd.getListeEtudiantXXXX(elts);
			List<Etudiant> ee =new ArrayList<Etudiant>(hs);
			List<ETUD_NOTE> nn = new ArrayList<ETUD_NOTE>();
			for (int i = 0; i < ee.size(); i++) {
				if(ipd.is_etud_sem(ee.get(i).getMassarEtud(), semestre)){
					ETUD_NOTE en = new ETUD_NOTE(ee.get(i).getMassarEtud(), ipd.calculerSEM(ee.get(i).getMassarEtud(), semestre));
					en.setNom(ee.get(i).getNomFr());
					en.setPrenom(ee.get(i).getPrenomFr());
					en.setEtat(ipd.getEtatSEM(ee.get(i).getMassarEtud(), semestre));
					nn.add(en);	
				}}
			request.setAttribute("etudiants", nn);
			List<Semestre> sem = (List<Semestre>) session.getAttribute("semestres");
			
			request.setAttribute("semestres", sem);
			request.setAttribute("semestre", semestre);
			this.getServletContext().getRequestDispatcher("/liste_delib_sem.jsp").forward(request, response);
					}
		else if(path.equals("/collegues.do")) {
			String element=(String)session.getAttribute("element-prof");
			String etab=(String)session.getAttribute("etablissement");
			System.out.println(etab);
			List<Professeur> p= pd.getCollege(etab);
			request.setAttribute("professeurs", p);
			request.setAttribute("etab", etab);
			this.getServletContext().getRequestDispatcher("/collegues.jsp").forward(request, response);

		}else if(path.equals("/releve_note.do")) {
			String massarEtudiant = (String)session.getAttribute("massar");
			List<ETUD_NOTE> rv = ipd.Releve_Note(massarEtudiant);
			System.out.println(rv);
			request.setAttribute("etudiants", rv);
			request.setAttribute("massar", massarEtudiant);
			this.getServletContext().getRequestDispatcher("/RV.jsp").forward(request, response);

		}else if(path.equals("/relevepdf.do")) {
			String massarEtudiant = request.getParameter("massar");
			List<ETUD_NOTE> rv = ipd.Releve_Note(massarEtudiant);
			try{response.setContentType("application/pdf");
			DateFormat date = new SimpleDateFormat("yyy-MM-dd_HH:mm:ss");
			String dateCourante = date.format(new java.util.Date());

			String headerkey = "Content-Disposition";
			String headerValue = "attachement;filename=R.N"+massarEtudiant + ".pdf";
			response.setHeader(headerkey, headerValue);
			
			UserPdf exporter = new UserPdf(rv);
			exporter.RN(response, massarEtudiant);
			//le client est roi
		} catch (Exception e) {
			e.printStackTrace();
		}
	
			
		}else if(path.equals("/pdf_semestre.do")) {
			String semestre = request.getParameter("sem");
			List<Element> elts =ipd.getElementDANSSemestre(semestre);
			HashSet<Etudiant> hs = ipd.getListeEtudiantXXXX(elts);
			List<Etudiant> ee =new ArrayList<Etudiant>(hs);
			List<ETUD_NOTE> nn = new ArrayList<ETUD_NOTE>();
			for (int i = 0; i < ee.size(); i++) {
				if(ipd.is_etud_sem(ee.get(i).getMassarEtud(), semestre)){
					ETUD_NOTE en = new ETUD_NOTE(ee.get(i).getMassarEtud(), ipd.calculerSEM(ee.get(i).getMassarEtud(), semestre));
					en.setNom(ee.get(i).getNomFr());
					en.setPrenom(ee.get(i).getPrenomFr());
					en.setEtat(ipd.getEtatSEM(ee.get(i).getMassarEtud(), semestre));
					nn.add(en);	
				}}
		try{
			response.setContentType("application/pdf");
			DateFormat date = new SimpleDateFormat("yyy-MM-dd_HH:mm:ss");
			String dateCourante = date.format(new java.util.Date());

			String headerkey = "Content-Disposition";
			String headerValue = "attachement;filename=PV"+semestre + ".pdf";
			response.setHeader(headerkey, headerValue);
			
			UserPdf exporter = new UserPdf(nn);
			exporter.exporterSemestre(response, semestre);
			//le client est roi
		} catch (Exception e) {
			e.printStackTrace();
		}
		}
		else if (path.equals("/annuler_Inscription")) {
			try {
				String massarEtud = request.getParameter("massar");
				Etudiant e = insc.getET3(massarEtud);
				String host = "smtp.gmail.com";
				String user = "amineyassir2001@gmail.com";
				String pass = "Amineyassir20";
				String to = insc.getEmail(massarEtud);
				String subject = "Inscription";
				String message  = "\r\n"
						+ "<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\">\r\n"
						+ "<title>Welcome to One Touch</title>\r\n"
						+ "<style type=\"text/css\">\r\n"
						+ "#emailWrapperTable table {\r\n"
						+ "	font: 13px Arial, Verdana, Helvetica, sans-serif;\r\n"
						+ "	color: #292929;\r\n"
						+ "}\r\n"
						+ "\r\n"
						+ "#emailWrapperTable h1, #emailWrapperTable h2 {\r\n"
						+ "	font-family: Arial, Verdana, Helvetica, sans-serif;\r\n"
						+ "	margin-bottom: 2px;\r\n"
						+ "	font-size: 15px;\r\n"
						+ "}\r\n"
						+ "\r\n"
						+ "#emailWrapperTable h3 {\r\n"
						+ "	font-size: 13px;\r\n"
						+ "}\r\n"
						+ "\r\n"
						+ "#emailWrapperTable h4 {\r\n"
						+ "	font-size: 11px;\r\n"
						+ "}\r\n"
						+ "\r\n"
						+ "a {\r\n"
						+ "	color: #084482;\r\n"
						+ "	text-decoration: underline;\r\n"
						+ "}\r\n"
						+ "\r\n"
						+ "a.actionLink {\r\n"
						+ "	color: #000;\r\n"
						+ "	text-decoration: none;\r\n"
						+ "}\r\n"
						+ "\r\n"
						+ "hr {\r\n"
						+ "	display: none;\r\n"
						+ "}\r\n"
						+ "\r\n"
						+ ".small {\r\n"
						+ "	font-size: 10px;\r\n"
						+ "}\r\n"
						+ "\r\n"
						+ ".ppid {\r\n"
						+ "	color: #757575;\r\n"
						+ "}\r\n"
						+ "\r\n"
						+ "p {\r\n"
						+ "	margin: 11px 0;\r\n"
						+ "	padding: 0;\r\n"
						+ "}\r\n"
						+ "\r\n"
						+ ".headline {\r\n"
						+ "	font-family: Helvetica Neue Light, Helvetica;\r\n"
						+ "	font-weight: 300;\r\n"
						+ "	font-size: 28px;\r\n"
						+ "	color: #0079C1;\r\n"
						+ "}\r\n"
						+ "\r\n"
						+ "sup {\r\n"
						+ "	font-size: 7px !important;\r\n"
						+ "}\r\n"
						+ "\r\n"
						+ "sup {\r\n"
						+ "	font-size: 7px !important;\r\n"
						+ "}\r\n"
						+ "\r\n"
						+ "sup {\r\n"
						+ "	font-size: 7px !important;\r\n"
						+ "}\r\n"
						+ "\r\n"
						+ "sup {\r\n"
						+ "	font-size: 7px !important;\r\n"
						+ "}\r\n"
						+ "\r\n"
						+ "sup {\r\n"
						+ "	font-size: 7px !important;\r\n"
						+ "}\r\n"
						+ "\r\n"
						+ "sup {\r\n"
						+ "	font-size: 7px !important;\r\n"
						+ "}\r\n"
						+ "\r\n"
						+ "sup {\r\n"
						+ "	font-size: 7px !important;\r\n"
						+ "}\r\n"
						+ "\r\n"
						+ "sup {\r\n"
						+ "	font-size: 7px !important;\r\n"
						+ "}\r\n"
						+ "\r\n"
						+ "sup {\r\n"
						+ "	font-size: 7px !important;\r\n"
						+ "}\r\n"
						+ "\r\n"
						+ ".footerlink {\r\n"
						+ "	font: 13px Arial, Verdana, Helvetica, sans-serif !important;\r\n"
						+ "	color: #292929 !important;\r\n"
						+ "	font-weight: bold;\r\n"
						+ "	line-height: auto;\r\n"
						+ "	width: 530px;\r\n"
						+ "}\r\n"
						+ "\r\n"
						+ "a.footerlink:link {\r\n"
						+ "	color: #084482;\r\n"
						+ "	text-decoration: underline;\r\n"
						+ "}\r\n"
						+ "\r\n"
						+ "a.footerlink:visited {\r\n"
						+ "	color: #820844;\r\n"
						+ "	text-decoration: none;\r\n"
						+ "}\r\n"
						+ "div.button{\r\n"
						+ "	padding: 19px;\r\n"
						+ "	border: 2px solid #007FA4;\r\n"
						+ "	color:#007FA4;\r\n"
						+ "	background-color: white;\r\n"
						+ "	font-size:18px;\r\n"
						+ "	text-decoration: none;\r\n"
						+ "}\r\n"
						+ "div.button a{\r\n"
						+ "	margin-left: 200px;\r\n"
						+ "}\r\n"
						+ "</style>\r\n"
						+ "\r\n"
						+ "<div style=\"display: none; color: #fff; font-size: 1pt;\"></div>\r\n"
						+ "<table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" id=\"emailWrapperTable\"\r\n"
						+ "	width=\"580\">\r\n"
						+ "	<tbody>\r\n"
						+ "		<tr valign=\"top\">\r\n"
						+ "			<td colspan=\"3\">\r\n"
						+ "				<table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\">\r\n"
						+ "					<tbody>\r\n"
						+ "						<tr valign=\"top\">\r\n"
						+ "							<td width=\"130px;\"><br></td>\r\n"
						+ "						</tr>\r\n"
						+ "						<tr>\r\n"
						+ "							<td><img alt=\"\" border=\"0\" height=\"10\"\r\n"
						+ "								src=\"http://www.paypalobjects.com/en_US/i/scr/pixel.gif\"\r\n"
						+ "								width=\"1\"><img src=\"http://www.umi.ac.ma/wp-content/themes/umi/images/logo.png\"><br>\r\n"
						+ "							<br></td>\r\n"
						+ "						</tr>\r\n"
						+ "					</tbody>\r\n"
						+ "				</table>\r\n"
						+ "			</td>\r\n"
						+ "		</tr>\r\n"
						+ "		<tr>\r\n"
						+ "			<td colspan=\"3\"><img height=\"13\"\r\n"
						+ "				src=\"https://www.paypalobjects.com/en_US/i/scr/scr_emailTopCorners_580wx13h.gif\"\r\n"
						+ "				border=\"0\" style=\"vertical-align: bottom\" alt=\"\"></td>\r\n"
						+ "		</tr>\r\n"
						+ "		<tr>\r\n"
						+ "			<td width=\"12\"\r\n"
						+ "				style=\"background: url(/i/scr/scr_emailLeftBorder_13wx1h.gif) left repeat-y; border-left: 1px solid #ddd;\">\r\n"
						+ "				<img src=\"https://www.paypalobjects.com/en_US/i/scr/pixel.gif\"\r\n"
						+ "				border=\"0\" alt=\"\">\r\n"
						+ "			</td>\r\n"
						+ "\r\n"
						+ "			<td class=\"contentArea\"\r\n"
						+ "				style=\"width: 530px; word-wrap: break-word; padding: 12px; margin: 0\"\r\n"
						+ "				width=\"530\">\r\n"
						+ "				<table width=\"100%\">\r\n"
						+ "					<tbody>\r\n"
						+ "						<tr>\r\n"
						+ "							<td><span class=\"headline\"\r\n"
						+ "								style=\"font-family: Helvetica Neue Light, Helvetica; font-weight: 300; font-size: 28px; color: #0079C1;\">\r\n"
						+ "									<p style=\"font-size: 80%; color: #007FA4;\">IP</p>\r\n"
						+ "							</span>\r\n"
						+ "                         <p> Malheureusement ,votre inscription aux bachelors a été echouee !!!</p>\r\n"						
						
						+ "						</tr>\r\n"
						+ "					</tbody>\r\n"
						+ "				</table>\r\n"
						+ "			</td>\r\n"
						+ "			<td width=\"12\"\r\n"
						+ "				style=\"background: url(/i/scr/scr_emailRightBorder_13wx1h.gif) left repeat-y; border-right: 1px solid #ddd;\">\r\n"
						+ "				<img src=\"https://www.paypalobjects.com/en_US/i/scr/pixel.gif\"\r\n"
						+ "				border=\"0\" alt=\"\">\r\n"
						+ "			</td>\r\n"
						+ "\r\n"
						+ "		</tr>\r\n"
						+ "		<tr>\r\n"
						+ "			<td colspan=\"3\"><img height=\"13\"\r\n"
						+ "				src=\"https://www.paypalobjects.com/en_US/i/scr/scr_emailBottomCorners_580wx13h.gif\"\r\n"
						+ "				border=\"0\" alt=\"\"></td>\r\n"
						+ "		</tr>\r\n"
						+ "	</tbody>\r\n"
						+ "</table>";
				boolean sessionDebug = false;
				Properties pros = System.getProperties();
				pros.put("mail.smtp.user", "username");
				pros.put("mail.smtp.host", "smtp.gmail.com");
				pros.put("mail.smtp.port", "25");
				pros.put("mail.debug", "true");
				pros.put("mail.smtp.auth", "true");
				pros.put("mail.smtp.starttls.enable", "true");
				pros.put("mail.smtp.EnableSSL.enable", "true");

				pros.setProperty("mail.smtp.socketFactory.class", "javax.net.ssl.SSLSocketFactory");
				pros.setProperty("mail.smtp.socketFactory.fallback", "false");
				pros.setProperty("mail.smtp.port", "465");
				pros.setProperty("mail.smtp.socketFactory.port", "465");
				java.security.Security.addProvider(new com.sun.net.ssl.internal.ssl.Provider());
				Session mailSession = Session.getDefaultInstance(pros, null);
				mailSession.setDebug(sessionDebug);
				Message msg = new MimeMessage(mailSession);
				msg.setFrom(new InternetAddress(user));
				InternetAddress[] address = { new InternetAddress(to) };
				msg.setRecipients(Message.RecipientType.TO, address);
				msg.setSubject(subject);
				msg.setContent(message,"text/html");

				Transport transport = mailSession.getTransport("smtp");
				transport.connect(host, user, pass);
				transport.sendMessage(msg, msg.getAllRecipients());
				transport.close();
				insc.deleteETUSER(massarEtud);
				insc.deleteEt(massarEtud);
				
				this.getServletContext().getRequestDispatcher("/ListeEnLigne").forward(request, response);

			} catch (Exception e) {
				e.printStackTrace();
			}
		}
	}




	

	private static java.sql.Date convert(java.util.Date uDate) {
		java.sql.Date sDate = new java.sql.Date(uDate.getTime());
		return sDate;
	}
	public void writeExcel(List<Etudiant> l,String excelFilePath) throws IOException, Exception {
		Workbook workbook = new HSSFWorkbook();
		Sheet sheet = workbook.createSheet();
		int rowCount=0;
		for(Etudiant e :l) {
			Row row = sheet.createRow(++rowCount);
			writeEtud(e, row);
		}
		try (FileOutputStream os= new FileOutputStream(excelFilePath)){
			workbook.write(os);
		}

	}

	public void writeEtud(Etudiant e , Row r) {
		Cell cell = r.createCell(0);
		cell.setCellValue(e.getMassarEtud());

		cell = r.createCell(1);
		cell.setCellValue(e.getNomFr());

		cell = r.createCell(2);
		cell.setCellValue(e.getPrenomFr());
	}
}