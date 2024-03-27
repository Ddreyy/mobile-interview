import { FlatList, View, Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { getAllContact } from "../DataBase"
import { useEffect, useState } from "react"



const Contact = () => {

    useEffect(() => {
        fetchData()
    }, [])

    const [contacts, setContacts] = useState([])

    const fetchData =  (data) => {
        setContacts(data)

       getAllContact({
            contacts,     
            
            onSuccess: (contacts) => {
                setContacts(contacts)
            },
            onError: (error) => {
                console.log(error)
            }
       })
    }
        
        
    return(
        <SafeAreaView>
            <View>
                <FlatList 
                    data={contacts}
                    keyExtractor={item => item.id.toString()}    
                    renderItem={({ item }) => (
                        <View>
                            <Text>{item.name}</Text>
                            <Text>{item.phone}</Text>
                            <Text>{item.address}</Text>
                            <Text>{item.city}</Text>
                            <Text>{item.name}</Text>
                            <Text>{item.name}</Text>
                        </View>
                    )}
                />
            </View>
        </SafeAreaView>
    )
}

export default Contact;