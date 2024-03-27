import { SafeAreaView } from "react-native-safe-area-context"
import { View, Text, TextInput, StyleSheet, Button } from "react-native"
import { useState, useEffect} from "react"
import { initDatabase, insertData } from "../DataBase"



const Home = ({navigation}) => {

    useEffect(() => {
        initDatabase()
    }, [])

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [dateCreated, setDateCreated] = useState('');
    const [err, setErr] = useState('')


    const handleSumbit = () => {
        const contact = {
            name, 
            phone,
            address,
            city,
            state,
            dateCreated
        }

        // if input field not complete
        if (!contact.name || !contact.phone || !contact.address || !contact.city || !contact.state || !contact.dateCreated){
            setErr('please fill all fields')
        }

        insertData({
            contact,
            onSuccess: () => {
                console.log("All contact added succesfully")
            },
            onError: () => {
                console.log("Error adding contacts")
            }
        })
    }

    const getContact = () => {
        navigation.navigate('Contact')
    }


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>
                <TextInput
                    style={styles.input}
                    value={name}
                    placeholder="Enter Your Name"
                    onChangeText={setName}
                />
                <TextInput
                    style={styles.input}
                    value={phone}
                    placeholder="Enter Your Phone Number"
                    onChangeText={setPhone}
                    keyboardType="phone-pad"
                />
                <TextInput
                    style={styles.input}
                    value={address}
                    placeholder="Enter Your Address"
                    onChangeText={setAddress}
                />
                <TextInput
                    style={styles.input}
                    value={city}
                    placeholder="Enter Your City"
                    onChangeText={setCity}
                />
                <TextInput
                    style={styles.input}
                    value={state}
                    placeholder="Enter Your State"
                    onChangeText={setState}
                />
                 <TextInput
                    style={styles.input}
                    value={dateCreated}
                    placeholder="Enter Date Created"
                    onChangeText={setDateCreated}
                />
                <Text>{err && err}</Text>
                <Button title="Submit" onPress={handleSumbit}/>
                <Button title="Contact" onPress={getContact}/>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex : 1
    },
    wrapper: {
        flex : 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        width: '80%',
        height: 40,
        borderWidth: 1,
        marginBottom: 5,
        borderColor: 'gray',
        paddingLeft: 10,
        fontSize: 20
    }
})

export default Home;