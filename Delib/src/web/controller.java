package web;

import java.io.IOException;
import java.io.InputStream;
import java.sql.Date;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Part;

import dao.InscripEnLigne;
import dao.InscriptionADministrative;
import dao.StructureETab;
import metierEntite.Etablissement;
import metierEntite.Etudiant;
import metierEntite.Filiere;
import metierEntite.Inscrip_Administartive;
import metierEntite.User;
import metierEntite.annee_universitaire;

/**
 * Servlet implementation class controller
 */
@WebServlet(name = "cs", urlPatterns = { "/home", "*.do", "/Liste-Etablissement", "/ajouter-filiere", "/get-etab",
		"/inscrireADMS" })
public class controller extends HttpServlet {
	private static final long serialVersionUID = 1L;
	InputStream inputStream = null;
	InscripEnLigne insc = new InscripEnLigne();
	InscriptionADministrative ia = new InscriptionADministrative();
	StructureETab se = new StructureETab();
	List<Etablissement> listEtab = se.listETab();
	List<Etudiant> listEtu = insc.listEt();

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

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		String path = request.getServletPath();
		/*
		 * if(path.equals("/InscriptionEnLigne.php")) { String massarEtud =
		 * request.getParameter("massarEtud");// System.out.println(massarEtud); String
		 * NomFr = request.getParameter("NomFr");// System.out.println(NomFr); String
		 * NomAr = request.getParameter("NomAr");// String PrenomFr =
		 * request.getParameter("PrenomFr");// String PrenomAr =
		 * request.getParameter("PrenomAr");// String acad =
		 * request.getParameter("acad"); String an_Bac = request.getParameter("an_Bac");
		 * String cin = request.getParameter("cin"); /*String date =
		 * request.getParameter("dateN"); System.out.print(date);
		 * System.out.print(massarEtud); Date dateN = null; try { dateN = new
		 * SimpleDateFormat("yyyy-MM-dd").parse(date); System.out.println(dateN);
		 * 
		 * } catch (ParseException e) { // TODO Auto-generated catch block
		 * e.printStackTrace(); } String date1in = heute(); System.out.println(date1in);
		 */
		/*
		 * String villeBac = request.getParameter("villeBac"); String lieuN_ar =
		 * request.getParameter("lieuN_ar");//// String lieuN_fr =
		 * request.getParameter("lieuN_fr");// String lycee =
		 * request.getParameter("lycee"); String villeNaissance =
		 * request.getParameter("villeNaissance"); String mt =
		 * request.getParameter("mt"); String nationalite =
		 * request.getParameter("nationalite"); String province =
		 * request.getParameter("province"); String sBac =
		 * request.getParameter("sBac");// String sexe = request.getParameter("sexe");
		 * String region = request.getParameter("region");
		 * 
		 * /*Part filePart = request.getPart("photo");
		 * 
		 * if (filePart != null) {
		 * 
		 * System.out.println(filePart.getName());
		 * System.out.println(filePart.getSize());
		 * System.out.println(filePart.getContentType());
		 * 
		 * inputStream = filePart.getInputStream(); }
		 */

		/*
		 * String etatPhy = request.getParameter("etatPhy"); String GroupSocio =
		 * request.getParameter("GroupSocio"); java.sql.Date date_sql = new
		 * java.sql.Date(4/13/2021); Etudiant etudiant = new Etudiant(massarEtud, NomFr,
		 * NomAr, PrenomFr, PrenomAr, acad, an_Bac, cin, date_sql+"", date_sql,
		 * villeBac, lieuN_ar, lieuN_fr, villeNaissance, lycee, mt, nationalite,
		 * province, sBac, sexe, region, etatPhy, GroupSocio, null);
		 * System.out.println(etudiant); insc.addEt(etudiant); String login =
		 * request.getParameter("Login"); String mdp = request.getParameter("Password");
		 * User user = new User(0,login,mdp,null,0,null); insc.addEtUSER(etudiant,
		 * user); }
		 */
		/*
		 * if(path.equals("/InscriptionEnLigne")){
		 * this.getServletContext().getRequestDispatcher("/InscripELetud.jsp").forward(
		 * request, response);
		 * 
		 * }
		 */

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

