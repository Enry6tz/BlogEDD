
# TDA Cola (Queque):

>Una cola (queue) es una colección con modelo de secuencia cuyos datos ingresan por un extremo llamado rabo (tail) y salen por otro extremo llamado frente (head). el primero en ingresar es el primero en salir <-[1,2,3,4]<-

## Operacion Cola:
Esta política de actualización se llama FIFO (por first-in first-out) o también FCFS (first-come first-served)

* enqueue(e): Inserta el elemento e en el rabo de la cola
* dequeue(): Elimina el elemento del frente de la cola y lo
retorna. Si la cola está vacía se produce un error.
  * front(): Retorna el elemento del frente de la cola. Si la cola
está vacía se produce un error.
* isEmpty(): Retorna verdadero si la cola no tiene elementos
y falso en caso contrario
* size(): Retorna la cantidad de elementos de la cola.

## Implementacion COLA:
Definición de una interfaz Cola:
* Se abstrae de la ED con la que se implementará
* Se documenta el significado de cada método en lenguaje
natural
* Se usa un parámetro formal de tipo representando el tipo de
los elementos de la cola
* Se definen excepciones para las condiciones de error

```java
public intreface Queue<E>{
    public void enqueue();
    public void dequeue();
    **completar**
}

```

### Ejemplo de uso COLA: (usando las clases que implementa la interfaz).
```java
public class main{
    public static void main(String[] args){
        Queue<String> miQueue = new LinkedList<String>();
        //estatico del tipo interfaz Queue del tipo dinamico LinkedList. 
        //todos los metodos especificados e implementados por java

        miQueue.add("Hola");
        miQueue.add("mundo")
        miQueue.add("Cruel")
        //hasta ahí pusimos 3 elementos en la cola

        //con peek muestra pero no elimina
        if(miQueue.peek() == "Hola"){
            System.out.println("la Queue funciona bien");
        }else{
            System.out.println("la Queue funciona mal");
        }
        // salida : la Queue funciona bien, la diferencia es que preguntamos por la primera add 
    }

    //con pop muestra y elimina
    System.out.println(miQueue.dequeue());
    if(miQueue.peek() == "mundo"){
            System.out.println("la Queue funciona bien");
        }else{
            System.out.println("la Queue funciona mal");
        }
        // salida : la Queue funciona bien

        try{
            Stack<String> otraQueue = new Stack<>();
            String resultado = otraQueue.pop();
        }
        catch( EmptyStackException e){
            System.out.println("Error: Queue vacia");
        }
        //salida: Error: Queue vacia
    }
}

```


# Integracion PILA y COLA (operaciones de TDA)

> se podria pensar en un simple problema: dada una Cola A [3,7,9,1]
> convertirla en una Cola [1,9,7,3].

usando como una herramienta auxiliar una pila podemos solucionar este problema 

```java
public class main{
    public static void main(String[] args){
        Queue<String> miQueue = new LinkedList<String>();


    public static void invertir(Queue<String> e){
        Stack<String> pilaAuxiliar =  new Stack<>();

        while (!e.isEmpty()){
            String elem = e.remove();
            pilaAuxiliar.add(elem);
        }
        
        while (!pilaAuxiliar.isEmpty()){
            String elem = pilaAuxiliar.pop();
            e.add(elem);
        }
    }
    }
}

```
## invertir una PILA
> se podria pensar en un simple problema: dada una PILA A [3,7,9,1]
> convertirla en una PILA [1,9,7,3].

usando como una herramienta auxiliar una cola podemos solucionar este problema 

```java
public class main{
    public static void main(String[] args){
        Stack<String> pila = new Stack<String>();


    public static void invertir(Queue<String> e){
        Queue<String> colaAuxiliar =  new LinkedList<>();

        while (!e.isEmpty()){
            String elem = e.pop();
            colaAuxiliar.add(elem);
        }

        while (!colaAuxiliar.isEmpty()){
            String elem = colaAuxiliar.remove();
            e.add(elem);
        }
        
        
    }
    }
}

```

- - -
* En resumen una pila y una cola deberia tener una estructura basico con los siguientes metodos

pila | cola | obs
 | - | -| -|
Apilar(a) | encolar(a) | agrega elemento
desapilar(): elemento | sacar(): elemento |saca y elimina
tope(): elemento   | frente(): elemento | solo muestra sin eliminar 
estaVacia(): boolean | estaVacia(): boolean | 
crearPila() | crearCola() | stack o linkedlist
tamaño(): int  |   tamaño (): int |

extepciones con metodos implementados



### implementacion del TDA COLA en funcion de TDA PILA


```java
package TDACola;

import java.util.Stack;

public class ColaConPila<E> implements Queue<E>{
	Stack<E> colaStack;
	
	public ColaConPila() {
		colaStack = new Stack<E>(); 
	}
	
	
	@Override
	public int size() {
		
		return colaStack.size();
	}

	@Override
	public boolean isEmpty() {
		
		return colaStack.isEmpty();
	}

	@Override
	public E front() throws EmptyQueueException {
	    Stack<E> auxStack = new Stack<>(); 

	    if (isEmpty()) {
	        throw new EmptyQueueException();
	    }
	    
	    int size = colaStack.size(); 
	    
	  
	    for (int i = 0; i < size - 1; i++) {
	        auxStack.push(colaStack.pop());
	    }
	    
	    E res = colaStack.peek(); 
	    for (int i = 0; i < size - 1; i++) {
	        colaStack.push(auxStack.pop());
	    }
	    return res;
	}

	@Override
	public void enqueue(E element) {
		colaStack.push(element);
		
	}

	@Override
	public E dequeue() throws EmptyQueueException {
		Stack<E> auxStack = new Stack<>(); 

		if (isEmpty()) {
			throw new EmptyQueueException();
		 }
		    
		    int size = colaStack.size(); 
		    
		  
		    for (int i = 0; i < size - 1; i++) {
		        auxStack.push(colaStack.pop());
		    }
		    
		    E res = colaStack.pop(); 
		    for (int i = 0; i < size - 1; i++) {
		        colaStack.push(auxStack.pop());
		    }
		    return res;
	}
	
}

```
#### TDA Cola con Nodo

```java
    public class MiQueueNode<E> implements Queue<E>{
        protected Node<E> frente; //por acá saco
        protected Node<E> fondo; //por acá inserto
        protected int cantidad;

        public MiQueueNode(){
            this.frente = null;
            this.fondo= null;
            this.cantidad = 0;
        }

        public boolean isEmpty(){
            return this.cantidad ==0;
        }
    }
```
