import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase('contacts.db');


const initDatabase = () => {
    db.transaction(tx => {
        tx.executeSql(
            'CREATE TABLE IF NOT EXISTS contacts (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, phone TEXT, address TEXT, city TEXT, state TEXT, dateCreated)',
            [],
            () => console.log("Database Initiliazed....."),
            (_, error) => {
                console.log("Failed to Initilize Database", error)
            }
        )
    })
}

const insertData = ({contact, onSuccess, onError}) => {
    const {name, phone, address, city, state, dateCreated} = contact
    db.transaction((tx) => {
        tx.executeSql(
            'INSERT INTO contacts (name, phone, address, city, state, dateCreated) values (?,?,?,?,?,?)',
            [name, phone, address, city, state, dateCreated],
            (_, setResult) => {
                onSuccess(setResult)
            },
            (_, error) => {
                onError("Insertion failed", error)
            }
        )
    })
}

const getAllContact = ({onSuccess, onError}) => {
    db.transaction((tx) => {
        tx.executeSql(
            'SELECT * FROM contacts (name, phone, address, city, state, dateCreated)',
            [],
            (_, setResult) => {
                const contact = setResult.rows._array;
                console.log("contact added succesfully")
                onSuccess(contact)
            },
            (_, error) => {
                onError(error)
            }
        )
    })
}


export {initDatabase, insertData, getAllContact}