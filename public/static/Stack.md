## Pila (Stack): 
Colección lineal de objetos actualizada en un extremo llamado tope usando una política LIFO (last-in first-out, el primero en entrar es el último en salir, el ultimo que ingresa es el primero que sale).

* Operaciones con **Pila**:
  *  *push(e)*: Inserta el elemento e en el tope de la pila
  * *pop()*: Elimina el elemento del tope de la pila y lo entrega como resultado. Si se aplica a una pila vacía, produce una situación de error.
  * *isEmpty()*: Retorna verdadero si la pila no contiene elementos y falso en caso contrario.
  * *top()*: Retorna el elemento del tope de la pila. Si se aplica a una pila vacía, produce una situación de error.
  * *size()*: Retorna un entero natural que indica cuántos elementos hay en la pila.

> Idea intuitiva de **pila**: Cada vez que se pone un elemento se pone al final y cada vez que se saca un elemento se saca del final.

## Iplementacion de PILA:

Definición de una interfaz Pila:
* Se abstrae de la ED con la que se implementará
* Se documenta el significado de cada método en lenguaje natural
* Se usa un parámetro formal de tipo representando el tipo de los elementos de la pila
* Se definen excepciones para las condiciones de error


```
    class Pila  {
        <<abstract>>
        +push( item : E )
        +pop( ) : E
        +top() : E
        +isEmpty() : boolean
        +size() : int
    }
```


### Uso de la clase Pila brindada por JAVA

```java

import java.util.EptyStackException;

public class main{
    public static void main(String[] args){
        Stack<String> miPila = new Stack();
        miPila.push("Hola");
        miPila.push("mundo")
        miPila.push("Cruel")
        //hasta ahí pusimos 3 elementos en la pila

        //con peek muestra pero no elimina
        if(miPila.peek() == "cruel"){
            System.out.println("la pila funciona bien")
        }else{
            System.out.println("la pila funciona mal")
        }
        // salida : la pila funciona bien
    }

    //con pop muestra y elimina
    System.out.println(miPila.pop())
    if(miPila.peek() == "mundo"){
            System.out.println("la pila funciona bien")
        }else{
            System.out.println("la pila funciona mal")
        }
        // salida : la pila funciona bien

        try{
            Stack<String> otraPIla = new Stack<>();
            String resultado = otraPila.pop();
        }
        catch( EmptyStackException e){
            System.out.println("Error: pila vacia")
        }
        //salida: Error: pila vacia
}
```

### implementacion del TDA PILA en funcion de TDA COLA


```java
package TDAPila;

import java.util.Queue;
import java.util.LinkedList;

public class PilaConCola<E> implements Stack<E>{
	Queue<E> pilaLinked;
	
	public PilaConCola() {
		pilaLinked = new LinkedList<E>();
	}
	
	@Override
	public int size() {
		return pilaLinked.size();
	}

	@Override
	public boolean isEmpty() {
		return pilaLinked.isEmpty();
	}

	@Override
	public E top() throws EmptyStackException {
		 if (isEmpty()) {
		        throw new EmptyStackException();
		    }
		if(size()>1)
			for(int i=0; i<size()-1; i++) {//girando la cola y modificando su estado interno 
					pilaLinked.add(pilaLinked.poll());
			}
		E aux =  pilaLinked.peek();
		pilaLinked.add(pilaLinked.poll());
		return aux;
	}
	
	
	
	@Override
	public void push(E element) {
		pilaLinked.add( element);
		
	}

	@Override
	public E pop() throws EmptyStackException {
		if (isEmpty()) {
	        throw new EmptyStackException();
	    }
		if(size()>1)
			for(int i=0; i<size()-1; i++) {//girando la cola y modificando su estado interno 
						pilaLinked.add(pilaLinked.poll());
				}
			
			return  pilaLinked.poll();
	}

}

```



#### TDA pila con Nodo


```java
    public class PilaConNodo<E> extends Stack<E>{
        protected E elemento;
        protected Nodo<E> tope;
        protected int cant;
        public PilaConNodo(){
            cant = 0;
            tope = null;
        }
        public apilar(E e){
            Nodo<E> aux = new Nodo<E>();
            aux.setElemento(e);
            aux.setSiguiente(Pila);
            Pila
        }
        public desapilar(){
            
        }
        public tope(){
            
        }
    }

```
