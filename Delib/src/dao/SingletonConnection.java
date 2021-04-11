package dao;

import java.sql.Connection;
import java.sql.DriverManager;

public class SingletonConnection {
	private static Connection ret = null;

	public static Connection getConnection() {

		try {

			Class.forName("com.mysql.cj.jdbc.Driver");

			String mysqlConnUrl = "jdbc:mysql://localhost:3306/delib";

			String mysqlUserName = "root";

			String mysqlPassword = "Ayman2002+";

			ret = DriverManager.getConnection(mysqlConnUrl, mysqlUserName, mysqlPassword);

			System.out.println("HH");

		} catch (Exception ex) {
			ex.printStackTrace();
		}
		return ret;

	}

}
