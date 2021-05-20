package dao;

import java.io.IOException;
import java.io.InputStream;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;

import org.apache.poi.hssf.usermodel.HSSFCell;
import org.apache.poi.hssf.usermodel.HSSFRow;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellType;
import org.apache.poi.ss.usermodel.Row;

import metierEntite.Etudiant;
import metierEntite.User;

public class InscripEnLigne implements IInscriptionEnligne {

	public void addEt(Etudiant etudiant) {
		// TODO Auto-generated method stub
		Connection conn = SingletonConnection.getConnection();
		PreparedStatement ps;

		try {
			ps = conn.prepareStatement(
					"insert into etudiant values(?, ?, ?, ?, ?, ?,?, ?, ?, ?,?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?)");

			ps.setString(1, etudiant.getNomFr());
			ps.setString(2, etudiant.getNomAr());
			ps.setString(3, etudiant.getPrenomAr());
			ps.setString(4, etudiant.getPrenomFr());
			ps.setString(5, etudiant.getAcad());
			ps.setString(6, etudiant.getAn_Bac());
			ps.setString(7, etudiant.getCin());

			ps.setString(8, etudiant.getDate1in());
			java.sql.Date date_sql = new java.sql.Date(etudiant.getDateN().getTime());
			ps.setDate(9, date_sql);

			ps.setString(10, etudiant.getVilleBac());
			ps.setString(11, etudiant.getLieuN_ar());
			ps.setString(12, etudiant.getLieuN_fr());
			ps.setString(13, etudiant.getVilleNaissance());
			ps.setString(14, etudiant.getLycee());
			ps.setString(15, etudiant.getMassarEtud());
			ps.setString(16, etudiant.getMt());
			ps.setString(17, etudiant.getNationalite());

			ps.setString(18, etudiant.getProvince());
			ps.setString(19, etudiant.getsBac());
			ps.setString(20, etudiant.getSexe());
			ps.setString(21, etudiant.getRegion());

			ps.setString(22, etudiant.getEtatPhy());
			ps.setString(23, etudiant.getGroupSocio());

			ps.setBlob(24, etudiant.getPhoto());

			ps.executeUpdate();

			ps.close();

			conn.close();

		}

		catch (Exception e) {
			e.printStackTrace();
		}
	}

	public List<Etudiant> listEt() {
		List<Etudiant> list = new ArrayList<Etudiant>();
		Connection conn = SingletonConnection.getConnection();
		PreparedStatement ps;

		try {
			ps = conn.prepareStatement("select * from etudiant");
			ResultSet rs = ps.executeQuery();
			while (rs.next()) {
				Etudiant etudiant = new Etudiant();
				etudiant.setNomFr(rs.getString("NomFr"));
				etudiant.setNomAr(rs.getString("NomAr"));
				etudiant.setPrenomAr(rs.getString("PrenomAr"));
				etudiant.setPrenomFr(rs.getString("PrenomFr"));
				etudiant.setAcad(rs.getString("acad"));
				etudiant.setAn_Bac(rs.getString("an_Bac"));
				etudiant.setCin(rs.getString("cin"));
				etudiant.setDate1in(rs.getString("date1in"));
				etudiant.setDateN(rs.getDate("dateN"));
				etudiant.setVilleBac(rs.getString("villeBac"));
				etudiant.setLieuN_ar(rs.getString("lieuN_ar"));
				etudiant.setLieuN_fr(rs.getString("lieuN_fr"));
				etudiant.setVilleNaissance(rs.getString("villeNaissance"));
				etudiant.setLycee(rs.getString("lycee"));
				etudiant.setMassarEtud(rs.getString("massarEtud"));
				etudiant.setMt(rs.getString("mt"));
				etudiant.setNationalite(rs.getString("nationalite"));
				etudiant.setProvince(rs.getString("province"));
				etudiant.setsBac(rs.getString("sBac"));
				etudiant.setSexe(rs.getString("sexe"));
				etudiant.setRegion(rs.getString("region"));
				etudiant.setEtatPhy(rs.getString("etatPhy"));
				etudiant.setGroupSocio(rs.getString("groupSocio"));
				etudiant.setPhoto(rs.getBinaryStream("photo"));
				list.add(etudiant);
			}

		} catch (Exception e) {

		}

		return list;
	}

	public boolean deleteEt(String massarEtud) {
		Connection conn = SingletonConnection.getConnection();
		PreparedStatement ps;
		try {
			ps = conn.prepareStatement("delete from etudiant where massarEtud=?");
			ps.setString(1, massarEtud);
			ps.executeUpdate();
		} catch (Exception e) {
			e.printStackTrace();

		}
		return false;
	}