			/*
			 * }else {
			 * this.getServletContext().getRequestDispatcher("/static.jsp").forward(request,
			 * response); }
			 */

		} else if (path.equals("/Liste-Etablissement")) {
			System.out.println("liste etab");
			request.setAttribute("etablissement", listEtab);

			this.getServletContext().getRequestDispatcher("/ListeEtab.jsp").forward(request, response);

		} else if (path.equals("/ajouter-filiere")) {

			request.setAttribute("etablissements", listEtab);
			List<Filiere> lisf = se.listFiliere();
			request.setAttribute("filiere", lisf);

			for (int i = 0; i < lisf.size(); i++) {
				System.out.println(lisf.get(i).getFiliere());
			}
			System.out.println("coco");
			this.getServletContext().getRequestDispatcher("/ListeFiliere.jsp").forward(request, response);
			return;

		} else if (path.equals("/ajouter-filiere.do")) {
			String etablissement = request.getParameter("etablissement");
			String filiere = request.getParameter("filiere");
			Etablissement etab = new Etablissement(0, etablissement, null);
			Filiere f = new Filiere(0, filiere, 0);
			se.addFiliere(f, etab);

			this.getServletContext().getRequestDispatcher("/ajouter-filiere").forward(request, response);
		} else if (path.equals("/get-etab")) {
			int id = Integer.parseInt(request.getParameter("id"));
			Etablissement res = se.getEtablissement(id);
			request.setAttribute("etab", res);
			System.out.println(res.toString());
			this.getServletContext().getRequestDispatcher("/ProfilEtab.jsp").forward(request, response);

		} else if (path.equals("/inscrireADMS")) {
			request.setAttribute("etudiants", listEtu);
			this.getServletContext().getRequestDispatcher("/InscrireADMS.jsp").forward(request, response);

		} else if (path.equals("isncriptionAd.do")) {
			String massar = request.getParameter("massarEtud");
			String NomFr = request.getParameter("NomFr");//
			String NomAr = request.getParameter("NomAr");//
			String PrenomFr = request.getParameter("PrenomFr");//
			String PrenomAr = request.getParameter("PrenomAr");//
			String acad = request.getParameter("acad");
			String an_Bac = request.getParameter("an_Bac");
			String cin = request.getParameter("cin");
			String date = request.getParameter("dateN");

			String villeBac = request.getParameter("villeBac");
			String lieuN_ar = request.getParameter("lieuN_ar");////
			String lieuN_fr = request.getParameter("lieuN_fr");//
			String lycee = request.getParameter("lycee");
			String villeNaissance = request.getParameter("villeNaissance");
			String mt = request.getParameter("mt");
			String nationalite = request.getParameter("nationalite");
			String province = request.getParameter("province");
			String sBac = request.getParameter("sBac");//
			String sexe = request.getParameter("sexe");
			String region = request.getParameter("region");
			String etatPhy = request.getParameter("etatPhy");
			String GroupSocio = request.getParameter("GroupSocio");
			System.out.print(cin);
			String cne = request.getParameter("cne");
			String dip = request.getParameter("dip");
			String adressePerso = request.getParameter("adressePerso");
			String adresseParent = request.getParameter("adresseParent");

			String ville = request.getParameter("ville");
			int tele = Integer.parseInt(request.getParameter("tele"));

			String mail = request.getParameter("mail");
			String an_acad = request.getParameter("an_acad");
			String bourse = request.getParameter("bourse");
			boolean borsa =false ;
			if(!bourse.isEmpty()) {
				borsa=true;
			}
			String etab = request.getParameter("etab");
			String fil = request.getParameter("fil");

			Etudiant etudiant = new Etudiant(massar, NomFr, NomAr, PrenomFr, PrenomAr, acad, an_Bac, cin, null,
					new Date(4,26,2021), villeBac, lieuN_ar, lieuN_fr, villeNaissance, lycee, mt, nationalite, province, sBac,
					sexe, region, etatPhy, GroupSocio, null);
			annee_universitaire au = new annee_universitaire(new Date(4,26,2021),"1er test");
			Inscrip_Administartive iad = new Inscrip_Administartive(1, 0, null, null, cne, new Date(4,26,2021),
					new Date(4,26,2021), adressePerso, ville, tele, adresseParent, borsa, null);
			ia.addAdmini(iad, new Filiere(0,fil,0), etudiant, au);
			
		}

	}

	
}