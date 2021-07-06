package metierEntite;


public class Inscrip_pedagogique {
	private String idetud ;
	private int elt ;
	private int id_anneacad;
	
	
	
	public Inscrip_pedagogique(String idetud, int elt, int id_anneacad) {
		super();
		this.idetud = idetud;
		this.elt = elt;
		this.id_anneacad = id_anneacad;
	}
	public int getId_anneacad() {
		return id_anneacad;
	}
	public void setId_anneacad(int id_anneacad) {
		this.id_anneacad = id_anneacad;
	}
	public String getIdetud() {
		return idetud;
	}
	public void setIdetud(String idetud) {
		this.idetud = idetud;
	}
	public int getElt() {
		return elt;
	}
	public void setElt(int elt) {
		this.elt = elt;
	}
	
	
}	
