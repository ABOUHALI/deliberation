package dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import metierEntite.Etablissement;
import metierEntite.Filiere;

public class StructureETab {
	public void addEtab(Etablissement e ) {
		Connection conn = SingletonConnection.getConnection();
		PreparedStatement ps ;
		try {
			ps=conn.prepareStatement("insert into etablissement(nom_etab,description_etab) values(?,?)");
			ps.setString(1, e.getEtablissement());
			ps.setString(2, e.getDescription());
			
			ps.executeUpdate();
			ps.close();
			conn.close();
		}catch(Exception x ) {
			x.printStackTrace();
		}
	}
	public void addFiliere(Filiere f ,Etablissement e ) {
		Connection conn = SingletonConnection.getConnection();
		PreparedStatement ps;
		int idetab = getIdEtab(e);
		try {
			ps=conn.prepareStatement("insert into filiere(nom_filier,fid_etab)values(?,?)");
			ps.setString(1, f.getFiliere());
			ps.setInt(2, idetab);
			ps.executeUpdate();
			ps.close();
			conn.close();
			}catch(Exception x ) {
			x.printStackTrace();
		}
	}
	public int getIdEtab(Etablissement etab) {
			Connection conn = SingletonConnection.getConnection();
			PreparedStatement ps;
			int idetab =0;
			try {
				ps=conn.prepareStatement("select * from etablissement where nom_etab=?");
				ps.setString(1, etab.getEtablissement());
				ResultSet rs =ps.executeQuery();
				while(rs.next()) {
					idetab=rs.getInt("id_etab");
				}
				ps.close();
				conn.close();
			} catch (Exception e) {
				// TODO: handle exception
				e.printStackTrace();
			}
			return idetab ;
	}
}
