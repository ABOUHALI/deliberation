package metierEntite;

public class Semestre {
	  private int IDSemestre;
	  private  String LabelleSemestre;
	  private int IDEtape;
	  private int noteValidation;
	  
	  public Semestre(int iDSemestre, String labelleSemestre, int iDEtape, int noteValidation) {
		super();
		IDSemestre = iDSemestre;
		LabelleSemestre = labelleSemestre;
		IDEtape = iDEtape;
		this.setNoteValidation(noteValidation);
	}

	public Semestre() {
		// TODO Auto-generated constructor stub
	}
	
	   @Override
	public String toString() {
		return "Semestre [LabelleSemestre=" + LabelleSemestre + "]";
	}
	public Semestre(String labelleSemestre) {
		super();
		LabelleSemestre = labelleSemestre;
	}
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

	public int getNoteValidation() {
		return noteValidation;
	}

	public void setNoteValidation(int noteValidation) {
		this.noteValidation = noteValidation;
	}
}