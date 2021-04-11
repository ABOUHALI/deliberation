package dao;

import java.io.InputStream;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import metierEntite.Etudiant;

public class InscripEnLigne implements IInscriptionEnligne  {
	private Map<String, String> erreurs = new   HashMap<String, String>();
	@Override
	public void addEt(Etudiant etudiant) {
		// TODO Auto-generated method stub
		Connection connection = SingletonConnection.getConnection();
		PreparedStatement ps ;
		try {
			ps = connection.prepareStatement("insert into etudiant(date_na,birth_place,city,cne,first_name_ar,first_name_fr,gender,last_name_ar,last_name_fr,massar_edu,nationality,province,registration_date) values(?,?,?,?,?,?,?,?,?,?,?,?,?)");
			ps.setString(1, etudiant.getDate_naissance());
			ps.setString(2, etudiant.getLieu_naissance());
			ps.setString(3, etudiant.getVille());
			ps.setString(4, etudiant.getCne());
			ps.setString(5, etudiant.getNomFr());
			ps.setString(6, etudiant.getNomAr());
			ps.setString(7, etudiant.getSexe());
			ps.setString(8, etudiant.getPrenomAr());
			ps.setString(9, etudiant.getPrenomFr());
			ps.setString(10, etudiant.getMassarEtud());
			ps.setString(11, etudiant.getNationality());
			ps.setString(12, etudiant.getProvince());
			ps.setString(13, etudiant.getRegistration_da());
			ps.executeUpdate();
			ps.close();
			connection.close();
		} catch (Exception e) {
		}
		}

	@Override
	public List<Etudiant> listEt() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean deleteEt(String massarEtud) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public Etudiant getEt(String massarEtud) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void updateEt(Etudiant etudiant) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void addEtExcel(InputStream file) {
		// TODO Auto-generated method stub
		
	}

}
