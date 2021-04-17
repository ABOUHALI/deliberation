package web;

import java.io.IOException;
import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebFilter;
import javax.servlet.annotation.WebInitParam;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * Servlet Filter implementation class loginfilter
 */
@WebFilter("/*")
public class loginfilter implements Filter {

    /**
     * Default constructor. 
     */
    public loginfilter() {
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see Filter#destroy()
	 */
	public void destroy() {
		// TODO Auto-generated method stub
	}

	/**
	 * @see Filter#doFilter(ServletRequest, ServletResponse, FilterChain)
	 */
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
		// TODO Auto-generated method stub
		// place your code here
		HttpServletResponse rep =(HttpServletResponse)response ;
		HttpServletRequest req = (HttpServletRequest)request;
		HttpSession session = req.getSession();
		/*ENDK AKHEY SERHANI ANSIFTU HNA FILER KY7BS CSS LHQCH KHASU REQUETE UKHRA GHQ DIALU*/
		String chemin = req.getRequestURI().substring(req.getContextPath().length());
		if(chemin.startsWith("/login")) {
			chain.doFilter(req, rep);
		}
		if(session.getAttribute("user")==null) {
			req.getRequestDispatcher("/Login").forward(req, rep);
		}else {
			chain.doFilter(req, rep);
		}
		
	}

	/**
	 * @see Filter#init(FilterConfig)
	 */
	public void init(FilterConfig fConfig) throws ServletException {
		// TODO Auto-generated method stub
	}

}
