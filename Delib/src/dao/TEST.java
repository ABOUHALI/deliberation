package dao;

import java.sql.Connection;

import metierEntite.Etablissement;
import metierEntite.Etudiant;
import metierEntite.Filiere;
import metierEntite.User;

public class TEST {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Connection conn = SingletonConnection.getConnection();
		StructureETab se = new StructureETab();
		Etablissement etab = new Etablissement(0, "bachelor", "hh");
		se.addEtab(etab);
		Filiere f = new Filiere(0,"bgi", 0);
		se.addFiliere(f, etab);
	}

}
