package metierEntite;

public class User {
	private int id;
	private String login;
	private String mdp;
	private String id_etud ;
	private String id_prof ;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getLogin() {
		return login;
	}
	public void setLogin(String login) {
		this.login = login;
	}
	public String getMdp() {
		return mdp;
	}
	public void setMdp(String mdp) {
		this.mdp = mdp;
	}
	public String getId_etud() {
		return id_etud;
	}
	public void setId_etud(String id_etud) {
		this.id_etud = id_etud;
	}
	public String getId_prof() {
		return id_prof;
	}
	public void setId_prof(String id_prof) {
		this.id_prof = id_prof;
	}
	public User(int id, String login, String mdp, String id_etud, String id_prof) {
		super();
		this.id = id;
		this.login = login;
		this.mdp = mdp;
		this.id_etud = id_etud;
		this.id_prof = id_prof;
	}
	
}
