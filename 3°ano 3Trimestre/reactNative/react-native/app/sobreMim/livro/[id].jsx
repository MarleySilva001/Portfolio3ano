import { Text, View, StyleSheet, Image } from "react-native"
import Bar from "../../../components/Bar"
import Entypo from '@expo/vector-icons/Entypo';
import { DetalheContext } from "../../../scripts/sobreMimContext";
import { useContext } from "react";
import { useLocalSearchParams } from "expo-router";

const livroInfo = () => {
    const { id } = useLocalSearchParams();
    const { livros } = useContext(DetalheContext);

    const livro = livros.find((item) => item.id === id)

    return (
        <>
            <Bar
                icon={<Entypo name="chevron-left" size={24} color="white" />}
                href={'/sobreMim/livro'}
                Titulo={livro.nome}
                cor={'#00BF66'}
            />
            <View style={styles.container}>
                <View style={styles.info}>
                    <Image 
                    style={styles.foto}
                    source={{uri: livro.capa}}
                    />
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    },
    foto: {
        width: 200,
        height: 300,
        borderRadius: 8,
    },
    info: {
        width: '96%',
        marginVertical: 8,
        marginHorizontal:'2%',
        borderRadius: 8,
        padding: 10,
        alignItems: 'center',
        elevation: 2, 
        shadowOpacity: 0.2,
        shadowRadius: 8,
        shadowOffset:{
            width:1,
            height:2,
        }
    }
})

export default livroInfo