	public Etudiant getEt(String massarEtud) {
		Connection conn = SingletonConnection.getConnection();
		PreparedStatement ps;
		Etudiant etudiant = new Etudiant();

		try {
			ps = conn.prepareStatement("select * from etudiant where massarEtud = ?");
			ps.setString(1, massarEtud);
			ResultSet rs = ps.executeQuery();
			System.out.print("getEtudiant");

			while (rs.next()) {
				etudiant.setNomFr(rs.getString("NomFr"));
				etudiant.setNomAr(rs.getString("NomAr"));
				etudiant.setPrenomAr(rs.getString("PrenomAr"));
				etudiant.setPrenomFr(rs.getString("PrenomFr"));
				etudiant.setAcad(rs.getString("acad"));
				etudiant.setAn_Bac(rs.getString("an_Bac"));
				etudiant.setCin(rs.getString("cin"));
				etudiant.setDate1in(rs.getString("date1in"));
				etudiant.setDateN(rs.getDate("dateN"));
				etudiant.setVilleBac(rs.getString("villeBac"));
				etudiant.setLieuN_ar(rs.getString("lieuN_ar"));
				etudiant.setLieuN_fr(rs.getString("lieuN_fr"));
				etudiant.setVilleNaissance(rs.getString("villeNaissance"));
				etudiant.setLycee(rs.getString("lycee"));
				etudiant.setMassarEtud(rs.getString("massarEtud"));
				etudiant.setMt(rs.getString("mt"));
				etudiant.setNationalite(rs.getString("nationalite"));
				etudiant.setProvince(rs.getString("province"));
				etudiant.setsBac(rs.getString("sBac"));
				etudiant.setSexe(rs.getString("sexe"));
				etudiant.setRegion(rs.getString("region"));
				etudiant.setEtatPhy(rs.getString("etatPhy"));
				etudiant.setGroupSocio(rs.getString("groupSocio"));
				etudiant.setPhoto(rs.getBinaryStream("photo"));
			}
			ps.close();
			conn.close();

		}

		catch (Exception e) {
			e.printStackTrace();
		}

		return etudiant;
	}

	public Etudiant getET3(String massarEtud) {
		Connection conn = SingletonConnection.getConnection();
		PreparedStatement ps;
		Etudiant e = null;
		try {
			ps = conn.prepareStatement("select massarEtud , NomFr , PrenomFr from etudiant where massarEtud=?");
			ps.setString(1, massarEtud);
			ResultSet rs = ps.executeQuery();
			while (rs.next()) {
				e = new Etudiant(rs.getString("massarEtud"), rs.getString("NomFr"), rs.getString("PrenomFr"));

			}
		} catch (Exception ex) {
			// TODO: handle exception
			ex.printStackTrace();
		}
		return e;
	}

	public void updateEt(Etudiant etudiant) {
		Connection conn = SingletonConnection.getConnection();
		PreparedStatement ps;
		try {
			ps = conn.prepareStatement(
					"update etudiant set Nomfr=?,NomAr=?,PrenomFr=?,PrenomAr=?,acad=?,an_Bac=?,cin=?,date1in=?,villeBac=?,lieuN_ar=?,lieuN_fr=?,villeNaissance=?,lycee=?,mt=?,nationalite=?,province=?,sBac=?,sexe=?,region=?,etatPhy=?,GroupSocio=?,photo=? ");
			ps.setString(1, etudiant.getNomFr());
			ps.setString(2, etudiant.getNomAr());
			ps.setString(3, etudiant.getPrenomAr());
			ps.setString(4, etudiant.getPrenomFr());
			ps.setString(5, etudiant.getAcad());
			ps.setString(6, etudiant.getAn_Bac());
			ps.setString(7, etudiant.getCin());

			ps.setString(8, etudiant.getDate1in());
			java.sql.Date date_sql = new java.sql.Date(etudiant.getDateN().getTime());
			ps.setDate(9, date_sql);

			ps.setString(10, etudiant.getVilleBac());
			ps.setString(11, etudiant.getLieuN_ar());
			ps.setString(12, etudiant.getLieuN_fr());
			ps.setString(13, etudiant.getVilleNaissance());
			ps.setString(14, etudiant.getLycee());
			ps.setString(15, etudiant.getMassarEtud());
			ps.setString(16, etudiant.getMt());
			ps.setString(17, etudiant.getNationalite());

			ps.setString(18, etudiant.getProvince());
			ps.setString(19, etudiant.getsBac());
			ps.setString(20, etudiant.getSexe());
			ps.setString(21, etudiant.getRegion());

			ps.setString(22, etudiant.getEtatPhy());
			ps.setString(23, etudiant.getGroupSocio());

			ps.setBlob(24, etudiant.getPhoto());
			ps.executeUpdate();

		} catch (Exception e) {
			e.printStackTrace();
		}

	}

