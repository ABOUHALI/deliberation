package web;

import java.io.IOException;
import java.io.InputStream;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Part;

import dao.InscripEnLigne;
import metierEntite.Etudiant;
import metierEntite.User;

/**
 * Servlet implementation class controller
 */
@WebServlet("/InscriptionEnLigne")
public class controller extends HttpServlet {
	private static final long serialVersionUID = 1L;
	InputStream inputStream = null;
	InscripEnLigne insc = new InscripEnLigne();
    /**
     * @see HttpServlet#HttpServlet()
     */
    public controller() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		this.getServletContext().getRequestDispatcher("/InscripELetud.jsp").forward(request,response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String path = request.getServletPath();
		if(path.equals("/InscriptionEnLigne")) {

			String massarEtud = request.getParameter("massarEtud");//
			String NomFr = request.getParameter("NomFr");//
			String NomAr = request.getParameter("NomAr");//
			String PrenomFr = request.getParameter("PrenomFr");//
			String PrenomAr = request.getParameter("PrenomAr");//
			String acad = request.getParameter("acad");
			String an_Bac = request.getParameter("an_Bac");
			String cin = request.getParameter("cin");
		/*	String date = request.getParameter("dateN");
			System.out.print(date);
			System.out.print(massarEtud);
			Date dateN = null;
			try {
				dateN = new SimpleDateFormat("yyyy-MM-dd").parse(date);
				System.out.println(dateN);

			} catch (ParseException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			String date1in = heute();
			System.out.println(date1in);*/

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

			Part filePart = request.getPart("photo");

			if (filePart != null) {

				System.out.println(filePart.getName());
				System.out.println(filePart.getSize());
				System.out.println(filePart.getContentType());

				inputStream = filePart.getInputStream();
			}

			String etatPhy = request.getParameter("etatPhy");
			String GroupSocio = request.getParameter("GroupSocio");
			java.sql.Date date_sql = new java.sql.Date(4/13/2021);
			Etudiant etudiant = new Etudiant(massarEtud, NomFr, NomAr, PrenomFr, PrenomAr, acad, an_Bac, cin,
					date_sql+"", date_sql, villeBac, lieuN_ar, lieuN_fr, villeNaissance, lycee, mt, nationalite, province,
					sBac, sexe, region, etatPhy, GroupSocio, inputStream);
			insc.addEt(etudiant);
			String  login = request.getParameter("Login");
			String  mdp = request.getParameter("mdp");
			User user = new User(0,login,mdp,null,null);
			insc.addEtUSER(etudiant, user);
			System.out.println("gg");
		}
	}
	public String heute() {
		final Date date = new Date();
		return new SimpleDateFormat("dd-MM-yyyy").format(date);
	}
}
