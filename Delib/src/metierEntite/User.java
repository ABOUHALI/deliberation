package metierEntite;

public class User {
	private int id;
	private String login;
	private String mdp;
	private String id_etud ;
	private int id_prof ;
	private String role;
	public User(int id, String login, String mdp, String id_etud, int id_prof, String role) {
		super();
		this.id = id;
		this.login = login;
		this.mdp = mdp;
		this.id_etud = id_etud;
		this.id_prof = id_prof;
		this.role = role;
	}
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
	public int getId_prof() {
		return id_prof;
	}
	public void setId_prof(int id_prof) {
		this.id_prof = id_prof;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	@Override
	public String toString() {
		return "User [id=" + id + ", login=" + login + ", mdp=" + mdp + ", id_etud=" + id_etud + ", id_prof=" + id_prof
				+ ", role=" + role + "]";
	}
	
}
