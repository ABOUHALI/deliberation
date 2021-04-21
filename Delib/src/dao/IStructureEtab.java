package dao;

import metierEntite.Etablissement;
import metierEntite.Filiere;

public interface IStructureEtab {
	public void addEtab(Etablissement e );
	public void addFiliere(Filiere f ,Etablissement e );
	public int getIdEtab(Etablissement etab);
}
