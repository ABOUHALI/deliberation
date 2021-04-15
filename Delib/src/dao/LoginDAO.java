package dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import metierEntite.User;

public class LoginDAO {
public boolean validation(User user ) {
	boolean status = false ;
	Connection conn = SingletonConnection.getConnection();
	PreparedStatement ps;
	try {
		ps=conn.prepareStatement("select * from user where username =? and password=?");
		ps.setString(1, user.getLogin());
		ps.setString(2, user.getMdp());
		ResultSet rs = ps.executeQuery();
		status =rs.next();
		
	}catch(Exception e ) {
		e.printStackTrace();
	}
			return status ;
}
}
