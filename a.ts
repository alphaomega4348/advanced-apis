
/*
TODO:PICK api

interface User {
    id: number;
    name: string;
    email: string;
    createdAt: Date;
  }
  
  // For a profile display, only pick `name` and `email`
  type UserProfile = Pick<User, 'name' | 'email'>;
  
  const displayUserProfile = (user: UserProfile) => {
    console.log(`Name: ${user.name}, Email: ${user.email}`);
  };
 */

  /*
    TODO: PARTIAL api

  interface User {
    id: string;
    name: string;
    age: string;
    email: string;
    password: string;
};

type UpdateProps = Pick<User, 'name' | 'age' | 'email'>

type UpdatePropsOptional = Partial<UpdateProps>

function updateUser(updatedProps: UpdatePropsOptional) {
    // hit the database to update the user
}
updateUser({})

TODO: ANOTHER EXAMPLE

interface Drawing {
    width: number;
    height: number;
    backgroundColor: string;
}

function createDrawing(drawing: Partial<Drawing>) {
    console.log(`Drawing with width ${drawing.width ?? 'unknown'}, height ${drawing.height ?? 'unknown'}, and background color ${drawing.backgroundColor ?? 'unknown'}`);
}

createDrawing({ width: 100 });
createDrawing({ backgroundColor: 'blue' });
createDrawing({ width: 100, height: 200 });


  */


/*
  TODO: ReadOnly api
    TODO ReadonlyArray vs. Readonly
    ReadonlyArray makes an entire array read-only, meaning you can't add, remove, or change any elements.
    Readonly makes an entire object read-only, meaning you can't change its properties.

const favoriteToys: ReadonlyArray<string> = ["Car", "Doll", "Blocks"];

  interface Toy {
    name: string;
    color: string;
}

const myToy: Readonly<Toy> = {
    name: "Car",
    color: "Red"
};

// Now, you can't change the toy's properties!
// myToy.name = "Truck"; // Error: Cannot assign to 'name' because it is a read-only property.
// myToy.color = "Blue"; // Error: Cannot assign to 'color' because it is a read-only property.

TODO: ANOTHER EXAMPLE

interface Config {
  readonly endpoint: string;
  readonly apiKey: string;
}

const config: Readonly<Config> = {
  endpoint: 'https://api.example.com',
  apiKey: 'abcdef123456',
};

// config.apiKey = 'newkey'; // Error: Cannot assign to 'apiKey' because it is a read-only property.

/*
TODO:Record Api

interface User {
  id: string;
  name: string;
}

type Users = Record<string, User>;

const users: Users = {
  'abc123': { id: 'abc123', name: 'John Doe' },
  'xyz789': { id: 'xyz789', name: 'Jane Doe' },
};

console.log(users['abc123']); // Output: { id: 'abc123', name: 'John Doe' }

*/

/* 
TODO:Map Api

interface User {
  id: string;
  name: string;
}

// Initialize an empty Map
const usersMap = new Map<string, User>();

// Add users to the map using .set
usersMap.set('abc123', { id: 'abc123', name: 'John Doe' });
usersMap.set('xyz789', { id: 'xyz789', name: 'Jane Doe' });

// Accessing a value using .get
console.log(usersMap.get('abc123')); // Output: { id: 'abc123', name: 'John Doe' }
*/

/* 
TODO:Exclude Api

type Event = 'click' | 'scroll' | 'mousemove';
type ExcludeEvent = Exclude<Event, 'scroll'>; // 'click' | 'mousemove'

const handleEvent = (event: ExcludeEvent) => {
  console.log(`Handling event: ${event}`);
};

handleEvent('click'); // OK
handleEvent('scroll'); // Error: Argument of type 'scroll' is not assignable to parameter of type 'click' | 'mousemove'.

*/