package web;

import java.io.IOException;

import javax.security.auth.message.callback.PrivateKeyCallback.Request;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.mysql.cj.Session;

import dao.LoginDAO;
import dao.ProfesseurDao;
import dao.StructureETab;
import metierEntite.User;

/**
 * Servlet implementation class LoginSER
 */
@WebServlet("/Login-PROF")
public class LoginPROF extends HttpServlet {
	private static final long serialVersionUID = 1L;
	LoginDAO ld = new LoginDAO();
	ProfesseurDao pd = new ProfesseurDao();
	StructureETab se = new StructureETab();
	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public LoginPROF() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		this.getServletContext().getRequestDispatcher("/loginAD.jsp").forward(request, response);

	}

	/*
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 * response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		HttpSession session = request.getSession();
		String username = request.getParameter("username");
		String password = request.getParameter("password");
		
		User user = new User(0, username, password, null, 0, null);
		if (ld.validation(user)) {
			String role = ld.Role(user);
			int id_prof = ld.username_info_prof(username, password);
			String elt = pd.ElEMENTfromProf(id_prof);
			session.setAttribute("user-prof", user);
			System.out.println(session.getAttribute("user-prof"));
			session.setAttribute("element-prof", elt);
			this.getServletContext().getRequestDispatcher("/indexdprof.jsp").forward(request, response);

			}
		else {
			this.getServletContext().getRequestDispatcher("/errorLOGIN.jsp").forward(request, response);
		}
	}
	}
