package metierEntite;

public class Semestre {
	  private int IDSemestre;
	  private  String LabelleSemestre;
	
	   private int IDEtape;
	public Semestre(int iDSemestre, String labelleSemestre, int iDEtape) {
		super();
		IDSemestre = iDSemestre;
		LabelleSemestre = labelleSemestre;
		IDEtape = iDEtape;
	}
	public int getIDSemestre() {
		return IDSemestre;
	}
	public void setIDSemestre(int iDSemestre) {
		IDSemestre = iDSemestre;
	}
	public String getLabelleSemestre() {
		return LabelleSemestre;
	}
	public void setLabelleSemestre(String labelleSemestre) {
		LabelleSemestre = labelleSemestre;
	}
	public int getIDEtape() {
		return IDEtape;
	}
	public void setIDEtape(int iDEtape) {
		IDEtape = iDEtape;
	}
}
