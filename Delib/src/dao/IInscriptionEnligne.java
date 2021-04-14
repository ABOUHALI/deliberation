package dao;

import java.io.InputStream;
import java.util.List;

import metierEntite.Etudiant;
import metierEntite.User;

public interface IInscriptionEnligne {
	public void addEt(Etudiant etudiant);
	public List<Etudiant> listEt();
	public boolean deleteEt(String massarEtud);
	public Etudiant getEt(String massarEtud);
	public void updateEt(Etudiant etudiant);
	public void addEtExcel(InputStream file);
	public void addEtUSER(Etudiant etudiant , User user );
	public String getIdEtdu(Etudiant etudiant);
	
}	
