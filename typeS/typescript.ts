// /*
// Welcome to:
//     ................................................................
//     .                                                              .
//     .     ####################    ####################      E      .
//     .     ####################    ####################      X      .
//     .             ####            ####                      E      .
//     .             ####            ####                      R      .
//     .             ####            ####################      C      .
//     .             ####                            ####      I      .
//     .             ####                            ####      S      .
//     .             ####            ####################      E      .
//     .             ####            ####################      S      .
//     .                                                              .
//     ................................................................
//     The goal: Let everyone play with many different TypeScript features
//     and get an overview of TypeScript capabilities and principles.
//     Things to cover:
//         1. Basic typing.
//         2. Refining types.
//         3. Union types.
//         4. Merged types.
//         5. Generics.
//         6. Type declarations.
//         7. Module augmentation.
//         8. Advanced type mapping.
//     Rules and principles:
//         1. Avoid using "any" type at all costs.
//         2. Difficulty quickly grows one exercise after another.
//         3. Feel free to send pull-requests if you've come up
//            with improvements!
//         4. Provide feedback to the creator of these exercises.
//         5. Enjoy.
// Brief UI guide:
//     +--------------------------------------------------------------+
//     | TypeScript exercises                                         |
//     +--------------------------------------------------------------+
//     | Exercises 1·2·3·4...   << Navigate through exercises >>      |
//     +---------------+----------------------------------------------+
//     | Files         | file.ts   << Filename and status >>          |
//     +---------------+----------------------------------------------+
//     | file.ts       | 1  import {x} from 'y';                      |
//     | dir           | 2                                            |
//     |   sub.ts      | 3                                            |
//     |               |                                              |
//     | << Current    |   << Currently selected file code editor >>  |
//     | exercise file |                                              |
//     | structure >>  +----------------------------------------------+
//     |               |                                              |
//     |               |   << Errors to fix in order to proceed >>    |
//     |               |                                              |
//     +---------------+----------------------------------------------+
// Intro:
//     We are starting a small community of users. For performance
//     reasons we have decided to store all users right in the code.
//     This way we can provide our developers with more
//     user-interaction opportunities. With user-related data, at least.
//     All the GDPR-related issues will be solved some other day.
//     This would be the base for our future experiments during
//     these exercises.
// Exercise:
//     Given the data, define the interface "User" and use it accordingly.
// */
// // #######################################################################################
// // Exercise 1
// // #######################################################################################
// export interface User {
//     name: string;
//     age: number;
//     occupation: string;
// }
// export const users: User[] = [
//     {
//         name: 'Max Mustermann',
//         age: 25,
//         occupation: 'Chimney sweep'
//     },
//     {
//         name: 'Kate Müller',
//         age: 23,
//         occupation: 'Astronaut'
//     }
// ];
// export function logPerson(user: User) {
//     console.log(` - ${user.name}, ${user.age}`);
// }
// console.log('Users:');
// users.forEach(logPerson);
// /* In case if you are stuck:
// // https://www.typescriptlang.org/docs/handbook/interfaces.html#introduction
// */
// // #######################################################################################
// // Exercise 2
// // #######################################################################################
// Intro:
//     All 2 users liked the idea of the community. We should go
//     forward and introduce some order. We are in Germany after all.
//     Let's add a couple of admins.
//     Initially we only had users in the in-memory database. After
//     introducing Admins, we need to fix the types so that
//     everything works well together.
// Exercise:
//     Type "Person" is missing, please define it and use
//     it in persons array and logPerson function in order to fix
//     all the TS errors.
// */
// interface User {
//     name: string;
//     age: number;
//     occupation: string;
// }
// interface Admin {
//     name: string;
//     age: number;
//     role: string;
// }
// export type Person = User | Admin
// export const persons: Person[] /* <- Person[] */ = [
//     {
//         name: 'Max Mustermann',
//         age: 25,
//         occupation: 'Chimney sweep'
//     },
//     {
//         name: 'Jane Doe',
//         age: 32,
//         role: 'Administrator'
//     },
//     {
//         name: 'Kate Müller',
//         age: 23,
//         occupation: 'Astronaut'
//     },
//     {
//         name: 'Bruce Willis',
//         age: 64,
//         role: 'World saver'
//     }
// ];
// export function logPerson(user: Person) {
//     console.log(` - ${user.name}, ${user.age}`);
// }
// persons.forEach(logPerson);
// // #######################################################################################
// // Exercise 3
// // #######################################################################################
// Intro:
//     Since we already have some of the additional
//     information about our users, it's a good idea
//     to output it in a nice way.
// Exercise:
//     Fix type errors in logPerson function.
//     logPerson function should accept both User and Admin
//     and should output relevant information according to
//     the input: occupation for User and role for Admin.
// */
// interface User {
//     name: string;
//     age: number;
//     occupation: string;
// }
// interface Admin {
//     name: string;
//     age: number;
//     role: string;
// }
// export type Person = User | Admin;
// export const persons: Person[] = [
//     {
//         name: 'Max Mustermann',
//         age: 25,
//         occupation: 'Chimney sweep'
//     },
//     {
//         name: 'Jane Doe',
//         age: 32,
//         role: 'Administrator'
//     },
//     {
//         name: 'Kate Müller',
//         age: 23,
//         occupation: 'Astronaut'
//     },
//     {
//         name: 'Bruce Willis',
//         age: 64,
//         role: 'World saver'
//     }
// ];
// export function logPerson(person: Person) {
//     let additionalInformation: string;
//     if ('role' in person) {
//         additionalInformation = person.role;
//     } else {
//         additionalInformation = person.occupation;
//     }
//     console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
// }
// persons.forEach(logPerson);
// In case if you are stuck:
// https://www.typescriptlang.org/docs/handbook/advanced-types.html#using-the-in-operator
// // #######################################################################################
// // Exercise 4
// // #######################################################################################
// Intro:
//     As we introduced "type" to both User and Admin
//     it's now easier to distinguish between them.
//     Once object type checking logic was extracted
//     into separate functions isUser and isAdmin -
//     logPerson function got new type errors.
// Exercise:
//     Figure out how to help TypeScript understand types in
//     this situation and apply necessary fixes.
// */
// interface User {
//     type: 'user';
//     name: string;
//     age: number;
//     occupation: string;
// }
// interface Admin {
//     type: 'admin';
//     name: string;
//     age: number;
//     role: string;
// }
// export type Person = User | Admin;
// export const persons: Person[] = [
//     { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
//     { type: 'admin', name: 'Jane Doe', age: 32, role: 'Administrator' },
//     { type: 'user', name: 'Kate Müller', age: 23, occupation: 'Astronaut' },
//     { type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver' }
// ];
// export function isAdmin(person: Person): person is Admin {
//     return person.type === 'admin';
// }
// export function isUser(person: Person): person is User {
//     return person.type === 'user';
// }
// export function logPerson(person: Person) {
//     let additionalInformation: string = '';
//     if (isAdmin(person)) {
//         additionalInformation = person.role;
//     }
//     if (isUser(person)) {
//         additionalInformation = person.occupation;
//     }
//     console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
// }
// console.log('Admins:');
// persons.filter(isAdmin).forEach(logPerson);
// console.log();
// console.log('Users:');
// persons.filter(isUser).forEach(logPerson);
// In case if you are stuck:
// https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates
// // #######################################################################################
// // Exercise 5
// // #######################################################################################
// Intro:
//     Time to filter the data! In order to be flexible
//     we filter users using a number of criteria and
//     return only those matching all of the criteria.
//     We don't need Admins yet, we only filter Users.
// Exercise:
//     Without duplicating type structures, modify
//     filterUsers function definition so that we can
//     pass only those criteria which are needed,
//     and not the whole User information as it is
//     required now according to typing.
// Higher difficulty bonus exercise:
//     Exclude "type" from filter criterias.
// */
// interface User {
//     type: 'user';
//     name: string;
//     age: number;
//     occupation: string;
// }
// interface Admin {
//     type: 'admin';
//     name: string;
//     age: number;
//     role: string;
// }
// export type Person = User | Admin;
// export const persons: Person[] = [
//     { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
//     {
//         type: 'admin',
//         name: 'Jane Doe',
//         age: 32,
//         role: 'Administrator'
//     },
//     {
//         type: 'user',
//         name: 'Kate Müller',
//         age: 23,
//         occupation: 'Astronaut'
//     },
//     {
//         type: 'admin',
//         name: 'Bruce Willis',
//         age: 64,
//         role: 'World saver'
//     },
//     {
//         type: 'user',
//         name: 'Wilson',
//         age: 23,
//         occupation: 'Ball'
//     },
//     {
//         type: 'admin',
//         name: 'Agent Smith',
//         age: 23,
//         role: 'Administrator'
//     }
// ];
// export const isAdmin = (person: Person): person is Admin => person.type === 'admin';
// export const isUser = (person: Person): person is User => person.type === 'user';
// export function logPerson(person: Person) {
//     let additionalInformation = '';
//     if (isAdmin(person)) {
//         additionalInformation = person.role;
//     }
//     if (isUser(person)) {
//         additionalInformation = person.occupation;
//     }
//     console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
// }
// export function filterUsers(persons: Person[],criteria: Partial<Omit<User,'type'>>
// ): User[] {
//     return persons.filter(isUser).filter((user) => {
//         const criteriaKeys = Object.keys(criteria) as (keyof User)[];
//         return criteriaKeys.every((fieldName) => {
//             return user[fieldName] === criteria[fieldName];
//         });
//     });
// }
// console.log('Users of age 23:');
// filterUsers(
//     persons,
//     {
//         age: 23
//     }
// ).forEach(logPerson);
// In case if you are stuck:
// https://www.typescriptlang.org/docs/handbook/utility-types.html
// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html#predefined-conditional-types