	@SuppressWarnings("resource")
	public void addEtExcel(InputStream file) {

		ArrayList<Etudiant> Etudiants = new ArrayList<Etudiant>();
		ArrayList<String> values = new ArrayList<String>();
		
		System.out.print("iciiiiiiiiiiiii" + file.toString());

		try {

			System.out.print("iciiiiiiiiiiiii1");

			HSSFWorkbook wb = new HSSFWorkbook(file);// preciser que ce document est excel
			HSSFSheet sheet = wb.getSheetAt(0);
			Iterator<Row> rows = sheet.rowIterator();
			while (rows.hasNext()) {
				System.out.println("  in  ");
				values.clear();
				HSSFRow row = (HSSFRow) rows.next();
				Iterator<Cell> cells = row.cellIterator();

				while (cells.hasNext()) {

					HSSFCell cell = (HSSFCell) cells.next();

					if (cell.getCellType() == CellType.STRING)
						values.add(cell.getStringCellValue());
					else if (cell.getCellType() == CellType.NUMERIC) {
						values.add(Integer.toString((int) (cell.getNumericCellValue())));

					}

				}
				Etudiant e = new Etudiant();
				e.setNomFr(values.get(0));
				e.setPrenomFr(values.get(1));
				e.setNomAr(values.get(2));
				e.setPrenomAr(values.get(3));
				e.setAcad(values.get(4));
				e.setAn_Bac(values.get(5));
				e.setCin(values.get(6));
				e.setDate1in(values.get(7));
				String date = values.get(8);
				System.out.println("date=" + date);

				java.sql.Date date_sql = new java.sql.Date(Integer.parseInt(date));
				e.setDateN(date_sql);
				System.out.println("dateN=" + date_sql);
				e.setVilleBac(values.get(9));
				e.setLieuN_ar(values.get(10));
				e.setLieuN_fr(values.get(11));
				e.setVilleNaissance(values.get(12));
				e.setLycee(values.get(13));
				e.setMassarEtud(values.get(14));
				System.out.println(values.get(14));
				e.setMt(values.get(15));
				e.setNationalite(values.get(16));
				e.setProvince(values.get(17));
				e.setsBac(values.get(18));
				e.setSexe(values.get(19));
				e.setRegion(values.get(20));
				e.setEtatPhy(values.get(21));
				e.setGroupSocio(values.get(22));
				e.setPhoto(null);

				Etudiants.add(e);
				for (int i = 0; i < Etudiants.size(); i++) {
					addEt(Etudiants.get(i));
					System.out.println("ajout");
				}
			}

		}

		catch (Exception ex) {
			ex.printStackTrace();
		}

	}

	public void addEtUSER(Etudiant etudiant, User user) {
		// TODO Auto-generated method stub
		Connection conn = SingletonConnection.getConnection();

		PreparedStatement ps;
		String idEtud = getIdEtdu(etudiant);
		try {
			ps = conn.prepareStatement("insert into user(password,username,id_etud,roles) values (?,?,?,?)");
			ps.setString(1, user.getMdp());
			ps.setString(2, user.getLogin());
			ps.setString(3, idEtud);
			ps.setString(4, "etudiant");
			ps.executeUpdate();
			ps.close();
			conn.close();
			System.out.println("user-etudiant");
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public String getetudBYNP(String nom, String prenom) {
		Connection conn = SingletonConnection.getConnection();
		PreparedStatement ps;
		String idetud = null;
		try {
			ps = conn.prepareStatement("select massarEtud from etudiant where NomFr=? and prenomFr=? ");
			ps.setString(1, nom);
			ps.setString(2, prenom);
			ResultSet rs = ps.executeQuery();
			while (rs.next()) {
				idetud = rs.getString("massarEtud");

			}
			ps.close();
			conn.close();
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return idetud;
	}

	public String getIdEtdu(Etudiant etudiant) {
		// TODO Auto-generated method stub
		Connection conn = SingletonConnection.getConnection();
		PreparedStatement ps;
		String idEtud = null;
		try {
			ps = conn.prepareStatement("select * from etudiant where cin=? and (PrenomFr=? and NomFr=?)");
			ps.setString(3, etudiant.getNomFr());
			ps.setString(2, etudiant.getPrenomFr());
			ps.setString(1, etudiant.getCin());
			ResultSet rs = ps.executeQuery();
			while (rs.next()) {
				idEtud = rs.getString("massarEtud");

			}
			ps.close();
			conn.close();

		} catch (Exception e) {
			e.printStackTrace();
		}
		return idEtud;
	}

	private static java.sql.Date convert(java.util.Date uDate) {
		java.sql.Date sDate = new java.sql.Date(uDate.getTime());
		return sDate;
	}
}
