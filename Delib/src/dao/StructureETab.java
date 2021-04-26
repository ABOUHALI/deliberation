package dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import metierEntite.Etablissement;
import metierEntite.Etape;
import metierEntite.Filiere;
import metierEntite.Module;
import metierEntite.Semestre;

public class StructureETab implements IStructureEtab{
	public Etablissement getEtablissement(int id) {
		Etablissement res =new Etablissement();
		Connection conn = SingletonConnection.getConnection();
		PreparedStatement ps;
		try {
			ps=conn.prepareStatement("select * from etablissement where id_etab=?");
			ps.setInt(1, id);
			ResultSet rs=ps.executeQuery();
			while(rs.next()) {
				res.setIDEtablissement(id);
				res.setEtablissement(rs.getString("nom_etab"));
				res.setDescription(rs.getString("description_etab"));
			}
			ps.close();
			conn.close();
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return res;
	}
	public void deleteEtabById(int id) {
		Connection cnn = SingletonConnection.getConnection();
		PreparedStatement ps;
		try {
			ps = cnn.prepareStatement("delete from etablissement where id_etab =?");
			ps.setInt(1, id);
			ps.execute();
			ps.close();
			cnn.close();

		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
	}

	public void addEtab(Etablissement e) {
		Connection conn = SingletonConnection.getConnection();
		PreparedStatement ps;
		try {
			ps = conn.prepareStatement("insert into etablissement(nom_etab,description_etab) values(?,?)");
			ps.setString(1, e.getEtablissement());
			ps.setString(2, e.getDescription());

			ps.executeUpdate();
			ps.close();
			conn.close();
		} catch (Exception x) {
			x.printStackTrace();
		}
	}

	public List<Etablissement> listETab() {
		List<Etablissement> letab = new ArrayList<Etablissement>();
		Connection conn = SingletonConnection.getConnection();
		PreparedStatement ps;
		try {
			ps = conn.prepareStatement("select * from etablissement");
			ResultSet rs = ps.executeQuery();
			while (rs.next()) {
				Etablissement etab = new Etablissement(rs.getInt("id_etab"), rs.getString("nom_etab"),
						rs.getString("description_etab"));
				letab.add(etab);
			}
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return letab;
	}

	public void addFiliere(Filiere f, Etablissement e) {
		Connection conn = SingletonConnection.getConnection();
		PreparedStatement ps;
		int idetab = getIdEtab(e);
		try {
			ps = conn.prepareStatement("insert into filiere(nom_filier,fid_etab)values(?,?)");
			ps.setString(1, f.getFiliere());
			ps.setInt(2, idetab);
			ps.executeUpdate();
			ps.close();
			conn.close();
		} catch (Exception x) {
			x.printStackTrace();
		}
	}

	public int getIdEtab(Etablissement etab) {
		Connection conn = SingletonConnection.getConnection();
		PreparedStatement ps;
		int idetab = 0;
		try {
			ps = conn.prepareStatement("select * from etablissement where nom_etab=?");
			ps.setString(1, etab.getEtablissement());
			ResultSet rs = ps.executeQuery();
			while (rs.next()) {
				idetab = rs.getInt("id_etab");
			}
			ps.close();
			conn.close();
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return idetab;
	}

	public void addEtape(Etape et) {
		Connection conn = SingletonConnection.getConnection();
		PreparedStatement ps;
		try {
			ps = conn.prepareStatement("insert into etape(libelle_etape,diplomante,fid_fil)  values(?,?,?)");
			ps.setString(1, et.getLabelleEtape());
			if (et.isDiplomante() == true) {
				ps.setInt(2, 1);

			} else {
				ps.setInt(2, 0);
			}
			ps.setInt(3, et.getIDFiliere());
			ps.executeUpdate();
			ps.close();
			conn.close();
			System.out.println("etape ");
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
	}

	public void addSemestre(Semestre p) {
		Connection conn = SingletonConnection.getConnection();
		PreparedStatement ps;
		try {
			ps = conn.prepareStatement("insert into semestre(libelle_semestre,fid_etap) values(?,?)");
			ps.setString(1, p.getLabelleSemestre());
			ps.setInt(2, p.getIDEtape());
			ps.executeUpdate();
			ps.close();
			conn.close();
			System.out.println("semestre ");
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
	}

	public void addModule(Module m) {
		Connection conn = SingletonConnection.getConnection();
		PreparedStatement ps;
		try {
			ps = conn.prepareStatement("insert into module(coefficient,libelle_module,fid_semestre) values(?,?,?)");
			ps.setInt(1, m.getCoeff());
			ps.setString(2, m.getLabelleMod());
			ps.setInt(3, m.getIDSemestre());
			ps.executeUpdate();
			ps.close();
			conn.close();
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
	}
	
	public List<Filiere> listFiliere() {
		List<Filiere> filiere = new ArrayList<Filiere>();
		Connection conn = SingletonConnection.getConnection();
		PreparedStatement ps;
		try {
			ps = conn.prepareStatement("select * from filiere");
			ResultSet rs = ps.executeQuery();
			while (rs.next()) {
				Filiere fil = new Filiere(rs.getInt("id_filiere"),rs.getString("nom_filier"),rs.getInt("fid_etab"));
				filiere.add(fil);
			}
		} catch (Exception e) {
			
			e.printStackTrace();
		}
		return filiere;
	}

}