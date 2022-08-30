import java.io.Serializable;

public class Celular implements Serializable {
	private static final long serialVersionUID = 1L;
	
	private int flag = 21;
	private String nome;

	public Celular(String nome) {
		this.nome = nome;
	}
	
	public int getFlag() {
		return flag;
	}
}

