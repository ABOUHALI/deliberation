package metierEntite;

public class Inscrip_pedagogique {
	private int IDIP;
	private int IDIA;
	private String massarEtud;
	private int IDEtape;
	private int IDSemestre;
	private int IDModule;
	private int IDElement;
	public int getIDIP() {
		return IDIP;
	}
	public void setIDIP(int iDIP) {
		IDIP = iDIP;
	}
	public int getIDIA() {
		return IDIA;
	}
	public void setIDIA(int iDIA) {
		IDIA = iDIA;
	}
	public String getMassarEtud() {
		return massarEtud;
	}
	public void setMassarEtud(String massarEtud) {
		this.massarEtud = massarEtud;
	}
	public int getIDEtape() {
		return IDEtape;
	}
	public void setIDEtape(int iDEtape) {
		IDEtape = iDEtape;
	}
	public int getIDSemestre() {
		return IDSemestre;
	}
	public void setIDSemestre(int iDSemestre) {
		IDSemestre = iDSemestre;
	}
	public int getIDModule() {
		return IDModule;
	}
	public void setIDModule(int iDModule) {
		IDModule = iDModule;
	}
	public int getIDElement() {
		return IDElement;
	}
	public void setIDElement(int iDElement) {
		IDElement = iDElement;
	}
	public Inscrip_pedagogique(int iDIP, int iDIA, String massarEtud, int iDEtape, int iDSemestre, int iDModule,
			int iDElement) {
		super();
		IDIP = iDIP;
		IDIA = iDIA;
		this.massarEtud = massarEtud;
		IDEtape = iDEtape;
		IDSemestre = iDSemestre;
		IDModule = iDModule;
		IDElement = iDElement;
	}
	
}	
