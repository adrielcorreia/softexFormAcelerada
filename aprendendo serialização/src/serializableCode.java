import java.io.*;

public class serializableCode {
	public static void main(String[] args) throws IOException, ClassNotFoundException {
		Celular celular = new Celular("Iphone 13s pro Max");
		
		//----------------------------------Serialização-------------------------------------------
		ObjectOutputStream objOutput = new ObjectOutputStream(new FileOutputStream("celular.txt"));
		objOutput.writeObject(celular);
		objOutput.close();
		
		//----------------------------------Desserialização-------------------------------------------
		ObjectInputStream objInput = new ObjectInputStream(new FileInputStream("celular.txt"));
		Celular phone = (Celular) objInput.readObject();
		objInput.close();
		
		System.out.println(phone.getFlag());
	}
}
