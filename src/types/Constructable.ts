// Pour les besoins de notre décorator, on va créer un type
// de données, qui symbolise un objet que l'on peut construire

// le type Constructable prend une infinité de type en paramètre
// c'est pour ça que l'on utilise le T des génériques
// il représente un objet {}
// qui est construit avec le mot clé new + une fonction
// cette fonction prend une infinité de paramètres que l'on stocke
// ( à l'aide du spread operator ) dans la variable args: any[]
// et enfin ce new <quelque_chose> renvoie un objet de type T

// C'est une façon de décrire un type de données qui correspond à 
// toutes les classes possibles et imaginables en Typescript. 

// On fait cela, parce que le type de données 'Class' n'existe pas.
// En effet le mot clé "class" est réservé à la seule et unique création 
// de classe, il ne peut pas servir de type.
export type Constructable<T> = { new (...args: any[]):T };