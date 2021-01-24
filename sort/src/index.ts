import { NumbersCollection } from "./NumbersCollection";
import { CharacterCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const numberCollection = new NumbersCollection([12, 10, -5, 3, 7]);
numberCollection.sort();

console.log(numberCollection.data);

const characterCollection = new CharacterCollection("ZbxAGj");
characterCollection.sort();

console.log(characterCollection.data);

const linklist = new LinkedList();

linklist.add(500);
linklist.add(-40);
linklist.add(0);

linklist.sort();

linklist.print();
