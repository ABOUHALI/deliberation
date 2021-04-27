package dao;

import java.util.List;

import metierEntite.Etablissement;
import metierEntite.Etape;
import metierEntite.Filiere;

public interface IStructureEtab {
	public void addEtab(Etablissement e );
	public void addFiliere(Filiere f ,Etablissement e );
	public int getIdEtab(Etablissement etab);
	public List<Filiere> listFiliere();
	public List<Etablissement> listETab() ;
	public List<Etape>listEtape();
}
