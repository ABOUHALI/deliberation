package metierEntite;

public class Prof_element {
	private int id_professeur ;
	private int id_elt ;
	public Prof_element(int id, int id_elt) {
		super();
		this.id_professeur = id_professeur;
		this.id_elt = id_elt;
	}
	
	public int getId_professeur() {
		return id_professeur;
	}

	public void setId_professeur(int id_professeur) {
		this.id_professeur = id_professeur;
	}

	public int getId_elt() {
		return id_elt;
	}
	public void setId_elt(int id_elt) {
		this.id_elt = id_elt;
	}
}
