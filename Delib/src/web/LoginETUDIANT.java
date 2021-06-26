package web;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import dao.LoginDAO;
import metierEntite.User;

/**
 * Servlet implementation class LoginETUDIANT
 */
@WebServlet("/LoginETUDIANT")
public class LoginETUDIANT extends HttpServlet {
	private static final long serialVersionUID = 1L;
	LoginDAO ld= new LoginDAO();
	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public LoginETUDIANT() {
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
		this.getServletContext().getRequestDispatcher("/loginEtud.jsp").forward(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		HttpSession session = request.getSession();
		String username = request.getParameter("username");
		String password = request.getParameter("password");
		User user = new User(0,username, password, null, 0, null);
		if(ld.validation(user)) {
			String role=ld.Role(user);
			if(role.equals("etudiant")) {
				System.out.println("espace -etudiant");
				String id_etud =ld.username_info_ETUD(username, password);
				session.setAttribute("massar", id_etud);
				session.setAttribute("user-etudiant", user);
				this.getServletContext().getRequestDispatcher("/indexEtudiant.jsp").forward(request, response);

			}
		}else {
			this.getServletContext().getRequestDispatcher("/errorLOGIN.jsp").forward(request, response);

		}
	}

}
