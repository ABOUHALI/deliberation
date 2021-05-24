package metierEntite;

public class Element {

	private int IDElement;
	private String LabelleElement;
	private int IDModule;
	private int coeff;
	private int note_validation;

	public Element(int iDElement) {
		super();
		IDElement = iDElement;
	}

	public Element(String labelleElement) {
		super();
		LabelleElement = labelleElement;
	}

	public int getIDElement() {
		return IDElement;
	}

	public void setIDElement(int iDElement) {
		IDElement = iDElement;
	}

	public String getLabelleElement() {
		return LabelleElement;
	}

	public void setLabelleElement(String labelleElement) {
		LabelleElement = labelleElement;
	}

	public int getIDModule() {
		return IDModule;
	}

	public void setIDModule(int iDModule) {
		IDModule = iDModule;
	}

	public int getCoeff() {
		return coeff;
	}

	public void setCoeff(int coeff) {
		this.coeff = coeff;
	}

	public int getNote_validation() {
		return note_validation;
	}

	public void setNote_validation(int note_validation) {
		this.note_validation = note_validation;
	}

	public Element(int iDElement, String labelleElement, int iDModule, int coeff, int note_validation) {
		super();
		IDElement = iDElement;
		LabelleElement = labelleElement;
		IDModule = iDModule;
		this.coeff = coeff;
		this.note_validation = note_validation;
	}

	public Element() {
		super();
	}

	@Override
	public String toString() {
		return "Element [IDElement=" + IDElement + ", LabelleElement=" + LabelleElement + ", IDModule=" + IDModule
				+ ", coeff=" + coeff + ", note_validation=" + note_validation + "]";
	}

}
