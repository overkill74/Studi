# Compilare con JAVA in Linux
[TOC]

## Prerequisiti

### JDK
Installare JAVA. Dalla  [Pagina ufficiale](https://www.oracle.com/java/technologies/downloads/) .

Potrbbe essere necessario installare alcune dipenenze:
```
sudo apt install libc6-x32
```

### IDE
Un buon IDE è **IntelliJ**, molto simile al **PyCharm**. Si può usare la vesione free:
```
sudo snap install intellij-idea-community --classic
```


## Hello World
Creare un file chiamato `HelloWorld.java`
```
public class HelloWorld {
   public static void main(String[] args) {
      System.out.println("Hello World");
   }
}
```

Avviare il programma:
```
java HelloWorld.java
```

Compilare il file appena creato:
```

```
