package metierEntite;

public class Module {
	private  int IDModule;
	private String LabelleMod;
	private int IDSemestre;
	private int coeff ;
	private int note_valid ;
	public Module(int iDModule, String labelleMod, int iDSemestre, int coeff, int note_valid) {
		super();
		IDModule = iDModule;
		LabelleMod = labelleMod;
		IDSemestre = iDSemestre;
		this.coeff = coeff;
		this.note_valid = note_valid;
	}
	public int getIDModule() {
		return IDModule;
	}
	public void setIDModule(int iDModule) {
		IDModule = iDModule;
	}
	public String getLabelleMod() {
		return LabelleMod;
	}
	public void setLabelleMod(String labelleMod) {
		LabelleMod = labelleMod;
	}
	public int getIDSemestre() {
		return IDSemestre;
	}
	public void setIDSemestre(int iDSemestre) {
		IDSemestre = iDSemestre;
	}
	public int getCoeff() {
		return coeff;
	}
	public void setCoeff(int coeff) {
		this.coeff = coeff;
	}
	public int getNote_valid() {
		return note_valid;
	}
	public void setNote_valid(int note_valid) {
		this.note_valid = note_valid;
	}
}
