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
public void UpdateUser(String username,String password) {
	Connection conn=SingletonConnection.getConnection();
	PreparedStatement ps;
	
	try {
		ps=conn.prepareStatement("update user set password=? where username=?");
		ps.setString(1, password);
		ps.setString(2, username);
		ps.executeUpdate();
		
	} catch (Exception e) {
		e.printStackTrace();
	}
}

public int username_info_prof(String username , String password) {
	Connection conn = SingletonConnection.getConnection();
	PreparedStatement ps;
	int id_prof =0;
	try {
		ps=conn.prepareStatement("select id_prof from user where username=? and password=?");
		ps.setString(1, username);
		ps.setString(2, password);
		ResultSet rs = ps.executeQuery();
		while(rs.next()) {
			id_prof = rs.getInt("id_prof");
		}
	} catch (Exception e) {
		// TODO: handle exception
		e.printStackTrace();
	}
	return id_prof;
}
public String username_info_ETUD(String username , String password) {
	Connection conn = SingletonConnection.getConnection();
	PreparedStatement ps;
	String id_etud =null;
	try {
		ps=conn.prepareStatement("select id_etud from user where username=? and password=?");
		ps.setString(1, username);
		ps.setString(2, password);
		ResultSet rs = ps.executeQuery();
		while(rs.next()) {
			id_etud = rs.getString("id_etud");
		}
	} catch (Exception e) {
		// TODO: handle exception
		e.printStackTrace();
	}
	return id_etud;
}
}
