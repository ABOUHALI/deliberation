package dao;

import java.sql.Connection;

import metierEntite.Etudiant;
import metierEntite.User;

public class TEST {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Connection conn = SingletonConnection.getConnection();
		InscripEnLigne IEL = new InscripEnLigne();
	    java.sql.Date date_sql = new java.sql.Date(4/13/2021);
	    User user = new User(0,"ayman","abouhali",null , null);
	    IEL.addEtUSER(new Etudiant("jjjjhhhhhhhhh", "hh","hh", "hh", "hh", "hh", "hh", "hh", "hh", date_sql, "hh", "hh", "hh", "hh", "hh", "hh", "hh", "hh", "hh", "hh", "hh", "hh", "hh", null), user);
	}

}
