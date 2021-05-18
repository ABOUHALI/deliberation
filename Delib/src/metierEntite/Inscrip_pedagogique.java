package metierEntite;

import java.sql.Date;

public class Inscrip_pedagogique {
	private String idetud ;
	private int elt ;
	private Date anneacad;
	public Date getAnneacad() {
		return anneacad;
	}
	public void setAnneacad(Date anneacad) {
		this.anneacad = anneacad;
	}
	public Inscrip_pedagogique(String idetud, int elt, Date anneacad) {
		super();
		this.idetud = idetud;
		this.elt = elt;
		this.anneacad = anneacad;
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
