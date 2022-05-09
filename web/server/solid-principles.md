# SOLID

1. Single Responbility Principle
2. Open/Closed Principle
3. Liskov Substitution Principle
4. Interface Segregation Principle
5. Dependency Inversion Principle


-----------------------------------

1. Cada classe tem uma responsabilidade única;
2. As classes da aplicação devem ser abertar para uma extensão, mas fechada para modificação;
3. Nós devemos poder substituir uma classe pai por uma herança e tudo deve funcionar (métodos herdados);
4. Ao invés de "Class Impressora implements SuperImpressora", 
   utilizar: "Class Impressora implements Digitalizar, Escanear, Imprimir"; 
5. Enegenharia reversa de dependências