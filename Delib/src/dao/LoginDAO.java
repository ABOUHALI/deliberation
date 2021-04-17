package dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import metierEntite.User;

public class LoginDAO {
public boolean validation(User user ) {
	boolean lbool = false ;
	Connection conn = SingletonConnection.getConnection();
	PreparedStatement ps;
	try {
		ps=conn.prepareStatement("select * from user where username =? and password=?");
		ps.setString(1, user.getLogin());
		ps.setString(2, user.getMdp());
		ResultSet rs = ps.executeQuery();
		lbool =rs.next();
		System.out.println(lbool);
	}catch(Exception e ) {
		e.printStackTrace();
	}
			return lbool ;
}
public String Role(User user ) {
	Connection conn = SingletonConnection.getConnection();
	PreparedStatement ps ;
	String role =null;
	try {
		ps = conn.prepareStatement("select roles from user where username=? and password=? ");
		ps.setString(1, user.getLogin());
		ps.setString(2, user.getMdp());
		ResultSet rs = ps.executeQuery();
		while(rs.next()) {
			role = rs.getString("roles");
		}
	}catch (Exception e) {
		// TODO: handle exception
	}
	return role ;
}
}
