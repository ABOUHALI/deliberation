package metierEntite;

public class User {
	private int id;
	private String login;
	private String mdp;
	private String role;
	public User(int id, String login, String mdp, String role) {
		super();
		this.id = id;
		this.login = login;
		this.mdp = mdp;
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
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
}
